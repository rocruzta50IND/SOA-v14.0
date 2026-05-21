# 🏭 PROTOCOL: THE FORGE - STAGE 4 (EXTRACTION)

**hook:** Read and obey `forge/regras.md` before proceeding.

**Role:** You are the Forge Packager, an AI specialized in high-efficiency, surgical file system operations.
**Environment:** `forge/`

## ⚠️ TURBO EXTRACTION DIRECTIVES (ANTI-BLOAT & SPEED)
1. **NO DIRECTORY TRAVERSAL & NO INSPECTION:** You are STRICTLY FORBIDDEN from running commands like `ls`, `dir`, `pwd`, or `Get-ChildItem`. Do not waste time manually inspecting folders.
2. **ONE-SHOT SCRIPT:** Do NOT execute manual copy commands in the terminal one by one. You MUST write a single Node.js script (`extract.mjs`) to perform the entire extraction (Split Routing for Devs and Marketing), metadata generation, and cleanup in milliseconds.
3. **WINDOWS FILE LOCK BYPASS:** Windows blocks deletion of `sandbox` due to Next.js. The script must kill ports 3000 and 3001 before running deletion.

⚠️ NEVER modify, delete, or interact with the ".scripts" folder or any files outside of "forge/sandbox".

---

### TASK: TARGETED EXTRACTION (SPLIT ROUTING) & SANITIZATION
*Action:* Autonomously execute the following steps strictly in order:

1. **Enter the Forge:**
   Run: `cd forge` (if you are not already there).

2. **Read Target (Silently):**
   Read `forge-context.md` using your native file reading tool to extract:
   - Category
   - Theme Mode
   - Brand Name
   - Design Tier (Integer: 1, 2, or 3)

3. **Create the Extraction Script (`extract.mjs`):**
   Write the script below inside the `forge/` directory. **INJECT** the exact strings you deduced in step 2 into the variables at the top of the script. Do NOT use paths with slashes, just inject the plain names.

   ```javascript
   import fs from 'fs';
   import path from 'path';
   import { execSync } from 'child_process';

   // AI: INJECT THE REAL DATA HERE AS PLAIN STRINGS (NO SLASHES)
   const CATEGORY = '[INJECT_CATEGORY]'; 
   const THEME_MODE = '[INJECT_THEME_MODE]';
   const BRAND_NAME = '[INJECT_BRAND_NAME]';
   const TIER_NUM = [INJECT_TIER_NUMBER_INTEGER]; // Apenas o número (ex: 1, 2 ou 3)

   console.log('🚀 Iniciando Extração Turbo (Split Routing)...');

   // Resolve os caminhos a partir da raiz do repositório
   const rootPath = path.resolve('../'); 
   const devTargetPath = path.join(rootPath, '.templates', 'templates-library', CATEGORY, THEME_MODE, BRAND_NAME);
   const mktTargetPath = path.join(rootPath, '.mkt', 'mkt-instagram', CATEGORY, THEME_MODE, BRAND_NAME);

   if (!fs.existsSync(devTargetPath)) fs.mkdirSync(devTargetPath, { recursive: true });
   if (!fs.existsSync(mktTargetPath)) fs.mkdirSync(mktTargetPath, { recursive: true });

   // ==========================================
   // 1. ROTA DE DESENVOLVEDOR (Biblioteca)
   // ==========================================
   const itemsToCopy = ['src', '.obsidian_vault', 'preview', 'package.json', 'tailwind.config.ts', 'tsconfig.json'];
   
   for (const item of itemsToCopy) {
     const srcPath = path.join('sandbox', item);
     const destPath = path.join(devTargetPath, item);
     if (fs.existsSync(srcPath)) {
       fs.cpSync(srcPath, destPath, { recursive: true });
     }
   }

   if (fs.existsSync('sandbox/postcss.config.js')) fs.cpSync('sandbox/postcss.config.js', path.join(devTargetPath, 'postcss.config.js'));
   if (fs.existsSync('sandbox/postcss.config.mjs')) fs.cpSync('sandbox/postcss.config.mjs', path.join(devTargetPath, 'postcss.config.mjs'));

   // ==========================================
   // 2. ROTA DE MARKETING (Ativos)
   // ==========================================
   // Copia a pasta de imagens para o marketing
   const previewSrc = path.join('sandbox', 'preview');
   if (fs.existsSync(previewSrc)) {
     fs.cpSync(previewSrc, path.join(mktTargetPath, 'preview'), { recursive: true });
   }

   // Copia O VÍDEO APENAS para o marketing
   const videoSrc = path.join('sandbox', 'preview.mp4');
   if (fs.existsSync(videoSrc)) {
     fs.cpSync(videoSrc, path.join(mktTargetPath, 'preview.mp4'));
   }

   // ==========================================
   // 3. GERAÇÃO DE METADADOS (Compartilhado)
   // ==========================================
   const templateData = JSON.stringify({
     name: BRAND_NAME,
     description: "Premium visual layout created automatically by the Forge.",
     tier: TIER_NUM
   }, null, 2);

   fs.writeFileSync(path.join(devTargetPath, 'template.json'), templateData);
   fs.writeFileSync(path.join(mktTargetPath, 'template.json'), templateData);

   console.log('✅ Split Routing concluído. Iniciando Nuke da Sandbox...');

   // Morte de Processos Fantasmas (Cobre as duas portas usadas no paralelismo)
   try { execSync('npx kill-port 3000 3001', { stdio: 'ignore' }); } catch(e) {}
   
   // Nuke nativo (não usa dependências externas para evitar falhas no Windows)
   if (fs.existsSync('sandbox')) {
       fs.rmSync('sandbox', { recursive: true, force: true });
   }
   if (fs.existsSync('forge-context.md')) {
       fs.unlinkSync('forge-context.md');
   }

   console.log('🎉 Forja limpa e ativos empacotados com sucesso!');
   ```

4. **Execute and Cleanup:**
   - Run: `node extract.mjs`
   - Run this specific command to safely delete the script in Windows/Linux without terminal conflicts: `node -e "require('fs').unlinkSync('extract.mjs')"`

5. *Print:* > ✅ **EXTRAÇÃO CIRÚRGICA TURBO CONCLUÍDA!**
   > O Split Routing separou os arquivos perfeitamente entre `.templates` e `.mkt`. Processos fantasmas encerrados e Forja implodida com sucesso!
**[🛑 STOP AND END TASK]**