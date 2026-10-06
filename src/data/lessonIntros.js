import { lessonExercisesById } from './mockData.js'
import { dictionaryByLongestTerm, lookupLegalTerm } from './legalDictionary.js'

const levelLead = {
  A1: 'Practicarás inglés jurídico básico para presentarte, describir roles y usar documentos simples en contexto académico.',
  A2: 'Afianzarás vocabulario esencial de tribunales, procedimientos y evidencia con términos del glosario jurídico en inglés.',
  B1: 'Trabajarás responsabilidad, acuerdos, apelaciones y asesoría profesional con expresiones habituales en el ámbito legal.',
  B2: 'Profundizarás en contratos, prueba admisible e interpretación con precisión propia de un nivel superior.',
  C1: 'Explorarás lenguaje formal, conectores y argumentación avanzada en textos y cláusulas jurídicas complejas.',
}

function extractQuotedTerms(prompt) {
  const terms = []
  const pattern = /"([^"]+)"/g
  let match = pattern.exec(prompt)
  while (match) {
    terms.push(match[1].trim())
    match = pattern.exec(prompt)
  }
  return terms
}

function uniqueTerms(terms) {
  const seen = new Set()
  const result = []
  for (const term of terms) {
    const key = term.toLowerCase()
    if (!key || seen.has(key)) continue
    seen.add(key)
    result.push(term)
  }
  return result
}

function findDictionaryTermsInText(text) {
  const hay = String(text || '').toLowerCase()
  const hits = []
  for (const entry of dictionaryByLongestTerm) {
    const needle = entry.term.trim().toLowerCase()
    if (needle.length < 4 || !hay.includes(needle)) continue
    hits.push(entry.term)
  }
  return hits
}

export function getLessonIntro(lesson) {
  const exercises = lessonExercisesById[lesson.id] || []
  const promptText = exercises.map((exercise) => exercise.prompt).join(' ')
  const quoted = uniqueTerms([
    ...exercises.flatMap((exercise) => extractQuotedTerms(exercise.prompt)),
    ...findDictionaryTermsInText(promptText),
  ])
  const vocabulary = quoted
    .map((term) => {
      const entry = lookupLegalTerm(term)
      if (!entry) return { term, definition: null, source: null }
      return {
        term: entry.term,
        definition: entry.definition,
        source: entry.source,
      }
    })
    .slice(0, 4)

  const practiceLabel = vocabulary.length
    ? vocabulary.map((item) => item.term).join(', ')
    : 'comprensión lectora y elección de la opción más precisa'

  return {
    lead: levelLead[lesson.level] || levelLead.A1,
    objective: lesson.subtitle,
    practice: practiceLabel,
    challenge: 'Responde 5 preguntas de opción múltiple. Repasarás las que falles antes de cerrar la lección.',
    vocabulary,
    exerciseCount: exercises.length || 5,
    level: lesson.level,
  }
}
