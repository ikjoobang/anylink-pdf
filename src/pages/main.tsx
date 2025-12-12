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
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #09090b;
    }
    ::-webkit-scrollbar-thumb {
      background: #27272a;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #3f3f46;
    }
    
    /* Background - Pure dark with subtle noise texture feel */
    .gradient-bg {
      background: #09090b;
      position: relative;
    }
    .gradient-bg::before {
      content: '';
      position: fixed;
      inset: 0;
      background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent);
      pointer-events: none;
    }
    
    /* Primary gradient - Subtle indigo/white */
    .gradient-text {
      background: linear-gradient(135deg, #e4e4e7 0%, #a1a1aa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* Accent gradient - Soft indigo */
    .gradient-text-accent {
      background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* Card style - Glass morphism */
    .glass-card {
      background: rgba(24, 24, 27, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(63, 63, 70, 0.5);
      border-radius: 20px;
    }
    
    /* Animated gradient border - Minimal */
    .gradient-border {
      position: relative;
      background: rgba(24, 24, 27, 0.9);
      backdrop-filter: blur(20px);
      border-radius: 24px;
    }
    .gradient-border::before {
      content: '';
      position: absolute;
      inset: -1px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.5));
      border-radius: 25px;
      z-index: -1;
      background-size: 200% 200%;
      animation: gradientMove 6s ease infinite;
    }
    
    @keyframes gradientMove {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Subtle glow */
    .glow-subtle {
      box-shadow: 0 0 60px rgba(99, 102, 241, 0.1),
                  0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    
    /* Floating animation */
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    
    .float-animation {
      animation: float 8s ease-in-out infinite;
    }
    
    .float-animation-delayed {
      animation: float 8s ease-in-out infinite;
      animation-delay: -4s;
    }
    
    /* Pulse animation - Very subtle */
    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
      }
      50% { 
        box-shadow: 0 0 40px rgba(99, 102, 241, 0.25);
      }
    }
    
    .pulse-glow {
      animation: pulse-glow 3s ease-in-out infinite;
    }
    
    /* Slide up animation */
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .slide-up {
      animation: slideUp 0.6s ease-out forwards;
    }
    
    .slide-up-delay-1 { animation-delay: 0.1s; opacity: 0; }
    .slide-up-delay-2 { animation-delay: 0.2s; opacity: 0; }
    .slide-up-delay-3 { animation-delay: 0.3s; opacity: 0; }
    
    /* Platform badge hover */
    .platform-badge {
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .platform-badge:hover {
      transform: translateY(-2px);
      background: rgba(63, 63, 70, 0.5);
      border-color: rgba(99, 102, 241, 0.3);
    }
    
    /* Input focus */
    .input-glow:focus {
      border-color: rgba(99, 102, 241, 0.5);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    
    /* Button shine effect */
    .btn-shine {
      position: relative;
      overflow: hidden;
    }
    .btn-shine::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 40%,
        rgba(255, 255, 255, 0.05) 50%,
        transparent 60%
      );
      transform: rotate(45deg) translateX(-100%);
      transition: transform 0.5s ease;
    }
    .btn-shine:hover::after {
      transform: rotate(45deg) translateX(100%);
    }
    
    /* Progress bar */
    .progress-glow {
      animation: progress-glow 2s ease-in-out infinite;
    }
    
    @keyframes progress-glow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    
    /* Spinner */
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .spinner {
      animation: spin 1s linear infinite;
    }
    
    /* Card hover */
    .card-hover {
      transition: all 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 102, 241, 0.3);
    }
    
    /* Particles - Very subtle */
    .particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    }
    
    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(99, 102, 241, 0.3);
      border-radius: 50%;
      animation: particleFloat 20s infinite ease-in-out;
    }
    
    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(100vh) translateX(0) scale(0);
        opacity: 0;
      }
      10% {
        opacity: 0.5;
        transform: translateY(90vh) translateX(10px) scale(1);
      }
      90% {
        opacity: 0.5;
        transform: translateY(10vh) translateX(-10px) scale(1);
      }
      100% {
        transform: translateY(0vh) translateX(0) scale(0);
        opacity: 0;
      }
    }
    
    /* Option checkbox */
    .option-checkbox {
      transition: all 0.2s ease;
    }
    .option-checkbox:hover {
      background: rgba(63, 63, 70, 0.3);
    }
    
    /* Detect pulse */
    @keyframes detectPulse {
      0% { transform: scale(1); opacity: 0; }
      50% { transform: scale(1.02); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    
    .detect-pulse {
      animation: detectPulse 0.4s ease-out;
    }
    
    /* Checkmark */
    @keyframes checkmark {
      0% { stroke-dashoffset: 100; }
      100% { stroke-dashoffset: 0; }
    }
    
    .checkmark-animate {
      stroke-dasharray: 100;
      animation: checkmark 0.5s ease-out forwards;
    }
    
    /* Confetti */
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    
    .confetti {
      position: fixed;
      width: 8px;
      height: 8px;
      animation: confetti-fall 2.5s ease-out forwards;
      z-index: 1000;
    }
    
    /* View mode buttons */
    .view-mode-btn {
      transition: all 0.2s ease;
    }
    .view-mode-btn.active {
      background: rgba(99, 102, 241, 0.2);
      color: #a5b4fc;
      border-color: rgba(99, 102, 241, 0.3);
    }
    .view-mode-btn:not(.active):hover {
      background: rgba(63, 63, 70, 0.3);
    }
    
    /* Custom checkbox */
    input[type="checkbox"] {
      accent-color: #6366f1;
    }
  </style>
</head>
<body class="gradient-bg min-h-screen text-zinc-100 overflow-x-hidden">
  <!-- Particles Background -->
  <div class="particles" id="particles"></div>
  
  <!-- Main Container -->
  <div class="relative z-10 min-h-screen">
    <!-- Header -->
    <header class="py-6 px-4">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3 slide-up">
          <div class="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-file-pdf text-white text-sm"></i>
          </div>
          <span class="text-lg font-semibold text-zinc-100">AnyLink<span class="text-indigo-400">PDF</span></span>
        </div>
        <nav class="flex items-center gap-6 slide-up slide-up-delay-1">
          <a href="#features" class="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">기능</a>
          <a href="#platforms" class="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">플랫폼</a>
          <button class="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg hover:bg-zinc-800 transition-all text-sm text-zinc-400">
            <i class="fas fa-crown mr-1.5 text-amber-500 text-xs"></i>Pro
          </button>
        </nav>
      </div>
    </header>
    
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Floating decorations -->
        <div class="absolute left-20 top-40 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl float-animation"></div>
        <div class="absolute right-20 top-60 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl float-animation-delayed"></div>
        
        <h1 class="text-4xl md:text-6xl font-bold mb-6 slide-up tracking-tight">
          <span class="text-zinc-100">Any Link to </span>
          <span class="gradient-text-accent">PDF</span>
        </h1>
        
        <p class="text-lg text-zinc-400 mb-3 slide-up slide-up-delay-1">
          어떤 웹 링크든 고품질 PDF로 변환
        </p>
        
        <p class="text-sm text-zinc-600 mb-12 slide-up slide-up-delay-2">
          Canva • Figma • Notion • Instagram • Twitter 외 50개+ 플랫폼
        </p>
        
        <!-- Main Converter Card -->
        <div class="gradient-border glow-subtle p-6 md:p-8 slide-up slide-up-delay-3">
          <!-- URL Input -->
          <div class="relative mb-5">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
              <i class="fas fa-link"></i>
            </div>
            <input 
              type="url" 
              id="urlInput"
              placeholder="링크를 붙여넣으세요..."
              class="w-full px-11 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none input-glow transition-all"
            >
            <button 
              id="pasteBtn"
              class="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-800 text-zinc-400 rounded-lg hover:bg-zinc-700 hover:text-zinc-300 transition-all text-sm"
            >
              <i class="fas fa-paste mr-1.5"></i>붙여넣기
            </button>
          </div>
          
          <!-- URL Examples -->
          <div class="text-left text-xs text-zinc-600 mb-5 pl-1">
            <span>예: </span>
            <span class="text-zinc-500">canva.com/design/... • figma.com/proto/... • notion.so/...</span>
          </div>
          
          <!-- Platform Detection -->
          <div id="platformDetection" class="hidden mb-5">
            <div class="flex items-center gap-3 p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/10 detect-pulse">
              <span id="platformIcon" class="text-2xl"></span>
              <div class="text-left">
                <div class="flex items-center gap-2">
                  <span class="text-xs text-indigo-400">자동 감지</span>
                  <span id="platformName" class="font-medium text-zinc-200 text-sm"></span>
                </div>
                <p id="platformInfo" class="text-xs text-zinc-500"></p>
              </div>
            </div>
          </div>
          
          <!-- Conversion Options -->
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-3 text-left">
              <i class="fas fa-sliders text-zinc-500 text-xs"></i>
              <span class="text-zinc-400 text-sm">변환 옵션</span>
            </div>
            
            <!-- View Mode Selection -->
            <div class="flex gap-1.5 mb-3 p-1 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
              <button class="view-mode-btn flex-1 py-2 rounded-md text-sm border border-transparent active" data-mode="full">
                <i class="fas fa-expand mr-1.5 text-xs"></i>풀 페이지
              </button>
              <button class="view-mode-btn flex-1 py-2 rounded-md text-sm text-zinc-500 border border-transparent" data-mode="mobile">
                <i class="fas fa-mobile-alt mr-1.5 text-xs"></i>모바일
              </button>
              <button class="view-mode-btn flex-1 py-2 rounded-md text-sm text-zinc-500 border border-transparent" data-mode="desktop">
                <i class="fas fa-desktop mr-1.5 text-xs"></i>데스크탑
              </button>
            </div>
            
            <!-- Option Checkboxes -->
            <div class="grid grid-cols-2 gap-2">
              <label class="option-checkbox flex items-center gap-2.5 p-2.5 bg-zinc-900/30 rounded-lg cursor-pointer border border-zinc-800/30">
                <input type="checkbox" id="highQuality" class="w-4 h-4 rounded" checked>
                <span class="text-zinc-400 text-sm">고화질 (300 DPI)</span>
              </label>
              <label class="option-checkbox flex items-center gap-2.5 p-2.5 bg-zinc-900/30 rounded-lg cursor-pointer border border-zinc-800/30">
                <input type="checkbox" id="multiPage" class="w-4 h-4 rounded" checked>
                <span class="text-zinc-400 text-sm">다중 페이지 감지</span>
              </label>
              <label class="option-checkbox flex items-center gap-2.5 p-2.5 bg-zinc-900/30 rounded-lg cursor-pointer border border-zinc-800/30">
                <input type="checkbox" id="scrollCapture" class="w-4 h-4 rounded">
                <span class="text-zinc-400 text-sm">스크롤 캡처</span>
              </label>
              <label class="option-checkbox flex items-center gap-2.5 p-2.5 bg-zinc-900/30 rounded-lg cursor-pointer border border-zinc-800/30">
                <input type="checkbox" id="waitInteractive" class="w-4 h-4 rounded">
                <span class="text-zinc-400 text-sm">로딩 대기</span>
              </label>
            </div>
          </div>
          
          <!-- Convert Button -->
          <button 
            id="convertBtn"
            class="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-all btn-shine pulse-glow disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
            disabled
          >
            <i class="fas fa-arrow-right mr-2"></i>
            <span>PDF 변환</span>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Progress Modal -->
    <div id="progressModal" class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center hidden">
      <div class="glass-card p-8 max-w-sm w-full mx-4">
        <div id="progressContent">
          <!-- Processing State -->
          <div id="processingState" class="text-center">
            <div class="w-16 h-16 mx-auto mb-5 relative">
              <div class="absolute inset-0 border-2 border-zinc-800 rounded-full"></div>
              <div class="absolute inset-0 border-2 border-transparent border-t-indigo-500 rounded-full spinner"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <i class="fas fa-file-pdf text-lg text-indigo-400"></i>
              </div>
            </div>
            
            <h3 class="text-lg font-medium mb-1 text-zinc-100">변환 중</h3>
            <p id="progressPlatform" class="text-sm text-zinc-500 mb-5"></p>
            
            <div class="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
              <div 
                id="progressBar" 
                class="absolute left-0 top-0 h-full bg-indigo-500 rounded-full progress-glow transition-all duration-300"
                style="width: 0%"
              ></div>
            </div>
            
            <p id="progressPercent" class="text-indigo-400 font-mono text-sm">0%</p>
            <p id="progressStatus" class="text-xs text-zinc-600 mt-1">준비 중...</p>
          </div>
          
          <!-- Completed State -->
          <div id="completedState" class="text-center hidden">
            <div class="w-16 h-16 mx-auto mb-5 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
                <path class="checkmark-animate" d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <h3 class="text-lg font-medium mb-1 text-emerald-400">완료</h3>
            <p id="completedInfo" class="text-sm text-zinc-500 mb-5"></p>
            
            <button 
              id="downloadBtn"
              class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-medium transition-all btn-shine mb-2"
            >
              <i class="fas fa-download mr-2"></i>
              다운로드
            </button>
            
            <button 
              id="newConvertBtn"
              class="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-zinc-400 text-sm transition-all"
            >
              새로운 변환
            </button>
          </div>
          
          <!-- Error State -->
          <div id="errorState" class="text-center hidden">
            <div class="w-16 h-16 mx-auto mb-5 bg-red-500/10 rounded-full flex items-center justify-center">
              <i class="fas fa-times text-2xl text-red-400"></i>
            </div>
            
            <h3 class="text-lg font-medium mb-1 text-red-400">실패</h3>
            <p id="errorMessage" class="text-sm text-zinc-500 mb-5"></p>
            
            <button 
              id="retryBtn"
              class="w-full py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-medium transition-all"
            >
              <i class="fas fa-redo mr-2"></i>
              다시 시도
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Supported Platforms Section -->
    <section id="platforms" class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-semibold mb-2 text-zinc-100">
            지원 플랫폼
          </h2>
          <p class="text-sm text-zinc-500">50개 이상의 플랫폼에서 PDF 변환 가능</p>
        </div>
        
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2" id="platformGrid">
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section id="features" class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-semibold mb-2 text-zinc-100">
            주요 기능
          </h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="card-hover p-5 bg-zinc-900/50 border border-zinc-800/50 rounded-xl">
            <div class="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-3">
              <i class="fas fa-magic text-indigo-400"></i>
            </div>
            <h3 class="font-medium mb-1 text-zinc-200">자동 감지</h3>
            <p class="text-sm text-zinc-500">플랫폼을 자동 인식하고 최적의 캡처 방식을 적용합니다.</p>
          </div>
          
          <div class="card-hover p-5 bg-zinc-900/50 border border-zinc-800/50 rounded-xl">
            <div class="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center mb-3">
              <i class="fas fa-hd text-violet-400"></i>
            </div>
            <h3 class="font-medium mb-1 text-zinc-200">고품질 출력</h3>
            <p class="text-sm text-zinc-500">300 DPI 고해상도로 인쇄 품질을 보장합니다.</p>
          </div>
          
          <div class="card-hover p-5 bg-zinc-900/50 border border-zinc-800/50 rounded-xl">
            <div class="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-3">
              <i class="fas fa-bolt text-emerald-400"></i>
            </div>
            <h3 class="font-medium mb-1 text-zinc-200">빠른 변환</h3>
            <p class="text-sm text-zinc-500">최적화된 엔진으로 빠르게 변환합니다.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-16 px-4">
      <div class="max-w-3xl mx-auto">
        <div class="grid grid-cols-4 gap-4 text-center">
          <div class="p-4">
            <div class="text-2xl font-bold text-zinc-100 mb-1">50+</div>
            <div class="text-xs text-zinc-500">플랫폼</div>
          </div>
          <div class="p-4">
            <div class="text-2xl font-bold text-zinc-100 mb-1">10x</div>
            <div class="text-xs text-zinc-500">속도</div>
          </div>
          <div class="p-4">
            <div class="text-2xl font-bold text-zinc-100 mb-1">300</div>
            <div class="text-xs text-zinc-500">DPI</div>
          </div>
          <div class="p-4">
            <div class="text-2xl font-bold text-zinc-100 mb-1">∞</div>
            <div class="text-xs text-zinc-500">페이지</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-zinc-800/50">
      <div class="max-w-4xl mx-auto text-center">
        <div class="flex items-center justify-center gap-2 mb-2">
          <div class="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
            <i class="fas fa-file-pdf text-white text-xs"></i>
          </div>
          <span class="text-sm font-medium text-zinc-400">AnyLinkPDF</span>
        </div>
        <p class="text-xs text-zinc-600">
          © 2024 AnyLinkPDF
        </p>
      </div>
    </footer>
  </div>

  <script>
    const state = {
      url: '',
      platform: null,
      jobId: null,
      status: 'idle',
      progress: 0,
      options: {
        viewMode: 'full',
        highQuality: true,
        multiPage: true,
        scrollCapture: false,
        waitInteractive: false
      }
    };
    
    const urlInput = document.getElementById('urlInput');
    const pasteBtn = document.getElementById('pasteBtn');
    const convertBtn = document.getElementById('convertBtn');
    const platformDetection = document.getElementById('platformDetection');
    const platformIcon = document.getElementById('platformIcon');
    const platformName = document.getElementById('platformName');
    const platformInfo = document.getElementById('platformInfo');
    const progressModal = document.getElementById('progressModal');
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    const progressStatus = document.getElementById('progressStatus');
    const progressPlatform = document.getElementById('progressPlatform');
    const processingState = document.getElementById('processingState');
    const completedState = document.getElementById('completedState');
    const errorState = document.getElementById('errorState');
    const platformGrid = document.getElementById('platformGrid');
    
    function createParticles() {
      const container = document.getElementById('particles');
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        container.appendChild(particle);
      }
    }
    
    function createConfetti() {
      const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#10b981', '#3b82f6'];
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2500);
      }
    }
    
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
      
      platformGrid.innerHTML = platforms.map(p => \`
        <div class="platform-badge p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg text-center">
          <div class="text-xl mb-1">\${p.icon}</div>
          <div class="text-xs text-zinc-500">\${p.name}</div>
        </div>
      \`).join('');
    }
    
    async function analyzeUrl(url) {
      if (!url || url.length < 10) {
        platformDetection.classList.add('hidden');
        convertBtn.disabled = true;
        return;
      }
      
      try {
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url })
        });
        
        const data = await response.json();
        
        if (data.platform) {
          state.platform = data;
          state.url = url;
          
          platformIcon.textContent = data.icon;
          platformName.textContent = data.name;
          
          let infoText = data.type === 'multi_page' 
            ? (data.estimatedPages > 0 ? \`\${data.estimatedPages}페이지\` : '다중 페이지')
            : data.type === 'scrollable' ? '스크롤 캡처' : data.type;
          platformInfo.textContent = infoText;
          
          platformDetection.classList.remove('hidden');
          convertBtn.disabled = false;
        }
      } catch (error) {
        console.error('Analysis error:', error);
      }
    }
    
    async function startConversion() {
      if (!state.url || !state.platform) return;
      
      progressModal.classList.remove('hidden');
      processingState.classList.remove('hidden');
      completedState.classList.add('hidden');
      errorState.classList.add('hidden');
      
      state.progress = 0;
      progressBar.style.width = '0%';
      progressPercent.textContent = '0%';
      progressPlatform.textContent = \`\${state.platform.icon} \${state.platform.name}\`;
      
      try {
        const response = await fetch('/api/convert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: state.url, options: state.options })
        });
        
        const data = await response.json();
        state.jobId = data.jobId;
        pollProgress();
      } catch (error) {
        showError('변환 실패');
      }
    }
    
    async function pollProgress() {
      if (!state.jobId) return;
      
      const statuses = ['로딩 중...', '분석 중...', '캡처 중...', '생성 중...', '완료 중...'];
      
      const poll = async () => {
        try {
          const response = await fetch(\`/api/status/\${state.jobId}\`);
          const data = await response.json();
          
          state.progress = Math.min(data.progress, 100);
          progressBar.style.width = state.progress + '%';
          progressPercent.textContent = Math.round(state.progress) + '%';
          progressStatus.textContent = statuses[Math.min(Math.floor(state.progress / 25), 4)];
          
          if (data.status === 'completed') {
            showCompleted(data);
          } else if (data.status === 'error') {
            showError(data.error);
          } else {
            setTimeout(poll, 400);
          }
        } catch (error) {
          showError('오류 발생');
        }
      };
      
      poll();
    }
    
    function showCompleted(data) {
      processingState.classList.add('hidden');
      completedState.classList.remove('hidden');
      document.getElementById('completedInfo').textContent = \`\${state.platform.name} PDF 생성 완료\`;
      createConfetti();
    }
    
    function showError(message) {
      processingState.classList.add('hidden');
      errorState.classList.remove('hidden');
      document.getElementById('errorMessage').textContent = message;
    }
    
    function closeModal() {
      progressModal.classList.add('hidden');
      state.jobId = null;
    }
    
    let analyzeTimeout;
    urlInput.addEventListener('input', (e) => {
      clearTimeout(analyzeTimeout);
      analyzeTimeout = setTimeout(() => analyzeUrl(e.target.value), 400);
    });
    
    urlInput.addEventListener('paste', () => {
      setTimeout(() => analyzeUrl(urlInput.value), 50);
    });
    
    pasteBtn.addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        urlInput.value = text;
        analyzeUrl(text);
      } catch (err) {}
    });
    
    convertBtn.addEventListener('click', startConversion);
    
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.view-mode-btn').forEach(b => {
          b.classList.remove('active');
          b.classList.add('text-zinc-500');
        });
        btn.classList.add('active');
        btn.classList.remove('text-zinc-500');
        state.options.viewMode = btn.dataset.mode;
      });
    });
    
    document.getElementById('highQuality').addEventListener('change', (e) => state.options.highQuality = e.target.checked);
    document.getElementById('multiPage').addEventListener('change', (e) => state.options.multiPage = e.target.checked);
    document.getElementById('scrollCapture').addEventListener('change', (e) => state.options.scrollCapture = e.target.checked);
    document.getElementById('waitInteractive').addEventListener('change', (e) => state.options.waitInteractive = e.target.checked);
    
    document.getElementById('downloadBtn').addEventListener('click', async () => {
      if (!state.jobId) return;
      const response = await fetch(\`/api/download/\${state.jobId}\`);
      const data = await response.json();
      alert(\`PDF: \${data.filename}\`);
    });
    
    document.getElementById('newConvertBtn').addEventListener('click', () => {
      closeModal();
      urlInput.value = '';
      platformDetection.classList.add('hidden');
      convertBtn.disabled = true;
      state.url = '';
      state.platform = null;
    });
    
    document.getElementById('retryBtn').addEventListener('click', () => {
      closeModal();
      if (state.url) startConversion();
    });
    
    progressModal.addEventListener('click', (e) => {
      if (e.target === progressModal && processingState.classList.contains('hidden')) closeModal();
    });
    
    createParticles();
    loadPlatforms();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  </script>
</body>
</html>`
}
