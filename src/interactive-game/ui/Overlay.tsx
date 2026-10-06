import { useEffect, useState } from 'react'
import { audio } from '../audio/audioManager'
import { getLevel, LEVEL_COUNT, levelCatalog, WORLD_COUNT, worldOrder } from '../data/levels'
import { firstLevelOfWorld, isLevelLocked, isWorldLocked, lastLevelOfWorld } from '../data/hubLayout'
import { cefrForWorldIndex, worldMeta } from '../data/worlds'
import { formatTime } from '../game/scoring'
import { useEditorStore } from '../store/editorStore'
import { useGameStore } from '../store/gameStore'
import { EditorPanel } from './EditorPanel'
import { ShopPanel } from './ShopPanel'
import { TutorialCard } from './TutorialCard'

export function Overlay() {
  const phase = useGameStore((s) => s.phase)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const state = useGameStore.getState()
      if (event.code === 'KeyP' && !event.repeat && !state.mistake) {
        if (state.phase === 'play') state.setPhase('paused')
        else if (state.phase === 'paused') state.setPhase('play')
        return
      }
      if (event.code === 'Escape') {
        if (state.phase === 'editor') return
        if (state.mistake) return
        if (state.shopOpen) {
          state.setShopOpen(false)
          return
        }
        if (state.settingsOpen) {
          state.setSettingsOpen(false)
          return
        }
        if (state.phase === 'hub' && state.hubLayer === 'world') {
          state.exitWorldToGalaxy()
          return
        }
        if (state.phase === 'play') state.setPhase('paused')
        else if (state.phase === 'paused') state.setPhase('play')
      }
      if (state.mistake && event.code === 'Enter') {
        event.preventDefault()
        state.dismissMistake()
        return
      }
      if (state.phase === 'tutorial' && (event.code === 'Enter' || event.code === 'Space')) {
        event.preventDefault()
        const next = state.tutorialStep + 1
        if (next >= 5) {
          audio.stopSpeech()
          state.setPhase('countdown')
        } else {
          state.setTutorialStep(next)
        }
        return
      }
      if (state.phase === 'hub') {
        if (state.shopOpen || state.settingsOpen) return
        if (event.code === 'ArrowRight' || event.code === 'KeyD') {
          event.preventDefault()
          state.cycleHubSelection(1)
        }
        if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
          event.preventDefault()
          state.cycleHubSelection(-1)
        }
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault()
          if (state.hubLayer === 'galaxy') {
            state.enterSelectedWorld()
            return
          }
          if (!isLevelLocked(state.selectedLevel, state.teacherEnglishLevel)) {
            audio.unlock()
            audio.startMusic()
            state.startLevel(state.selectedLevel)
          }
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="overlay">
      {phase === 'hub' && <HubChrome />}
      {phase === 'editor' && <EditorPanel />}
      {phase !== 'hub' && phase !== 'intro' && phase !== 'tutorial' && phase !== 'editor' && <HUD />}
      {phase === 'tutorial' && <TutorialCard />}
      {phase === 'intro' && <IntroCard />}
      {phase === 'countdown' && <Countdown />}
      {phase === 'paused' && <PauseCard />}
      {phase === 'results' && <ResultsCard />}
      {phase === 'failed' && <FailCard />}
      {phase === 'credits' && <CreditsCard />}
    </div>
  )
}

