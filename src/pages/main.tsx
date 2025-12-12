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
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #1a1a2e;
    }
    ::-webkit-scrollbar-thumb {
      background: #4f46e5;
      border-radius: 4px;
    }
    
    /* Gradient backgrounds */
    .gradient-bg {
      background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .gradient-text-blue {
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* Animated gradient border */
    .gradient-border {
      position: relative;
      background: linear-gradient(135deg, #1e1e3f 0%, #2d2d5a 100%);
      border-radius: 24px;
    }
    .gradient-border::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #667eea);
      border-radius: 26px;
      z-index: -1;
      background-size: 300% 300%;
      animation: gradientMove 4s ease infinite;
    }
    
    @keyframes gradientMove {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Glow effects */
    .glow-purple {
      box-shadow: 0 0 40px rgba(139, 92, 246, 0.3),
                  0 0 80px rgba(139, 92, 246, 0.1);
    }
    
    .glow-blue {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.3),
                  0 0 80px rgba(59, 130, 246, 0.1);
    }
    
    /* Floating animation */
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }
    
    .float-animation {
      animation: float 6s ease-in-out infinite;
    }
    
    .float-animation-delayed {
      animation: float 6s ease-in-out infinite;
      animation-delay: -3s;
    }
    
    /* Pulse animation */
    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.4),
                    0 0 40px rgba(139, 92, 246, 0.2);
      }
      50% { 
        box-shadow: 0 0 40px rgba(139, 92, 246, 0.6),
                    0 0 80px rgba(139, 92, 246, 0.3);
      }
    }
    
    .pulse-glow {
      animation: pulse-glow 2s ease-in-out infinite;
    }
    
    /* Slide up animation */
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
    
    .slide-up-delay-1 { animation-delay: 0.1s; opacity: 0; }
    .slide-up-delay-2 { animation-delay: 0.2s; opacity: 0; }
    .slide-up-delay-3 { animation-delay: 0.3s; opacity: 0; }
    .slide-up-delay-4 { animation-delay: 0.4s; opacity: 0; }
    .slide-up-delay-5 { animation-delay: 0.5s; opacity: 0; }
    
    /* Platform badge hover */
    .platform-badge {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .platform-badge:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
    }
    
    /* Input focus glow */
    .input-glow:focus {
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3),
                  0 0 40px rgba(139, 92, 246, 0.2);
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
        transparent 30%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 70%
      );
      transform: rotate(45deg) translateX(-100%);
      transition: transform 0.6s ease;
    }
    .btn-shine:hover::after {
      transform: rotate(45deg) translateX(100%);
    }
    
    /* Progress bar animation */
    @keyframes progress-glow {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.3); }
    }
    
    .progress-glow {
      animation: progress-glow 1.5s ease-in-out infinite;
    }
    
    /* Spinner */
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .spinner {
      animation: spin 1s linear infinite;
    }
    
    /* Card hover effect */
    .card-hover {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .card-hover:hover {
      transform: translateY(-8px);
    }
    
    /* Particles background */
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
      width: 4px;
      height: 4px;
      background: rgba(139, 92, 246, 0.3);
      border-radius: 50%;
      animation: particleFloat 15s infinite ease-in-out;
    }
    
    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(100vh) translateX(0) scale(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
        transform: translateY(90vh) translateX(10px) scale(1);
      }
      90% {
        opacity: 1;
        transform: translateY(10vh) translateX(-10px) scale(1);
      }
      100% {
        transform: translateY(0vh) translateX(0) scale(0);
        opacity: 0;
      }
    }
    
    /* Option checkbox style */
    .option-checkbox {
      transition: all 0.3s ease;
    }
    .option-checkbox:hover {
      background: rgba(139, 92, 246, 0.1);
    }
    
    /* Detected platform animation */
    @keyframes detectPulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .detect-pulse {
      animation: detectPulse 0.5s ease-out;
    }
    
    /* Success checkmark animation */
    @keyframes checkmark {
      0% { 
        stroke-dashoffset: 100;
        opacity: 0;
      }
      100% { 
        stroke-dashoffset: 0;
        opacity: 1;
      }
    }
    
    .checkmark-animate {
      stroke-dasharray: 100;
      animation: checkmark 0.6s ease-out forwards;
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
      width: 10px;
      height: 10px;
      animation: confetti-fall 3s ease-out forwards;
      z-index: 1000;
    }
    
    /* View mode buttons */
    .view-mode-btn {
      transition: all 0.3s ease;
    }
    .view-mode-btn.active {
      background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
      color: white;
    }
    .view-mode-btn:not(.active):hover {
      background: rgba(139, 92, 246, 0.1);
    }
  </style>
