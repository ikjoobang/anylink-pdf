import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-pages'
import { mainPage } from './pages/main'

type Bindings = {
  // Add your bindings here if needed
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic())

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
  
  // Generic webpage
  return {
    platform: 'webpage',
    icon: '🌐',
    type: 'webpage',
    strategy: 'full_page_scroll',
    name: '웹페이지',
    color: '#6366F1'
  }
}

// API: Analyze link
app.post('/api/analyze', async (c) => {
  try {
    const { url } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }
    
    const analysis = analyzeLink(url)
    
    // Estimate pages based on platform
    let estimatedPages = 1
    if (analysis.type === 'multi_page') {
      estimatedPages = Math.floor(Math.random() * 20) + 5 // Simulated
    } else if (analysis.type === 'scrollable') {
      estimatedPages = -1 // Indicates scroll-based capture
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

// Store for conversion jobs (in production, use D1 or KV)
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

// API: Start conversion
app.post('/api/convert', async (c) => {
  try {
    const { url, options } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }
    
    const analysis = analyzeLink(url)
    const jobId = `job_${Date.now()}_${Math.random().toString(36).substring(7)}`
    
    // Initialize job
    conversionJobs.set(jobId, {
      status: 'processing',
      progress: 0,
      url,
      platform: analysis.platform,
      startedAt: new Date().toISOString()
    })
    
    // Simulate conversion progress (in real app, this would be a background worker)
    // For demo purposes, we'll complete immediately with a simulated PDF URL
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
  
  // Simulate progress update
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
  
  // In real implementation, this would serve the actual PDF file
  // For demo, we return a message
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
  
  // Add generic webpage
  platforms.push({
    id: 'webpage',
    name: '웹페이지',
    icon: '🌐',
    color: '#6366F1',
    type: 'webpage'
  })
  
  return c.json(platforms)
})

// Main page
app.get('/', (c) => {
  return c.html(mainPage())
})

export default app