function HubChrome() {
  const selected = useGameStore((s) => s.selectedLevel)
  const selectedWorld = useGameStore((s) => s.selectedWorld)
  const hubLayer = useGameStore((s) => s.hubLayer)
  const save = useGameStore((s) => s.save)
  const shopOpen = useGameStore((s) => s.shopOpen)
  const settingsOpen = useGameStore((s) => s.settingsOpen)
  const meta = levelCatalog[selected - 1]
  const record = save.levels[String(selected)]
  const teacherEnglishLevel = useGameStore((s) => s.teacherEnglishLevel)
  const worldLocked = isWorldLocked(selectedWorld, teacherEnglishLevel)
  const levelLocked = isLevelLocked(selected, teacherEnglishLevel)
  const showEditor = useGameStore((s) => s.canOpenEditor)
  const worldTitle = worldMeta[worldOrder[selectedWorld]]?.title ?? meta?.hubLabel
  const canGoPrev = hubLayer === 'galaxy' ? selectedWorld > 0 : selected > firstLevelOfWorld(selectedWorld)
  const canGoNext = hubLayer === 'galaxy' ? selectedWorld < WORLD_COUNT - 1 : selected < lastLevelOfWorld(selectedWorld)

  function playOrEnter() {
    const store = useGameStore.getState()
    if (hubLayer === 'galaxy') {
      store.enterSelectedWorld()
      return
    }
    if (levelLocked) return
    audio.unlock()
    audio.startMusic()
    store.startLevel(selected)
  }

  return (
    <>
      {!shopOpen && (
        <div className="hub-top hub-top--minimal">
          <div className="hub-actions">
            <span className="xp-chip">{save.wallet} 🪙</span>
            <span className="xp-chip xp">{save.xp} XP</span>
            {showEditor && (
              <button
                type="button"
                onClick={() => {
                  audio.unlock()
                  useEditorStore.getState().openEditor(selected)
                }}
              >
                Editor
              </button>
            )}
            <button type="button" onClick={() => useGameStore.getState().setShopOpen(true)}>
              Tienda
            </button>
            <button type="button" onClick={() => useGameStore.getState().setSettingsOpen(true)}>
              Audio
            </button>
          </div>
        </div>
      )}
      {!shopOpen && (
        <>
          {hubLayer === 'world' && (
            <button type="button" className="hub-back" onClick={() => useGameStore.getState().exitWorldToGalaxy()}>
              Atrás
            </button>
          )}
          <button
            type="button"
            className="hub-nav hub-nav--left"
            disabled={!canGoPrev}
            aria-label="Anterior"
            onClick={() => useGameStore.getState().cycleHubSelection(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="hub-nav hub-nav--right"
            disabled={!canGoNext}
            aria-label="Siguiente"
            onClick={() => useGameStore.getState().cycleHubSelection(1)}
          >
            ›
          </button>
          <div className="hub-dock">
            <p className="kicker">{hubLayer === 'galaxy' ? 'Mundo' : worldTitle}</p>
            <h2>{hubLayer === 'galaxy' ? worldTitle : meta?.name}</h2>
            {hubLayer === 'galaxy' && (
              <p className="hub-sub">Inglés {cefrForWorldIndex(selectedWorld)}</p>
            )}
            {hubLayer === 'galaxy' && worldLocked && (
              <p className="muted">
                Desbloquea este mundo alcanzando {cefrForWorldIndex(selectedWorld)} en la evaluación de YouLaw
                {teacherEnglishLevel ? ` (tu nivel: ${teacherEnglishLevel})` : ''}.
              </p>
            )}
            {hubLayer === 'world' && (
              <>
                <p className="hub-sub">{meta?.subtitle}</p>
                <p className="stars">{starLine(record?.stars ?? 0)}</p>
                {record && <p className="muted">Mejor {formatTime(record.bestTime)}</p>}
              </>
            )}
            <button
              type="button"
              className="primary hub-play"
              disabled={hubLayer === 'galaxy' ? worldLocked : levelLocked}
              onClick={playOrEnter}
            >
              {hubLayer === 'galaxy'
                ? worldLocked
                  ? 'Bloqueado'
                  : 'Entrar'
                : levelLocked
                  ? 'Bloqueado'
                  : 'Jugar'}
            </button>
          </div>
        </>
      )}
      {shopOpen && <ShopPanel />}
      {settingsOpen && <SettingsPanel />}
    </>
  )
}

function HUD() {
  const lives = useGameStore((s) => s.lives)
  const streak = useGameStore((s) => s.streak)
  const elapsed = useGameStore((s) => s.elapsed)
  const prompt = useGameStore((s) => s.prompt)
  const toast = useGameStore((s) => s.toast)
  const xpPopup = useGameStore((s) => s.xpPopup)
  const phase = useGameStore((s) => s.phase)
  const challengeTimeLeft = useGameStore((s) => s.challengeTimeLeft)
  const mistake = useGameStore((s) => s.mistake)
  const coachLine = useGameStore((s) => s.coachLine)
  const coins = useGameStore((s) => s.coins)
  if (phase === 'results' || phase === 'failed' || phase === 'credits') return null

  return (
    <>
      <div className="hud-top">
        <div className="lives">{'❤️'.repeat(Math.max(0, lives))}{'🖤'.repeat(Math.max(0, 3 - lives))}</div>
        <div className={`streak ${streak >= 2 ? 'hot' : ''}`}>RACHA x{streak}</div>
        <div className="hud-right">
          <div className="time">{coins} 🪙 · {formatTime(elapsed)}</div>
          {phase === 'play' && !mistake && (
            <button
              type="button"
              className="hud-pause"
              aria-label="Pausa"
              title="Pausa (Esc o P)"
              onClick={(event) => {
                event.currentTarget.blur()
                useGameStore.getState().setPhase('paused')
              }}
            >
              ❚❚
            </button>
          )}
        </div>
      </div>
      {prompt && (
        <div className="question-bar">
          <div className="prompt">{prompt}</div>
          {challengeTimeLeft > 0 && !mistake && (
            <div className={`q-timer ${challengeTimeLeft <= 5 ? 'urgent' : ''}`}>{Math.ceil(challengeTimeLeft)}</div>
          )}
        </div>
      )}
      {coachLine && <div className="coach">{coachLine}</div>}
      {toast && <div className="toast">{toast}</div>}
      {xpPopup && <div className="xp-pop">{xpPopup}</div>}
      {mistake && <ExplainCard />}
    </>
  )
}

function IntroCard() {
  const levelId = useGameStore((s) => s.levelId)
  const level = getLevel(levelId)
  useEffect(() => {
    audio.unlock()
    // quite la voz -Carlos
    //audio.speakGuide(
    //  `Nivel ${level.id}. ${level.name}. ${level.subtitle}. W avanza y espacio salta.`,
    //)
    return () => audio.stopSpeech()
  }, [level.id, level.name, level.subtitle])
  return (
    <div className="modal">
      <p className="kicker">{level.hubLabel}</p>
      <h2>
        Nivel {String(level.id).padStart(2, '0')}
      </h2>
      <h3>{level.name}</h3>
      <p>{level.subtitle}</p>
      <p className="theme">{level.theme}</p>
      <p className="hint">W avanzar · A D moverse a los lados · Espacio saltar · Shift correr · Esc o P pausa</p>
      <button type="button" className="primary" onClick={() => {
        (document.activeElement as HTMLElement | null)?.blur()
        useGameStore.getState().setPhase('countdown')
      }}>
        Empezar
      </button>
      <button type="button" onClick={() => useGameStore.getState().backToHub()}>
        Mapa
      </button>
    </div>
  )
}

function Countdown() {
  const [value, setValue] = useState('3')
  useEffect(() => {
    const steps = ['3', '2', '1', '¡YA!']
    let i = 0
    audio.play('countdown')
    const id = window.setInterval(() => {
      i += 1
      if (i >= steps.length) {
        window.clearInterval(id)
        audio.play('go')
        const idLevel = useGameStore.getState().levelId
        if (idLevel === 1) {
          const line = 'Adelante con W. Salta el muro rojo con la barra espaciadora. Recoge monedas para la tienda.'
          useGameStore.getState().setCoachLine(line)
          //audio.speakGuide(line)
        }
        useGameStore.getState().setPhase('play')
        return
      }
      const next = steps[i] ?? '¡YA!'
      setValue(next)
      audio.play(next === '¡YA!' ? 'go' : 'countdown')
    }, 700)
    return () => window.clearInterval(id)
  }, [])
  return <div className="countdown">{value}</div>
}

function PauseCard() {
  const editorReturn = useGameStore((s) => s.editorReturn)
  return (
    <div className="modal">
      <h2>Pausa</h2>
      <button type="button" className="primary" onClick={() => useGameStore.getState().setPhase('play')}>
        Continuar
      </button>
      <button type="button" onClick={() => useGameStore.getState().startLevel(useGameStore.getState().levelId)}>
        Reiniciar nivel
      </button>
      <button type="button" onClick={() => useGameStore.getState().backToHub()}>
        {editorReturn ? 'Editor' : 'Mapa'}
      </button>
    </div>
  )
}

function ResultsCard() {
  const results = useGameStore((s) => s.results)
  const levelId = useGameStore((s) => s.levelId)
  const editorReturn = useGameStore((s) => s.editorReturn)
  if (!results) return null
  return (
    <div className="modal">
      <p className="kicker">NIVEL COMPLETADO</p>
      <h2>{starLine(results.stars)}</h2>
      <ul className="stats">
        <li>Precisión {Math.round(results.accuracy * 100)}%</li>
        <li>Tiempo {formatTime(results.time)}</li>
        <li>Errores {results.mistakes}</li>
        <li>Mejor racha x{results.bestStreak}</li>
      </ul>
      <p className="xp-chip">+{results.xp} XP</p>
      <div className="row">
        {!editorReturn && levelId < LEVEL_COUNT && (
          <button type="button" className="primary" onClick={() => useGameStore.getState().startLevel(levelId + 1)}>
            Siguiente nivel
          </button>
        )}
        <button type="button" onClick={() => useGameStore.getState().startLevel(levelId)}>
          Repetir
        </button>
        <button type="button" onClick={() => useGameStore.getState().backToHub()}>
          {editorReturn ? 'Editor' : 'Mapa'}
        </button>
      </div>
    </div>
  )
}

function ExplainCard() {
  const mistake = useGameStore((s) => s.mistake)
  if (!mistake) return null
  return (
    <div className="modal explain">
      <p className="kicker">{mistake.lastLife ? 'SE ACABARON LAS 3 VIDAS' : 'RESPUESTA INCORRECTA'}</p>
      <h2>{mistake.lastLife ? 'Por eso fallaste' : '¿Por qué está mal?'}</h2>
      <p className="explain-text">{mistake.text}</p>
      <button type="button" className="primary" onClick={() => useGameStore.getState().dismissMistake()}>
        {mistake.lastLife ? 'Ver resultado' : 'Continuar'}
      </button>
    </div>
  )
}

function FailCard() {
  const levelId = useGameStore((s) => s.levelId)
  const lastExplanation = useGameStore((s) => s.lastExplanation)
  const editorReturn = useGameStore((s) => s.editorReturn)
  return (
    <div className="modal">
      <h2>NIVEL FALLIDO</h2>
      <p>Se agotaron las 3 vidas.</p>
      {lastExplanation && <p className="explain-text">{lastExplanation}</p>}
      <div className="row">
        <button type="button" className="primary" onClick={() => useGameStore.getState().startLevel(levelId)}>
          Reintentar
        </button>
        <button type="button" onClick={() => useGameStore.getState().backToHub()}>
          {editorReturn ? 'Editor' : 'Mapa'}
        </button>
      </div>
    </div>
  )
}

function CreditsCard() {
  const results = useGameStore((s) => s.results)
  const save = useGameStore((s) => s.save)
  if (!results) return null
  return (
    <div className="modal wide">
      <p className="kicker">¡FELICIDADES!</p>
      <h2>ENGLISH BRIDGE</h2>
      <h3>
        {LEVEL_COUNT} NIVELES · {WORLD_COUNT} MUNDOS
      </h3>
      <ul className="stats">
        <li>Tiempo {formatTime(results.time)}</li>
        <li>Precisión {Math.round(results.accuracy * 100)}%</li>
        <li>Errores {results.mistakes}</li>
        <li>Mejor racha x{results.bestStreak}</li>
        <li>Estrellas {starLine(results.stars)}</li>
        <li>Total {save.totals.stars} estrellas · {save.xp} XP</li>
      </ul>
      <p className="xp-chip">+{results.xp} XP</p>
      <div className="row">
        <button type="button" className="primary" onClick={() => useGameStore.getState().backToHub()}>
          Volver al mapa
        </button>
      </div>
    </div>
  )
}

function SettingsPanel() {
  const settings = useGameStore((s) => s.save.settings)
  return (
    <div className="modal">
      <h2>Audio</h2>
      <label className="check">
        <input
          type="checkbox"
          checked={settings.muted}
          onChange={(e) => useGameStore.getState().updateSettings({ muted: e.target.checked })}
        />
        Silenciar
      </label>
      <label>
        Efectos
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={settings.sfx}
          onChange={(e) => useGameStore.getState().updateSettings({ sfx: Number(e.target.value) })}
        />
      </label>
      <label>
        Música
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={settings.music}
          onChange={(e) => useGameStore.getState().updateSettings({ music: Number(e.target.value) })}
        />
      </label>
      <button type="button" onClick={() => useGameStore.getState().setSettingsOpen(false)}>
        Cerrar
      </button>
    </div>
  )
}

function starLine(stars: number) {
  return `${'⭐'.repeat(stars)}${'☆'.repeat(Math.max(0, 5 - stars))}`
}
