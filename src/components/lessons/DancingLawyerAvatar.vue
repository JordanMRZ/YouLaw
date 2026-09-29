<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'celebration', // 'celebration' | 'correct' | 'incorrect'
    validator: (v) => ['celebration', 'correct', 'incorrect'].includes(v),
  },
  size: {
    type: String,
    default: 'normal', // 'normal' | 'mini'
    validator: (v) => ['normal', 'mini'].includes(v),
  },
  showBubble: {
    type: Boolean,
    default: true,
  },
})

const quoteIndex = ref(0)

const celebrationQuotes = [
  '¡Objeción desestimada! ¡5 aciertos seguidos!',
  '¡Caso ganado! ¡Argumento impecable!',
  '¡Veredicto final: Eres imparable!',
  '¡Excelente dominio del inglés jurídico!',
]

const correctQuotes = [
  '¡Excelente argumento jurídico!',
  '¡Respuesta correcta!',
  '¡Caso bien fundamentado!',
  '¡Punto para la defensa!',
]

const incorrectQuotes = [
  '¡Casi! De los errores se aprende.',
  '¡Ánimo, revisa la opción y sigue!',
  '¡No pasa nada, a la próxima!',
  '¡Objeción temporal, tú puedes!',
]

const currentQuote = computed(() => {
  if (props.mode === 'correct') {
    return correctQuotes[quoteIndex.value % correctQuotes.length]
  }
  if (props.mode === 'incorrect') {
    return incorrectQuotes[quoteIndex.value % incorrectQuotes.length]
  }
  return celebrationQuotes[quoteIndex.value % celebrationQuotes.length]
})

const badgeText = computed(() => {
  if (props.mode === 'correct') return '⚖️ ¡CORRECTO!'
  if (props.mode === 'incorrect') return '⚖️ ¡ÁNIMO!'
  return '⚖️ ¡RACHA DE 5!'
})

onMounted(() => {
  quoteIndex.value = Math.floor(Math.random() * 4)
})
</script>

