<script setup>
import { computed, onMounted, ref } from 'vue'

const quoteIndex = ref(0)
const quotes = [
  '¡Objeción desestimada! ¡5 aciertos seguidos!',
  '¡Caso ganado! ¡Argumento impecable!',
  '¡Veredicto final: Eres imparable!',
  '¡Excelente dominio del inglés jurídico!',
]

const currentQuote = computed(() => quotes[quoteIndex.value % quotes.length])

onMounted(() => {
  quoteIndex.value = Math.floor(Math.random() * quotes.length)
})
</script>

<template>
  <div class="dancing-lawyer-container" aria-label="Abogado celebrando racha de 5 aciertos">
    <!-- Speech Bubble -->
    <div class="lawyer-speech-bubble">
      <span class="speech-badge">⚖️ ¡RACHA DE 5!</span>
      <p class="speech-text">{{ currentQuote }}</p>
      <div class="speech-arrow"></div>
    </div>

    <!-- Musical Notes & Sparkles floating -->
    <div class="notes-and-sparks" aria-hidden="true">
      <span class="sparkle s1">✨</span>
      <span class="note n1">🎵</span>
      <span class="sparkle s2">⭐</span>
      <span class="note n2">🎶</span>
      <span class="sparkle s3">✨</span>
    </div>

    <!-- The Dancing Lawyer Character (SVG Vector Rig) -->
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

        <!-- Whole dancing rig group -->
        <g class="rig-body">
          <!-- Flowing Lawyer Robe (Toga) Back Wings -->
          <path class="robe-cape" d="M 60 120 C 35 150, 25 210, 45 240 C 65 240, 80 190, 85 140 Z" fill="url(#robeGrad)" />
          <path class="robe-cape right" d="M 160 120 C 185 150, 195 210, 175 240 C 155 240, 140 190, 135 140 Z" fill="url(#robeGrad)" />

          <!-- Left Leg & Shoe (Dancing) -->
          <g class="leg-left">
            <rect x="85" y="195" width="18" height="42" rx="7" fill="#0f172a" />
            <!-- Shoe -->
            <path d="M 80 232 C 80 230, 95 230, 105 235 C 108 244, 98 248, 76 248 C 74 242, 78 234, 80 232 Z" fill="#18181b" />
            <!-- Sole highlight -->
            <path d="M 76 245 L 106 245" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
          </g>

          <!-- Right Leg & Shoe (Dancing) -->
          <g class="leg-right">
            <rect x="117" y="195" width="18" height="42" rx="7" fill="#0f172a" />
            <!-- Shoe -->
            <path d="M 140 232 C 140 230, 125 230, 115 235 C 112 244, 122 248, 144 248 C 146 242, 142 234, 140 232 Z" fill="#18181b" />
            <!-- Sole highlight -->
            <path d="M 114 245 L 144 245" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
          </g>

          <!-- Main Torso / Formal Lawyer Suit -->
          <g class="torso">
            <!-- Dark Navy Jacket -->
            <path d="M 68 118 C 68 108, 152 108, 152 118 L 144 205 C 144 210, 76 210, 76 205 Z" fill="url(#suitGrad)" />
            <!-- White Lawyer Shirt V-neck -->
            <polygon points="96,114 124,114 117,165 103,165" fill="#f8fafc" />
            <!-- Shirt Collar Tabs / Jabot -->
            <polygon points="98,114 104,130 110,114" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
            <polygon points="122,114 116,130 110,114" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
            <!-- Red Lawyer Tie -->
            <polygon points="106,124 114,124 116,162 110,172 104,162" fill="url(#tieGrad)" />
            <!-- Lapels -->
            <polygon points="78,114 96,114 103,165 82,145" fill="#1e293b" />
            <polygon points="142,114 124,114 117,165 138,145" fill="#1e293b" />
            <!-- Golden Scales Pin on lapel -->
            <circle cx="86" cy="132" r="4.5" fill="url(#goldGrad)" />
            <path d="M 83 132 L 89 132 M 86 130 L 86 135" stroke="#78350f" stroke-width="1" stroke-linecap="round" />
            <!-- Suit Buttons -->
            <circle cx="110" cy="180" r="2" fill="#94a3b8" />
            <circle cx="110" cy="195" r="2" fill="#94a3b8" />
          </g>

          <!-- Left Arm holding Judge Gavel (Animated) -->
          <g class="arm-left">
            <!-- Arm sleeve -->
            <path d="M 72 122 C 55 135, 45 155, 48 178" stroke="#1e293b" stroke-width="16" stroke-linecap="round" fill="none" />
            <!-- Hand holding gavel -->
            <circle cx="48" cy="178" r="8" fill="#fbcfe8" />
            <!-- Gavel (Mazo judicial de madera) -->
            <g class="gavel-prop">
              <!-- Handle -->
              <rect x="44" y="145" width="6" height="42" rx="3" fill="url(#gavelGrad)" transform="rotate(-25 47 166)" />
              <!-- Head of Gavel -->
              <rect x="25" y="140" width="32" height="15" rx="3.5" fill="url(#gavelGrad)" transform="rotate(-25 41 147)" />
              <!-- Gold rings on gavel -->
              <rect x="28" y="142" width="4" height="11" fill="url(#goldGrad)" transform="rotate(-25 41 147)" />
              <rect x="49" y="142" width="4" height="11" fill="url(#goldGrad)" transform="rotate(-25 41 147)" />
            </g>
          </g>

          <!-- Right Arm holding Legal Briefcase (Animated) -->
          <g class="arm-right">
            <!-- Arm sleeve -->
            <path d="M 148 122 C 165 135, 175 155, 172 178" stroke="#1e293b" stroke-width="16" stroke-linecap="round" fill="none" />
            <!-- Hand holding briefcase -->
            <circle cx="172" cy="178" r="8" fill="#fbcfe8" />
            <!-- Briefcase (Maletín de cuero legal) -->
            <g class="briefcase-prop">
              <!-- Handle -->
              <path d="M 167 176 C 167 170, 177 170, 177 176" stroke="#451a03" stroke-width="3" fill="none" />
              <!-- Case Body -->
              <rect x="156" y="180" width="32" height="26" rx="4" fill="url(#briefcaseGrad)" />
              <!-- Golden Lock / Buckles -->
              <rect x="169" y="188" width="6" height="5" rx="1" fill="url(#goldGrad)" />
              <line x1="156" y1="187" x2="188" y2="187" stroke="#451a03" stroke-width="1.5" />
            </g>
          </g>

          <!-- Chibi Lawyer Head & Face (Animated Bopping) -->
          <g class="lawyer-head">
            <!-- Neck -->
            <rect x="103" y="104" width="14" height="15" rx="4" fill="#fed7aa" />
            <!-- Face -->
            <ellipse cx="110" cy="80" rx="34" ry="32" fill="#fed7aa" />

            <!-- Lawyer Hair (Neat, professional parted) -->
            <path d="M 75 75 C 75 48, 92 42, 110 42 C 128 42, 145 48, 145 75 C 145 64, 136 52, 110 52 C 86 52, 75 64, 75 75 Z" fill="#334155" />
            <path d="M 74 72 C 72 85, 78 92, 79 94 C 80 88, 80 78, 83 72 Z" fill="#334155" />
            <path d="M 146 72 C 148 85, 142 92, 141 94 C 140 88, 140 78, 137 72 Z" fill="#334155" />

            <!-- Cheerful Eyes (Happy Arcs ^_^) -->
            <path d="M 94 77 Q 99 71 104 77" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
            <path d="M 116 77 Q 121 71 126 77" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />

            <!-- Rosy Cheeks -->
            <ellipse cx="91" cy="86" rx="6" ry="4" fill="#f43f5e" opacity="0.4" />
            <ellipse cx="129" cy="86" rx="6" ry="4" fill="#f43f5e" opacity="0.4" />

            <!-- Golden Glasses / Spectacles -->
            <rect x="91" y="70" width="16" height="14" rx="4" fill="rgba(255,255,255,0.3)" stroke="url(#goldGrad)" stroke-width="2" />
            <rect x="113" y="70" width="16" height="14" rx="4" fill="rgba(255,255,255,0.3)" stroke="url(#goldGrad)" stroke-width="2" />
            <line x1="107" y1="76" x2="113" y2="76" stroke="url(#goldGrad)" stroke-width="2" />
            <line x1="88" y1="74" x2="91" y2="74" stroke="url(#goldGrad)" stroke-width="2" />
            <line x1="129" y1="74" x2="132" y2="74" stroke="url(#goldGrad)" stroke-width="2" />

            <!-- Big Joyful Smile -->
            <path d="M 101 90 Q 110 102 119 90" stroke="#991b1b" stroke-width="3" stroke-linecap="round" fill="#be123c" />
            <!-- Little white tooth gleam in mouth -->
            <path d="M 104 92 Q 110 95 116 92 Z" fill="#ffffff" />
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
  width: 280px;
  margin: 0 auto;
  user-select: none;
  animation: lawyerEntrance 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* Speech Bubble */
