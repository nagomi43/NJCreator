
import { StyleOption } from './types';

export const STYLES: StyleOption[] = [
  // 描き方
  { id: 'anime', name: 'Anime', jpName: 'アニメ調', category: '描き方', promptSuffix: 'anime style, vibrant cel shading, high contrast, clean line art', thumbnail: '' },
  { id: 'manga', name: 'Manga', jpName: '漫画調', category: '描き方', promptSuffix: 'manga style, black and white screentone, dynamic ink lines, Japanese comic aesthetic', thumbnail: '' },
  { id: 'logo', name: 'Logo', jpName: 'ロゴ', category: '描き方', promptSuffix: 'minimalist logo design, vector art, flat graphic, clean bold shapes, white background', thumbnail: '' },
  { id: 'art', name: 'Art', jpName: 'アート', category: '描き方', promptSuffix: 'fine art, sophisticated composition, gallery aesthetic, artistic expression', thumbnail: '' },
  { id: 'kawaii', name: 'Kawaii', jpName: 'かわいい系', category: '描き方', promptSuffix: 'kawaii aesthetic, pastel colors, cute proportions, soft and bubbly', thumbnail: '' },
  { id: 'realism-rendering', name: 'Realism', jpName: 'リアリティのある', category: '描き方', promptSuffix: 'ultra-realistic, high fidelity, realistic textures, life-like rendering', thumbnail: '' },
  { id: 'zoomorphism', name: 'Zoomorphism', jpName: '動物形象', category: '描き方', promptSuffix: 'zoomorphism, animalistic features, blending human and animal forms', thumbnail: '' },
  { id: 'ethereal-rendering', name: 'Ethereal', jpName: '神秘的', category: '描き方', promptSuffix: 'ethereal atmosphere, otherworldly glow, mystical lighting, dreamlike quality', thumbnail: '' },
  { id: 'blacklight-rendering', name: 'Blacklight', jpName: 'ブラックライト', category: '描き方', promptSuffix: 'blacklight aesthetic, UV reactive colors, neon glow on dark, fluorescent intensity', thumbnail: '' },
  { id: 'synthwave-rendering', name: 'Synthwave', jpName: 'シンセウェーブ', category: '描き方', promptSuffix: 'synthwave aesthetic, retro 80s futuristic, neon grids, sunset purple and pink', thumbnail: '' },
  { id: 'kaleidoscopic-rendering', name: 'Kaleidoscopic', jpName: '万華鏡のような', category: '描き方', promptSuffix: 'kaleidoscopic patterns, perfectly symmetrical mirrored visuals, multifaceted prism', thumbnail: '' },
  { id: 'stained-glass-rendering', name: 'Stained Glass', jpName: 'ステンドグラス', category: '描き方', promptSuffix: 'stained glass art, leaded glass panels, vibrant translucent light', thumbnail: '' },
  { id: 'ink-style', name: 'Ink style', jpName: 'インクで', category: '描き方', promptSuffix: 'ink drawing, bold ink washes, splatter details, hand-drawn texture', thumbnail: '' },
  { id: 'duotone', name: 'Duotone', jpName: 'デュオトーン', category: '描き方', promptSuffix: 'duotone print, two-tone ink palette, high contrast graphic aesthetic', thumbnail: '' },
  { id: 'ghibli', name: 'Studio Ghibli', jpName: 'スタジオジブリ風', category: '描き方', promptSuffix: 'Studio Ghibli style, Hayao Miyazaki aesthetic, lush hand-painted backgrounds, whimsical atmosphere', thumbnail: '' },
  { id: 'pixar', name: 'Pixar', jpName: 'ピクサー風', category: '描き方', promptSuffix: 'Pixar animation style, 3D character design, expressive lighting, friendly CGI aesthetic', thumbnail: '' },
  { id: 'disney', name: 'Disney', jpName: 'ディズニー風', category: '描き方', promptSuffix: 'Disney animation style, classic character charm, magical atmosphere, vibrant and polished', thumbnail: '' },
  { id: 'cyberpunk-rendering', name: 'Cyberpunk', jpName: 'サイバーパンク風', category: '描き方', promptSuffix: 'cyberpunk aesthetic, high tech low life, neon rain, urban futuristic grit', thumbnail: '' },

  // 古典的技法
  { id: 'oil', name: 'Oil Painting', jpName: '油彩画風', category: '古典 migratory技法' as any, promptSuffix: 'oil painting style, rich impasto, visible brush textures, classical lighting', thumbnail: '' },
  { id: 'watercolor', name: 'Watercolor', jpName: '水彩画風', category: '古典 migratory技法' as any, promptSuffix: 'watercolor painting, soft color bleeding, delicate paper texture, wet-on-wet', thumbnail: '' },
  { id: 'fresco', name: 'Fresco Painting', jpName: 'フレスコ画風', category: '古典 migratory技法' as any, promptSuffix: 'fresco painting style, mural aesthetic, plaster texture, classical renaissance feel', thumbnail: '' },
  { id: 'tempera', name: 'Temperal Painting', jpName: 'テンペラ画風', category: '古典的技法', promptSuffix: 'tempera painting, egg tempera technique, fine details, matte finish, early renaissance style', thumbnail: '' },
  { id: 'sumie', name: 'Ink wash (Sumi-e)', jpName: '墨絵・水墨画', category: '古典的技法', promptSuffix: 'sumi-e style, ink wash painting, masterful brushstrokes, traditional washi paper, Zen aesthetic', thumbnail: '' },
  { id: 'charcoal', name: 'Charcoal Sketch', jpName: '木炭デッサン', category: '古典 migratory技法' as any, promptSuffix: 'charcoal sketch, rough smudged textures, high contrast, artistic drawing', thumbnail: '' },
  { id: 'pencil', name: 'Pencil Sketch', jpName: '鉛筆画・デッサン', category: '古典 migratory技法' as any, promptSuffix: 'pencil sketch, graphite drawing, fine hatching, hand-drawn artistic look', thumbnail: '' },
  { id: 'ukiyo-e', name: 'Ukiyo-e', jpName: '浮世絵・木版画', category: '古典 migratory技法' as any, promptSuffix: 'Ukiyo-e style, classical Japanese woodblock art, flat perspective, Edo era aesthetic', thumbnail: '' },
  { id: 'etching', name: 'Etching', jpName: '銅版画・エッチング', category: '古典的技法', promptSuffix: 'etching style, copperplate print, fine line work, cross-hatching, intaglio printing aesthetic', thumbnail: '' },

  // 近代美術
  { id: 'impressionism', name: 'Impressionist', jpName: '印象派風', category: '近代美術', promptSuffix: 'impressionist painting style, small thin brushstrokes, emphasis on light, airy atmosphere', thumbnail: '' },
  { id: 'pointillism', name: 'Pointillism', jpName: '点描画風', category: '近代美術', promptSuffix: 'pointillism, Seurat style, tiny dots of pure color, optical blending', thumbnail: '' },
  { id: 'post-impressionism', name: 'Post-Impressionist', jpName: 'ポスト印象派風', category: '近代美術', promptSuffix: 'post-impressionist style, bold colors, thick application of paint, expressive forms', thumbnail: '' },
  { id: 'expressionism', name: 'Expressionist', jpName: '表現主義風', category: '近代美術', promptSuffix: 'expressionist painting, distorted forms for emotional effect, vivid colors, intense mood', thumbnail: '' },
  { id: 'cubism', name: 'Cubism', jpName: 'キュビズム', category: '近代美術', promptSuffix: 'cubism style, fragmented objects, geometric shapes, multiple viewpoints', thumbnail: '' },
  { id: 'fauvism', name: 'Fauvism', jpName: 'フォービズム（野獣派）', category: '近代美術', promptSuffix: 'fauvism, wild brushwork, strident colors, painterly surface', thumbnail: '' },
  { id: 'dada-collage', name: 'Dada Collage', jpName: 'ダダ・コラージュ', category: '近代美術', promptSuffix: 'dadaism collage, nonsensical juxtaposition, found objects, chaotic assembly', thumbnail: '' },
  { id: 'surrealism', name: 'Surrealist', jpName: 'シュルレアリスム', category: '近代美術', promptSuffix: 'surrealist painting, dream-like scenes, illogical juxtaposition, psychological depth', thumbnail: '' },
  { id: 'abstract-expressionism', name: 'Abstract Expressionism', jpName: '抽象表現主義', category: '近代美術', promptSuffix: 'abstract expressionism, gestural brush-strokes, spontaneous mark-making, large scale canvas feel', thumbnail: '' },
  { id: 'patchwork', name: 'Patchwork', jpName: 'パッチワーク', category: '近代美術', promptSuffix: 'patchwork style, stitched fabric layers, textile quilt aesthetic, patterned cloth pieces', thumbnail: '' },
  { id: 'abstract', name: 'Abstract Art', jpName: '抽象画風', category: '近代美術', promptSuffix: 'abstract art style, non-representational, emphasis on form and color', thumbnail: '' },

  // 装飾美術・工芸
  { id: 'gold-leaf', name: 'Gold Leaf', jpName: '金箔画・蒔絵風', category: '装飾美術・工芸', promptSuffix: 'gold leaf painting, maki-e aesthetic, shimmering metallic gold, ornate Japanese decor', thumbnail: '' },
  { id: 'stained-glass-art', name: 'Stained Glass Art', jpName: 'ステンドグラス風', category: '装飾美術・工芸', promptSuffix: 'stained glass art, leaded glass panels, vibrant translucent colors, cathedral aesthetic', thumbnail: '' },
  { id: 'mosaic', name: 'Mosaic Art', jpName: 'モザイク画風', category: '装飾美術・工芸', promptSuffix: 'mosaic art, small stone tiles, tesserae, classical Byzantine aesthetic', thumbnail: '' },
  { id: 'batik', name: 'Batik', jpName: 'バティック（染色布）', category: '装飾美術・工芸', promptSuffix: 'batik textile art, wax-resist dyeing, intricate fabric patterns, Indonesian aesthetic', thumbnail: '' },
  { id: 'kirie', name: 'Papercut (Kirie)', jpName: '切り絵風', category: '装飾美術・工芸', promptSuffix: 'kirie papercut art, sharp cut edges, layered paper aesthetic, high contrast', thumbnail: '' },
  { id: 'silhouette', name: 'Silhouette Art', jpName: '影絵風', category: '装飾美術・工芸', promptSuffix: 'silhouette art, black subject on bright background, sharp outlines, storytelling shadows', thumbnail: '' },
  { id: 'ceramic-tile', name: 'Ceramic Tile', jpName: '陶板画風', category: '装飾美術・工芸', promptSuffix: 'ceramic tile art, glazed pottery texture, azulejo style, hand-painted ceramic', thumbnail: '' },
  { id: 'paper-art', name: 'Paper Art', jpName: 'ペーパーアート風', category: '装飾美術・工芸', promptSuffix: 'paper art, papercraft style, 3D paper layered, clean cut edges', thumbnail: '' },

  // 写真・映像技法
  { id: 'daguerreotype', name: 'Daguerreotype', jpName: 'ダゲレオタイプ風写真', category: '写真・映像技法', promptSuffix: 'daguerreotype photography, 19th century antique film, silver plate shine, historical portrait', thumbnail: '' },
  { id: 'realism-art', name: '写実主義', jpName: '写実主義', category: '写真・映像技法', promptSuffix: 'realism painting, objective representation, detailed everyday life, natural lighting', thumbnail: '' },
  { id: 'hyperrealism', name: 'Hyperrealism', jpName: 'ハイパーリアリズム', category: '写真・映像技法', promptSuffix: 'hyperrealistic, photorealistic precision, extreme detail, sharp focus', thumbnail: '' },
  { id: 'pictorialism', name: 'Pictorialism', jpName: 'ピクトリアリスム写真', category: '写真・映像技法', promptSuffix: 'pictorialist photography, soft focus, painterly aesthetic, romantic atmosphere', thumbnail: '' },
  { id: 'film-grain', name: 'Film Grain', jpName: 'フィルム粒子写真', category: '写真・映像技法', promptSuffix: 'film grain photography, analog texture, 35mm look, cinematic grit', thumbnail: '' },
  { id: 'sepia', name: 'Sepia Tone', jpName: 'セピア調', category: '写真・映像技法', promptSuffix: 'sepia tone photography, aged paper look, monochromatic brown palette', thumbnail: '' },
  { id: 'cyanotype', name: 'Cyanotype', jpName: 'サイアノタイプ（青写真）', category: '写真・映像技法', promptSuffix: 'cyanotype print, Prussian blue monochrome, sun-printed aesthetic, botanical texture', thumbnail: '' },
  { id: 'polaroid', name: 'Polaroid', jpName: 'ポラロイド・レトロ風', category: '写真・映像技法', promptSuffix: 'polaroid photography, instant film look, vintage white border, faded colors', thumbnail: '' },

  // 現代・デジタルアート
  { id: '3d-render', name: '3D Render', jpName: '3Dレンダリング風', category: '現代・デジタルアート', promptSuffix: '3D rendering style, Octane render, volumetric lighting, Unreal Engine 5 aesthetic, high fidelity CGI', thumbnail: '' },
  { id: 'digital-painting', name: 'Digital Painting', jpName: 'デジタルペインティング', category: '現代・デジタルアート', promptSuffix: 'digital painting, speedpaint style, vibrant digital brushwork, professional illustration', thumbnail: '' },
  { id: 'vector', name: 'Vector Art', jpName: 'ベクターアート', category: '現代・デジタルアート', promptSuffix: 'vector art, clean flat shapes, Adobe Illustrator style, minimalist graphic', thumbnail: '' },
  { id: 'glitch', name: 'Glitch Art', jpName: 'グリッチアート', category: '現代・デジタルアート', promptSuffix: 'glitch art aesthetic, digital distortion, chromatic aberration, data corruption look', thumbnail: '' },
  { id: 'pixel-art', name: 'Pixel Art', jpName: 'ピクセルアート・ドット絵', category: '現代・デジタルアート', promptSuffix: '8-bit pixel art style, retro gaming aesthetic, crisp square pixels', thumbnail: '' },
  { id: 'low-poly', name: 'Low Poly Art', jpName: 'ローポリゴン風アート', category: '現代・デジタルアート', promptSuffix: 'low poly art, geometric facets, stylized 3D shapes, minimalist 3D look', thumbnail: '' },
  { id: 'concept-art', name: 'Concept Art', jpName: 'コンセプトアート風', category: '現代・デジタルアート', promptSuffix: 'concept art illustration, world-building aesthetic, atmospheric environment design', thumbnail: '' },
  { id: 'matte-painting', name: 'Matte Painting', jpName: 'マットペインティング風', category: '現代・デジタルアート', promptSuffix: 'matte painting, epic scale, cinematic background, realistic environment blending', thumbnail: '' },

  // サイケデリック & トランス系
  { id: 'goa-trance', name: 'Goa Trance Style', jpName: 'ゴアトランス風アート', category: 'サイケデリック & トランス系', promptSuffix: 'goa trance aesthetic, hypnotic patterns, fluorescent neon colors, tribal psychedelic fusion', thumbnail: '' },
  { id: 'psychedelic', name: 'Psychedelic Art', jpName: 'サイケデリックアート', category: 'サイケデリック & トランス系', promptSuffix: 'psychedelic art, vibrant swirling colors, kaleidoscopic patterns, mind-bending visuals', thumbnail: '' },
  { id: 'visionary', name: 'Visionary Art', jpName: 'ヴィジョナリーアート', category: 'サイケデリック & トランス系', promptSuffix: 'visionary art style, spiritual and mystical themes, cosmic consciousness, Alex Grey inspired', thumbnail: '' },
  { id: 'trance-art', name: 'Trance Art', jpName: 'トランスアート', category: 'サイケデリック & トランス系', promptSuffix: 'trance art style, rhythmic patterns, energetic flow, rave aesthetic', thumbnail: '' },
  { id: 'acid-art', name: 'Acid Art', jpName: 'アシッドアート', category: 'サイケデリック & トランス系', promptSuffix: 'acid art, melting visuals, surreal high-saturation colors, 1960s counter-culture', thumbnail: '' },
  { id: 'neo-psychedelic', name: 'Neo-Psychedelic', jpName: 'ネオサイケデリック', category: 'サイケデリック & トランス系', promptSuffix: 'neo-psychedelic illustration, modern vibrant surrealism, detailed abstract fusion', thumbnail: '' },
  { id: 'hallucinatory', name: 'Hallucinatory Art', jpName: '幻覚的アート', category: 'サイケデリック & トランス系', promptSuffix: 'hallucinatory art, shifting perspectives, surreal fluid forms, dream-state visuals', thumbnail: '' },
  { id: 'fractal', name: 'Fractal Art', jpName: 'フラクタルアート', category: 'サイケデリック & トランス系', promptSuffix: 'fractal art, infinite geometric complexity, Mandelbrot set aesthetic, mathematical beauty', thumbnail: '' },
  { id: 'sacred-geometry', name: 'Sacred Geometry', jpName: '神聖幾何学アート', category: 'サイケデリック & トランス系', promptSuffix: 'sacred geometry, flower of life, mandala patterns, harmonic proportion, spiritual symbols', thumbnail: '' },

  // スピリチュアル & フェス系
  { id: 'ayahuasca', name: 'Ayahuasca Art', jpName: 'アヤワスカアート', category: 'スピリチュアル & フェス系', promptSuffix: 'ayahuasca visionary art, DMT visuals, jungle shamanic patterns, intricate spiritual entities', thumbnail: '' },
  { id: 'shamanic', name: 'Shamanic Art', jpName: 'シャーマンアート', category: 'スピリチュアル & フェス系', promptSuffix: 'shamanic art style, tribal spirits, primal energy, ancient rituals aesthetic', thumbnail: '' },
  { id: 'mystical-visionary', name: 'Mystical Visionary', jpName: '神秘的ヴィジョナリー', category: 'スピリチュアル & フェス系', promptSuffix: 'mystical visionary painting, ethereal divine light, celestial beings, otherworldly landscape', thumbnail: '' },
  { id: 'festival-poster', name: 'Festival Poster Art', jpName: 'フェスポスタ―アート', category: 'スピリチュアル & フェス系', promptSuffix: 'festival poster art style, music event aesthetic, bold decorative lettering, celebratory mood', thumbnail: '' },
  { id: 'uv-glow', name: 'UV Glow (Blacklight)', jpName: 'UVグロー・ブラックライト', category: 'スピリチュアル & フェス系', promptSuffix: 'uv glow art, blacklight aesthetic, fluorescent neon on dark, psytrance party vibes', thumbnail: '' },

  // 未来的 & サイバー系
  { id: 'cyberdelic', name: 'Cyberdelic Art', jpName: 'サイバーデリック', category: '未来的 & サイバー系', promptSuffix: 'cyberdelic art, cyberpunk meets psychedelic, high-tech neon surrealism, bio-mechanical patterns', thumbnail: '' },
  { id: 'retrofuturism', name: 'Retrofuturism', jpName: 'レトロフューチャー', category: '未来的 & サイバー系', promptSuffix: 'retrofuturism art, 1950s vision of the future, jetpacks and rayguns, vintage sci-fi aesthetic', thumbnail: '' },
  { id: 'sci-fi-psychedelic', name: 'Sci-Fi Psychedelic', jpName: 'サイファイ・サイケ', category: '未来的 & サイバー系', promptSuffix: 'sci-fi psychedelic illustration, cosmic voyage, futuristic surrealism, starship visions', thumbnail: '' },
  { id: 'digital-fractal', name: 'Digital Fractal', jpName: 'デジタルフラクタル', category: '未来的 & サイバー系', promptSuffix: 'digital fractal psychedelic, neon geometric complexity, computer-generated infinity', thumbnail: '' },

  // ユニーク系
  { id: 'op-art', name: 'Op Art (Optical)', jpName: 'オプアート（錯視）', category: 'ユニーク系', promptSuffix: 'op art style, optical illusions, black and white patterns, visual vibration, abstract deception', thumbnail: '' },
  { id: 'kaleidoscopic-unique', name: 'Kaleidoscopic art', jpName: '万華鏡アート', category: 'ユニーク系', promptSuffix: 'kaleidoscopic art, perfectly symmetrical mirrored patterns, multifaceted prism effect', thumbnail: '' },
  { id: 'mandala', name: 'Mandala Art', jpName: 'マンダラアート', category: 'ユニーク系', promptSuffix: 'mandala art style, circular symmetry, spiritual center, intricate meditative patterns', thumbnail: '' },
  { id: 'liquid-light', name: 'Liquid Light Show', jpName: '液体ライトショー風', category: 'ユニーク系', promptSuffix: 'liquid light show style, 1960s oil projection, colorful fluid motion, Woodstock aesthetic', thumbnail: '' },
  { id: 'posterized-psychedelic', name: 'Posterized Psychedelic', jpName: 'ポスタライズ・サイケ', category: 'ユニーク系', promptSuffix: 'posterized psychedelic print, high contrast color bands, graphic surrealism', thumbnail: '' },
  { id: 'gothic', name: 'Gothic Style', jpName: 'ゴシック風', category: 'ユニーク系', promptSuffix: 'gothic aesthetic, dark romanticism, ornate architectural details, macabre elegance', thumbnail: '' },

  // グラフィック & 印刷表現
  { id: 'silkscreen', name: 'Screen Printing', jpName: 'シルクスクリーン印刷', category: 'グラフィック & 印刷表現', promptSuffix: 'silkscreen printing style, bold layered ink, screen texture, limited color palette, Andy Warhol aesthetic', thumbnail: '' },
  { id: 'risograph', name: 'Riso Print', jpName: 'リソグラフ印刷風', category: 'グラフィック & 印刷表現', promptSuffix: 'risograph print aesthetic, grainy texture, vibrant soy-ink colors, overlapping layers', thumbnail: '' },
  { id: 'collage', name: 'Collage Art', jpName: 'コラージュアート', category: 'グラフィック & 印刷表現', promptSuffix: 'collage art style, mixed media, paper scraps and magazine cutouts, artistic assembly', thumbnail: '' },
  { id: 'typography', name: 'Typographic Poster', jpName: 'タイポグラフィポスター', category: 'グラフィック & 印刷表現', promptSuffix: 'typographic poster, creative lettering, font-focused design, graphic communication', thumbnail: '' },
  { id: 'graphic-design', name: 'Graphic Design Style', jpName: 'グラフィックデザイン風', category: 'グラフィック & 印刷表現', promptSuffix: 'graphic design illustration, clean Swiss style, professional layout, bold vector elements', thumbnail: '' },
  { id: 'vector-poster', name: 'Vector Poster', jpName: 'ベクターポスターアート', category: 'グラフィック & 印刷表現', promptSuffix: 'vector poster art, flat shaded illustration, modern minimalist print aesthetic', thumbnail: '' },
  { id: 'geometric-abstraction', name: 'Geometric Abstraction', jpName: '幾何学抽象デザイン', category: 'グラフィック & 印刷表現', promptSuffix: 'geometric abstraction, mathematical shapes, harmonic color balance, minimal constructivism', thumbnail: '' },
  { id: 'diagram', name: 'Diagrammatic Drawing', jpName: '線画・図形画', category: 'グラフィック & 印刷表現', promptSuffix: 'diagrammatic drawing, technical illustration, clean lines, schematic look', thumbnail: '' },
  { id: 'isometric', name: 'Isometric Art', jpName: 'アイソメトリックアート', category: 'グラフィック & 印刷表現', promptSuffix: 'isometric perspective, 3D geometric projection, clean vector look', thumbnail: '' },

  // 現代アート & ポップカルチャー
  { id: 'graffiti', name: 'Graffiti / Street Art', jpName: 'ストリートアート・グラフィティ', category: '現代アート & ポップカルチャー', promptSuffix: 'graffiti art style, spray paint textures, urban street art, vibrant murals, tagged aesthetic', thumbnail: '' },
  { id: 'comic-book', name: 'Comic Book Art', jpName: 'アメコミ風アート', category: '現代アート & ポップカルチャー', promptSuffix: 'comic book art style, dot tones, dynamic action lines, vintage comic aesthetic', thumbnail: '' },
  { id: 'manga-cover', name: 'Manga Cover', jpName: '漫画の表紙イラスト風', category: '現代アート & ポップカルチャー', promptSuffix: 'manga cover art style, professional character illustration, cel-shaded shadows, Japanese tankobon aesthetic', thumbnail: '' },
  { id: 'pop-art-poster', name: 'Pop Art Poster', jpName: 'ポップアートポスター', category: '現代アート & ポップカルチャー', promptSuffix: 'pop art poster style, vibrant bold colors, graphic pop culture aesthetic, mass media influence', thumbnail: '' },

  // 配色・色彩
  { id: 'vivid-color', name: 'Vivid Color', jpName: 'ビビッドカラー', category: '配色・色彩', promptSuffix: 'vivid colors, high saturation, intense and bold palette, vibrant tones', thumbnail: '' },
  { id: 'neon-color', name: 'Neon Color', jpName: '蛍光色調', category: '配色・色彩', promptSuffix: 'neon colors, fluorescent pink and yellow and orange glow, electric palette', thumbnail: '' },
  { id: 'colorful', name: 'Colorful', jpName: 'カラフル', category: '配色・色彩', promptSuffix: 'colorful, multi-color palette, bright and diverse hues', thumbnail: '' },
  { id: 'pastel-colors', name: 'Pastel Colors', jpName: 'パステルカラー', category: '配色・色彩', promptSuffix: 'pastel colors, soft and light hues, gentle desaturated palette', thumbnail: '' },
  { id: 'earth-tones', name: 'Earth Tones', jpName: 'アースカラー', category: '配色・色彩', promptSuffix: 'earth tones, natural organic colors, browns and greens and tans, terracotta palette', thumbnail: '' },
  { id: 'metallic-colors', name: 'Metallic Colors', jpName: 'メタリックカラー', category: '配色・色彩', promptSuffix: 'metallic colors, shimmering gold and silver and chrome, reflective surfaces', thumbnail: '' },
  { id: 'monochrome', name: 'Monochrome', jpName: 'モノクロ', category: '配色・色彩', promptSuffix: 'monochrome, black and white, grayscale photography aesthetic, single color tone', thumbnail: '' },
  { id: 'chromatic-color', name: 'Chromatic Color', jpName: '有彩色', category: '配色・色彩', promptSuffix: 'chromatic colors, full spectrum of hues, saturation-focused palette', thumbnail: '' },
  { id: 'intermediate-colors', name: 'Intermediate Colors', jpName: '中間色', category: '配色・色彩', promptSuffix: 'intermediate colors, subtle muted tones, balanced desaturated hues', thumbnail: '' },
  { id: 'achromatic-colors', name: 'Achromatic Colors', jpName: '無彩色', category: '配色・色彩', promptSuffix: 'achromatic colors, neutral palette, shades of black and white and gray only', thumbnail: '' },
  { id: 'transparent', name: 'Transparent', jpName: '透明', category: '配色・色彩', promptSuffix: 'transparent, translucent effects, clear and glass-like qualities, see-through layers', thumbnail: '' },
  { id: 'iridescent', name: 'Iridescent', jpName: '虹色（玉虫色）', category: '配色・色彩', promptSuffix: 'iridescent, opalescent glow, shimmering rainbow-like colors, pearlescent finish', thumbnail: '' }
];
