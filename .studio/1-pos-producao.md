# 🎬 PROTOCOL: THE STUDIO - STAGE 1 (POST-PRODUCTION)

**Role:** Forge Video Editor & FFmpeg Specialist
**Environment:** `.studio/`

## ⚠️ CINEMATIC POST-PRODUCTION DIRECTIVES
1. **NO HUMAN INTERVENTION:** Complete this phase autonomously.
2. **THE HANDSHAKE RULE:** You MUST read the `studio-context.json` file inside the `.studio/` directory. This file contains the exact `targetDir` where the final video must be saved.
3. **CHRONOLOGICAL CONCATENATION:** Sort the raw `.webm` files inside `video/raw/` by creation time (`birthtimeMs`) to stitch scenes in the correct order.
4. **VISUAL POLISH:** Apply a `fade-in` filter for the first 1 second (`fade=t=in:st=0:d=1`) and encode to `.mp4` using `libx264` and `yuv420p` for strict Instagram/Reels compatibility.
5. **DEEP CLEANUP:** Delete the raw `.webm` files AND the `studio-context.json` file ONLY after a successful render to keep the studio pristine.

---

### TASK: AUTOMATED EDITING & COMPRESSION
*Action:* Autonomously execute the following steps strictly in order:

1. **Create the Editor Script (`editor.mjs`):**
   Write the script below inside the `.studio/` directory.

```javascript
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🎬 Iniciando Pós-Produção Cinematográfica...');

const STUDIO_DIR = path.resolve('./');
const RAW_DIR = path.join(STUDIO_DIR, 'video', 'raw');
const CONTEXT_FILE = path.join(STUDIO_DIR, 'studio-context.json');

// --- 1. Handshake (Leitura do Destino Determinístico) ---
if (!fs.existsSync(CONTEXT_FILE)) {
  console.error('❌ Falha no Handshake: studio-context.json não encontrado. A Forja empacotou corretamente?');
  process.exit(1);
}

const contextData = JSON.parse(fs.readFileSync(CONTEXT_FILE, 'utf8'));
const FINAL_DIR = contextData.targetDir;

if (!FINAL_DIR || !fs.existsSync(FINAL_DIR)) {
  console.error(\`❌ Diretório de destino inválido ou inexistente: \${FINAL_DIR}\`);
  process.exit(1);
}
console.log(\`🎯 Destino confirmado via Handshake: \${FINAL_DIR}\`);

// --- 2. Ingestão e Ordenação Cronológica ---
if (!fs.existsSync(RAW_DIR)) {
  console.error('❌ Pasta raw não encontrada.');
  process.exit(1);
}

const rawFiles = fs.readdirSync(RAW_DIR)
  .filter(f => f.endsWith('.webm'))
  .map(f => ({ name: f, time: fs.statSync(path.join(RAW_DIR, f)).birthtimeMs }))
  .sort((a, b) => a.time - b.time)
  .map(f => path.join(RAW_DIR, f.name).replace(/\\\\/g, '/')); // Barras pro FFmpeg no Windows

if (rawFiles.length === 0) {
  console.error('❌ Nenhum vídeo bruto encontrado na pasta raw.');
  process.exit(1);
}

// --- 3. Geração da Lista de Concatenação ---
const listPath = path.join(RAW_DIR, 'concat_list.txt').replace(/\\\\/g, '/');
const listContent = rawFiles.map(f => \`file '\${f}'\`).join('\\n');
fs.writeFileSync(listPath, listContent);

const finalVideo = path.join(FINAL_DIR, 'preview.mp4').replace(/\\\\/g, '/');
const ffmpegPath = ffmpegInstaller.path;

// --- 4. Renderização Brutal (Concat + Fade + Codec) ---
const cmd = \`"\${ffmpegPath}" -y -f concat -safe 0 -i "\${listPath}" -vf "fade=t=in:st=0:d=1" -c:v libx264 -crf 26 -preset fast -profile:v high -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "\${finalVideo}"\`;

try {
  console.log('⚙️ Processando o FFmpeg (Costura e Finalização)...');
  execSync(cmd, { stdio: 'inherit' });
  console.log('\\n✨ SUCESSO ABSOLUTO! Vídeo editado e entregue na pasta de Marketing.');

  // --- 5. Deep Cleanup (Apenas em caso de sucesso) ---
  for (const file of rawFiles) {
    if (fs.existsSync(file)) fs.unlinkSync(file);
  }
  console.log('🧹 Limpeza profunda concluída: Arquivos brutos descartados.');

} catch (error) {
  console.error('\\n❌ Erro Crítico no FFmpeg. Os arquivos brutos foram mantidos para análise.');
  process.exit(1);
} finally {
  // Limpeza tática do que não é mais necessário de qualquer forma
  if (fs.existsSync(listPath)) fs.unlinkSync(listPath);
  if (fs.existsSync(CONTEXT_FILE)) fs.unlinkSync(CONTEXT_FILE);
}
```

2. **Run the Script:** Run `node editor.mjs`.
3. **Cleanup:** Delete `editor.mjs` after execution.

4. **Print Success:**
   > 🎞️ **PÓS-PRODUÇÃO CONCLUÍDA!**
   > O contrato com a Forja foi cumprido, o `preview.mp4` está no repositório de Marketing e o Estúdio foi completamente higienizado.
   > **[🛑 STOP AND END TASK]**