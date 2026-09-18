# Plan: integrar YouLawGame en YouLaw (pendiente)

**Estado:** implementado — sección sidebar **Didactico**, código en `src/interactive-game/`.

## Objetivo

Un solo repositorio **YouLaw**: sidebar con sección corta (**「Interactivo」** o **「Juego」**) que monta el juego 3D (hoy en `JuegoDerecho` / repo **YouLawGame**) dentro de la app Vue, sin iframe a otro puerto.

## Enfoque técnico

- Copiar código del juego a `src/interactive-game/` (React + TS + R3F/Rapier).
- Vite: `@vitejs/plugin-vue` + `@vitejs/plugin-react`, `tsconfig` solo para esa carpeta.
- Vista Vue `InteractiveLearningView.vue` + `InteractiveGameHost.vue` que hace `mount` / `unmount` del root React al entrar/salir.
- Carga diferida (`import()`) del módulo del juego para no inflar el bundle inicial.
- Renombrar `.app-shell` del juego → `.game-shell` (evitar choque con YouLaw).
- Routing explícito en `App.vue` (no `v-else` genérico a Logros): Inicio | Lecciones | Interactivo | Logros.
- Layout: en Interactivo, área casi a pantalla completa; TopBar de lecciones opcionalmente oculto.
- Progreso del juego: mantener `word-bridge-3d-save-v1` al principio; luego `setSaveAdapter` + Firestore por `uid` ATAV.

## Fases

1. Tooling y build verde en monorepo.
2. Embed funcional en localhost.
3. Sidebar + layout + lazy load.
4. Puente `uid` / nivel CEFR desde YouLaw al juego (opcional).
5. Archivar o redirigir repo **YouLawGame**.

## Decisiones pendientes (al retomar)

- ¿Editor de niveles visible en producción o solo dev?
- ¿XP/logros unificados con lecciones en la misma iteración?
