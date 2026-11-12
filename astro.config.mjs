import { defineConfig } from 'astro/config';

// format:'file' → /privacy.html 등 기존 정책 URL을 그대로 유지(스토어에 등록돼 있을 수 있음)
export default defineConfig({
  build: { format: 'file', inlineStylesheets: 'always' },
});