<template>
  <div
    class="dancing-lawyer-container"
    :class="[`mode-${mode}`, `size-${size}`]"
    :aria-label="mode === 'incorrect' ? 'Abogado triste por respuesta incorrecta' : 'Abogado celebrando respuesta correcta'"
  >
    <!-- Speech Bubble (optional) -->
    <div v-if="showBubble" class="lawyer-speech-bubble">
      <span class="speech-badge">{{ badgeText }}</span>
      <p class="speech-text">{{ currentQuote }}</p>
      <div class="speech-arrow"></div>
    </div>

    <!-- Floating Emotional Particles -->
    <div class="notes-and-sparks" aria-hidden="true">
      <template v-if="mode === 'incorrect'">
        <span class="tear t1">💧</span>
        <span class="tear t2">💭</span>
      </template>
      <template v-else-if="mode === 'correct'">
        <span class="sparkle s1">⭐</span>
        <span class="sparkle s2">✨</span>
        <span class="sparkle s3">🌟</span>
      </template>
      <template v-else>
        <span class="sparkle s1">✨</span>
        <span class="note n1">🎵</span>
        <span class="sparkle s2">⭐</span>
        <span class="note n2">🎶</span>
        <span class="sparkle s3">✨</span>
      </template>
    </div>

    <!-- The Lawyer Character (SVG Vector Rig) -->
    <div class="lawyer-character">
      <svg
        class="lawyer-svg"
        viewBox="0 0 220 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="suitGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
          <linearGradient id="robeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#334155" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
          <linearGradient id="tieGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ef4444" />
            <stop offset="100%" stop-color="#b91c1c" />
          </linearGradient>
          <linearGradient id="briefcaseGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#92400e" />
            <stop offset="100%" stop-color="#78350f" />
          </linearGradient>
          <linearGradient id="gavelGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#b45309" />
            <stop offset="100%" stop-color="#78350f" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
        </defs>

        <!-- Shadow on the floor -->
        <ellipse class="lawyer-shadow" cx="110" cy="265" rx="55" ry="12" fill="rgba(0,0,0,0.22)" />

        <!-- Whole rig group -->
        <g class="rig-body">
          <!-- Left Leg & Shoe (visible beneath toga) -->
          <g class="leg-left">
            <rect x="86" y="210" width="16" height="30" rx="6" fill="#090d16" />
            <path d="M 80 234 C 80 231, 95 231, 105 236 C 108 245, 98 249, 76 249 C 74 243, 78 235, 80 234 Z" fill="#111827" />
            <path d="M 76 246 L 106 246" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
          </g>

          <!-- Right Leg & Shoe (visible beneath toga) -->
          <g class="leg-right">
            <rect x="118" y="210" width="16" height="30" rx="6" fill="#090d16" />
            <path d="M 140 234 C 140 231, 125 231, 115 236 C 112 245, 122 249, 144 249 C 146 243, 142 235, 140 234 Z" fill="#111827" />
            <path d="M 114 246 L 144 246" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
          </g>

          <!-- Authentic Courtroom Toga (Toga Jurídica de Abogado) -->
          <g class="toga">
            <!-- Main Flowing Black Toga Gown (No wings - straight elegant drape) -->
            <path d="M 66 114 C 75 110, 145 110, 154 114 L 160 226 C 160 230, 60 230, 60 226 Z" fill="url(#suitGrad)" stroke="#090d16" stroke-width="1.5" />

            <!-- Vertical Fabric Pleats (Pliegues tradicionales de la toga) -->
            <path d="M 75 125 C 73 160, 71 195, 71 226" stroke="#090d16" stroke-width="1.8" fill="none" opacity="0.75" />
            <path d="M 88 123 C 87 160, 85 195, 85 226" stroke="#090d16" stroke-width="1.8" fill="none" opacity="0.55" />
            <path d="M 145 125 C 147 160, 149 195, 149 226" stroke="#090d16" stroke-width="1.8" fill="none" opacity="0.75" />
            <path d="M 132 123 C 133 160, 135 195, 135 226" stroke="#090d16" stroke-width="1.8" fill="none" opacity="0.55" />

            <!-- Center Satin Front Panel (Vistas de satén negro de la toga) -->
            <path d="M 98 114 L 98 226 L 122 226 L 122 114 Z" fill="#090d16" />
            <line x1="110" y1="140" x2="110" y2="226" stroke="#1e293b" stroke-width="1.5" />
            <circle cx="110" cy="155" r="2" fill="#475569" />
            <circle cx="110" cy="175" r="2" fill="#475569" />
            <circle cx="110" cy="195" r="2" fill="#475569" />
            <circle cx="110" cy="215" r="2" fill="#475569" />

            <!-- Toga Capelet (Muceta / Esclavina sobre los hombros) -->
            <path d="M 65 114 C 75 109, 145 109, 155 114 C 158 138, 142 144, 110 144 C 78 144, 62 138, 65 114 Z" fill="#1e293b" stroke="#090d16" stroke-width="1.5" />

            <!-- Golden Justice Scales Pin (Balanza de la justicia en la toga) -->
            <circle cx="82" cy="128" r="4.5" fill="url(#goldGrad)" />
            <path d="M 79 128 L 85 128 M 82 126 L 82 131" stroke="#78350f" stroke-width="1" stroke-linecap="round" />

            <!-- Traditional Advocate White Tabs / Jabot (Tirillas blancas de letrado) -->
            <rect x="94" y="108" width="32" height="6.5" rx="2" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
            <!-- Left white tab -->
            <rect x="101.5" y="114" width="7" height="26" rx="1.5" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" />
            <!-- Right white tab -->
            <rect x="111.5" y="114" width="7" height="26" rx="1.5" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" />
            <line x1="110" y1="114" x2="110" y2="138" stroke="#cbd5e1" stroke-width="1" />
          </g>

          <!-- Left Arm holding Judge Gavel with Toga Sleeve and White Lace Cuff -->
          <g class="arm-left">
            <!-- Flowing Toga Sleeve -->
            <path d="M 72 122 C 55 135, 45 155, 48 178" stroke="#0f172a" stroke-width="19" stroke-linecap="round" fill="none" />
            <!-- White Lace Cuff (Puñeta de la toga) -->
            <rect x="37" y="168" width="18" height="7" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" transform="rotate(32 46 172)" />
            <!-- Hand holding gavel -->
            <circle cx="48" cy="178" r="8" fill="#fbcfe8" />
            <g class="gavel-prop">
              <rect x="44" y="145" width="6" height="42" rx="3" fill="url(#gavelGrad)" transform="rotate(-25 47 166)" />
              <rect x="25" y="140" width="32" height="15" rx="3.5" fill="url(#gavelGrad)" transform="rotate(-25 41 147)" />
              <rect x="28" y="142" width="4" height="11" fill="url(#goldGrad)" transform="rotate(-25 41 147)" />
              <rect x="49" y="142" width="4" height="11" fill="url(#goldGrad)" transform="rotate(-25 41 147)" />
            </g>
          </g>

          <!-- Right Arm holding Legal Briefcase with Toga Sleeve and White Lace Cuff -->
          <g class="arm-right">
            <!-- Flowing Toga Sleeve -->
            <path d="M 148 122 C 165 135, 175 155, 172 178" stroke="#0f172a" stroke-width="19" stroke-linecap="round" fill="none" />
            <!-- White Lace Cuff (Puñeta de la toga) -->
            <rect x="165" y="168" width="18" height="7" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" transform="rotate(-32 174 172)" />
            <!-- Hand holding briefcase -->
            <circle cx="172" cy="178" r="8" fill="#fbcfe8" />
            <g class="briefcase-prop">
              <path d="M 167 176 C 167 170, 177 170, 177 176" stroke="#451a03" stroke-width="3" fill="none" />
              <rect x="156" y="180" width="32" height="26" rx="4" fill="url(#briefcaseGrad)" />
              <rect x="169" y="188" width="6" height="5" rx="1" fill="url(#goldGrad)" />
              <line x1="156" y1="187" x2="188" y2="187" stroke="#451a03" stroke-width="1.5" />
            </g>
          </g>

          <!-- Chibi Lawyer Head & Face -->
          <g class="lawyer-head">
            <rect x="103" y="104" width="14" height="15" rx="4" fill="#fed7aa" />
            <ellipse cx="110" cy="80" rx="34" ry="32" fill="#fed7aa" />

            <!-- Lawyer Hair -->
            <path d="M 75 75 C 75 48, 92 42, 110 42 C 128 42, 145 48, 145 75 C 145 64, 136 52, 110 52 C 86 52, 75 64, 75 75 Z" fill="#334155" />
            <path d="M 74 72 C 72 85, 78 92, 79 94 C 80 88, 80 78, 83 72 Z" fill="#334155" />
            <path d="M 146 72 C 148 85, 142 92, 141 94 C 140 88, 140 78, 137 72 Z" fill="#334155" />

            <!-- EYES & BROWS: Reactive to mode -->
            <template v-if="mode === 'incorrect'">
              <!-- Sad downturned worried eyes -->
              <path d="M 94 79 Q 99 84 104 79" stroke="#1e293b" stroke-width="3.2" stroke-linecap="round" fill="none" />
              <path d="M 116 79 Q 121 84 126 79" stroke="#1e293b" stroke-width="3.2" stroke-linecap="round" fill="none" />
              <!-- Worried eyebrows slanting down -->
              <line x1="93" y1="68" x2="103" y2="72" stroke="#475569" stroke-width="2.5" stroke-linecap="round" />
              <line x1="127" y1="68" x2="117" y2="72" stroke="#475569" stroke-width="2.5" stroke-linecap="round" />
              <!-- Blue sweat drop on temple -->
              <path d="M 134 67 C 134 63, 141 59, 141 59 C 141 59, 141 67, 138 71 C 135 71, 134 69, 134 67 Z" fill="#38bdf8" />
            </template>
            <template v-else>
              <!-- Cheerful Eyes (Happy Arcs ^_^) -->
              <path d="M 94 77 Q 99 71 104 77" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
              <path d="M 116 77 Q 121 71 126 77" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
            </template>

            <!-- Rosy Cheeks -->
            <ellipse cx="91" cy="86" rx="6" ry="4" :fill="mode === 'incorrect' ? '#94a3b8' : '#f43f5e'" :opacity="mode === 'incorrect' ? 0.2 : 0.4" />
            <ellipse cx="129" cy="86" rx="6" ry="4" :fill="mode === 'incorrect' ? '#94a3b8' : '#f43f5e'" :opacity="mode === 'incorrect' ? 0.2 : 0.4" />

            <!-- Golden Glasses / Spectacles -->
            <rect x="91" y="70" width="16" height="14" rx="4" fill="rgba(255,255,255,0.3)" stroke="url(#goldGrad)" stroke-width="2" />
            <rect x="113" y="70" width="16" height="14" rx="4" fill="rgba(255,255,255,0.3)" stroke="url(#goldGrad)" stroke-width="2" />
            <line x1="107" y1="76" x2="113" y2="76" stroke="url(#goldGrad)" stroke-width="2" />
            <line x1="88" y1="74" x2="91" y2="74" stroke="url(#goldGrad)" stroke-width="2" />
            <line x1="129" y1="74" x2="132" y2="74" stroke="url(#goldGrad)" stroke-width="2" />

            <!-- MOUTH: Reactive to mode -->
            <template v-if="mode === 'incorrect'">
              <!-- Sad downturned mouth (frown) -->
              <path d="M 103 96 Q 110 89 117 96" stroke="#991b1b" stroke-width="3.2" stroke-linecap="round" fill="none" />
            </template>
            <template v-else>
              <!-- Big Joyful Smile -->
              <path d="M 101 90 Q 110 102 119 90" stroke="#991b1b" stroke-width="3" stroke-linecap="round" fill="#be123c" />
              <path d="M 104 92 Q 110 95 116 92 Z" fill="#ffffff" />
            </template>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.dancing-lawyer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  user-select: none;
}

