# YouLaw

Repositorio: **[github.com/JordanMRZ/YouLaw](https://github.com/JordanMRZ/YouLaw)**

Aplicación **YouLaw** — aprendizaje de inglés jurídico (Vue 3 + Vite). Los docentes entran con la **misma cédula y contraseña que en ATAV** (Firebase `atav-48646`, colección `usuarios`).

## Configuración

Copia `.env.example` a `.env` y completa las variables `VITE_FIREBASE_*` (misma config web que ATAV).

```sh
npm install
npm run dev
```

## Acceso

- Cédula (solo números) + contraseña.
- Auth: `{cedula}@atav.com` en Firebase Authentication.
- Solo usuarios con rol **Docente** en Firestore.

El primer registro de contraseña se hace en ATAV, no en YouLaw.

## Didáctico (juego 3D)

El juego **You Law Game** vive en `src/interactive-game/` y se abre desde el sidebar (**Didactico**), con el menú lateral siempre visible. El código fuente anterior estaba en `JuegoDerecho` / repo YouLawGame; el desarrollo activo es solo este repositorio.

```sh
npm run build
```
