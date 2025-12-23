export function settingsPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Settings - AnyLinkPDF</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    * { font-family: 'Inter', sans-serif; }
    body { background: #000; }
    .text-cyan { color: #00E5E5; }
    .bg-cyan { background: #00E5E5; }
    .border-cyan { border-color: #00E5E5; }
    
    .glass-card {
      background: rgba(10, 15, 20, 0.95);
      border: 1px solid #333;
      border-radius: 16px;
    }
    
    .input-field {
      background: rgba(20, 25, 30, 0.9);
      border: 1px solid #333;
      transition: all 0.3s ease;
    }
    .input-field:focus {
      border-color: #00E5E5;
      box-shadow: 0 0 20px rgba(0, 229, 229, 0.2);
      outline: none;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #00E5E5, #00E676);
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(0, 229, 229, 0.4);
    }
    .btn-primary:disabled {
      opacity: 0.5;
      transform: none;
      box-shadow: none;
    }
    
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
    }
    .status-badge.success {
      background: rgba(0, 230, 118, 0.1);
      color: #00E676;
      border: 1px solid rgba(0, 230, 118, 0.3);
    }
    .status-badge.warning {
      background: rgba(255, 193, 7, 0.1);
      color: #FFC107;
      border: 1px solid rgba(255, 193, 7, 0.3);
    }
    .status-badge.error {
      background: rgba(255, 45, 106, 0.1);
      color: #FF2D6A;
      border: 1px solid rgba(255, 45, 106, 0.3);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in {
      animation: fadeIn 0.3s ease-out;
    }
  </style>
</head>
<body class="min-h-screen text-white p-6">
  <div class="max-w-2xl mx-auto">
    <!-- Header -->
    <header class="flex items-center justify-between mb-8">
      <a href="/" class="flex items-center gap-3">
        <div class="w-8 h-8 bg-cyan rounded-lg flex items-center justify-center">
          <i class="fas fa-file-pdf text-black text-sm"></i>
        </div>
        <span class="text-lg font-semibold">AnyLink<span class="text-cyan">PDF</span></span>
      </a>
      <a href="/" class="text-gray-400 hover:text-cyan transition-colors text-sm">
        <i class="fas fa-arrow-left mr-2"></i>메인으로
      </a>
    </header>
    
    <!-- Page Title -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold mb-2">설정</h1>
      <p class="text-gray-400 text-sm">API 키 및 서비스 설정을 관리합니다.</p>
    </div>
    
    <!-- Settings Cards -->
    <div class="space-y-6">
      
      <!-- Gemini API Key -->
      <div class="glass-card p-6">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-lg font-semibold flex items-center gap-2">
              <i class="fas fa-key text-cyan"></i>
              Gemini API Key
            </h2>
            <p class="text-gray-400 text-sm mt-1">Google Gemini API를 사용하여 고급 PDF 변환 기능을 활성화합니다.</p>
          </div>
          <span id="geminiStatus" class="status-badge warning">
            <i class="fas fa-circle text-xs"></i>
            미설정
          </span>
        </div>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-300 mb-2">API Key</label>
            <div class="relative">
              <input 
                type="password" 
                id="geminiApiKey"
                placeholder="AIza..."
                class="input-field w-full px-4 py-3 rounded-xl text-white placeholder-gray-500"
              >
              <button 
                id="toggleKeyVisibility"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan transition-colors"
              >
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>
          
          <div class="flex gap-3">
            <button 
              id="saveGeminiKey"
              class="btn-primary px-6 py-2.5 rounded-xl font-medium text-black"
            >
              <i class="fas fa-save mr-2"></i>저장
            </button>
            <button 
              id="testGeminiKey"
              class="px-6 py-2.5 rounded-xl font-medium bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <i class="fas fa-vial mr-2"></i>테스트
            </button>
          </div>
          
          <div id="geminiMessage" class="hidden text-sm p-3 rounded-lg"></div>
        </div>
      </div>
      
      <!-- Service Status -->
      <div class="glass-card p-6">
        <h2 class="text-lg font-semibold flex items-center gap-2 mb-4">
          <i class="fas fa-server text-cyan"></i>
          서비스 상태
        </h2>
        
        <div class="space-y-3" id="serviceStatus">
          <div class="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
            <span class="text-gray-300">API 서버</span>
            <span class="status-badge success">
              <i class="fas fa-circle text-xs"></i>
              정상
            </span>
          </div>
          <div class="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
            <span class="text-gray-300">PDF 변환 엔진</span>
            <span class="status-badge success">
              <i class="fas fa-circle text-xs"></i>
              정상
            </span>
          </div>
          <div class="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
            <span class="text-gray-300">Gemini AI</span>
            <span id="geminiServiceStatus" class="status-badge warning">
              <i class="fas fa-circle text-xs"></i>
              API 키 필요
            </span>
          </div>
        </div>
      </div>
      
      <!-- API Info -->
      <div class="glass-card p-6">
        <h2 class="text-lg font-semibold flex items-center gap-2 mb-4">
          <i class="fas fa-code text-cyan"></i>
          API 정보
        </h2>
        
        <div class="space-y-3 text-sm">
          <div class="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
            <span class="text-gray-400">API 문서</span>
            <a href="/api/docs" target="_blank" class="text-cyan hover:underline">/api/docs</a>
          </div>
          <div class="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
            <span class="text-gray-400">Health Check</span>
            <a href="/api/health" target="_blank" class="text-cyan hover:underline">/api/health</a>
          </div>
          <div class="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
            <span class="text-gray-400">지원 플랫폼</span>
            <a href="/api/platforms" target="_blank" class="text-cyan hover:underline">/api/platforms</a>
          </div>
        </div>
      </div>
      
      <!-- Version Info -->
      <div class="text-center text-gray-600 text-sm py-4">
        AnyLinkPDF v1.0.0 | © 2024
      </div>
      
    </div>
  </div>

  <script>
    const geminiApiKeyInput = document.getElementById('geminiApiKey');
    const geminiStatus = document.getElementById('geminiStatus');
    const geminiServiceStatus = document.getElementById('geminiServiceStatus');
    const geminiMessage = document.getElementById('geminiMessage');
    const toggleKeyVisibility = document.getElementById('toggleKeyVisibility');
    const saveGeminiKey = document.getElementById('saveGeminiKey');
    const testGeminiKey = document.getElementById('testGeminiKey');
    
    // Load current settings
    async function loadSettings() {
      try {
        const res = await fetch('/api/settings');
        const data = await res.json();
        
        if (data.hasGeminiKey) {
          geminiApiKeyInput.value = data.geminiKeyPreview || '';
          geminiApiKeyInput.placeholder = '••••••••••••••••';
          updateGeminiStatus('success', '설정됨');
        }
      } catch (e) {
        console.error('Failed to load settings:', e);
      }
    }
    
    // Update Gemini status badge
    function updateGeminiStatus(type, text) {
      geminiStatus.className = 'status-badge ' + type;
      geminiStatus.innerHTML = '<i class="fas fa-circle text-xs"></i>' + text;
      
      if (type === 'success') {
        geminiServiceStatus.className = 'status-badge success';
        geminiServiceStatus.innerHTML = '<i class="fas fa-circle text-xs"></i>연결됨';
      } else {
        geminiServiceStatus.className = 'status-badge warning';
        geminiServiceStatus.innerHTML = '<i class="fas fa-circle text-xs"></i>API 키 필요';
      }
    }
    
    // Show message
    function showMessage(type, text) {
      geminiMessage.className = 'text-sm p-3 rounded-lg fade-in ' + 
        (type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 
         type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/30' : 
         'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30');
      geminiMessage.textContent = text;
      geminiMessage.classList.remove('hidden');
      
      setTimeout(() => {
        geminiMessage.classList.add('hidden');
      }, 5000);
    }
    
    // Toggle password visibility
    toggleKeyVisibility.addEventListener('click', () => {
      const type = geminiApiKeyInput.type === 'password' ? 'text' : 'password';
      geminiApiKeyInput.type = type;
      toggleKeyVisibility.innerHTML = type === 'password' ? 
        '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
    
    // Save API key
    saveGeminiKey.addEventListener('click', async () => {
      const key = geminiApiKeyInput.value.trim();
      
      if (!key) {
        showMessage('error', 'API 키를 입력해주세요.');
        return;
      }
      
      saveGeminiKey.disabled = true;
      saveGeminiKey.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>저장 중...';
      
      try {
        const res = await fetch('/api/settings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ geminiApiKey: key })
        });
        
        const data = await res.json();
        
        if (data.success) {
          showMessage('success', 'API 키가 저장되었습니다.');
          updateGeminiStatus('success', '설정됨');
        } else {
          showMessage('error', '저장에 실패했습니다.');
        }
      } catch (e) {
        showMessage('error', '서버 연결에 실패했습니다.');
      } finally {
        saveGeminiKey.disabled = false;
        saveGeminiKey.innerHTML = '<i class="fas fa-save mr-2"></i>저장';
      }
    });
    
    // Test API key
    testGeminiKey.addEventListener('click', async () => {
      const key = geminiApiKeyInput.value.trim();
      
      if (!key) {
        showMessage('error', 'API 키를 입력해주세요.');
        return;
      }
      
      testGeminiKey.disabled = true;
      testGeminiKey.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>테스트 중...';
      
      try {
        // Test Gemini API
        const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key);
        
        if (res.ok) {
          showMessage('success', 'API 키가 유효합니다! 연결 성공.');
          updateGeminiStatus('success', '유효함');
        } else {
          const data = await res.json();
          showMessage('error', 'API 키가 유효하지 않습니다: ' + (data.error?.message || '알 수 없는 오류'));
          updateGeminiStatus('error', '유효하지 않음');
        }
      } catch (e) {
        showMessage('error', 'API 테스트 중 오류가 발생했습니다.');
      } finally {
        testGeminiKey.disabled = false;
        testGeminiKey.innerHTML = '<i class="fas fa-vial mr-2"></i>테스트';
      }
    });
    
    // Initialize
    loadSettings();
  </script>
</body>
</html>`
}
