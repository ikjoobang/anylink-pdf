# AnyLinkPDF - Universal Link to PDF Converter

## Project Overview
- **Name**: AnyLinkPDF
- **Goal**: 어떤 웹 링크든 고품질 PDF로 변환하는 서비스
- **Tech Stack**: Hono + TypeScript + TailwindCSS (Cloudflare Pages)

## URLs
- **Production**: https://anylink-pdf.pages.dev
- **Sandbox Preview**: https://3000-irgxzq1x875s9jxkfr9t8-5c13a017.sandbox.novita.ai
- **GitHub**: https://github.com/ikjoobang/anylink-pdf

## Features

### ✅ 완료된 기능
1. **AI 기반 링크 자동 분석**
   - URL 입력 시 플랫폼 자동 감지
   - 12개+ 플랫폼 지원 (Canva, Figma, Notion, Google Slides, Miro, Instagram, Twitter, LinkedIn, Medium, GitHub, YouTube, 일반 웹페이지)
   - 플랫폼별 최적 캡처 전략 자동 선택

2. **모던 UI/UX**
   - 사이버펑크 다크 테마 (Cyan, Pink, Green, Purple)
   - 플로팅 Orb 애니메이션
   - 그라데이션 글로우 효과
   - 부드러운 트랜지션
   - 반응형 레이아웃

3. **변환 옵션**
   - 뷰 모드 선택 (풀 페이지 / 모바일뷰 / 데스크탑뷰)
   - 고화질 300 DPI 출력
   - 다중 페이지 자동 감지
   - 스크롤 캡처 (긴 페이지)
   - 인터랙티브 요소 대기

4. **Gemini API 키 설정**
   - 사용자별 API 키 입력 필드
   - LocalStorage 저장으로 편의성 제공
   - 키 유효성 실시간 검증

5. **진행 상태 UI**
   - 실시간 진행률 표시
   - 애니메이션 프로그레스 바
   - 완료 시 confetti 효과
   - 에러 핸들링 UI

### 🚧 향후 구현 예정
1. 실제 PDF 변환 백엔드 (Puppeteer/Playwright 연동)
2. Cloudflare R2 파일 저장
3. 사용자 인증 시스템
4. 변환 이력 관리
5. Pro 플랜 결제 연동

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/analyze` | URL 분석 및 플랫폼 감지 |
| `POST` | `/api/convert` | PDF 변환 시작 |
| `GET` | `/api/status/:jobId` | 변환 진행 상태 조회 |
| `GET` | `/api/download/:jobId` | PDF 다운로드 |
| `GET` | `/api/platforms` | 지원 플랫폼 목록 |

### API 사용 예시

```bash
# URL 분석
curl -X POST https://anylink-pdf.pages.dev/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.canva.com/design/..."}'

# 응답
{
  "platform": "canva",
  "icon": "🎨",
  "type": "multi_page",
  "strategy": "page_navigation",
  "name": "Canva",
  "estimatedPages": 12
}
```

## Supported Platforms

| Platform | Icon | Capture Strategy |
|----------|------|------------------|
| Canva | 🎨 | Page Navigation |
| Figma | 🎯 | Frame Capture |
| Notion | 📝 | Infinite Scroll |
| Google Slides | 📊 | Slide Navigation |
| Miro | 🗺️ | Viewport Capture |
| Instagram | 📸 | Element Capture |
| Twitter/X | 🐦 | Thread Unfold |
| LinkedIn | 💼 | Element Capture |
| Medium | 📰 | Reader Mode |
| GitHub | 💻 | Syntax Highlight |
| YouTube | 🎬 | Thumbnail Capture |
| Generic | 🌐 | Full Page Scroll |

## Data Architecture

### Storage Services
- **현재**: In-memory Map (데모용)
- **Production 권장**: 
  - Cloudflare KV: 변환 작업 상태 저장
  - Cloudflare R2: PDF 파일 저장
  - Cloudflare D1: 사용자 데이터 및 이력

### Data Models

```typescript
// ConversionJob
{
  jobId: string;
  status: 'processing' | 'completed' | 'error';
  progress: number;
  url: string;
  platform: string;
  startedAt: string;
  completedAt?: string;
  pdfUrl?: string;
  error?: string;
}

// PlatformAnalysis
{
  platform: string;
  icon: string;
  type: string;
  strategy: string;
  name: string;
  color: string;
  estimatedPages?: number;
}
```

## User Guide

### 사용 방법
1. 웹사이트 접속 (https://anylink-pdf.pages.dev)
2. Gemini API 키 입력 (최초 1회)
3. 변환하고 싶은 웹 링크를 입력창에 붙여넣기
4. 플랫폼이 자동 감지되면 변환 옵션 선택
5. "PDF 변환" 버튼 클릭
6. 변환 완료 후 PDF 다운로드

### 지원되는 URL 형식
- `https://www.canva.com/design/...`
- `https://www.figma.com/file/...`
- `https://www.notion.so/...`
- `https://docs.google.com/presentation/...`
- `https://miro.com/app/board/...`
- 그 외 모든 웹페이지 URL

## Development

### 로컬 실행
```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 개발 서버 시작
npm run dev:sandbox
```

### 배포
```bash
# Cloudflare Pages 배포
npm run deploy
```

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx          # API 라우트 및 메인 엔트리
│   └── pages/
│       └── main.tsx       # 메인 페이지 HTML
├── public/                # 정적 파일
├── dist/                  # 빌드 출력
├── ecosystem.config.cjs   # PM2 설정
├── package.json
├── vite.config.ts
└── wrangler.jsonc
```

## Deployment
- **Platform**: Cloudflare Pages
- **Project Name**: anylink-pdf
- **Status**: ✅ Active
- **Last Updated**: 2024-12-23
