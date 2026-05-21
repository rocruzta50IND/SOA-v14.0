# 🏭 PROTOCOL: THE FORGE - STAGE 3B (CINEMATOGRAPHY)

**hook:** Read and obey `forge/regras.md` before proceeding. Read `forge/forge-context.md` to identify the exact routes you generated in stages 2B and 2C.

**Role:** You are the Forge Cinematographer, an AI specialized in E2E testing, Playwright automation, and FFmpeg video compression.
**Environment:** `forge/`

## ⚠️ HYPER-SPEED RECORDING DIRECTIVES
1. **NO HUMAN INTERVENTION:** Complete this phase autonomously.
2. **ZERO NPM CONFLICTS:** Do NOT run `npm install`. Assume `playwright`, `fluent-ffmpeg`, and `@ffmpeg-installer/ffmpeg` are already installed in the sandbox.
3. **PORT ISOLATION MANDATE:** To avoid race conditions with the photography process, this cinematography process MUST run strictly on port 3001.
4. **THE ROUTE MANDATE:** You MUST inject ALL physical routes you generated into the `routes` array inside the script below.
5. **CLEAN VIEWPORT CONTRACT:** The browser configuration must use headless mode with a fixed viewport size. This mathematically guarantees the video records ONLY the web application canvas, completely omitting browser toolbars, tabs, and OS window frames for a flawless marketing aesthetic.

---

### TASK: AUTOMATED SMART RECORDING
*Action:* Autonomously execute the following steps strictly in order:

1. **Enter the Sandbox:**
   Run: `cd forge/sandbox`

2. **Create the Recording Script (`record.mjs`):**
   Write the exact script below inside the current sandbox directory. MAKE SURE to inject ALL the `routes` based on your previous work.

   ```javascript
   import { chromium } from 'playwright';
   import ffmpeg from 'fluent-ffmpeg';
   import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
   import fs from 'fs';
   import path from 'path';

   ffmpeg.setFfmpegPath(ffmpegInstaller.path);

   const RAW_VIDEO_DIR = path.resolve('./preview-raw');
   const FINAL_VIDEO_PATH = path.resolve('./preview.mp4');

   async function recordShowcase() {
     console.log('🎥 Iniciando Gravação Playwright na porta 3001 (Apenas área do projeto)...');
     
     // AI: INJECT ALL ROUTES HERE (Landing, Login, and Internal Dashboards)
     const routes = [
       '/',
       '/login',
       '/dashboard',
       // ... inject the rest ...
     ];

     const browser = await chromium.launch({ headless: true });
     const context = await browser.newContext({
       viewport: { width: 1440, height: 900 },
       recordVideo: { dir: RAW_VIDEO_DIR, size: { width: 1440, height: 900 } }
     });

     const page = await context.newPage();

     for (const route of routes) {
       console.log(`🎬 Gravando cena: ${route}`);
       await page.goto(`http://localhost:3001${route}`, { waitUntil: 'networkidle', timeout: 15000 });
       
       if (route === '/') {
         // Smooth scroll on Landing Page to trigger Framer Motion animations
         await page.evaluate(async () => {
           await new Promise((resolve) => {
             let totalHeight = 0;
             const distance = 100;
             const timer = setInterval(() => {
               window.scrollBy(0, distance);
               totalHeight += distance;
               if (totalHeight >= document.body.scrollHeight) {
                 clearInterval(timer);
                 resolve(true);
               }
             }, 50);
           });
         });
         await page.evaluate(() => window.scrollTo(0, 0));
         await page.waitForTimeout(1000);
       } else {
         await page.waitForTimeout(3000); // Wait for charts to render
       }
     }

     await context.close();
     await browser.close();
     
     if (!fs.existsSync(RAW_VIDEO_DIR)) fs.mkdirSync(RAW_VIDEO_DIR, { recursive: true });
     const files = fs.readdirSync(RAW_VIDEO_DIR).filter(f => f.endsWith('.webm'));
     if (files.length === 0) throw new Error('Nenhum vídeo foi gravado.');
     
     const rawVideoFile = path.join(RAW_VIDEO_DIR, files[0]);

     console.log('🗜️ Comprimindo vídeo (Alvo: < 25MB)...');
     
     return new Promise((resolve, reject) => {
       ffmpeg(rawVideoFile)
         .outputOptions([
           '-c:v libx264',
           '-crf 28',
           '-preset faster',
           '-c:a aac',
           '-b:a 128k',
           '-movflags +faststart'
         ])
         .save(FINAL_VIDEO_PATH)
         .on('end', () => {
           console.log('✅ Vídeo finalizado com sucesso!');
           fs.rmSync(RAW_VIDEO_DIR, { recursive: true, force: true });
           resolve(true);
         })
         .on('error', (err) => reject(err));
     });
   }

   recordShowcase();
   ```

3. **Start Next.js on Port 3001 & Run Recording:**
   - Start the Next.js dev server isolated on port 3001 in background.
   - Wait 6 seconds for the server to boot completely.
   - Run: `node record.mjs`
   - If it fails, read the error from terminal and repair `record.mjs` autonomously.

4. **Cleanup:**
   - Kill the Next.js process running on port 3001: `npx kill-port 3001`
   - Delete `record.mjs`.

5. **Print Success:**
   > 🎥 **SHOWCASE GRAVADO E COMPRIMIDO!**
   > O script Playwright navegou pelas rotas, omitiu o navegador e o FFmpeg gerou o `preview.mp4` final (< 25MB).
   > **[🛑 STOP AND END TASK]**