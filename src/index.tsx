import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { mainPage } from './pages/main'
import { settingsPage } from './pages/settings'

type Bindings = {
  GEMINI_API_KEY?: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS
app.use('/api/*', cors())

// ============ Link Analysis API ============
interface PlatformConfig {
  platform: string
  icon: string
  type: string
  strategy: string
  name: string
  color: string
}

const PLATFORM_PATTERNS: Record<string, PlatformConfig & { pattern: RegExp }> = {
  canva: {
    pattern: /canva\.com\/design\//,
    platform: 'canva',
    icon: '🎨',
    type: 'multi_page',
    strategy: 'page_navigation',
    name: 'Canva',
    color: '#00C4CC'
  },
  figma: {
    pattern: /figma\.com\/(file|proto)\//,
    platform: 'figma',
    icon: '🎯',
    type: 'interactive',
    strategy: 'frame_capture',
    name: 'Figma',
    color: '#F24E1E'
  },
  notion: {
    pattern: /notion\.(so|site)\//,
    platform: 'notion',
    icon: '📝',
    type: 'scrollable',
    strategy: 'infinite_scroll',
    name: 'Notion',
    color: '#000000'
  },
  google_slides: {
    pattern: /docs\.google\.com\/presentation\//,
    platform: 'google_slides',
    icon: '📊',
    type: 'multi_page',
    strategy: 'slide_navigation',
    name: 'Google Slides',
    color: '#FBBC04'
  },
  miro: {
    pattern: /miro\.com\/app\/board\//,
    platform: 'miro',
    icon: '🗺️',
    type: 'zoomable',
    strategy: 'viewport_capture',
    name: 'Miro',
    color: '#FFD02F'
  },
  instagram: {
    pattern: /instagram\.com\/(p|reel)\//,
    platform: 'instagram',
    icon: '📸',
    type: 'single_page',
    strategy: 'element_capture',
    name: 'Instagram',
    color: '#E4405F'
  },
  twitter: {
    pattern: /(twitter|x)\.com\/.+\/status\//,
    platform: 'twitter',
    icon: '🐦',
    type: 'thread',
    strategy: 'thread_unfold',
    name: 'Twitter/X',
    color: '#1DA1F2'
  },
  linkedin: {
    pattern: /linkedin\.com\/(posts|feed)\//,
    platform: 'linkedin',
    icon: '💼',
    type: 'single_page',
    strategy: 'element_capture',
    name: 'LinkedIn',
    color: '#0A66C2'
  },
  medium: {
    pattern: /medium\.com\//,
    platform: 'medium',
    icon: '📰',
    type: 'article',
    strategy: 'reader_mode',
    name: 'Medium',
    color: '#000000'
  },
  github: {
    pattern: /github\.com\/.+\/(blob|tree|readme)/i,
    platform: 'github',
    icon: '💻',
    type: 'code',
    strategy: 'syntax_highlight',
    name: 'GitHub',
    color: '#181717'
  },
  youtube: {
    pattern: /(youtube\.com\/watch|youtu\.be\/)/,
    platform: 'youtube',
    icon: '🎬',
    type: 'video',
    strategy: 'thumbnail_capture',
    name: 'YouTube',
    color: '#FF0000'
  }
}

function analyzeLink(url: string): PlatformConfig {
  for (const [, config] of Object.entries(PLATFORM_PATTERNS)) {
    if (config.pattern.test(url)) {
      return {
        platform: config.platform,
        icon: config.icon,
        type: config.type,
        strategy: config.strategy,
        name: config.name,
        color: config.color
      }
    }
  }
  
  return {
    platform: 'webpage',
    icon: '🌐',
    type: 'webpage',
    strategy: 'full_page_scroll',
    name: '웹페이지',
    color: '#6366F1'
  }
}

// ============ Health Check ============
app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'AnyLinkPDF'
  })
})

// ============ API Documentation ============
app.get('/api/docs', (c) => {
  return c.json({
    name: 'AnyLinkPDF API',
    version: '1.0.0',
    description: 'Universal Link to PDF Converter API',
    endpoints: [
      { method: 'GET', path: '/api/health', description: 'Health check' },
      { method: 'GET', path: '/api/docs', description: 'API documentation' },
      { method: 'POST', path: '/api/analyze', description: 'Analyze URL and detect platform' },
      { method: 'POST', path: '/api/convert', description: 'Start PDF conversion' },
      { method: 'GET', path: '/api/status/:jobId', description: 'Check conversion status' },
      { method: 'GET', path: '/api/download/:jobId', description: 'Download converted PDF' },
      { method: 'GET', path: '/api/platforms', description: 'List supported platforms' },
      { method: 'POST', path: '/api/settings', description: 'Save settings (Gemini API key)' },
      { method: 'GET', path: '/api/settings', description: 'Get settings status' }
    ]
  })
})

