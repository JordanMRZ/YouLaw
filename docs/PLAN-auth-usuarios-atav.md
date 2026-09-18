# Plan: login con usuarios ATAV (Firebase)

**Estado:** implementado (login cédula + Firebase, rol Docente).

## Objetivo

Quitar auth mock (`mockUsers` / `localStorage`). Solo pueden entrar usuarios que existan en el mismo **Firebase Authentication** y perfil **Firestore** que usa **ATAV**, mostrando nombre, rol y datos de perfil coherentes con ATAV.

## Implementación prevista (YouLaw)

1. `src/services/firebase.js` — `initializeApp` con config de entorno (`VITE_FIREBASE_*`).
2. `src/composables/useAuth.js` — `onAuthStateChanged`, `signInWithEmailAndPassword` (o el mismo método que ATAV).
3. Tras login, leer documento de perfil en Firestore (ruta acordada con ATAV) y mapear a `{ uid, name, role, email, initials }`.
4. `LoginView.vue` — solo login (sin registro local); mensajes de error alineados con Firebase.
5. Reglas: rechazar acceso si no hay documento de usuario / flag `activo` si ATAV lo usa.
6. `.env.example` + documentar variables; `.env` en `.gitignore` (ya está `*.local`).
7. Progreso local (`youlaw_progress`) asociar a `uid` cuando se migre a Firestore (`bilinguismo_progreso/{uid}`).

## Sesión compartida con ATAV (fase posterior)

Si YouLaw y ATAV comparten dominio o subdominio bajo el mismo `authDomain`, la sesión puede persistir sin segundo login. Si están en orígenes distintos, cada app tendrá su propio login con las mismas credenciales Firebase.

## Qué debe aportar el equipo (checklist)

Ver conversación / README; resumen en `docs/CHECKLIST-datos-atav.md`.