</head>
<body class="gradient-bg min-h-screen text-white overflow-x-hidden">
  <!-- Particles Background -->
  <div class="particles" id="particles"></div>
  
  <!-- Main Container -->
  <div class="relative z-10 min-h-screen">
    <!-- Header -->
    <header class="py-6 px-4">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3 slide-up">
          <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            <i class="fas fa-file-pdf text-white"></i>
          </div>
          <span class="text-xl font-bold">AnyLink<span class="text-violet-400">PDF</span></span>
        </div>
        <nav class="flex items-center gap-6 slide-up slide-up-delay-1">
          <a href="#features" class="text-gray-400 hover:text-white transition-colors">기능</a>
          <a href="#platforms" class="text-gray-400 hover:text-white transition-colors">지원 플랫폼</a>
          <button class="px-4 py-2 bg-violet-600/20 border border-violet-500/30 rounded-lg hover:bg-violet-600/30 transition-all">
            <i class="fas fa-crown mr-2 text-yellow-400"></i>Pro
          </button>
        </nav>
      </div>
    </header>
    
    <!-- Hero Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Floating decorations -->
        <div class="absolute left-10 top-40 w-20 h-20 bg-violet-500/10 rounded-full blur-xl float-animation"></div>
        <div class="absolute right-10 top-60 w-32 h-32 bg-purple-500/10 rounded-full blur-xl float-animation-delayed"></div>
        
        <h1 class="text-5xl md:text-7xl font-black mb-6 slide-up">
          <span class="gradient-text">Any Link</span>
          <span class="text-white"> to </span>
          <span class="gradient-text-blue">PDF</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-400 mb-4 slide-up slide-up-delay-1">
          어떤 웹 링크든 <span class="text-violet-400 font-semibold">고품질 PDF</span>로 변환
        </p>
        
        <p class="text-gray-500 mb-12 slide-up slide-up-delay-2">
          Canva, Figma, Notion, Instagram, Twitter 등 50개+ 플랫폼 지원
        </p>
        
        <!-- Main Converter Card -->
        <div class="gradient-border glow-purple p-8 md:p-10 slide-up slide-up-delay-3">
          <!-- URL Input -->
          <div class="relative mb-6">
            <div class="absolute left-5 top-1/2 -translate-y-1/2 text-violet-400">
              <i class="fas fa-link text-xl"></i>
            </div>
            <input 
              type="url" 
              id="urlInput"
              placeholder="🔗 링크를 붙여넣으세요..."
              class="w-full px-14 py-5 bg-white/5 border-2 border-white/10 rounded-2xl text-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 input-glow transition-all"
            >
            <button 
              id="pasteBtn"
              class="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-violet-600/20 text-violet-400 rounded-lg hover:bg-violet-600/30 transition-all text-sm"
            >
              <i class="fas fa-paste mr-2"></i>붙여넣기
            </button>
          </div>
          
          <!-- URL Examples -->
          <div class="text-left text-sm text-gray-500 mb-6 pl-2">
            <p class="mb-1">예시:</p>
            <p class="text-gray-600">• canva.com/design/...</p>
            <p class="text-gray-600">• figma.com/proto/...</p>
            <p class="text-gray-600">• notion.so/page...</p>
          </div>
          
          <!-- Platform Detection -->
          <div id="platformDetection" class="hidden mb-6">
            <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/20 detect-pulse">
              <span id="platformIcon" class="text-3xl"></span>
              <div class="text-left">
                <div class="flex items-center gap-2">
                  <span class="text-sm text-violet-400">🤖 자동 감지:</span>
                  <span id="platformName" class="font-semibold text-white"></span>
                </div>
                <p id="platformInfo" class="text-sm text-gray-400"></p>
              </div>
            </div>
          </div>
          
          <!-- Conversion Options -->
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-4 text-left">
              <i class="fas fa-sliders text-violet-400"></i>
              <span class="text-gray-300 font-medium">변환 옵션</span>
            </div>
            
            <!-- View Mode Selection -->
            <div class="flex gap-2 mb-4 p-1 bg-white/5 rounded-xl">
              <button class="view-mode-btn flex-1 py-3 rounded-lg active" data-mode="full">
                <i class="fas fa-expand mr-2"></i>풀 페이지
              </button>
              <button class="view-mode-btn flex-1 py-3 rounded-lg text-gray-400" data-mode="mobile">
                <i class="fas fa-mobile-alt mr-2"></i>모바일뷰
              </button>
              <button class="view-mode-btn flex-1 py-3 rounded-lg text-gray-400" data-mode="desktop">
                <i class="fas fa-desktop mr-2"></i>데스크탑뷰
              </button>
            </div>
            
            <!-- Option Checkboxes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label class="option-checkbox flex items-center gap-3 p-3 bg-white/5 rounded-xl cursor-pointer">
                <input type="checkbox" id="highQuality" class="w-5 h-5 rounded accent-violet-500" checked>
                <span class="text-gray-300">고화질 (300 DPI)</span>
              </label>
              <label class="option-checkbox flex items-center gap-3 p-3 bg-white/5 rounded-xl cursor-pointer">
                <input type="checkbox" id="multiPage" class="w-5 h-5 rounded accent-violet-500" checked>
                <span class="text-gray-300">다중 페이지 자동 감지</span>
              </label>
              <label class="option-checkbox flex items-center gap-3 p-3 bg-white/5 rounded-xl cursor-pointer">
                <input type="checkbox" id="scrollCapture" class="w-5 h-5 rounded accent-violet-500">
                <span class="text-gray-300">스크롤 캡처 (긴 페이지)</span>
              </label>
              <label class="option-checkbox flex items-center gap-3 p-3 bg-white/5 rounded-xl cursor-pointer">
                <input type="checkbox" id="waitInteractive" class="w-5 h-5 rounded accent-violet-500">
                <span class="text-gray-300">인터랙티브 요소 대기</span>
              </label>
            </div>
          </div>
          
          <!-- Convert Button -->
          <button 
            id="convertBtn"
            class="w-full py-5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl text-lg font-bold hover:from-violet-500 hover:to-purple-500 transition-all btn-shine pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <i class="fas fa-rocket mr-3"></i>
            <span>PDF 변환 시작</span>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Progress Modal (Hidden by default) -->
    <div id="progressModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center hidden">
      <div class="gradient-border glow-blue p-8 max-w-md w-full mx-4">
        <div id="progressContent">
          <!-- Processing State -->
          <div id="processingState" class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 relative">
              <div class="absolute inset-0 border-4 border-violet-500/20 rounded-full"></div>
              <div class="absolute inset-0 border-4 border-transparent border-t-violet-500 rounded-full spinner"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <i class="fas fa-file-pdf text-2xl text-violet-400"></i>
              </div>
            </div>
            
            <h3 class="text-xl font-bold mb-2">변환 진행 중...</h3>
            <p id="progressPlatform" class="text-gray-400 mb-6"></p>
            
            <div class="relative h-3 bg-white/10 rounded-full overflow-hidden mb-3">
              <div 
                id="progressBar" 
                class="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full progress-glow transition-all duration-500"
                style="width: 0%"
              ></div>
            </div>
            
            <p id="progressPercent" class="text-violet-400 font-mono text-lg">0%</p>
            <p id="progressStatus" class="text-sm text-gray-500 mt-2">페이지 캡처 중...</p>
          </div>
          
          <!-- Completed State -->
          <div id="completedState" class="text-center hidden">
            <div class="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3">
                <path class="checkmark-animate" d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold mb-2 text-green-400">변환 완료!</h3>
            <p id="completedInfo" class="text-gray-400 mb-6"></p>
            
            <button 
              id="downloadBtn"
              class="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold hover:from-green-400 hover:to-emerald-400 transition-all btn-shine mb-3"
            >
              <i class="fas fa-download mr-2"></i>
              PDF 다운로드
            </button>
            
            <button 
              id="newConvertBtn"
              class="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all"
            >
              새로운 변환
            </button>
          </div>
          
          <!-- Error State -->
          <div id="errorState" class="text-center hidden">
            <div class="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <i class="fas fa-exclamation-triangle text-3xl text-red-400"></i>
            </div>
            
            <h3 class="text-xl font-bold mb-2 text-red-400">변환 실패</h3>
            <p id="errorMessage" class="text-gray-400 mb-6"></p>
            
            <button 
              id="retryBtn"
              class="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold hover:from-red-400 hover:to-orange-400 transition-all btn-shine"
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
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">50개+</span> 플랫폼 지원
          </h2>
          <p class="text-gray-400">어떤 링크든 PDF로 변환할 수 있습니다</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" id="platformGrid">
          <!-- Platforms will be dynamically loaded -->
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section id="features" class="py-20 px-4 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            왜 <span class="gradient-text">AnyLinkPDF</span>인가요?
          </h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card-hover p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div class="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <i class="fas fa-brain text-2xl text-violet-400"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">🤖 AI 자동 감지</h3>
            <p class="text-gray-400">링크만 붙여넣으면 플랫폼을 자동으로 인식하고 최적의 캡처 전략을 적용합니다.</p>
          </div>
          
          <div class="card-hover p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <i class="fas fa-gem text-2xl text-blue-400"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">✨ 고품질 출력</h3>
            <p class="text-gray-400">300 DPI 고해상도 PDF로 출력하여 인쇄용 품질을 보장합니다.</p>
          </div>
          
          <div class="card-hover p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div class="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
              <i class="fas fa-bolt text-2xl text-green-400"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">⚡ 빠른 변환</h3>
            <p class="text-gray-400">최적화된 엔진으로 수십 페이지도 빠르게 PDF로 변환합니다.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-6">
            <div class="text-3xl md:text-4xl font-black gradient-text mb-2">50+</div>
            <div class="text-gray-400">지원 플랫폼</div>
          </div>
          <div class="p-6">
            <div class="text-3xl md:text-4xl font-black gradient-text-blue mb-2">10배</div>
            <div class="text-gray-400">더 빠른 속도</div>
          </div>
          <div class="p-6">
            <div class="text-3xl md:text-4xl font-black gradient-text mb-2">300</div>
            <div class="text-gray-400">DPI 고화질</div>
          </div>
          <div class="p-6">
            <div class="text-3xl md:text-4xl font-black gradient-text-blue mb-2">∞</div>
            <div class="text-gray-400">페이지 지원</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="py-12 px-4 border-t border-white/10">
      <div class="max-w-6xl mx-auto text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-file-pdf text-white text-sm"></i>
          </div>
          <span class="text-lg font-bold">AnyLink<span class="text-violet-400">PDF</span></span>
        </div>
        <p class="text-gray-500 text-sm">
          © 2024 AnyLinkPDF. 어떤 링크든 PDF로.
        </p>
      </div>
    </footer>
  </div>

  <script>
    // ============ Application State ============
    const state = {
      url: '',
      platform: null,
      jobId: null,
      status: 'idle', // idle, analyzing, processing, completed, error
      progress: 0,
      options: {
        viewMode: 'full',
        highQuality: true,
        multiPage: true,
        scrollCapture: false,
        waitInteractive: false
      }
    };
    
    // ============ DOM Elements ============
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
    
    // ============ Create Particles ============
    function createParticles() {
      const container = document.getElementById('particles');
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        const colors = [
          'rgba(139, 92, 246, 0.3)',
          'rgba(168, 85, 247, 0.3)',
          'rgba(59, 130, 246, 0.3)',
          'rgba(236, 72, 153, 0.2)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        
        container.appendChild(particle);
      }
    }
    
    // ============ Create Confetti ============
    function createConfetti() {
      const colors = ['#8b5cf6', '#a855f7', '#ec4899', '#22c55e', '#3b82f6', '#fbbf24'];
      
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
      }
    }
    
    // ============ Load Platforms ============
    async function loadPlatforms() {
      const platforms = [
        { icon: '🎨', name: 'Canva', color: '#00C4CC' },
        { icon: '🎯', name: 'Figma', color: '#F24E1E' },
        { icon: '📝', name: 'Notion', color: '#000000' },
        { icon: '📊', name: 'Google Slides', color: '#FBBC04' },
        { icon: '🗺️', name: 'Miro', color: '#FFD02F' },
        { icon: '📸', name: 'Instagram', color: '#E4405F' },
        { icon: '🐦', name: 'Twitter/X', color: '#1DA1F2' },
        { icon: '💼', name: 'LinkedIn', color: '#0A66C2' },
        { icon: '📰', name: 'Medium', color: '#000000' },
        { icon: '💻', name: 'GitHub', color: '#181717' },
        { icon: '🎬', name: 'YouTube', color: '#FF0000' },
        { icon: '🌐', name: '웹페이지', color: '#6366F1' },
      ];
      
      platformGrid.innerHTML = platforms.map(p => \`
        <div class="platform-badge p-4 bg-white/5 border border-white/10 rounded-xl text-center">
          <div class="text-3xl mb-2">\${p.icon}</div>
          <div class="text-sm text-gray-300">\${p.name}</div>
        </div>
      \`).join('');
    }
    
    // ============ Analyze URL ============
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
          
          let infoText = '';
          if (data.type === 'multi_page') {
            infoText = data.estimatedPages > 0 ? \`약 \${data.estimatedPages}페이지 감지\` : '다중 페이지 문서';
          } else if (data.type === 'scrollable') {
            infoText = '스크롤 캡처 모드';
          } else if (data.type === 'interactive') {
            infoText = '인터랙티브 콘텐츠';
          } else {
            infoText = data.type;
          }
          platformInfo.textContent = infoText;
          
          platformDetection.classList.remove('hidden');
          platformDetection.classList.add('detect-pulse');
          setTimeout(() => platformDetection.classList.remove('detect-pulse'), 500);
          
          convertBtn.disabled = false;
        }
      } catch (error) {
        console.error('Analysis error:', error);
      }
    }
    
    // ============ Start Conversion ============
    async function startConversion() {
      if (!state.url || !state.platform) return;
      
      // Show modal
      progressModal.classList.remove('hidden');
      processingState.classList.remove('hidden');
      completedState.classList.add('hidden');
      errorState.classList.add('hidden');
      
      // Reset progress
      state.progress = 0;
      progressBar.style.width = '0%';
      progressPercent.textContent = '0%';
      progressPlatform.textContent = \`\${state.platform.icon} \${state.platform.name} 변환 중\`;
      
      try {
        // Start conversion
        const response = await fetch('/api/convert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: state.url,
            options: state.options
          })
        });
        
        const data = await response.json();
        state.jobId = data.jobId;
        
        // Poll for progress
        pollProgress();
        
      } catch (error) {
        showError('변환을 시작할 수 없습니다');
      }
    }
    
    // ============ Poll Progress ============
    async function pollProgress() {
      if (!state.jobId) return;
      
      const statuses = [
        '페이지 로딩 중...',
        '콘텐츠 분석 중...',
        '페이지 캡처 중...',
        'PDF 생성 중...',
        '최적화 중...'
      ];
      
      const poll = async () => {
        try {
          const response = await fetch(\`/api/status/\${state.jobId}\`);
          const data = await response.json();
          
          state.progress = Math.min(data.progress, 100);
          progressBar.style.width = state.progress + '%';
          progressPercent.textContent = Math.round(state.progress) + '%';
          
          const statusIndex = Math.floor(state.progress / 25);
          progressStatus.textContent = statuses[Math.min(statusIndex, statuses.length - 1)];
          
          if (data.status === 'completed') {
            showCompleted(data);
          } else if (data.status === 'error') {
            showError(data.error);
          } else {
            setTimeout(poll, 500);
          }
        } catch (error) {
          showError('진행 상태를 확인할 수 없습니다');
        }
      };
      
      poll();
    }
    
    // ============ Show Completed ============
    function showCompleted(data) {
      processingState.classList.add('hidden');
      completedState.classList.remove('hidden');
      
      document.getElementById('completedInfo').textContent = 
        \`\${state.platform.icon} \${state.platform.name}에서 PDF 생성 완료\`;
      
      createConfetti();
    }
    
    // ============ Show Error ============
    function showError(message) {
      processingState.classList.add('hidden');
      errorState.classList.remove('hidden');
      document.getElementById('errorMessage').textContent = message;
    }
    
    // ============ Close Modal ============
    function closeModal() {
      progressModal.classList.add('hidden');
      state.jobId = null;
    }
    
    // ============ Event Listeners ============
    
    // URL Input
    let analyzeTimeout;
    urlInput.addEventListener('input', (e) => {
      clearTimeout(analyzeTimeout);
      analyzeTimeout = setTimeout(() => analyzeUrl(e.target.value), 500);
    });
    
    urlInput.addEventListener('paste', (e) => {
      setTimeout(() => analyzeUrl(urlInput.value), 100);
    });
    
    // Paste Button
    pasteBtn.addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        urlInput.value = text;
        analyzeUrl(text);
      } catch (err) {
        console.error('Clipboard access denied');
      }
    });
    
    // Convert Button
    convertBtn.addEventListener('click', startConversion);
    
    // View Mode Buttons
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.view-mode-btn').forEach(b => {
          b.classList.remove('active');
          b.classList.add('text-gray-400');
        });
        btn.classList.add('active');
        btn.classList.remove('text-gray-400');
        state.options.viewMode = btn.dataset.mode;
      });
    });
    
    // Option Checkboxes
    document.getElementById('highQuality').addEventListener('change', (e) => {
      state.options.highQuality = e.target.checked;
    });
    document.getElementById('multiPage').addEventListener('change', (e) => {
      state.options.multiPage = e.target.checked;
    });
    document.getElementById('scrollCapture').addEventListener('change', (e) => {
      state.options.scrollCapture = e.target.checked;
    });
    document.getElementById('waitInteractive').addEventListener('change', (e) => {
      state.options.waitInteractive = e.target.checked;
    });
    
    // Download Button
    document.getElementById('downloadBtn').addEventListener('click', async () => {
      if (!state.jobId) return;
      
      // In real implementation, this would download the actual PDF
      // For demo, we show an alert
      const response = await fetch(\`/api/download/\${state.jobId}\`);
      const data = await response.json();
      
      alert(\`PDF 파일명: \${data.filename}\\n(실제 구현에서는 PDF가 다운로드됩니다)\`);
    });
    
    // New Convert Button
    document.getElementById('newConvertBtn').addEventListener('click', () => {
      closeModal();
      urlInput.value = '';
      platformDetection.classList.add('hidden');
      convertBtn.disabled = true;
      state.url = '';
      state.platform = null;
    });
    
    // Retry Button
    document.getElementById('retryBtn').addEventListener('click', () => {
      closeModal();
      if (state.url) {
        startConversion();
      }
    });
    
    // Close modal on backdrop click
    progressModal.addEventListener('click', (e) => {
      if (e.target === progressModal) {
        // Only close if completed or error
        if (!processingState.classList.contains('hidden')) return;
        closeModal();
      }
    });
    
    // ============ Initialize ============
    createParticles();
    loadPlatforms();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>
</body>
</html>`
}
