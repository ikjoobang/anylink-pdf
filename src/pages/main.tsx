export function mainPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Any Link to PDF - Universal Converter</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    * {
      font-family: 'Inter', sans-serif;
    }
    
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #000;
    }
    ::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 3px;
    }
    
    body {
      background: #000;
    }
    
    /* Vibrant colors from image */
    .text-cyan { color: #00E5E5; }
    .text-pink { color: #FF2D6A; }
    .text-green { color: #00E676; }
    .text-purple { color: #9D7BFF; }
    .text-blue { color: #5B8DEF; }
    
    .bg-cyan { background: #00E5E5; }
    .bg-pink { background: #FF2D6A; }
    .bg-green { background: #00E676; }
    .bg-purple { background: #9D7BFF; }
    
    /* Gradient text animations */
    .gradient-shift {
      background: linear-gradient(90deg, #00E5E5, #00E676, #9D7BFF, #FF2D6A, #00E5E5);
      background-size: 300% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 8s ease infinite;
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    /* Glowing border animation */
    .glow-border {
      position: relative;
      background: rgba(10, 15, 20, 0.95);
      border-radius: 20px;
    }
    .glow-border::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(45deg, #00E5E5, #00E676, #9D7BFF, #FF2D6A);
      border-radius: 22px;
      z-index: -1;
      background-size: 400% 400%;
      animation: borderGlow 6s ease infinite;
      filter: blur(15px);
      opacity: 0.6;
    }
    .glow-border::after {
      content: '';
      position: absolute;
      inset: -1px;
      background: linear-gradient(45deg, #00E5E5, #00E676, #9D7BFF, #FF2D6A);
      border-radius: 21px;
      z-index: -1;
      background-size: 400% 400%;
      animation: borderGlow 6s ease infinite;
    }
    
    @keyframes borderGlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Floating orbs */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.4;
      animation: orbFloat 10s ease-in-out infinite;
    }
    
    .orb-cyan {
      background: #00E5E5;
      width: 300px;
      height: 300px;
      top: 10%;
      left: 10%;
    }
    
    .orb-pink {
      background: #FF2D6A;
      width: 250px;
      height: 250px;
      top: 60%;
      right: 10%;
      animation-delay: -3s;
    }
    
    .orb-green {
      background: #00E676;
      width: 200px;
      height: 200px;
      bottom: 20%;
      left: 20%;
      animation-delay: -5s;
    }
    
    .orb-purple {
      background: #9D7BFF;
      width: 280px;
      height: 280px;
      top: 30%;
      right: 20%;
      animation-delay: -7s;
    }
    
    @keyframes orbFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(30px, -30px) scale(1.1); }
      50% { transform: translate(-20px, 20px) scale(0.9); }
      75% { transform: translate(20px, 30px) scale(1.05); }
    }
    
    /* Button glow */
    .btn-glow {
      position: relative;
      background: linear-gradient(135deg, #00E5E5, #00E676);
      transition: all 0.3s ease;
    }
    .btn-glow:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(0, 229, 229, 0.5);
    }
    .btn-glow:disabled {
      opacity: 0.4;
      transform: none;
      box-shadow: none;
    }
    
    /* Input glow on focus */
    .input-glow:focus {
      border-color: #00E5E5;
      box-shadow: 0 0 20px rgba(0, 229, 229, 0.2);
    }
    
    /* Card hover */
    .card-hover {
      transition: all 0.3s ease;
      border: 1px solid #222;
    }
    .card-hover:hover {
      border-color: #00E5E5;
      transform: translateY(-4px);
      box-shadow: 0 10px 40px rgba(0, 229, 229, 0.1);
    }
    
    /* Platform badge */
    .platform-badge {
      transition: all 0.2s ease;
      border: 1px solid #222;
    }
    .platform-badge:hover {
      border-color: #00E5E5;
      background: rgba(0, 229, 229, 0.05);
    }
    
    /* View mode active */
    .view-mode-btn.active {
      background: linear-gradient(135deg, rgba(0, 229, 229, 0.25), rgba(0, 230, 118, 0.2));
      border-color: rgba(0, 229, 229, 0.5);
      color: #00E5E5;
    }
    .view-mode-btn:not(.active):hover {
      background: rgba(255, 255, 255, 0.05);
      color: #e5e5e5;
    }
    
    /* Spinner */
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .spinner {
      animation: spin 1s linear infinite;
    }
    
    /* Progress bar */
    .progress-bar {
      background: linear-gradient(90deg, #00E5E5, #00E676, #9D7BFF);
      background-size: 200% 100%;
      animation: progressShift 2s ease infinite;
    }
    
    @keyframes progressShift {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    
    /* Confetti colors */
    .confetti {
      position: fixed;
      width: 10px;
      height: 10px;
      z-index: 1000;
      animation: confettiFall 3s ease-out forwards;
    }
    
    @keyframes confettiFall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    
    /* Slide up */
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .slide-up {
      animation: slideUp 0.8s ease-out forwards;
    }
    .slide-up-1 { animation-delay: 0.1s; opacity: 0; }
    .slide-up-2 { animation-delay: 0.2s; opacity: 0; }
    .slide-up-3 { animation-delay: 0.3s; opacity: 0; }
    
    /* Pulse ring */
    @keyframes pulseRing {
      0% { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(1.5); opacity: 0; }
    }
    
    .pulse-ring::before {
      content: '';
      position: absolute;
      inset: -4px;
      border: 2px solid #00E5E5;
      border-radius: inherit;
      animation: pulseRing 2s ease-out infinite;
    }
    
    /* Detect animation */
    @keyframes detectPop {
      0% { transform: scale(0.95); opacity: 0; }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); opacity: 1; }
    }
    
    .detect-pop {
      animation: detectPop 0.4s ease-out;
    }
    
    /* Modal backdrop */
    .modal-backdrop {
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
    }
    
    /* Glass card */
    .glass-card {
      background: rgba(10, 10, 10, 0.95);
      border: 1px solid #222;
      border-radius: 20px;
    }
  </style>
</head>
<body class="min-h-screen text-white overflow-x-hidden">
  <!-- Floating Orbs Background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="orb orb-cyan"></div>
    <div class="orb orb-pink"></div>
    <div class="orb orb-green"></div>
    <div class="orb orb-purple"></div>
  </div>
  
  <!-- Main Container -->
  <div class="relative z-10 min-h-screen">
    <!-- Header -->
    <header class="py-6 px-6">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3 slide-up">
          <div class="w-8 h-8 bg-cyan rounded-lg flex items-center justify-center">
            <i class="fas fa-file-pdf text-black text-sm"></i>
          </div>
          <span class="text-lg font-semibold">AnyLink<span class="text-cyan">PDF</span></span>
        </div>
        <nav class="flex items-center gap-6 slide-up slide-up-1">
          <a href="#features" class="text-gray-400 hover:text-cyan transition-colors text-sm">기능</a>
          <a href="#platforms" class="text-gray-400 hover:text-cyan transition-colors text-sm">플랫폼</a>
          <button class="px-4 py-2 border border-gray-700 rounded-lg hover:border-cyan hover:text-cyan transition-all text-sm">
            Pro
          </button>
        </nav>
      </div>
    </header>
    
    <!-- Hero Section -->
    <section class="py-16 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 slide-up tracking-tight">
          <span class="text-white">Any Link to </span>
          <span class="gradient-shift">PDF</span>
        </h1>
        
        <p class="text-xl text-gray-400 mb-4 slide-up slide-up-1">
          어떤 웹 링크든 <span class="text-cyan">고품질 PDF</span>로 변환
        </p>
        
        <p class="text-sm text-gray-600 mb-12 slide-up slide-up-2">
          Canva • Figma • Notion • Instagram • Twitter 외 50개+ 플랫폼
        </p>
        
        <!-- Main Converter Card -->
        <div class="glow-border p-8 slide-up slide-up-3">
          <!-- URL Input -->
          <div class="relative mb-5">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <i class="fas fa-link"></i>
            </div>
            <input 
              type="url" 
              id="urlInput"
              placeholder="링크를 붙여넣으세요..."
              class="w-full px-12 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none input-glow transition-all"
            >
            <button 
              id="pasteBtn"
              class="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-cyan transition-all text-sm border border-gray-600"
            >
              <i class="fas fa-paste mr-2"></i>붙여넣기
            </button>
          </div>
          
          <!-- Examples -->
          <div class="text-left text-xs text-gray-400 mb-5 pl-1">
            예: <span class="text-gray-300">canva.com/design/... • figma.com/proto/... • notion.so/...</span>
          </div>
          
          <!-- Gemini API Key Input -->
          <div class="mb-5">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2">
                <i class="fas fa-key text-purple text-xs"></i>
                <span class="text-gray-400 text-xs">Gemini API Key</span>
              </div>
              <button id="toggleApiKey" class="text-xs text-gray-500 hover:text-cyan transition-colors">
                <i class="fas fa-eye" id="eyeIcon"></i>
              </button>
            </div>
            <input 
              type="password" 
              id="geminiApiKey"
              placeholder="Gemini API 키를 입력하세요..."
              class="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none input-glow transition-all text-sm"
            >
            <div class="flex items-center justify-between mt-2 text-xs">
              <span id="apiKeyStatus" class="text-gray-600">
                <i class="fas fa-info-circle mr-1"></i>API 키가 필요합니다
              </span>
              <a href="https://aistudio.google.com/app/apikey" target="_blank" class="text-cyan hover:underline">
                API 키 발급받기 →
              </a>
            </div>
          </div>
          
          <!-- Platform Detection -->
          <div id="platformDetection" class="hidden mb-5">
            <div class="flex items-center gap-3 p-4 bg-cyan/5 rounded-xl border border-cyan/20 detect-pop">
              <span id="platformIcon" class="text-2xl"></span>
              <div class="text-left">
                <div class="flex items-center gap-2">
                  <span class="text-xs text-cyan">자동 감지</span>
                  <span id="platformName" class="font-medium text-white"></span>
                </div>
                <p id="platformInfo" class="text-xs text-gray-500"></p>
              </div>
            </div>
          </div>
          
          <!-- Options -->
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-3 text-left">
              <i class="fas fa-sliders text-cyan text-xs"></i>
              <span class="text-gray-200 text-sm font-medium">변환 옵션</span>
            </div>
            
            <!-- View Mode -->
            <div class="flex gap-2 mb-3 p-1.5 bg-gray-900/80 rounded-xl border border-gray-700">
              <button class="view-mode-btn flex-1 py-2.5 rounded-lg text-sm font-medium border border-transparent active" data-mode="full">
                <i class="fas fa-expand mr-2 text-xs"></i>풀 페이지
              </button>
              <button class="view-mode-btn flex-1 py-2.5 rounded-lg text-sm font-medium text-gray-400 border border-transparent" data-mode="mobile">
                <i class="fas fa-mobile-alt mr-2 text-xs"></i>모바일
              </button>
              <button class="view-mode-btn flex-1 py-2.5 rounded-lg text-sm font-medium text-gray-400 border border-transparent" data-mode="desktop">
                <i class="fas fa-desktop mr-2 text-xs"></i>데스크탑
              </button>
            </div>
            
            <!-- Checkboxes -->
            <div class="grid grid-cols-2 gap-2">
              <label class="flex items-center gap-3 p-3.5 bg-gray-900/80 rounded-xl cursor-pointer border border-gray-700 hover:border-cyan/50 transition-colors">
                <input type="checkbox" id="highQuality" class="w-4 h-4 accent-cyan-500 rounded" checked>
                <span class="text-gray-200 text-sm">고화질 (300 DPI)</span>
              </label>
              <label class="flex items-center gap-3 p-3.5 bg-gray-900/80 rounded-xl cursor-pointer border border-gray-700 hover:border-cyan/50 transition-colors">
                <input type="checkbox" id="multiPage" class="w-4 h-4 accent-cyan-500 rounded" checked>
                <span class="text-gray-200 text-sm">다중 페이지 감지</span>
              </label>
              <label class="flex items-center gap-3 p-3.5 bg-gray-900/80 rounded-xl cursor-pointer border border-gray-700 hover:border-cyan/50 transition-colors">
                <input type="checkbox" id="scrollCapture" class="w-4 h-4 accent-cyan-500 rounded">
                <span class="text-gray-200 text-sm">스크롤 캡처</span>
              </label>
              <label class="flex items-center gap-3 p-3.5 bg-gray-900/80 rounded-xl cursor-pointer border border-gray-700 hover:border-cyan/50 transition-colors">
                <input type="checkbox" id="waitInteractive" class="w-4 h-4 accent-cyan-500 rounded">
                <span class="text-gray-200 text-sm">로딩 대기</span>
              </label>
            </div>
          </div>
          
          <!-- Convert Button -->
          <button 
            id="convertBtn"
            class="w-full py-4 btn-glow rounded-xl font-semibold text-black disabled:cursor-not-allowed relative pulse-ring"
            disabled
          >
            <i class="fas fa-arrow-right mr-2"></i>
            PDF 변환
          </button>
        </div>
      </div>
    </section>
    
    <!-- Progress Modal -->
    <div id="progressModal" class="fixed inset-0 modal-backdrop z-50 flex items-center justify-center hidden">
      <div class="glass-card p-8 max-w-sm w-full mx-4">
        <div id="progressContent">
          <!-- Processing -->
          <div id="processingState" class="text-center">
            <div class="w-16 h-16 mx-auto mb-5 relative">
              <div class="absolute inset-0 border-2 border-gray-800 rounded-full"></div>
              <div class="absolute inset-0 border-2 border-transparent border-t-cyan rounded-full spinner"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <i class="fas fa-file-pdf text-lg text-cyan"></i>
              </div>
            </div>
            
            <h3 class="text-lg font-medium mb-1">변환 중</h3>
            <p id="progressPlatform" class="text-sm text-gray-500 mb-5"></p>
            
            <div class="relative h-2 bg-gray-900 rounded-full overflow-hidden mb-3">
              <div id="progressBar" class="absolute left-0 top-0 h-full progress-bar rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
            
            <p id="progressPercent" class="text-cyan font-mono">0%</p>
            <p id="progressStatus" class="text-xs text-gray-600 mt-1">준비 중...</p>
          </div>
          
          <!-- Completed -->
          <div id="completedState" class="text-center hidden">
            <div class="w-16 h-16 mx-auto mb-5 bg-green/10 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00E676" stroke-width="2.5">
                <path class="checkmark" d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <h3 class="text-lg font-medium mb-1 text-green">완료!</h3>
            <p id="completedInfo" class="text-sm text-gray-500 mb-5"></p>
            
            <button id="downloadBtn" class="w-full py-3 bg-green hover:bg-green-400 rounded-xl font-medium text-black transition-all mb-2">
              <i class="fas fa-download mr-2"></i>다운로드
            </button>
            
            <button id="newConvertBtn" class="w-full py-3 bg-gray-900 hover:bg-gray-800 rounded-xl text-gray-400 text-sm transition-all border border-gray-800">
              새로운 변환
            </button>
          </div>
          
          <!-- Error -->
          <div id="errorState" class="text-center hidden">
            <div class="w-16 h-16 mx-auto mb-5 bg-pink/10 rounded-full flex items-center justify-center">
              <i class="fas fa-times text-2xl text-pink"></i>
            </div>
            
            <h3 class="text-lg font-medium mb-1 text-pink">실패</h3>
            <p id="errorMessage" class="text-sm text-gray-500 mb-5"></p>
            
            <button id="retryBtn" class="w-full py-3 bg-gray-900 hover:bg-gray-800 rounded-xl font-medium transition-all border border-gray-800">
              <i class="fas fa-redo mr-2"></i>다시 시도
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Platforms Section -->
    <section id="platforms" class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-semibold mb-2">
            <span class="text-cyan">50개+</span> 플랫폼 지원
          </h2>
          <p class="text-sm text-gray-500">어떤 링크든 PDF로 변환</p>
        </div>
        
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" id="platformGrid"></div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section id="features" class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-semibold">주요 기능</h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="card-hover p-6 bg-black/50 rounded-xl">
            <div class="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-magic text-xl text-cyan"></i>
            </div>
            <h3 class="font-medium mb-2">자동 감지</h3>
            <p class="text-sm text-gray-500">플랫폼을 자동 인식하고 최적화된 방식으로 캡처합니다.</p>
          </div>
          
          <div class="card-hover p-6 bg-black/50 rounded-xl">
            <div class="w-12 h-12 bg-pink/10 rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-gem text-xl text-pink"></i>
            </div>
            <h3 class="font-medium mb-2">고품질 출력</h3>
            <p class="text-sm text-gray-500">300 DPI 고해상도로 인쇄 품질을 보장합니다.</p>
          </div>
          
          <div class="card-hover p-6 bg-black/50 rounded-xl">
            <div class="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-bolt text-xl text-green"></i>
            </div>
            <h3 class="font-medium mb-2">빠른 변환</h3>
            <p class="text-sm text-gray-500">최적화된 엔진으로 빠르게 변환합니다.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats -->
    <section class="py-16 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="grid grid-cols-4 gap-4 text-center">
          <div>
            <div class="text-3xl font-bold text-cyan mb-1">50+</div>
            <div class="text-xs text-gray-500">플랫폼</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-green mb-1">10x</div>
            <div class="text-xs text-gray-500">속도</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-purple mb-1">300</div>
            <div class="text-xs text-gray-500">DPI</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-pink mb-1">∞</div>
            <div class="text-xs text-gray-500">페이지</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="py-8 px-6 border-t border-gray-900">
      <div class="max-w-4xl mx-auto text-center">
        <div class="flex items-center justify-center gap-2 mb-2">
          <div class="w-6 h-6 bg-cyan rounded flex items-center justify-center">
            <i class="fas fa-file-pdf text-black text-xs"></i>
          </div>
          <span class="text-sm font-medium">AnyLinkPDF</span>
        </div>
        <p class="text-xs text-gray-600">© 2024 AnyLinkPDF</p>
      </div>
    </footer>
  </div>

  <script>
    const state = {
      url: '',
      platform: null,
      jobId: null,
      progress: 0,
      options: { viewMode: 'full', highQuality: true, multiPage: true, scrollCapture: false, waitInteractive: false }
    };
    
    const $ = id => document.getElementById(id);
    
    function loadPlatforms() {
      const platforms = [
        { icon: '🎨', name: 'Canva' },
        { icon: '🎯', name: 'Figma' },
        { icon: '📝', name: 'Notion' },
        { icon: '📊', name: 'Slides' },
        { icon: '🗺️', name: 'Miro' },
        { icon: '📸', name: 'Instagram' },
        { icon: '𝕏', name: 'Twitter' },
        { icon: '💼', name: 'LinkedIn' },
        { icon: '📰', name: 'Medium' },
        { icon: '💻', name: 'GitHub' },
        { icon: '🎬', name: 'YouTube' },
        { icon: '🌐', name: 'Web' },
      ];
      
      $('platformGrid').innerHTML = platforms.map(p => \`
        <div class="platform-badge p-4 bg-black/30 rounded-xl text-center cursor-pointer">
          <div class="text-2xl mb-2">\${p.icon}</div>
          <div class="text-xs text-gray-500">\${p.name}</div>
        </div>
      \`).join('');
    }
    
    function createConfetti() {
      const colors = ['#00E5E5', '#FF2D6A', '#00E676', '#9D7BFF'];
      for (let i = 0; i < 40; i++) {
        const el = document.createElement('div');
        el.className = 'confetti';
        el.style.left = Math.random() * 100 + '%';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.animationDelay = Math.random() * 0.5 + 's';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
      }
    }
    
    async function analyzeUrl(url) {
      if (!url || url.length < 10) {
        $('platformDetection').classList.add('hidden');
        $('convertBtn').disabled = true;
        return;
      }
      
      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url })
        });
        const data = await res.json();
        
        if (data.platform) {
          state.platform = data;
          state.url = url;
          
          $('platformIcon').textContent = data.icon;
          $('platformName').textContent = data.name;
          $('platformInfo').textContent = data.type === 'multi_page' 
            ? (data.estimatedPages > 0 ? data.estimatedPages + '페이지' : '다중 페이지')
            : data.type === 'scrollable' ? '스크롤 캡처' : data.type;
          
          $('platformDetection').classList.remove('hidden');
          $('convertBtn').disabled = false;
        }
      } catch (e) {}
    }
    
    async function startConversion() {
      if (!state.url || !state.platform) return;
      
      $('progressModal').classList.remove('hidden');
      $('processingState').classList.remove('hidden');
      $('completedState').classList.add('hidden');
      $('errorState').classList.add('hidden');
      
      $('progressBar').style.width = '0%';
      $('progressPercent').textContent = '0%';
      $('progressPlatform').textContent = state.platform.icon + ' ' + state.platform.name;
      
      try {
        const res = await fetch('/api/convert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: state.url, options: state.options })
        });
        const data = await res.json();
        state.jobId = data.jobId;
        pollProgress();
      } catch (e) {
        showError('변환 실패');
      }
    }
    
    async function pollProgress() {
      if (!state.jobId) return;
      const statuses = ['로딩 중...', '분석 중...', '캡처 중...', '생성 중...', '완료 중...'];
      
      const poll = async () => {
        try {
          const res = await fetch('/api/status/' + state.jobId);
          const data = await res.json();
          
          const progress = Math.min(data.progress, 100);
          $('progressBar').style.width = progress + '%';
          $('progressPercent').textContent = Math.round(progress) + '%';
          $('progressStatus').textContent = statuses[Math.min(Math.floor(progress / 25), 4)];
          
          if (data.status === 'completed') {
            $('processingState').classList.add('hidden');
            $('completedState').classList.remove('hidden');
            $('completedInfo').textContent = state.platform.name + ' PDF 생성 완료';
            createConfetti();
          } else if (data.status === 'error') {
            showError(data.error);
          } else {
            setTimeout(poll, 400);
          }
        } catch (e) {
          showError('오류 발생');
        }
      };
      poll();
    }
    
    function showError(msg) {
      $('processingState').classList.add('hidden');
      $('errorState').classList.remove('hidden');
      $('errorMessage').textContent = msg;
    }
    
    function closeModal() {
      $('progressModal').classList.add('hidden');
      state.jobId = null;
    }
    
    // Gemini API Key
    function updateApiKeyStatus() {
      const apiKey = $('geminiApiKey').value.trim();
      const status = $('apiKeyStatus');
      if (apiKey.length > 0) {
        if (apiKey.length >= 30) {
          status.innerHTML = '<i class="fas fa-check-circle mr-1 text-green"></i><span class="text-green">API 키 설정됨</span>';
          localStorage.setItem('gemini_api_key', apiKey);
        } else {
          status.innerHTML = '<i class="fas fa-exclamation-circle mr-1 text-pink"></i><span class="text-pink">유효하지 않은 키</span>';
        }
      } else {
        status.innerHTML = '<i class="fas fa-info-circle mr-1"></i>API 키가 필요합니다';
      }
    }
    
    $('geminiApiKey').addEventListener('input', updateApiKeyStatus);
    
    $('toggleApiKey').addEventListener('click', () => {
      const input = $('geminiApiKey');
      const icon = $('eyeIcon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
      } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
      }
    });
    
    // Load saved API key
    const savedApiKey = localStorage.getItem('gemini_api_key');
    if (savedApiKey) {
      $('geminiApiKey').value = savedApiKey;
      updateApiKeyStatus();
    }
    
    // Event listeners
    let timeout;
    $('urlInput').addEventListener('input', e => {
      clearTimeout(timeout);
      timeout = setTimeout(() => analyzeUrl(e.target.value), 400);
    });
    
    $('urlInput').addEventListener('paste', () => setTimeout(() => analyzeUrl($('urlInput').value), 50));
    
    $('pasteBtn').addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        $('urlInput').value = text;
        analyzeUrl(text);
      } catch (e) {}
    });
    
    $('convertBtn').addEventListener('click', startConversion);
    
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.view-mode-btn').forEach(b => {
          b.classList.remove('active');
          b.classList.add('text-gray-500');
        });
        btn.classList.add('active');
        btn.classList.remove('text-gray-500');
        state.options.viewMode = btn.dataset.mode;
      });
    });
    
    $('highQuality').addEventListener('change', e => state.options.highQuality = e.target.checked);
    $('multiPage').addEventListener('change', e => state.options.multiPage = e.target.checked);
    $('scrollCapture').addEventListener('change', e => state.options.scrollCapture = e.target.checked);
    $('waitInteractive').addEventListener('change', e => state.options.waitInteractive = e.target.checked);
    
    $('downloadBtn').addEventListener('click', async () => {
      if (!state.jobId) return;
      const res = await fetch('/api/download/' + state.jobId);
      const data = await res.json();
      alert('PDF: ' + data.filename);
    });
    
    $('newConvertBtn').addEventListener('click', () => {
      closeModal();
      $('urlInput').value = '';
      $('platformDetection').classList.add('hidden');
      $('convertBtn').disabled = true;
      state.url = '';
      state.platform = null;
    });
    
    $('retryBtn').addEventListener('click', () => {
      closeModal();
      if (state.url) startConversion();
    });
    
    $('progressModal').addEventListener('click', e => {
      if (e.target === $('progressModal') && $('processingState').classList.contains('hidden')) closeModal();
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
    
    loadPlatforms();
  </script>
</body>
</html>`
}
