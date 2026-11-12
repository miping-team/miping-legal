# 미핑(MiPing) · 약관 · 개인정보처리방침

미핑 앱의 개인정보처리방침·서비스 이용약관·아동 안전 정책 정적 사이트 (Astro, 흰 배경, CSS 모션).

| 경로 | 내용 |
| --- | --- |
| `/` | 정책 문서 목록 |
| `/privacy.html` | 개인정보처리방침 |
| `/terms.html` | 서비스 이용약관 |
| `/child-safety.html` | 아동 안전 정책 |

URL은 `build.format: 'file'`로 기존 `.html` 경로를 유지한다 (스토어 등록 URL 호환).

## 개발 · 배포 (Cloudflare Workers Static Assets)

```bash
npm install
npm run dev          # 로컬 미리보기
npm run build        # dist/ 생성
npx wrangler deploy  # 배포 (wrangler login 필요)
```

배포 주소: https://miping-legal.hotae0321.workers.dev

## 문의

miping333@gmail.com
