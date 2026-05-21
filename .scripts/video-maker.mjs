import { spawn, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CAMINHOS ---
const SCRIPTS_DIR = __dirname;
const ROOT_DIR = path.join(SCRIPTS_DIR, '..');
const STUDIO_DIR = path.join(ROOT_DIR, '.studio');
const SANDBOX_DIR = path.join(STUDIO_DIR, 'sandbox');
const CONTEXT_FILE = path.join(STUDIO_DIR, 'studio-context.json');

// --- UTILITÁRIOS VISUAIS ---
const c = { reset: "\x1b[0m", cyan: "\x1b[36m", green: "\x1b[32m", yellow: "\x1b[33m", magenta: "\x1b[35m", gray: "\x1b[90m", bold: "\x1b[1m" };
const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function executeGeminiPhase(promptText, stepName, icon = '🤖') {
    return new Promise((resolve, reject) => {
        const isWindows = process.platform === 'win32';
        const cmdStr = isWindows ? 'gemini.cmd' : 'gemini';

        const child = spawn(`${cmdStr} --yolo`, {
            cwd: STUDIO_DIR,
            stdio: ['pipe', 'ignore', 'ignore'], 
            shell: true
        });

        child.stdin.write(promptText + '\n');
        child.stdin.end(); 

        let seconds = 0;
        let i = 0;
        
        const spinner = setInterval(() => {
            const frame = spinnerFrames[i % spinnerFrames.length];
            process.stdout.write(`\r${c.magenta}${frame}${c.reset} ${icon} ${stepName} ${c.gray}[${seconds}s]${c.reset}`);
            i++;
        }, 100);

        const timer = setInterval(() => { seconds++; }, 1000);

        child.on('close', (code) => {
            clearInterval(spinner);
            clearInterval(timer);
            process.stdout.write(`\r${c.green}✓${c.reset} ${icon} ${stepName} ${c.gray}[${seconds}s]${c.reset}\n`);
            resolve();
        });

        child.on('error', (err) => {
            clearInterval(spinner);
            clearInterval(timer);
            reject(err);
        });
    });
}

(async () => {
    const startTime = Date.now();
    console.clear();
    console.log(`${c.magenta}${c.bold}=============================================================${c.reset}`);
    console.log(`${c.magenta}${c.bold}🎬 AGÊNCIA DE VÍDEO v2.0 | ESTÚDIO AUTÔNOMO                  ${c.reset}`);
    console.log(`${c.magenta}${c.bold}=============================================================${c.reset}\n`);

    if (!fs.existsSync(CONTEXT_FILE)) {
        console.log(`${c.yellow}⚠️ Handshake não encontrado. O Auto-Forge rodou a fase 4 (Empacotar)?${c.reset}\n`);
        process.exit(1);
    }

    const context = JSON.parse(fs.readFileSync(CONTEXT_FILE, 'utf8'));
    console.log(`📥 Fonte Recebida: ${c.gray}${context.sourceDir}${c.reset}`);
    console.log(`🎯 Destino Final:  ${c.gray}${context.targetDir}${c.reset}\n`);

    try {
        console.log(`${c.cyan}⚙️  Preparando Ambiente da Agência (Isolado)...${c.reset}`);
        
        // 1. Limpa sandbox antiga e clona o código novo
        if (fs.existsSync(SANDBOX_DIR)) fs.rmSync(SANDBOX_DIR, { recursive: true, force: true });
        fs.cpSync(context.sourceDir, SANDBOX_DIR, { recursive: true });
        
        // 2. Instala dependências e mata porta residual
        console.log(`${c.gray}   Instalando dependências (Isso pode levar alguns segundos)...${c.reset}`);
        execSync('npm install', { cwd: SANDBOX_DIR, stdio: 'ignore' });
        try { execSync('npx kill-port 3005', { stdio: 'ignore' }); } catch(e) {}

        // 3. Sobe o Servidor na porta 3005 em Background
        console.log(`${c.gray}   Iniciando Next.js na porta 3005...${c.reset}`);
        const serverProcess = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'dev', '--', '-p', '3005'], {
            cwd: SANDBOX_DIR,
            stdio: 'ignore',
            detached: true
        });
        
        // Aguarda 10 segundos para o servidor respirar e compilar a primeira página
        await sleep(10000);
        console.log(`${c.green}✓ Ambiente pronto.${c.reset}\n`);

        // --- PIPELINE DE PRODUÇÃO ---
        const promptGravar = `Leia e EXECUTE o arquivo 1-gravar.md. Ele contém as instruções para o Playwright filmar o projeto que está rodando em http://localhost:3005.`;
        await executeGeminiPhase(promptGravar, 'Gravação de Ator (Playwright UI)', '🎥');

        const promptEditar = `Leia e EXECUTE o arquivo 2-editar.md. Aplique a pós-produção nos clipes gravados e envie para o destino estabelecido no Handshake.`;
        await executeGeminiPhase(promptEditar, 'Pós-Produção e Renderização (FFmpeg)', '🎞️');

        // --- CLEANUP ---
        console.log(`\n${c.cyan}🧹 Limpando o Estúdio e desligando servidores...${c.reset}`);
        try { execSync('npx kill-port 3005', { stdio: 'ignore' }); } catch(e) {}
        if (fs.existsSync(SANDBOX_DIR)) fs.rmSync(SANDBOX_DIR, { recursive: true, force: true });

        const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        process.stdout.write('\x07\x07'); 
        console.log(`\n${c.green}${c.bold}✨ EXPEDIENTE CONCLUÍDO!${c.reset}`);
        console.log(`⏱️  Tempo de Agência: ${c.bold}${mins > 0 ? `${mins}m ` : ''}${secs}s${c.reset}`);
        console.log(`📁 Verifique a pasta de Marketing para acessar a peça publicitária.\n`);

    } catch (error) {
        console.error(`\n${c.yellow}❌ Falha Crítica na Agência.${c.reset}`, error);
        try { execSync('npx kill-port 3005', { stdio: 'ignore' }); } catch(e) {}
    }
})();