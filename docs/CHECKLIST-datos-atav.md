# Checklist: datos que necesitamos para conectar ATAV

Marca lo que puedas enviar (archivo, captura de Firebase Console o acceso al repo ATAV).

## 1. Configuración Firebase (cliente web)

Del proyecto Firebase que usa ATAV → Configuración del proyecto → Tus apps → SDK web:

- `apiKey`
- `authDomain`
- `projectId`
- `storageBucket`
- `messagingSenderId`
- `appId`

Formato preferido: archivo `.env` de ATAV (sin subir secretos de Admin) o pegar valores en `.env.local` de YouLaw con prefijo `VITE_`.

## 2. Cómo inicia sesión ATAV hoy

- [ ] Email + contraseña
- [ ] Google / Microsoft / otro proveedor
- [ ] Solo usuarios creados desde consola / Admin

YouLaw debe usar **el mismo método** para que las mismas cuentas funcionen.

## 3. Dónde vive el perfil en Firestore

Necesitamos la ruta exacta y campos, por ejemplo:

- Colección: `???` (ej. `usuarios`, `profesores`, `users`)
- ID del documento: ¿`uid` de Auth o otro?
- Campos para UI: nombre completo, rol, email, foto, `activo` / `habilitado`, etc.

Un export de **un documento de ejemplo** (datos anonimizados) o el fragmento del código ATAV que hace `getDoc` / `onSnapshot` del perfil.

## 4. Quién puede entrar a YouLaw

- [ ] Cualquier usuario de Auth del proyecto
- [ ] Solo quien tenga documento en Firestore
- [ ] Solo rol `profesor` / lista de roles (indicar valores exactos del campo)
- [ ] Custom Claims (`admin`, etc.)

## 5. Reglas de Firestore relevantes

Copia de reglas que permitan al usuario autenticado **leer su propio perfil** (y las colecciones `bilinguismo_*` si ya existen). Sin esto el login puede funcionar pero el nombre no cargará.

## 6. Entorno y despliegue

- URL donde corre ATAV hoy (ej. `https://atav....`)
- URL prevista de YouLaw (mismo dominio / subdominio / otro)
- ¿Proyecto Firebase de **producción** o también uno de **pruebas**?

## 7. Cuentas de prueba

2–3 usuarios (email + contraseña) que existan en Auth y en Firestore para validar login y nombre en sidebar.

## 8. Repo o ruta del código ATAV (opcional pero acelera mucho)

Ruta local tipo `C:\Jordan\...` o repo GitHub para copiar `firebase.js`, `useAuth` y la query del perfil sin adivinar nombres de colección.

---

**No necesitamos** (para la app web) la clave de cuenta de servicio Admin SDK en el frontend. Eso solo en backend/Cloud Functions si más adelante crean usuarios desde servidor.