.lawyer-speech-bubble {
  position: relative;
  background: #ffffff;
  color: #0f172a;
  padding: 12px 18px;
  border-radius: 18px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 0 0 3px #fbbf24;
  text-align: center;
  margin-bottom: 12px;
  animation: speechBounce 2s ease-in-out infinite;
  max-width: 260px;
}

.speech-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  color: #ffffff;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.8px;
  padding: 3px 8px;
  border-radius: 999px;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.speech-text {
  font-size: 14px;
  font-weight: 800;
  line-height: 1.35;
  margin: 0;
  color: #1e293b;
}

.speech-arrow {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 9px solid #ffffff;
}

/* Sparkles and Musical Notes */
.notes-and-sparks {
  position: absolute;
  top: 40px;
  width: 100%;
  height: 140px;
  pointer-events: none;
}

.notes-and-sparks span {
  position: absolute;
  font-size: 22px;
  animation: floatUp 2.4s ease-in-out infinite alternate;
}

.s1 { left: 10px; top: 10px; animation-delay: 0.1s; }
.n1 { left: 30px; top: 60px; animation-delay: 0.5s; color: #fbbf24; }
.s2 { right: 15px; top: 20px; animation-delay: 0.3s; }
.n2 { right: 25px; top: 70px; animation-delay: 0.8s; color: #38bdf8; }
.s3 { left: 50%; top: -10px; animation-delay: 0.6s; }

/* Lawyer Character SVG */
.lawyer-character {
  width: 220px;
  height: 280px;
  filter: drop-shadow(0 14px 20px rgba(0, 0, 0, 0.25));
}

.lawyer-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* SVG DANCE KEYFRAMES */

/* Body Groove - Side to side swagger */
.rig-body {
  transform-origin: 110px 240px;
  animation: lawyerBodyDance 0.9s ease-in-out infinite alternate;
}

/* Head Bopping */
.lawyer-head {
  transform-origin: 110px 105px;
  animation: lawyerHeadBop 0.45s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

/* Left Arm + Gavel Hammering Dance */
.arm-left {
  transform-origin: 70px 125px;
  animation: gavelWaveDance 0.6s ease-in-out infinite alternate;
}

/* Right Arm + Briefcase Swinging */
.arm-right {
  transform-origin: 150px 125px;
  animation: briefcaseSwing 0.7s ease-in-out infinite alternate;
}

/* Legs Dancing */
.leg-left {
  transform-origin: 94px 195px;
  animation: legKickLeft 0.55s ease-in-out infinite alternate;
}

.leg-right {
  transform-origin: 126px 195px;
  animation: legKickRight 0.55s ease-in-out infinite alternate;
}

/* Shadow Responds to Dance */
.lawyer-shadow {
  transform-origin: 110px 265px;
  animation: shadowPulse 0.45s ease-in-out infinite alternate;
}

/* Animations Definition */
@keyframes lawyerEntrance {
  0% {
    opacity: 0;
    transform: scale(0.6) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes lawyerBodyDance {
  0% {
    transform: rotate(-6deg) translateY(-4px) skewX(-2deg);
  }
  100% {
    transform: rotate(6deg) translateY(2px) skewX(2deg);
  }
}

@keyframes lawyerHeadBop {
  0% {
    transform: translateY(0) rotate(-4deg);
  }
  100% {
    transform: translateY(-8px) rotate(4deg);
  }
}

@keyframes gavelWaveDance {
  0% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(18deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}

@keyframes briefcaseSwing {
  0% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-18deg);
  }
}

@keyframes legKickLeft {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-10px) rotate(-12deg);
  }
}

@keyframes legKickRight {
  0% {
    transform: translateY(-10px) rotate(12deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes shadowPulse {
  0% {
    transform: scale(0.9);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.15;
  }
}

@keyframes speechBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(-10deg) scale(0.9);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-16px) rotate(10deg) scale(1.15);
    opacity: 1;
  }
}
</style>