// API: Analyze link
app.post('/api/analyze', async (c) => {
  try {
    const { url } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }
    
    const analysis = analyzeLink(url)
    
    let estimatedPages = 1
    if (analysis.type === 'multi_page') {
      estimatedPages = Math.floor(Math.random() * 20) + 5
    } else if (analysis.type === 'scrollable') {
      estimatedPages = -1
    }
    
    return c.json({
      ...analysis,
      url,
      estimatedPages,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// Store for conversion jobs
const conversionJobs = new Map<string, {
  status: string
  progress: number
  url: string
  platform: string
  startedAt: string
  completedAt?: string
  pdfUrl?: string
  error?: string
}>()

// In-memory settings store (in production, use KV)
let settingsStore: { geminiApiKey?: string } = {}

// API: Save settings
app.post('/api/settings', async (c) => {
  try {
    const { geminiApiKey } = await c.req.json()
    
    if (geminiApiKey) {
      settingsStore.geminiApiKey = geminiApiKey
    }
    
    return c.json({
      success: true,
      message: 'Settings saved successfully',
      hasGeminiKey: !!settingsStore.geminiApiKey
    })
  } catch (error) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// API: Get settings status
app.get('/api/settings', (c) => {
  return c.json({
    hasGeminiKey: !!settingsStore.geminiApiKey,
    geminiKeyPreview: settingsStore.geminiApiKey 
      ? settingsStore.geminiApiKey.substring(0, 10) + '...' 
      : null
  })
})

// API: Start conversion
app.post('/api/convert', async (c) => {
  try {
    const { url, options } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }
    
    const analysis = analyzeLink(url)
    const jobId = `job_${Date.now()}_${Math.random().toString(36).substring(7)}`
    
    conversionJobs.set(jobId, {
      status: 'processing',
      progress: 0,
      url,
      platform: analysis.platform,
      startedAt: new Date().toISOString()
    })
    
    // Simulate conversion progress
    setTimeout(() => {
      const job = conversionJobs.get(jobId)
      if (job) {
        job.progress = 100
        job.status = 'completed'
        job.completedAt = new Date().toISOString()
        job.pdfUrl = `/api/download/${jobId}`
      }
    }, 3000)
    
    return c.json({
      jobId,
      status: 'processing',
      message: '변환이 시작되었습니다'
    })
  } catch (error) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// API: Check conversion status
app.get('/api/status/:jobId', async (c) => {
  const jobId = c.req.param('jobId')
  const job = conversionJobs.get(jobId)
  
  if (!job) {
    return c.json({ error: 'Job not found' }, 404)
  }
  
  if (job.status === 'processing' && job.progress < 100) {
    job.progress = Math.min(job.progress + Math.random() * 30, 99)
  }
  
  return c.json(job)
})

// API: Download PDF (simulated)
app.get('/api/download/:jobId', async (c) => {
  const jobId = c.req.param('jobId')
  const job = conversionJobs.get(jobId)
  
  if (!job || job.status !== 'completed') {
    return c.json({ error: 'PDF not ready' }, 404)
  }
  
  return c.json({
    message: 'PDF ready for download',
    filename: `${job.platform}_export_${Date.now()}.pdf`,
    url: job.url
  })
})

// API: Get supported platforms
app.get('/api/platforms', async (c) => {
  const platforms = Object.entries(PLATFORM_PATTERNS).map(([key, config]) => ({
    id: key,
    name: config.name,
    icon: config.icon,
    color: config.color,
    type: config.type
  }))
  
  platforms.push({
    id: 'webpage',
    name: '웹페이지',
    icon: '🌐',
    color: '#6366F1',
    type: 'webpage'
  })
  
  return c.json(platforms)
})

// ============ Pages ============

// Main page
app.get('/', (c) => {
  return c.html(mainPage())
})

// Settings/Admin page
app.get('/settings', (c) => {
  return c.html(settingsPage())
})

// Admin alias
app.get('/admin', (c) => {
  return c.redirect('/settings')
})

export default app
