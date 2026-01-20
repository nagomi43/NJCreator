
export interface StyleOption {
  id: string;
  name: string;
  jpName: string;
  category: StyleCategory;
  promptSuffix: string;
  thumbnail: string;
  desc?: string; // 説明文フィールドを型に追加
}

export type StyleCategory = 
  | '描き方'
  | '古典的技法' 
  | '近代美術' 
  | '装飾美術・工芸' 
  | '写真・映像技法' 
  | '現代・デジタルアート' 
  | 'サイケデリック & トランス系' 
  | 'スピリチュアル & フェス系'
  | '未来的 & サイバー系'
  | 'ユニーク系'
  | 'グラフィック & 印刷表現' 
  | '現代アート & ポップカルチャー'
  | '配色・色彩';

export interface PromptState {
  subject: string;
  styleIds: string[];
  lighting: string;
  angle: string;
  shotSize: string;
  composition: string;
  stylize: number;
  chaos: number;
  weird: number;
  personalize: string;
  sref: string;
  sw: number; 
  no: string;
  version: string;
  raw: boolean;
}

export const CATEGORIES: StyleCategory[] = [
  '描き方',
  '古典 migratory技法' as any === '古典 migratory技法' as any ? '古典的技法' : '古典的技法', 
  '近代美術', 
  '装飾美術・工芸', 
  '写真・映像技法', 
  '現代・デジタルアート', 
  'サイケデリック & トランス系', 
  'スピリチュアル & フェス系', 
  '未来的 & サイバー系', 
  'ユニーク系', 
  'グラフィック & 印刷表現', 
  '現代アート & ポップカルチャー',
  '配色・色彩'
];

// 配色・色彩の詳細説明マッピング
export const COLOR_DESCRIPTIONS: Record<string, string> = {
  'vivid-color': '高彩度で大胆、強烈な色彩パレット',
  'neon-color': '蛍光ピンク、黄色、オレンジが発光する電脳パレット',
  'colorful': '多色使いで明るく多様な色合い',
  'pastel-colors': '柔らかく淡い、優しい低彩度パレット',
  'earth-tones': '茶系、緑、タンなどの自然で有機的な色合い',
  'metallic-colors': '金、銀、クロームなどの光沢と反射のある質感',
  'monochrome': '白黒、グレースケール、単一トーンの表現',
  'chromatic-color': '色の三要素を強調した鮮やかな有彩色',
  'intermediate-colors': '控えめで落ち着いた、調和の取れた中間トーン',
  'achromatic-colors': '黒、白、灰色のみで構成された中立的なパレット',
  'transparent': '透明、半透明、ガラスのような層状の質感',
  'iridescent': '真珠のような光沢、見る角度で変わる虹色の輝き'
};

export const LIGHTING_OPTIONS = [
  { label: 'Choice（選択）', value: '', desc: '自動設定' },
  { label: 'Sunlight (サンライト)', value: 'direct sunlight, harsh shadows, high contrast exterior lighting', desc: '自然光の直射日光、硬い影' },
  { label: 'Golden Hour (ゴールデンアワー)', value: 'golden hour, warm sunset glow, dramatic soft lighting', desc: '日の出・日の入りの黄金色の光' },
  { label: 'Firelight (ファイアライト)', value: 'flickering firelight, warm orange glow, primal atmosphere', desc: '炎の揺らめく暖かい光' },
  { label: 'Spotlight (スポットライト)', value: 'dramatic spotlight, stage lighting, high focus beam', desc: '集中したビーム光、劇場的' },
  { label: 'Tungsten (タングステン)', value: 'tungsten lighting, warm indoor artificial light, natural skin tones', desc: '暖色系の人工光源、室内' },
  { label: 'Softbox (ソフトボックス)', value: 'softbox lighting, diffused light, minimal shadows, studio portrait lighting', desc: '拡散した柔らかい光、ポートレート' },
  { label: 'Computer Screen (コンピュータスクリーン)', value: 'computer screen glow, cool blue digital light, tech atmosphere', desc: '冷たい青みがかった光、テクノロジー' },
  { label: 'Candlelight (キャンドルライト)', value: 'candlelight, soft flickering warm light, intimate atmosphere', desc: '柔らかく揺らぐ暖かい光' },
  { label: 'Neon (ネオン)', value: 'vibrant neon lighting, cyberpunk glow, urban noir atmosphere', desc: '鮮やかな人工色光、都市的' },
  { label: 'Warm vs Cool (ウォーム vs クール)', value: 'warm and cool color temperature contrast, cinematic color grading', desc: '暖色と寒色の温度差による感情演出' },
  { label: 'Shadow Play (シャドウプレイ)', value: 'dramatic shadow play, chiaroscuro, mysterious high contrast', desc: '影の遊び、ミステリアスな深み' },
  { label: 'Moonlight (ムーンライト)', value: 'ethereal moonlight, cool night atmosphere, soft silvery light', desc: '冷たく柔らかい自然光、幻想的' }
];

