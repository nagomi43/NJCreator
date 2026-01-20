
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { STYLES } from './constants';
import { 
  CATEGORIES, 
  LIGHTING_OPTIONS, 
  ANGLE_OPTIONS, 
  SHOT_SIZE_OPTIONS,
  COMPOSITION_OPTIONS,
  VERSION_OPTIONS,
  COLOR_DESCRIPTIONS,
  PromptState,
  StyleCategory
} from './types';
import { enhancePromptWithGemini, enhanceField } from './services/geminiService';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<StyleCategory | 'すべて'>('すべて');
  const [loading, setLoading] = useState(false);
  const [enhancingFields, setEnhancingFields] = useState<Record<string, boolean>>({});
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState<PromptState>({
    subject: '',
    styleIds: [], 
    lighting: '',
    angle: '',
    shotSize: '',
    composition: '',
    stylize: 250,
    chaos: 0,
    weird: 0,
    personalize: '',
    sref: '',
    sw: 100,
    no: '',
    version: 'niji 7', 
    raw: false
  });

  const filteredStyles = useMemo(() => {
    const baseStyles = STYLES.filter(s => s.category !== '配色・色彩');
    if (activeCategory === 'すべて') return baseStyles;
    return baseStyles.filter(s => String(s.category) === String(activeCategory));
  }, [activeCategory]);

  const colorCategoryStyles = useMemo(() => {
    return STYLES.filter(s => s.category === '配色・色彩');
  }, []);

  const toggleStyle = (id: string) => {
    setForm(prev => {
      const isAlreadySelected = prev.styleIds.includes(id);
      if (isAlreadySelected) {
        return { ...prev, styleIds: prev.styleIds.filter(styleId => styleId !== id) };
      }
      if (prev.styleIds.length >= 5) return prev;
      return { ...prev, styleIds: [...prev.styleIds, id] };
    });
  };

  const handleEnhanceSubject = async () => {
    if (!form.subject) return;
    setEnhancingFields(prev => ({ ...prev, subject: true }));
    try {
      const enhanced = await enhanceField('Subject', form.subject, '');
      setForm(prev => ({ ...prev, subject: enhanced }));
    } finally {
      setEnhancingFields(prev => ({ ...prev, subject: false }));
    }
  };

  const handleGenerate = async () => {
    if (!form.subject) return;
    setLoading(true);
    try {
      const result = await enhancePromptWithGemini(form);
      setGeneratedPrompt(result);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CustomSelect = ({ label, options, value, onChange, placeholder = "Choice（選択）" }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find((opt: any) => opt.value === value);

    return (
      <div className="select-container space-y-2 relative" ref={containerRef}>
        <label className="text-[10px] lg:text-[11px] font-black text-zinc-500 uppercase tracking-widest block">{label}</label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[#2c2420] border border-white/10 rounded-xl px-2.5 py-2.5 min-h-[52px] text-white flex justify-between items-center hover:border-blue-500 transition-all shadow-lg active:scale-95 text-left overflow-hidden"
        >
          <span className="font-bold mr-1 text-[10.5px] lg:text-[11.5px] leading-tight line-clamp-2 break-words">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <i className={`fa-solid fa-chevron-down text-[9px] text-zinc-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>

        {isOpen && (
          <div className="absolute z-[99999] min-w-full lg:min-w-[140%] mt-2 bg-[#1a1614] border border-white/10 rounded-xl shadow-2xl max-h-64 overflow-y-auto custom-scrollbar-dark animate-in fade-in zoom-in-95 duration-100 dropdown-list">
            {options.map((opt: any) => (
              <div
                key={opt.label}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className="group/item relative px-4 py-3.5 text-[12px] text-zinc-300 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors border-b border-white/5 last:border-none item-with-tooltip"
              >
                <span className="block font-bold leading-snug">{opt.label}</span>
                {opt.desc && (
                  <div className="tooltip-white">
                    <div className="tooltip-arrow"></div>
                    {opt.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const AIButton = ({ onClick, loading, disabled }: { onClick: () => void, loading?: boolean, disabled?: boolean }) => (
    <button 
      onClick={(e) => { e.preventDefault(); onClick(); }}
      disabled={loading || disabled}
      className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-tighter transition-all ${
        loading ? 'bg-blue-600/50 text-white animate-pulse' : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white'
      }`}
    >
      <i className={`fa-solid ${loading ? 'fa-spinner fa-spin' : 'fa-wand-magic-sparkles'}`}></i>
      {loading ? 'Thinking' : 'AI強化'}
    </button>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fdfcf0] text-[#2c2420] overflow-hidden font-sans">
      <aside className="w-full lg:w-[450px] xl:w-[500px] lg:h-screen bg-[#1a1614] border-r border-black/20 flex flex-col shrink-0 overflow-y-auto custom-scrollbar-dark relative sidebar-container">
        <div className="p-6 lg:p-8 xl:p-10 space-y-6 pb-20 relative z-10 content-wrapper">
          <header className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">Prompt Architect Ultra</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black tracking-tighter text-white uppercase italic leading-none">
                  <span className="text-blue-500">NJ</span> Creator
                </h1>
              </div>
            </div>
          </header>

          <section className="space-y-6">
            <div>
              <div className="flex items-center mb-3">
                <label className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em]">1. 主題を入力 (Subject)</label>
                <AIButton onClick={handleEnhanceSubject} loading={enhancingFields['subject']} disabled={!form.subject} />
              </div>
              <textarea
                className="w-full bg-[#2c2420] border border-white/5 rounded-[24px] px-6 py-5 focus:ring-1 focus:ring-blue-500 outline-none transition-all h-36 text-lg text-white placeholder-zinc-700 resize-none font-medium leading-relaxed"
                placeholder="例: 深夜のコンビニ、雨に濡れたアスファルト、ネオンの反射"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 lg:gap-3 dropdown-grid">
              <CustomSelect label="アングル" options={ANGLE_OPTIONS} value={form.angle} onChange={(v: string) => setForm({ ...form, angle: v })} />
              <CustomSelect label="ショットサイズ" options={SHOT_SIZE_OPTIONS} value={form.shotSize} onChange={(v: string) => setForm({ ...form, shotSize: v })} />
              <CustomSelect label="構図" options={COMPOSITION_OPTIONS} value={form.composition} onChange={(v: string) => setForm({ ...form, composition: v })} />
            </div>

            <div className="grid grid-cols-3 gap-2 lg:gap-3 dropdown-grid">
              <CustomSelect label="ライティング" options={LIGHTING_OPTIONS} value={form.lighting} onChange={(v: string) => setForm({ ...form, lighting: v })} />
              <CustomSelect 
                label="配色・色彩" 
                options={[ 
                  { label: 'Choice（選択）', value: '', desc: '自動設定' }, 
                  ...colorCategoryStyles.map(s => ({ 
                    label: s.jpName, 
                    value: s.id, 
                    desc: COLOR_DESCRIPTIONS[s.id] || '' 
                  })) 
                ]} 
                value={form.styleIds.find(id => colorCategoryStyles.some(c => c.id === id)) || ''} 
                onChange={(v: string) => {
                  const otherStyles = form.styleIds.filter(id => !colorCategoryStyles.some(c => c.id === id));
                  if (v === '') {
                    setForm({ ...form, styleIds: otherStyles });
                  } else {
                    setForm({ ...form, styleIds: [...otherStyles, v].slice(0, 5) });
                  }
                }} 
              />
              <CustomSelect label="Engine" options={VERSION_OPTIONS} value={form.version} onChange={(v: string) => setForm({ ...form, version: v })} />
            </div>

            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Stylize (芸術性)</label>
                    <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-md">{form.stylize}</span>
                  </div>
                  <input type="range" min="0" max="1000" step="10" className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer" value={form.stylize} onChange={(e) => setForm({...form, stylize: parseInt(e.target.value)})} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Chaos (意外性)</label>
                    <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-md">{form.chaos}</span>
                  </div>
                  <input type="range" min="0" max="100" step="1" className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer" value={form.chaos} onChange={(e) => setForm({...form, chaos: parseInt(e.target.value)})} />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Weird (奇妙さ)</label>
                  <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-md">{form.weird}</span>
                </div>
                <input type="range" min="0" max="3000" step="50" className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer" value={form.weird} onChange={(e) => setForm({...form, weird: parseInt(e.target.value)})} />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 min-h-[24px]">
              {form.styleIds.filter(id => colorCategoryStyles.some(c => c.id === id)).map(id => {
                const s = STYLES.find(item => item.id === id);
                return (
                  <div key={id} className="flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-[10px] font-black border border-blue-600/30">
                    <span>{s?.jpName}</span>
                    <button onClick={() => toggleStyle(id)} className="hover:text-white"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-zinc-500 uppercase tracking-widest block">SREF ID</label>
                  <input type="text" className="w-full bg-[#2c2420] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none font-mono" placeholder="Sref ID / URL" value={form.sref} onChange={(e) => setForm({ ...form, sref: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-zinc-500 uppercase tracking-widest block">Weight (SW)</label>
                  <input type="number" className="w-full bg-[#2c2420] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none font-mono text-center" value={form.sw} onChange={(e) => setForm({ ...form, sw: parseInt(e.target.value) || 0 })} />
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.stylesafari.xyz/" target="_blank" rel="noopener noreferrer" className="flex-1 group flex items-center justify-center gap-3 bg-zinc-800/50 hover:bg-zinc-700 px-4 py-4 rounded-2xl transition-all border border-zinc-700/50 text-white font-bold text-[10px] uppercase tracking-wider">
                  StyleSafari <i className="fa-solid fa-arrow-up-right-from-square text-[9px] text-zinc-500"></i>
                </a>
                <button
                  onClick={handleGenerate}
                  disabled={loading || !form.subject}
                  className={`flex-[2] py-4 rounded-2xl font-black text-[12px] lg:text-[13px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                    loading ? 'bg-zinc-800 text-zinc-600 cursor-wait' : 'bg-white hover:bg-blue-600 hover:text-white text-black active:scale-[0.98]'
                  }`}
                >
                  {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-bolt-lightning"></i>}
                  {loading ? 'WAIT...' : 'GENERATE'}
                </button>
              </div>
            </div>

            {generatedPrompt && (
              <div className="bg-blue-600 rounded-[28px] p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="flex justify-between items-center text-white">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Built Prompt</span>
                  <button onClick={copyToClipboard} className="bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors">
                    {copied ? <i className="fa-solid fa-check text-sm"></i> : <i className="fa-solid fa-copy text-sm"></i>}
                  </button>
                </div>
                <p className="text-white text-[14px] font-mono leading-relaxed select-all break-words font-bold">{generatedPrompt}</p>
              </div>
            )}
          </section>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#fdfcf0]">
        <div className="shrink-0 px-6 lg:px-10 pt-8 pb-6 bg-[#fdfcf0] border-b border-black/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pr-6 shrink-0">
               <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest border-r border-black/10 pr-4">Library</span>
               <button onClick={() => setForm(prev => ({ ...prev, styleIds: [] }))} className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:underline">Clear Selected</button>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2 shrink-0 max-w-full">
              <button onClick={() => setActiveCategory('すべて')} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === 'すべて' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-zinc-500 border-zinc-200 shadow-sm hover:border-zinc-400'}`}>すべて</button>
              {CATEGORIES.filter(cat => cat !== '配色・色彩').map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-zinc-500 border-zinc-200 shadow-sm hover:border-zinc-400'}`}>{cat}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar bg-[#fdfcf0]">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.4em]">2. スタイルを選択 ({form.styleIds.length}/5)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 pb-20">
              {filteredStyles.map(style => {
                const isSelected = form.styleIds.includes(style.id);
                const order = form.styleIds.indexOf(style.id) + 1;
                return (
                  <button 
                    key={style.id} 
                    onClick={() => toggleStyle(style.id)} 
                    className={`group relative px-4 py-4 rounded-2xl border transition-all text-left flex flex-col justify-between h-32 xl:h-36 ${isSelected ? 'bg-white border-blue-600 text-black shadow-xl scale-[1.03] z-10' : 'bg-white border-zinc-200 text-zinc-400 hover:border-zinc-400 shadow-sm'} ${!isSelected && form.styleIds.length >= 5 ? 'opacity-40 grayscale pointer-events-none' : ''}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${isSelected ? 'text-blue-600' : 'text-zinc-400'}`}>{style.category}</span>
                      {isSelected && <span className="w-5 h-5 flex items-center justify-center bg-blue-600 text-white text-[10px] font-black rounded-md">{order}</span>}
                    </div>
                    <div className="space-y-1 overflow-hidden w-full">
                      <span className={`block text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-tight leading-tight line-clamp-2 break-words ${isSelected ? 'text-blue-600' : 'text-[#2c2420]'}`}>{style.name}</span>
                      <span className={`block text-[9px] xl:text-[10px] font-bold truncate w-full ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>{style.jpName}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #fdfcf0; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .custom-scrollbar-dark::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar-dark::-webkit-scrollbar-track { background: #1a1614; }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        
        .sidebar-container { overflow-x: visible !important; overflow-y: auto; }
        .content-wrapper { position: relative; z-index: 10; }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 16px; height: 16px;
          background: #3b82f6; border-radius: 50%;
          cursor: pointer; border: 2px solid #1a1614;
        }

        /* ツールチップの配置を真下中央に固定 */
        .tooltip-white {
          visibility: hidden; opacity: 0;
          position: absolute;
          left: 50%;
          top: calc(100% + 12px); 
          width: 240px; 
          background: #ffffff; 
          color: #1a1614;
          padding: 14px 18px; 
          border-radius: 14px;
          font-size: 11.5px; 
          font-weight: 700; 
          line-height: 1.6;
          letter-spacing: 0.01em;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          border: 1px solid rgba(0,0,0,0.1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.1);
          z-index: 9999999; 
          pointer-events: none;
          transform: translateX(-50%) translateY(10px);
          text-align: center;
        }

        .item-with-tooltip:hover .tooltip-white {
          visibility: visible; 
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .tooltip-arrow {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 8px; 
          border-style: solid;
          border-color: transparent transparent #ffffff transparent;
        }

        .dropdown-list { 
            overflow: visible !important; 
            scrollbar-width: thin;
        }
        .item-with-tooltip { overflow: visible !important; position: relative; }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}} />
    </div>
  );
};

export default App;
