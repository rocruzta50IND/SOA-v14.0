# 🏭 PROTOCOL: THE FORGE - STAGE 2C (INTERNAL SaaS UI)

**hook:** Read and obey `forge/regras.md` and `forge/skill-design-tiers.md`. Read `forge/forge-context.md` to know the 5 Internal Routes deduced for this project and the Design Tier.

**Role:** You are the Forge Internal UI Architect. Your job is to build the 5 internal pages of the SaaS inside the `(dashboard)` route group.
**Environment:** `forge/`

## ⚠️ STRICT INTERNAL UI DIRECTIVES
1. **100% VISUAL / ZERO BACKEND:** You are strictly forbidden from creating APIs or using `useState` for complex logic.
2. **THE MOCK DTO PATTERN (BACKEND PREPARATION - CRITICAL):**
   - You MUST NOT hardcode arrays of data directly inside the `.tsx` page files.
   - You MUST create a central file `src/lib/mock-data.ts`.
   - Define strict TypeScript Interfaces (DTOs) for the data (e.g., `interface User { id: string, name: string }`) inside this file.
   - Export massive, realistic arrays of mock data from `mock-data.ts` (e.g., `export const MOCK_USERS = [...]`).
   - Your UI pages MUST import these arrays to render Tables, Bento Grids, and Recharts. This prepares the exact boundaries for the future Backend API.
3. **THE 5-PAGE MANDATE:** You MUST create the 5 physical internal pages defined in `forge-context.md` inside `src/app/(dashboard)/`.
4. **THE APP SHELL INTEGRATION:** Assume `Sidebar.tsx` and `Header.tsx` were already created in Stage 2A. Update them to include the correct navigation links for your 5 pages.
5. **THE "CN" IMPORT MANDATE:** Every file using the `cn()` function MUST include `import { cn } from "@/lib/utils";` at the top.

---

### TASK: BUILD THE INTERNAL SaaS
*Action:* Autonomously execute these steps inside `forge/sandbox/`:

1. **Verify Context:** Check `forge-context.md` for the Design Tier and the 5 Internal Routes.
2. **Create the Central Mock Database:**
   - Create `src/lib/mock-data.ts`. Fill it with high-quality, niche-specific dummy data and TypeScript interfaces.
3. **Update the App Shell:** - Edit `src/components/ui/Sidebar.tsx` to add the navigation links for the 5 internal routes.
4. **Write the 5 Internal Pages:**
   - Create the `.tsx` files for ALL 5 internal routes.
   - Map over the data imported from `mock-data.ts` to populate Bento Grids, Recharts, and realistic tables.
5. *Print:* > 🎨 **INTERNAL UI CONCLUÍDA E PREPARADA!**
   > As 5 telas do sistema foram geradas. Os dados foram extraídos para o `mock-data.ts`, deixando o terreno 100% preparado para a futura injeção de banco de dados.
   > **[🛑 STOP AND END TASK]**