# YouLaw

Repositorio: **[github.com/JordanMRZ/YouLaw](https://github.com/JordanMRZ/YouLaw)**

**YouLaw** es una aplicación web de **inglés jurídico** para la facultad de Derecho virtual. Combina lecciones, evaluación CEFR y gamificación en **Vue 3** con el módulo didáctico **3D** (*You Law Game*) en la misma app. Las cuentas y la base de datos son las de **ATAV** (Firebase); YouLaw no registra usuarios ni contraseñas nuevas.

## Requisitos

| Componente | Requisito |
|------------|-----------|
| Node.js | **22.18+** o **24.12+** (`engines` en `package.json`) |
| npm | En la raíz del repo; `.npmrc` con `legacy-peer-deps` (React 19 + HugeIcons) |
| Navegador | Chrome, Edge, Firefox o Safari recientes; **WebGL** para Didáctico |
| Red | Internet (Firebase y carga inicial del juego 3D) |

## Inicio rápido

1. Clona el repositorio y entra en la carpeta donde está `package.json`.
2. Copia `.env.example` → `.env` y completa `VITE_FIREBASE_*` (misma configuración web que ATAV).
3. Ejecuta:

```sh
npm run dev
```

`predev` / `prebuild` ejecutan `scripts/ensure-deps.mjs`: si faltan paquetes tras un `git pull`, se lanza **`npm install`** antes de Vite.

Producción:

```sh
npm run build
npm run preview
```

## Acceso y roles (ATAV)

| Rol en Firestore (`usuarios`) | Acceso a YouLaw | Editor 3D (hub / niveles) |
|-------------------------------|-----------------|---------------------------|
| **Docente** | Sí | No |
| **Director** | Sí | Sí |
| Otros (p. ej. Estudiante) | No | — |

- **Usuario:** cédula (solo dígitos) + **contraseña** (la misma que en ATAV).
- Auth: `{cedula}@atav.com` en Firebase Authentication.
- Perfil: documento `usuarios/{cedula}`; si `requiereCambioPassword === true`, cambia la contraseña primero en ATAV.

Lógica: `src/services/authRoles.js`.

## Manual de usuario

Guía para docentes y directores (plataforma + juego 3D): **[docs/MANUAL-USUARIO.md](docs/MANUAL-USUARIO.md)**.

## Módulos de la aplicación

Navegación por secciones en `App.vue`:

| Sección | Descripción |
|---------|-------------|
| **Inicio** | Panel, nivel CEFR, ruta del día, estadísticas, racha |
| **Lecciones** | Biblioteca por nivel; ejercicios, vidas, celebraciones (racha de aciertos) |
| **Didáctico** | Juego 3D a pantalla casi completa (sidebar visible) |
| **Logros** | Metas y hábitos |

### Didáctico (You Law Game)

- Código: `src/interactive-game/`, montaje en `src/components/interactive/InteractiveGameHost.vue`.
- **Stack:** React 19, Three.js, React Three Fiber, Rapier, Zustand.
- **Hub:** mundos (planetas) → atmósfera → islas = niveles (catálogo ampliado; niveles 11–18 y más en `data/levels/`).
- **Desbloqueo:** mundos y niveles del 3D alineados con el **nivel CEFR** del docente (misma regla que la ruta de lecciones).
- Desarrollo activo solo en este repo (antes `JuegoDerecho` / YouLawGame).

## Progreso y persistencia

Al iniciar sesión: `setActiveProgressUser(cedula)` (`src/services/progressScope.js`).

| Dato | Dónde | Notas |
|------|--------|--------|
| Lecciones, diagnóstico, XP, vidas, racha diaria | `localStorage` | `youlaw_progress_v4_{cedula}`; ver `dailyStreak.js`, `useLearningProgress.js` |
| Save del juego 3D (caché local) | `localStorage` | `word-bridge-3d-save-v1_{cedula}` |
| Progreso didáctico en la cuenta | Firestore ATAV | Campo `youlawDidactic` en `usuarios/{cedula}`; sync en `didacticProgressService.js` (fusiona con local al entrar) |
| Perfil y rol | Firestore | `usuarios/{cedula}` |

Fachada para futura migración ampliada de progreso Vue: `youlawProgressService.js`.

## Arquitectura (resumen)

```
Vue 3 (shell) ── views, composables, services (auth, Firebase)
       │
       ├── Lecciones / logros / CEFR / racha
       └── Didáctico → interactive-game/ (React 3D, editor para Directores)
```

**Composables:** `useAuth`, `useLearningProgress`, `useDiagnosticAssessment`.

## Estructura del proyecto

```
src/
  views/                  # Inicio, Lecciones, Logros, Didáctico, Login
  components/             # UI, layout, lecciones (avatar, ejercicios, celebraciones)
  composables/
  services/               # auth, roles, didacticProgressService, dailyStreak, Firebase
  interactive-game/       # Juego 3D, editor, niveles, hub
  styles/                 # app.css, responsive.css
scripts/ensure-deps.mjs
docs/                     # MANUAL-USUARIO, planes ATAV e integración
```

## Documentación técnica adicional

- [Plan auth ATAV](docs/PLAN-auth-usuarios-atav.md)
- [Checklist datos ATAV](docs/CHECKLIST-datos-atav.md)
- [Integración del juego](docs/PLAN-integracion-juego-interactivo.md)
- [README del módulo 3D](src/interactive-game/README.md)

## Problemas frecuentes

**`Failed to resolve import "@hugeicons/core-free-icons"`**  
Ejecuta `npm run dev` desde la **raíz** del repo. Si persiste: borra `node_modules` y vuelve a arrancar.

**Didáctico en blanco o muy lento**  
Espera el loader del chunk WebGL; revisa la consola por errores de GPU.

## Licencia y autoría

Proyecto académico — equipo YouLaw / Universidad Santiago de Cali (ver documentación institucional).
