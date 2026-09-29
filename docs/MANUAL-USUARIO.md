# Manual de usuario — YouLaw

YouLaw es una plataforma web de **inglés jurídico** para docentes. Combina:

1. **Plataforma de lecciones** (evaluación, ruta por nivel CEFR, ejercicios en pantalla).
2. **Módulo didáctico 3D** (*You Law Game*): recorrido en tercera persona donde la respuesta correcta es el camino que eliges al caminar.

Este documento está pensado para **docentes y directores** con cuenta ATAV. Los detalles técnicos del repositorio están en el [README](../README.md).

---

## Tabla de contenidos

1. [Requisitos y acceso](#1-requisitos-y-acceso)
2. [Parte A — Plataforma web](#parte-a--plataforma-web)
3. [Parte B — Módulo didáctico 3D (You Law Game)](#parte-b--módulo-didáctico-3d-you-law-game)
4. [Progreso y datos](#4-progreso-y-datos)
5. [Solución de problemas](#5-solución-de-problemas)
6. [Referencia rápida de controles (juego 3D)](#6-referencia-rápida-de-controles-juego-3d)

---

## 1. Requisitos y acceso

### Navegador

- Navegador moderno (Chrome, Edge, Firefox o Safari reciente).
- JavaScript activado.
- Para el módulo 3D: conexión estable la primera vez (carga escena WebGL); después gran parte del progreso es local.

### Cuenta

| Campo | Detalle |
|--------|---------|
| **Usuario** | Número de **cédula** (solo dígitos). |
| **Contraseña** | La misma que en **ATAV**. |
| **Primer acceso** | Si aún no tienes contraseña, debes registrarla primero en ATAV. |
| **Quién puede entrar** | Roles **Docente** o **Director** en ATAV. |

YouLaw **no** crea contraseñas nuevas: solo valida la cuenta institucional.

### Inicio de sesión

1. Abre YouLaw en el navegador.
2. En **Iniciar sesión**, escribe tu cédula y contraseña.
3. Pulsa **Entrar**.

Si ves un error, revisa cédula/contraseña en ATAV o que tu rol esté autorizado.

---

## Parte A — Plataforma web

### Navegación principal

Tras iniciar sesión aparece el **menú lateral** con cuatro secciones:

| Sección | Para qué sirve |
|---------|----------------|
| **Inicio** | Panel principal: nivel CEFR, recomendación del día, ruta de lecciones, estadísticas. |
| **Lecciones** | Biblioteca completa de lecciones de tu nivel actual. |
| **Didactico** | Abre el **juego 3D** a pantalla casi completa (el menú lateral sigue visible). |
| **Logros** | Colección de logros y metas de hábito. |

En la parte inferior del menú:

- Tarjeta de motivación (racha).
- **Perfil / Configuración** (icono de ajustes): modo oscuro, probar niveles, reset local, cerrar sesión.

La **barra superior** (en todas las secciones excepto Didáctico) muestra saludo, notificaciones (icono), **vidas** de lección y racha de días cuando ya completaste la evaluación inicial.

---

### Evaluación inicial (nivel de inglés)

La primera vez (o si no hay diagnóstico guardado) verás la pantalla **Descubre tu nivel de inglés**.

- **20 preguntas** adaptadas por bloques de dificultad.
- **Sin presión**: sirve para personalizar la ruta (A1 → C1, marco CEFR).
- El resultado se **guarda en este navegador**, asociado a tu cédula.

**Flujo:**

1. Pulsa **Conocer mi nivel**.
2. Responde cada pregunta y avanza con **Siguiente**.
3. Al terminar, revisa el resumen por categorías y tu nivel asignado.
4. Continúa al **Inicio**; la ruta de lecciones se ajusta a ese nivel.

Desde **Inicio** puedes usar **Volver a evaluar mi nivel** si quieres repetir el diagnóstico.

---

### Inicio (dashboard)

Con el diagnóstico hecho, el panel muestra:

- **Tu nivel** (A1, A2, B1, B2 o C1) y porcentaje del test.
- **Recomendación del día**: ruta de 10 lecciones para ese nivel.
- **Estadísticas**: racha, XP total, vidas, logros desbloqueados (vista resumida).
- **Tu camino**: primeras lecciones de la ruta; **Ver todo** lleva a **Lecciones**.
- **Esta semana**: gráfico de actividad (XP).

**Empezar lección** hace scroll hasta la ruta de aprendizaje.

---

### Lecciones y ejercicios

Cada nivel (A1…C1) tiene **10 lecciones** con temática de inglés jurídico (presentaciones, corte, contratos, etc.).

#### Estados de una lección

| Estado | Significado |
|--------|-------------|
| **Bloqueada** | Aún no desbloqueada; completa la anterior. |
| **Actual** | Disponible para empezar. |
| **Completada** | Ya terminada. |

#### Cómo practicar

**Desde Inicio:** al elegir una lección puedes ver primero **Preparación** (resumen) y luego **Comenzar**.

**Desde Lecciones:** al elegir una lección entras **directo** al ejercicio.

#### Modal de ejercicio

- Enunciado y **opciones** (clic o teclado).
- Barra de **progreso** dentro de la lección.
- **Vidas** (máximo 3 en la barra superior).

**Teclado en ejercicios:**

| Tecla | Acción |
|-------|--------|
| `1`–`4` o `A`–`D` | Elegir opción (según número de respuestas). |
| `Enter` o `Espacio` | Pasar al siguiente ejercicio (después de responder). |

#### Vidas y bloqueo

- Cada respuesta **incorrecta** resta **1 vida**.
- Con **0 vidas**, las lecciones quedan **bloqueadas** unos **2 minutos** (cuenta regresiva en la barra superior).
- Al acabar el tiempo, recuperas las 3 vidas.

#### XP y racha en lecciones

- Acierto: **+10 XP** (guardado localmente).
- **5 aciertos seguidos**: celebración con fuegos artificiales y **+25 XP** extra.
- Completar lección: **+20 XP** y desbloqueo de la siguiente.
- Si fallas ejercicios, al final de la lección **se repiten** los que fallaste antes de darla por terminada.

#### Al terminar una lección

Aparece un resumen con XP ganada. Si completaste todo el bloque **A1**, puedes avanzar al siguiente nivel CEFR desde ese resumen.

---

### Logros

En **Logros** ves metas como primera lección, racha de días o dominio de una unidad. Algunas barras son orientativas mientras el producto evoluciona; el progreso principal sigue en lecciones y XP.

---

### Configuración (perfil)

Abre desde el botón de perfil en el menú lateral.

| Opción | Descripción |
|--------|-------------|
| **Modo oscuro** | Cambia la apariencia clara/oscura. |
| **Probar un nivel** | Elige A1–C1 para revisar lecciones de ese nivel (útil en formación o pruebas). |
| **Reset my progress** | Borra **todo** el progreso local de YouLaw (diagnóstico, XP, lecciones, juego 3D en este navegador). Irreversible. |
| **Cerrar sesión** | Sale de la cuenta ATAV en este dispositivo. |

---

## Parte B — Módulo didáctico 3D (You Law Game)

### Idea central

No hay un cuestionario clásico con botones A/B/C en el centro de la pantalla. En cada **reto**:

1. Aparece la **frase** (y un **cronómetro** debajo del texto).
2. En el suelo hay **plataformas con palabras**.
3. **Camina y salta** hasta la palabra correcta.
4. Si te equivocas, pasas de largo o se acaba el tiempo, pierdes una **vida** y recibes una **explicación**.

El tutorial del **nivel 1** repite estos pasos al entrar por primera vez.

### Abrir el juego

1. Menú lateral → **Didactico**.
2. Espera **Cargando juego** (escena 3D).
3. Si falla la carga, usa **Reintentar** o revisa la conexión.

El juego usa el ancho disponible junto al menú lateral; no hace falta salir de YouLaw.

---

### Hub (mapa de niveles)

Al cargar entras al **hub** espacial:

1. **Vista galaxia**: planetas = **mundos** (10 mundos, **50 niveles** en total).
2. Elige un mundo con **Entrar** (si no está bloqueado).
3. **Vista mundo**: recorre niveles con **‹ ›** o flechas del teclado (**A/D** o izquierda/derecha en hub).
4. Panel inferior: nombre del nivel, subtítulo, **estrellas** conseguidas, mejor tiempo.
5. **Jugar** inicia el nivel seleccionado (solo si está desbloqueado).

**Desbloqueo:** completar un nivel desbloquea el siguiente; el progreso del juego se guarda por usuario en el navegador.

#### Mundos (contenido orientativo)

| Mundo | Enfoque temático (inglés) |
|-------|---------------------------|
| Training Island | Present simple |
| School Path | Rutina diaria |
| Time Gardens | Preposiciones |
| Industrial Zone | Past simple |
| Neon City | Listening |
| Mountain Ridge | Modales |
| Sky Islands | Condicionales |
| Chaos Factory | Mixto |
| International School | Inglés de docente |
| English Bridge | Recorrido final |

---

### Controles durante un nivel

| Tecla | Acción |
|-------|--------|
| **W** | Avanzar |
| **S** | Retroceder un poco |
| **A / D** | Strafe (lados) |
| **Shift** | Sprint corto |
| **Espacio** | Saltar |
| **Esc** | Pausa / reanudar |

En el **hub**, **Enter** o **Espacio** confirman; **Esc** vuelve de mundo a galaxia cuando aplica.

---

### Fases de un nivel

1. **Intro** — Nombre, subtítulo y tema; **Start** o **Hub**.
2. **Cuenta atrás** — 3, 2, 1, GO!
3. **Juego** — HUD con vidas, racha, monedas recogidas y tiempo de carrera.
4. **Retos** — Frase + cronómetro; elige plataforma-word.
5. **Meta** — Arco final al completar preguntas y llegar al goal.
6. **Resultados** — Estrellas (1–5), precisión, tiempo, errores, XP del run.

Opciones: **Next level**, **Replay**, **Hub** (o volver al editor si estabas probando un nivel).

---

### Retos (preguntas)

| Elemento | Comportamiento |
|----------|----------------|
| **Frase** | Arriba al centro; en listening puede decir *Listen...* y ocultar texto si el nivel lo define. |
| **Cronómetro** | Segundos restantes **debajo** de la frase; parpadea en rojo en los últimos segundos. |
| **Plataformas** | Cada opción es una losa con una palabra; debes **pararte** un instante sobre ella. |
| **Respuesta incorrecta** | La losa “rompe”; pierdes vida; modal **¿Por qué está mal?** con explicación pedagógica. |
| **Pasarte de largo** | Sin pisar ninguna opción al salir de la zona: cuenta como error. |
| **Tiempo agotado** | Pierdes vida; se muestra la respuesta correcta y el porqué. |

Tras un error (si quedan vidas), **Continuar** y sigues desde el último **checkpoint**.

**Tipos de reto** en el diseño de niveles: gramática, vocabulario, listening, contexto.

---

### Vidas, checkpoints y obstáculos

- **3 vidas** por intento de nivel (corazones en el HUD).
- **Checkpoints** (banderas): guardan posición; no puedes retroceder “trampa” por debajo del checkpoint activo en retos ya resueltos.
- **Obstáculos** (muros rojos, martillos, ventiladores, etc.): saltar o esquivar; caer puede costar una vida y respawn en checkpoint.
- **Monedas**: suman al contador del run y a la **cartera** del hub para la tienda.

---

### Tienda (hub)

Desde el hub: botón **Tienda**.

- Gastas **monedas** 🪙 ganadas en niveles.
- Categorías: camisas, pantalones, accesorios, etc.
- **Probador**: vista 3D del avatar; prueba ropa antes de confirmar compra.
- Equipamiento se refleja en tu personaje en el juego.

---

### Audio (dentro del juego)

En el hub: **Audio**.

- Silenciar (**Mute**).
- Volumen **SFX** y **Music**.

La voz guía del tutorial puede estar desactivada según versión; las explicaciones de errores son texto en pantalla.

---

### Puntuación y estrellas

Al completar un nivel se calcula:

- **Precisión** (aciertos vs intentos).
- **Tiempo** vs tiempo par del nivel.
- **Errores**, **mejor racha** de aciertos seguidos, **monedas**.
- **Estrellas** (hasta 5) según precisión, pocos errores y buen tiempo.
- **XP** del run (suma a tu perfil del juego).

---

### Editor de niveles (solo directores)

Si tu rol ATAV es **Director**, en el hub verás **Editor**.

Permite modificar layout 3D: plataformas, preguntas, obstáculos, monedas, meta, etc.

| Acción | Uso |
|--------|-----|
| **Probar** | Jugar el borrador sin salir del editor. |
| **JSON / TypeScript** | Exportar diseño para desarrolladores. |
| **Restablecer** | Volver al nivel original del código. |
| **Hub** | Salir del editor. |

Atajos útiles en editor (cuando no escribes en un campo de texto):

| Atajo | Acción |
|-------|--------|
| `[` / `]` | Nivel anterior / siguiente |
| **G** | Herramienta mover |
| **S** | Herramienta escalar |
| **F** | Enfocar objeto seleccionado |
| **Supr / Retroceso** | Borrar selección |
| **Ctrl+Z** | Deshacer |
| **Esc** | Deseleccionar |

Los borradores pueden guardarse **localmente** en el navegador; exportar TypeScript es la forma de llevar cambios al código del proyecto.

---

## 4. Progreso y datos

| Dato | Dónde se guarda |
|------|------------------|
| Diagnóstico, XP de lecciones, vidas, lecciones completadas | Navegador, clave ligada a tu **cédula** |
| Progreso del juego 3D (niveles, monedas, tienda, ajustes) | Navegador, clave ligada a tu **cédula** |
| Sesión ATAV | Firebase (misma infraestructura que ATAV) |

**Importante:** cambiar de ordenador o borrar datos del navegador puede hacer que pierdas progreso local hasta que exista sincronización en la nube. Usa la misma cédula en cada dispositivo para claves separadas por usuario.

El **Reset** en configuración borra lecciones **y** guardado del juego 3D en ese navegador.

---

## 5. Solución de problemas

| Problema | Qué hacer |
|----------|-----------|
| No puedo iniciar sesión | Verifica cédula/contraseña en ATAV y rol docente/director. |
| No veo lecciones | Completa **Conocer mi nivel** o usa Configuración → **Probar un nivel**. |
| Lecciones bloqueadas | Espera a que termine el temporizador de vidas (2 min) o revisa vidas en la barra superior. |
| El juego 3D no carga | Reintentar; actualizar página; probar otro navegador; comprobar red. |
| Pantalla negra en Didáctico | Desactiva bloqueadores agresivos; permite WebGL. |
| Progreso distinto en otro PC | Normal si el progreso es local; inicia sesión con la misma cédula en cada uno. |
| No aparece Editor | Solo rol **Director** en ATAV. |

---

## 6. Referencia rápida de controles (juego 3D)

```
MOVIMIENTO     W / S / A / D     Avanzar, retroceder, lados
SPRINT         Shift             Carrera corta
SALTO          Espacio           Saltar obstáculos
PAUSA          Esc               Pausar o menú hub
HUB            Enter / Espacio   Confirmar selección
RETOS          Caminar           Pisa la palabra correcta
```

---

*Documento alineado con YouLaw en `JordanMRZ/YouLaw`. Si una pantalla difiere ligeramente de este manual, prevalece la interfaz en producción.*
