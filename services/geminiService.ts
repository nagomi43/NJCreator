
import { GoogleGenAI } from "@google/genai";
import { PromptState } from "../types";
import { STYLES } from "../constants";

// Correctly initialize with named parameter and process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * 特定のフィールドをAIで強化する
 */
export const enhanceField = async (fieldName: string, currentValue: string, context: string = ""): Promise<string> => {
  const systemInstruction = `You are a professional prompt engineer for Midjourney. 
  Your task is to enhance a specific part of a prompt into a high-end, cinematic, and descriptive version.
  Keep it concise but atmospheric. Return ONLY the enhanced English text.
  CRITICAL: DO NOT include any Midjourney parameters like "--ar", "--v", "--s", etc.`;

  const prompt = `Enhance the following ${fieldName} into a more aesthetic and professional version.
  Current Value: ${currentValue}
  Context: ${context}
  Example: "Cat" -> "A mysterious ethereal cat with glowing sapphire eyes sitting on a velvet cushion"`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: { 
        systemInstruction, 
        temperature: 0.8 
      },
    });
    // Access .text property directly
    return response.text?.trim().replace(/--[a-z0-9]+\s\S+/gi, '') || currentValue;
  } catch (error) {
    console.error("Enhance Field Error:", error);
    return currentValue;
  }
};

/**
 * 全体のプロンプトを構築する
 */
export const enhancePromptWithGemini = async (state: PromptState): Promise<string> => {
  const selectedStyles = state.styleIds.map(id => STYLES.find(s => s.id === id)).filter(Boolean);
  
  const stylesInfo = selectedStyles.map(s => `${s?.name} (${s?.promptSuffix})`).join(", ");
  const stylesJpNames = selectedStyles.map(s => s?.jpName).join(", ");

  const systemInstruction = `You are a specialized Midjourney prompt architect.
  Your goal is to transform user inputs into high-end, aesthetic prompts.
  
  Instructions:
  1. Describe the scene in sophisticated, cinematic English.
  2. The user has selected multiple styles: ${stylesJpNames}. Seamlessly blend the artistic characteristics of these styles into a cohesive visual description.
  3. Include descriptors like "chromatic aberration," "depth of field," "masterful composition."
  4. Incorporate the requested camera angle, shot size, and composition technique into the natural description.
  
  CRITICAL RULES:
  - Output ONLY the descriptive text part of the prompt.
  - DO NOT include any double-dash parameters like "--v", "--niji", etc.
  - DO NOT include "/imagine prompt:".`;

  const promptMessage = `
    Subject: ${state.subject}
    Selected Styles to Blend: ${stylesInfo}
    Lighting: ${state.lighting}
    Camera Angle: ${state.angle}
    Shot Size: ${state.shotSize}
    Composition Technique: ${state.composition}
  `;

  try {
    // Using gemini-3-pro-preview for complex reasoning task
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: promptMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.75,
      },
    });

    // Access .text property directly
    let cleanBase = (response.text || state.subject)
      .replace(/--[a-z0-9]+\s\S+/gi, '') 
      .replace(/--[a-z0-9]+/gi, '')      
      .trim();
    
    if (cleanBase.endsWith(',')) cleanBase = cleanBase.slice(0, -1);
    
    let finalPrompt = cleanBase;
    
    if (state.version.includes('niji')) {
        finalPrompt += ` --${state.version}`;
    } else {
        finalPrompt += ` --v ${state.version}`;
    }

    if (state.stylize !== 250) finalPrompt += ` --s ${state.stylize}`;
    if (state.chaos > 0) finalPrompt += ` --c ${state.chaos}`;
    if (state.weird > 0) finalPrompt += ` --w ${state.weird}`;
    if (state.raw) finalPrompt += ` --style raw`;
    if (state.personalize) finalPrompt += ` --p ${state.personalize}`;
    
    if (state.sref && state.sref.trim() !== "") {
        const cleanSref = state.sref.trim().replace(/^--sref\s+/, "");
        finalPrompt += ` --sref ${cleanSref}`;
        if (state.sw !== 100) finalPrompt += ` --sw ${state.sw}`;
    }
    
    if (state.no) finalPrompt += ` --no ${state.no}`;
    
    return finalPrompt;
  } catch (error) {
    console.error("Gemini Error:", error);
    const fallbackSuffix = selectedStyles.map(s => s?.promptSuffix).join(", ");
    return `${state.subject}, ${fallbackSuffix} --v ${state.version}`;
  }
};
