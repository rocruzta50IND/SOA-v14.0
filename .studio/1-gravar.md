# 🎥 PROTOCOL: THE STUDIO - STAGE 1 (ACTOR RECORDING)

**Role:** Agency UX Cinematographer
**Environment:** `.studio/`

## ⚠️ CINEMATOGRAPHY DIRECTIVES
1. **NO HUMAN INTERVENTION:** Execute autonomously.
2. **THE UX CURSOR:** You MUST inject the visual cursor script to track Playwright's mouse movements. This is mandatory for agency-level marketing videos.
3. **DETERMINISTIC JOURNEY:** Do NOT use unpredictable loops. Follow the linear journey: Load -> Scroll -> Find Link -> Move Mouse -> Click -> Wait -> Scroll.
4. **DESTINATION:** Save `.webm` fragments strictly to `video/raw/`.

---

### TASK: AGENCY USER JOURNEY SIMULATION
*Action:* Autonomously execute the following steps strictly in order:

1. **Create the Recording Script (`actor.mjs`):**
   Write the exact code below inside `.studio/`.

   ```javascript
   import { chromium } from 'playwright';
   import fs from 'fs';
   import path from 'path';

   async function simulateUserJourney() {
     console.log('🎥 Iniciando Ator Virtual (Cursor Simulado)...');

     const targetDir = path.resolve('./video/raw');
     if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

     const browser = await chromium.launch({ headless: true });
     const context = await browser.newContext({
       viewport: { width: 1920, height: 1080 },
       recordVideo: { dir: targetDir, size: { width: 1920, height: 1080 } }
     });

     // INJEÇÃO DO CURSOR FANTASMA (UX Circle)
     await context.addInitScript(() => {
       document.addEventListener('DOMContentLoaded', () => {
         const cursor = document.createElement('div');
         cursor.id = 'agency-cursor';
         cursor.style.cssText = 'position:fixed;top:0;left:0;width:30px;height:30px;background:rgba(0, 0, 0, 0.2);border:2px solid rgba(255, 255, 255, 0.8);border-radius:50%;z-index:999999;pointer-events:none;transform:translate(-50%, -50%);transition: transform 0.15s ease-out, background 0.15s;box-shadow: 0 4px 6px rgba(0,0,0,0.1);backdrop-filter: blur(2px);';
         document.body.appendChild(cursor);
         
         document.addEventListener('mousemove', (e) => {
           cursor.style.left = e.clientX + 'px';
           cursor.style.top = e.clientY + 'px';
         });
         document.addEventListener('mousedown', () => { 
           cursor.style.background = 'rgba(0,0,0,0.5)'; 
           cursor.style.transform = 'translate(-50%, -50%) scale(0.7)'; 
         });
         document.addEventListener('mouseup', () => { 
           cursor.style.background = 'rgba(0,0,0,0.2)'; 
           cursor.style.transform = 'translate(-50%, -50%) scale(1)'; 
         });
       });
     });

     const page = await context.newPage();
     
     try {
       console.log('🎬 Ação: Carregando Home...');
       await page.goto('http://localhost:3005/', { waitUntil: 'networkidle', timeout: 30000 });
       await page.waitForTimeout(2000);

       // Mouse entra em cena (movimento curvo/suave)
       await page.mouse.move(500, 200, { steps: 20 });
       await page.waitForTimeout(500);

       console.log('🎬 Ação: Scroll Suave na Home...');
       await page.mouse.wheel(0, 800);
       await page.mouse.move(600, 500, { steps: 15 }); // Mouse acompanha
       await page.waitForTimeout(1500);
       
       await page.mouse.wheel(0, -800);
       await page.waitForTimeout(1000);

       // Tenta encontrar um link de navegação para clicar
       console.log('🎬 Ação: Caçando botão/link para navegação...');
       const link = await page.$('a[href="/dashboard"], a[href="/login"], header a, button.primary');
       
       if (link) {
         const box = await link.boundingBox();
         if (box) {
           const centerX = box.x + box.width / 2;
           const centerY = box.y + box.height / 2;
           
           // Desliza até o botão
           await page.mouse.move(centerX, centerY, { steps: 25 });
           await page.waitForTimeout(600); // Pausa de intencionalidade
           
           // Clica
           await page.mouse.click(centerX, centerY);
           console.log('👆 Clique simulado. Aguardando transição...');
           
           await page.waitForTimeout(3000); // Tempo para a página destino renderizar
           
           // Desliza na nova página
           await page.mouse.move(960, 540, { steps: 20 });
           await page.mouse.wheel(0, 400);
           await page.waitForTimeout(2000);
         }
       } else {
         console.log('⚠️ Nenhum link âncora claro encontrado. Focando na Home.');
         await page.mouse.move(960, 540, { steps: 20 });
         await page.waitForTimeout(2000);
       }

     } catch (err) {
       console.log('⚠️ Aviso na jornada do ator: ', err.message);
     }

     console.log('🛑 Corta! Finalizando cena.');
     await context.close();
     await browser.close();
   }

   simulateUserJourney();

2. **Run the Script:** Run `node actor.mjs`.
3. **Cleanup:** Delete `actor.mjs`.

4. **Print Success:**
   > 🎥 **ATUAÇÃO CONCLUÍDA!**
   > Os frames da jornada foram capturados em `video/raw/`.
   > **[🛑 STOP AND END TASK]**