export const COMPOSITION_OPTIONS = [
  { label: 'Choice（選択）', value: '', desc: '自動設定' },
  { label: 'Rule of Thirds (三分割法)', value: 'rule of thirds composition, balanced framing', desc: '3分割法。バランスの取れた配置' },
  { label: 'Symmetrical (シンメトリー)', value: 'symmetrical composition, perfect balance, harmonic alignment', desc: '左右対称。安定感や調和を表現' },
  { label: 'Framing (フレーミング)', value: 'framing composition, subject framed by environment, focused perspective', desc: '周囲の要素で被写体を囲み焦点を絞る' },
  { label: 'Deep Perspective (ディープパースペクティブ)', value: 'deep perspective, atmospheric layering, spatial depth', desc: '奥行きを活かした空間の深み強調' },
  { label: 'High & Low Angle (ハイ＆ローアングル)', value: 'dynamic camera angles, dramatic high and low perspectives', desc: '高低差のあるアングルで威圧感や英雄性' },
  { label: 'Negative Space (ネガティブスペース)', value: 'minimalist composition, excessive negative space, simple focal point', desc: '余白を活用し被写体を際立たせる' },
  { label: 'Leading Lines (リーディングライン)', value: 'leading lines composition, visual path to subject', desc: '視線誘導の線を使い被写体へ導く' },
  { label: 'Fibonacci Spiral (フィボナッチスパイラル)', value: 'golden ratio, fibonacci spiral composition, natural aesthetic flow', desc: '黄金螺旋。自然な視線の集中' },
  { label: 'Character Relationship (キャラクターリレーションシップ)', value: 'cinematic blocking, character positioning reflecting emotions', desc: '人物の位置関係で感情や力学を示す' },
  { label: 'Color & Lighting (カラー＆ライティング)', value: 'composition through color and light contrast, chiaroscuro framing', desc: '色と光のコントラストでムード強調' }
];

export const ANGLE_OPTIONS = [
  { label: 'Choice（選択）', value: '', desc: '標準的な視点' },
  { label: 'Eye Level (アイレベル)', value: 'eye-level shot, natural perspective', desc: '目線の高さ。自然で客観的な視点' },
  { label: 'Low Angle (ローアングル)', value: 'low angle, heroic perspective', desc: '下から見上げる。被写体を力強く、巨大に見せる' },
  { label: 'High Angle (ハイアングル)', value: 'high angle, looking down', desc: '上から見見下ろす。状況把握や被写体を小さく見せる' },
  { label: 'Top Shot (トップショット)', value: 'top shot, bird\'s eye view from directly above', desc: '真上からの視点。図面のような客観性' },
  { label: 'Bird\'s Eye View (バードアイビュー)', value: 'bird\'s-eye view, high altitude perspective', desc: '鳥の目線。広大な範囲を捉える超俯瞰' },
  { label: 'Worm\'s Eye View (ワームズアイビュー)', value: 'worm\'s-eye view, extremely low angle from ground level', desc: '虫の目線。地面ギリギリの極端なあおり' },
  { label: 'Dutch Angle (ダッチアングル)', value: 'dutch angle, tilted frame, dynamic tension', desc: '斜めに傾いた構図。不安感や躍動感を演出' },
  { label: 'Over the Shoulder (オーバーショルダー)', value: 'over-the-shoulder shot, conversation perspective', desc: '肩越し。人物同士の関係性を示す' },
  { label: 'POV (主観視点)', value: 'point-of-view shot, subjective perspective', desc: '登場人物の目線。没入感を高める' }
];

export const SHOT_SIZE_OPTIONS = [
  { label: 'Choice（選択）', value: '', desc: '標準的な距離' },
  { label: 'Establishing Shot (エスタブリッシング)', value: 'establishing shot, wide landscape showing location', desc: '場所全体を示す。状況説明のための遠景' },
  { label: 'Long Shot (ロングショット)', value: 'long shot, full body with surrounding environment', desc: '全身と周囲の環境をバランスよく配置' },
  { label: 'Full Shot (フルショット)', value: 'full shot, showing entire character', desc: '足先から頭まで、被写体の全身を収める' },
  { label: 'Medium Shot (ミディアムショット)', value: 'medium shot, waist up', desc: '腰から上。表情と身振りの両方を捉える' },
  { label: 'Close-up (クローズアップ)', value: 'close-up shot, focus on face', desc: '顔の寄り。感情の変化を強調する' },
  { label: 'Extreme Close-up (エクストリームクローズアップ)', value: 'extreme close-up, extreme detail focus', desc: '目や手元など、細部を極端に強調' }
];

export const VERSION_OPTIONS = [
  { label: 'Niji 7 (Latest Anime)', value: 'niji 7' },
  { label: 'Niji 6 (Stable Anime)', value: 'niji 6' },
  { label: 'MJ 7 (Latest Photo/Art)', value: '7' },
  { label: 'MJ 6.1 (Stable Photo/Art)', value: '6.1' }
];
