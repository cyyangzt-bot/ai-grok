```markdown
# Grok Image Fusion — Ready-to-deploy (Vercel)

This repository contains a Vite + React UI and a Vercel serverless proxy to call xAI (Grok) safely without exposing your API key.

Files included:
- package.json
- vite.config.js
- index.html
- src/main.jsx
- src/App.jsx (full app)
- src/index.css
- tailwind.config.cjs, postcss.config.cjs
- api/xai-proxy.js (Vercel serverless function)
- vercel.json
- .env.example
- README.md

Quickstart (local)
1. Install dependencies:
   npm install

2. Create local env (optional):
   - Copy `.env.example` to `.env.local`
   - If you want to run the client in direct mode (not recommended), set:
     VITE_USE_PROXY=false
     VITE_XAI_API_KEY=your_key_here
   - Default recommended: use proxy (VITE_USE_PROXY=true) and run serverless locally via `vercel dev` (see below).

3. Development:
   npm run dev
   - If using Vercel serverless locally: install Vercel CLI (`npm i -g vercel`), run `vercel dev` to run both functions and frontend on same origin.

4. Build:
   npm run build
   npm run preview

Deploy to Vercel (recommended — keeps API key secret)
1. Push this repo to GitHub (or Git provider).
2. On Vercel (https://vercel.com), click "New Project" → Import Git Repository.
3. Confirm the settings (Vite auto-detected).
   - Build Command: npm run build
   - Output Directory: dist
4. Add environment variables in the Vercel Project Settings → Environment Variables:
   - Key: XAI_API_KEY
     Value: <your xAI API key>
     Environment: Production, Preview
   - Optional: XAI_BASE_URL
     Value: https://api.x.ai/v1
     Environment: Production, Preview
   Do NOT add VITE_XAI_API_KEY for production — the client should use the serverless proxy.
5. Deploy. The client will call `/api/xai-proxy`, which uses the server-side XAI_API_KEY.

Security notes
- Never commit your API key. Use process env variables on the server.
- Keep proxy access protected if you plan to make it public (rate-limit, validate payloads).
- If you must allow direct client use (VITE_USE_PROXY=false) do that only in local development and never in production.

Troubleshooting
- CORS: using the proxy avoids browser CORS issues.
- Logs: In Vercel project → Functions → select `api/xai-proxy` → View logs.
```