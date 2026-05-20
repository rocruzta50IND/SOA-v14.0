<div align="center">

<img src="https://img.icons8.com/fluency/96/artificial-intelligence.png" alt="AI Agent Icon" width="90"/>

<h1>🚀 SOA v13.0.0</h1>

<p><em>Multimodal Digital Twin & Agentic Architecture</em></p>

<p>
<strong>Framework de desenvolvimento autônomo operado por Inteligência Artificial focado em SaaS High-Ticket.</strong><br/>
Orquestração de Agentes IA • Memória Gêmea (Digital Twin) • Auto-Cura • UI Premium
</p>

<p>
<img src="https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js" alt="Next.js" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
<img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
<img src="https://img.shields.io/badge/Gemini_CLI-Driven-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white" alt="AI Driven" />
</p>

</div>

---

## 📖 Índice

1. [Visão Geral](#-visão-geral)
2. [A Filosofia SOA v13.0](#-a-filosofia-soa-v13)
3. [Pré-requisitos e Instalação do CLI](#-pré-requisitos-e-instalação-do-cli)
4. [O Fluxo de Execução (Passo a Passo)](#-o-fluxo-de-execução-passo-a-passo)
5. [A Frota de Agentes (Roles)](#-a-frota-de-agentes-roles)
6. [Estrutura de Diretórios](#-estrutura-de-diretórios)

---

## 🌌 Visão Geral

O **SOA v13.0.0 (Service-Oriented Agents)** não é apenas um boilerplate; é um **Sistema Operacional de Engenharia de Software operado por IA via CLI**. Utiliza uma abordagem de Múltiplos Agentes Especializados (Arquitetos, Desenvolvedores, QA, Auditores) que interagem no seu terminal para conceber, planejar, codar, testar e polir aplicações web modernas de forma autônoma.

A arquitetura base gerada pelo sistema é um **Monolito Modular** utilizando o que há de mais moderno no ecossistema web: Next.js 14+ (App Router), Prisma ORM com SQLite (foco local-first), Tailwind CSS e componentes Shadcn. Tudo orquestrado de forma a prevenir alucinações da IA através de uma topologia de diretórios chamada **Digital Twin**.

---

## 🧠 A Filosofia SOA v13.0

| Pilar | Descrição |
| :--- | :--- |
| 🧬 **Digital Twin** | A IA nunca lê arquivos de código-fonte inteiros. Consome exclusivamente os arquivos `summary.md` (A API Pública) e `context.md` salvos na pasta `.obsidian_vault`. Isso garante velocidade extrema e impede a "amnésia" da IA. |
| 🛡️ **Auto-Healing** | A cada modificação de código, a IA é obrigada a passar pelo compilador (`npm run typecheck`). Se o código quebrar, o CLI intercepta o erro e a IA conserta o problema autonomamente. |
| 🎨 **Templates Premium** | A Forja (The Forge) contém galerias de templates institucionais Premium (ex: *NeoVault Pro*). A IA ejeta uma interface gráfica complexa, com animações e Dark Mode nativo, integrada ao banco de dados em segundos. |
| 🚦 **Zero Trust Security** | O back-end é gerado estritamente através de React Server Actions isoladas. O sistema impõe o uso de validação de payload via Zod e bloqueio de queries sem isolamento de locatários (Tenant Ownership). |

---

## ⚙️ Pré-requisitos e Instalação do CLI

Para que o protocolo funcione de forma fluida e autônoma, utilizamos o **Gemini CLI**. Você **não precisa se preocupar em gerenciar chaves de API manualmente**; basta instalar o pacote global e autenticar diretamente com a sua conta do Google vinculada (que possua um plano compatível, como o Gemini Code Assist).

### 1. Ferramentas Base Necessárias
* **Node.js** (v18+ recomendado)
* **Git**

### 2. Instalação e Autenticação do Gemini CLI
Abra o seu terminal e execute o comando de instalação global via NPM:

~~~bash
npm install -g @google/gemini-cli
~~~

Após a instalação, inicie o processo de login para conectar a sua conta Google:

~~~bash
gemini auth
~~~

> 💡 **Nota:** Uma janela do seu navegador será aberta para autorização. Confirme o login. O CLI informará que está autenticado e detectará o seu plano automaticamente.

### 3. Clonando este Repositório Base
Baixe o "cérebro" do SOA v13.0 para a sua máquina:

~~~bash
git clone https://github.com/seu-usuario/soa-v13-with-templates.git meu-novo-saas
cd meu-novo-saas
~~~

---

## 🎯 O Fluxo de Execução (Passo a Passo)

O fluxo ocorre inteiramente no seu terminal. O uso da flag `--yolo` é fundamental, pois concede à IA autonomia para ler, criar, modificar arquivos e rodar comandos sem precisar da sua confirmação manual a cada etapa.

### Etapa 1: Preparação do Escopo e Infraestrutura
Na pasta raiz do repositório clonado (`meu-novo-saas`), siga a ordem exata:

**1. Inicie o CLI autônomo:**
~~~bash
gemini --yolo
~~~

**2. Invoque a Descoberta de Produto (Discovery):**
~~~text
Leia @.agent/skills/skill-product-discovery.md e inicie o processo de descoberta.
~~~
*(Responda às perguntas da IA no terminal. Ao final, ela criará o arquivo PRD.md).*

**3. Invoque o Arquiteto (Architect):**
~~~text
Leia @.agent/agents/architect-mvps/agent-architect-mvps.md e crie o Roadmap.
~~~

**4. Invoque o Engenheiro de Ambiente (Work Environment):**
~~~text
Leia @.agent/agents/environment/agent-work-environment.md e execute a montagem.
~~~
*(A IA criará a infraestrutura e fechará a Etapa 1).*

---

### Etapa 2: A Construção (O Loop de Código)
A Etapa 1 materializou o projeto físico numa nova pasta. Agora precisamos migrar a inteligência para este novo diretório.

**5. Acesse o Novo Projeto:** (Saia da sessão atual do CLI com `Ctrl+C`)
~~~bash
cd nome-da-pasta-do-projeto-gerado
~~~

**6. Reinicie o CLI autônomo no novo contexto:**
~~~bash
gemini --yolo
~~~

**7. Dê o Start na Fábrica de Código (Missão 01):**
~~~text
Desperte. Leia @.agent/instructions.md e @.agent/mission.md e inicie a execução do sistema.
~~~

> ♻️ **Dica de Ouro (Amnésia Tática):** Conforme a IA coda, ela pode começar a ficar lenta devido ao tamanho acumulado do contexto do chat. Ao final de cada missão importante, feche o CLI, reabra e mande o comando de *Start* (passo 7) novamente. O sistema não perde a memória, pois toda a inteligência está salva na pasta `.obsidian_vault`.

---

## 🤖 A Frota de Agentes (Roles)

Todos os cérebros especializados vivem na pasta `.agent/agents/`:

* 🧠 **Product Manager** (`skill-product-discovery.md`): Conduz a entrevista inicial e gera o PRD.
* 🏛️ **Arquiteto** (`agent-architect-mvps.md`): Lê o PRD, escolhe a estratégia e cria o `roadmap.md`.
* 🏗️ **Cirurgião Env** (`agent-work-environment.md`): O operário de infraestrutura via Node.js.
* 🛡️ **Guardião** (`guardian.md`): Audita tipos, impede código sujo, valida design e cobra auto-cura.
* 🧪 **QA Engineer** (`agent-qa.md`): Escreve e roda testes E2E com Playwright em modo "Spider".
* 🧹 **Janitor** (`agent-janitor.md`): Limpa o histórico inútil do Gêmeo Digital para economizar tokens.

---

## 📁 Estrutura de Diretórios

~~~text
soa-v13-with-templates/
├── .agent/                    # O Cérebro do Sistema Operacional
│   ├── agents/                # Protocolos e personas
│   ├── skills/                # Regras injetáveis (Design, Segurança)
│   ├── instructions.md        # Ativação da IA
│   ├── mission.md             # Fila de processamento atômico
│   └── roadmap.md             # Mapa global de macro-tarefas
│
├── .obsidian_vault/           # O "Digital Twin" (RAM da IA)
│   ├── 00-MASTER.md           # Mapa central da arquitetura
│   ├── 01-TRACKS.md           # Grafo de dependências e impactos
│   └── summary.md             # Contratos de API Pública
│
├── .templates/                # A Forja e Biblioteca Visual
│   ├── app/                   # Servidor local da Galeria HTML/CSS
│   ├── forge/                 # Ambiente estéril para layouts
│   └── templates-library/     # Mocks e templates High-Ticket
│
└── [Pasta do Projeto]         # Onde a mágica de montagem acontecerá
~~~

---

<p align="center">
  <b>SOA v13.0.0</b> • <i>Engenharia de Software Autônoma e Escalável.</i>
</p>