/* SIZE: Normal */
.dancing-lawyer-container.size-normal {
  width: 220px;
  margin: 0 auto;
  animation: lawyerEntrance 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.dancing-lawyer-container.size-normal .lawyer-character {
  width: 155px;
  height: 195px;
  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.22));
}

/* SIZE: Mini (for inline feedback inside ExerciseModal) */
.dancing-lawyer-container.size-mini {
  width: 80px;
  height: 95px;
  justify-content: flex-end;
  animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.dancing-lawyer-container.size-mini .lawyer-character {
  width: 76px;
  height: 94px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.lawyer-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* Speech Bubble */
.lawyer-speech-bubble {
  position: relative;
  background: #ffffff;
  color: #0f172a;
  padding: 8px 14px;
  border-radius: 14px;
  box-shadow: 0 6px 18px -3px rgba(0, 0, 0, 0.2), 0 0 0 2px #fbbf24;
  text-align: center;
  margin-bottom: 8px;
  animation: speechBounce 2s ease-in-out infinite;
  max-width: 230px;
}

.speech-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.7px;
  padding: 2px 7px;
  border-radius: 999px;
  margin-bottom: 3px;
  text-transform: uppercase;
}

.speech-text {
  font-size: 12.5px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
  color: #1e293b;
}

.speech-arrow {
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #ffffff;
}

/* Floating notes / tears / sparks */
.notes-and-sparks {
  position: absolute;
  top: 15px;
  width: 100%;
  height: 80px;
  pointer-events: none;
}

.notes-and-sparks span {
  position: absolute;
  font-size: 16px;
  animation: floatUp 2.4s ease-in-out infinite alternate;
}

.s1 { left: 8px; top: 8px; animation-delay: 0.1s; }
.n1 { left: 24px; top: 40px; animation-delay: 0.5s; color: #fbbf24; }
.s2 { right: 12px; top: 14px; animation-delay: 0.3s; }
.n2 { right: 20px; top: 46px; animation-delay: 0.8s; color: #38bdf8; }
.s3 { left: 50%; top: -8px; animation-delay: 0.6s; }

.t1 { left: 8px; top: 16px; animation: tearDrop 1.8s ease-in infinite; }
.t2 { right: 12px; top: 12px; animation: floatUp 2s ease-in-out infinite alternate; }

/* ========================================================
   MODE: CELEBRATION (Default - Grand Dance)
   ======================================================== */
.mode-celebration .rig-body {
  transform-origin: 110px 240px;
  animation: lawyerBodyDance 0.9s ease-in-out infinite alternate;
}

.mode-celebration .lawyer-head {
  transform-origin: 110px 105px;
  animation: lawyerHeadBop 0.45s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

.mode-celebration .arm-left {
  transform-origin: 70px 125px;
  animation: gavelWaveDance 0.6s ease-in-out infinite alternate;
}

.mode-celebration .arm-right {
  transform-origin: 150px 125px;
  animation: briefcaseSwing 0.7s ease-in-out infinite alternate;
}

.mode-celebration .leg-left {
  transform-origin: 94px 195px;
  animation: legKickLeft 0.55s ease-in-out infinite alternate;
}

.mode-celebration .leg-right {
  transform-origin: 126px 195px;
  animation: legKickRight 0.55s ease-in-out infinite alternate;
}

.mode-celebration .lawyer-shadow {
  transform-origin: 110px 265px;
  animation: shadowPulse 0.45s ease-in-out infinite alternate;
}

/* ========================================================
   MODE: CORRECT (Excited and jumping!)
   ======================================================== */
.mode-correct .rig-body {
  transform-origin: 110px 250px;
  animation: lawyerHappyJump 0.48s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate;
}

.mode-correct .lawyer-head {
  transform-origin: 110px 105px;
  animation: headHappyNod 0.48s ease-in-out infinite alternate;
}

.mode-correct .arm-left {
  transform-origin: 70px 125px;
  animation: gavelPumpVictory 0.48s ease-in-out infinite alternate;
}

.mode-correct .arm-right {
  transform-origin: 150px 125px;
  animation: briefcasePumpVictory 0.48s ease-in-out infinite alternate;
}

.mode-correct .lawyer-shadow {
  transform-origin: 110px 265px;
  animation: shadowJump 0.48s ease-in-out infinite alternate;
}

/* ========================================================
   MODE: INCORRECT (Sad and drooping)
   ======================================================== */
.mode-incorrect .rig-body {
  transform-origin: 110px 240px;
  animation: lawyerSadSway 1.8s ease-in-out infinite alternate;
}

.mode-incorrect .lawyer-head {
  transform-origin: 110px 105px;
  transform: translateY(5px) rotate(-5deg);
  animation: headSadSigh 1.8s ease-in-out infinite alternate;
}

.mode-incorrect .arm-left {
  transform-origin: 70px 125px;
  transform: rotate(-25deg) translateY(6px);
}

.mode-incorrect .arm-right {
  transform-origin: 150px 125px;
  transform: rotate(20deg) translateY(6px);
}

.mode-incorrect .lawyer-shadow {
  opacity: 0.35;
}

/* ========================================================
   KEYFRAME ANIMATIONS
   ======================================================== */
@keyframes lawyerEntrance {
  0% { opacity: 0; transform: scale(0.6) translateY(40px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes lawyerBodyDance {
  0% { transform: rotate(-6deg) translateY(-4px) skewX(-2deg); }
  100% { transform: rotate(6deg) translateY(2px) skewX(2deg); }
}

@keyframes lawyerHeadBop {
  0% { transform: translateY(0) rotate(-4deg); }
  100% { transform: translateY(-8px) rotate(4deg); }
}

@keyframes gavelWaveDance {
  0% { transform: rotate(-15deg); }
  50% { transform: rotate(18deg); }
  100% { transform: rotate(-5deg); }
}

@keyframes briefcaseSwing {
  0% { transform: rotate(20deg); }
  100% { transform: rotate(-18deg); }
}

@keyframes legKickLeft {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-10px) rotate(-12deg); }
}

@keyframes legKickRight {
  0% { transform: translateY(-10px) rotate(12deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes shadowPulse {
  0% { transform: scale(0.9); opacity: 0.3; }
  100% { transform: scale(1.1); opacity: 0.15; }
}

/* Happy Jump Animation (for correct answers) */
@keyframes lawyerHappyJump {
  0% {
    transform: translateY(0) scaleY(0.94) scaleX(1.04);
  }
  60% {
    transform: translateY(-22px) scaleY(1.06) scaleX(0.96) rotate(3deg);
  }
  100% {
    transform: translateY(-26px) scaleY(1.02) scaleX(0.98) rotate(-2deg);
  }
}

@keyframes headHappyNod {
  0% { transform: translateY(0) rotate(-2deg); }
  100% { transform: translateY(-4px) rotate(4deg); }
}

@keyframes gavelPumpVictory {
  0% { transform: rotate(-5deg) translateY(0); }
  100% { transform: rotate(38deg) translateY(-14px); }
}

@keyframes briefcasePumpVictory {
  0% { transform: rotate(10deg) translateY(0); }
  100% { transform: rotate(-35deg) translateY(-14px); }
}

@keyframes shadowJump {
  0% { transform: scale(1); opacity: 0.3; }
  100% { transform: scale(0.65); opacity: 0.12; }
}

/* Sad Sway Animation (for incorrect answers) */
@keyframes lawyerSadSway {
  0% { transform: translateY(0) rotate(-2deg); }
  100% { transform: translateY(5px) rotate(2deg); }
}

@keyframes headSadSigh {
  0% { transform: translateY(4px) rotate(-6deg); }
  100% { transform: translateY(8px) rotate(-2deg); }
}

@keyframes tearDrop {
  0% { transform: translateY(0); opacity: 0.8; }
  70% { transform: translateY(18px); opacity: 0.9; }
  100% { transform: translateY(26px) scale(0.6); opacity: 0; }
}

@keyframes speechBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes floatUp {
  0% { transform: translateY(0) rotate(-10deg) scale(0.9); opacity: 0.7; }
  100% { transform: translateY(-14px) rotate(10deg) scale(1.1); opacity: 1; }
}
</style>
