# Instrucciones para GitHub Copilot - Modulo de Bilinguismo

## Contexto del proyecto

Este es un aplicativo web independiente, de nombre por definir, para fomentar el bilingüismo entre los profesores de la Facultad de Derecho de la Universidad Santiago de Cali.

Se integra con el aplicativo hermano ATAV, construido en Vue y con datos en Firebase. Ambos aplicativos reutilizan el mismo proyecto de Firebase para Authentication y Firestore. El profesor ya autenticado en ATAV debe poder usar este aplicativo sin iniciar sesion nuevamente.

Stack tecnico:

- Frontend: Vue 3 con Composition API.
- Backend y datos: Firebase Authentication y Firestore.
- Estilo: experiencia interactiva, llamativa y educativa, inspirada en Duolingo. Debe incluir gamificacion, retroalimentacion inmediata, progreso visual y motivacion constante. No debe parecer un formulario administrativo de ATAV.

## Principios de diseno de producto

1. **Gamificacion real, no cosmetica.** Cada interaccion relevante debe producir una recompensa visible: puntos de experiencia (XP), rachas de dias consecutivos (streak), insignias, logros y niveles.
2. **Feedback inmediato.** Toda respuesta correcta o incorrecta debe mostrar al instante una animacion o color de reaccion. Usa verde para respuestas correctas con una microanimacion y rojo para respuestas incorrectas sin tono punitivo. Siempre que sea posible, permite reintentar.
3. **Progreso visible.** Muestra una barra de progreso por leccion, un mapa de niveles o unidades como camino de aprendizaje y el porcentaje de dominio por tema.
4. **Microinteracciones.** Los botones deben tener estados hover y press animados. Usa transiciones suaves entre pantallas y una celebracion breve, como confeti o una animacion, al completar una leccion o subir de nivel.
5. **Tono cercano y motivador.** Escribe mensajes cortos, positivos y en segunda persona: "Vas muy bien" o "Te faltan 2 lecciones para tu racha semanal".
6. **Diseno colorido y coherente.** Define una paleta de 2 o 3 colores principales con acentos, una tipografia redondeada y amigable e iconografia consistente. Evita la apariencia corporativa, gris o administrativa.
7. **Mascota o personaje guia.** Incluyelo cuando aporte valor a la experiencia. Debe acompanar al profesor y mostrar mensajes de animo sin distraer de la actividad.
8. **Sonido opcional.** Los sonidos de acierto, error y logro deben ser sutiles, opcionales y controlables mediante una opcion de silencio.

## Estructura funcional

- Organiza las lecciones y unidades por niveles progresivos: basico, intermedio y avanzado.
- Cada leccion debe contener varios ejercicios.
- Soporta estos tipos de ejercicio cuando correspondan: opcion multiple, completar espacios en blanco, emparejar palabras, pronunciacion o escucha con audio y traduccion corta.
- Asocia todo el progreso al mismo `uid` de Firebase Authentication que utiliza ATAV.
- El progreso debe incluir XP acumulado, racha de dias, nivel actual y porcentaje de completitud de cada unidad.
- Los logros o insignias deben desbloquearse por hitos como completar la primera leccion, alcanzar una racha de 7 dias o dominar una unidad al 100 por ciento.
- Incluye un panel simple de administracion de contenidos para que un coordinador pueda crear y editar lecciones y ejercicios sin modificar codigo.
- Controla el acceso administrativo mediante Custom Claims de Firebase.

## Reglas de implementacion

- Usa Composition API con `<script setup>` en todos los componentes Vue. No uses Options API.
- Componentiza la gamificacion mediante componentes reutilizables, por ejemplo `ProgressBar.vue`, `StreakCounter.vue`, `XPBadge.vue`, `LessonPath.vue` y `AchievementToast.vue`.
- Implementa animaciones con transiciones nativas de Vue (`<Transition>` y `<TransitionGroup>`) o CSS puro. Usa librerias ligeras como `@vueuse/motion` solo cuando aporten valor real; evita dependencias pesadas innecesarias.
- Centraliza toda lectura y escritura a Firebase en `services/` o `composables/`, por ejemplo `useProgreso.js` y `useAuth.js`. No hagas llamadas directas a Firebase dispersas en los componentes.
- Usa el `uid` de Firebase Authentication como identificador unico del usuario en todas las colecciones nuevas: `bilinguismo_progreso`, `bilinguismo_contenidos` y `bilinguismo_logros`.
- Usa variables CSS o tokens de diseno centralizados para colores, espaciados, tipografia, sombras, radios y duraciones. No repitas valores visuales sueltos entre componentes.
- Reutiliza la sesion de Firebase iniciada en ATAV. No dupliques la logica de autenticacion ni solicites un inicio de sesion innecesario.
- Prioriza accesibilidad basica: contraste adecuado, textos alternativos para iconos e imagenes, foco visible y navegacion por teclado en todos los ejercicios.
- Mantén estados de carga, error, respuesta correcta, respuesta incorrecta, reintento y finalizacion de leccion.
- Conserva los nombres y contratos publicos existentes cuando modifiques codigo. Prefiere cambios pequenos y compatibles con la estructura actual del proyecto.

## Modelo de datos esperado

Las nuevas colecciones deben respetar el `uid` de Authentication y una estructura clara y consistente. Considera, como minimo:

- `bilinguismo_progreso/{uid}`: XP total, nivel, racha actual, mejor racha, ultima actividad y progreso por unidad.
- `bilinguismo_contenidos/{contenidoId}`: nivel, unidad, leccion, ejercicios, orden, estado de publicacion y metadatos.
- `bilinguismo_logros/{uid}/items/{logroId}`: logro, fecha de desbloqueo y progreso asociado.

Valida permisos mediante reglas de seguridad de Firestore y aplica el principio de minimo privilegio. Los profesores solo deben leer o modificar sus propios datos de progreso y logros. El contenido administrativo debe requerir el Custom Claim correspondiente.

## Que no hacer

- No generes pantallas planas de formulario administrativo para las lecciones. Cada ejercicio debe sentirse como una interaccion educativa.
- No dupliques la autenticacion. Reutiliza siempre la sesion existente de Firebase iniciada en ATAV.
- No uses paletas grises o corporativas por defecto. Prioriza colores vivos, contrastantes y coherentes con una experiencia educativa gamificada.
- No repitas logica visual o de negocio cuando pueda vivir en un componente, composable o servicio reutilizable.
- No agregues una dependencia grande para resolver una interaccion que pueda implementarse con Vue o CSS de forma sencilla.
