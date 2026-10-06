import dictionary from './references/legal-dictionary.json'

const byTerm = new Map(
  dictionary.map((entry) => [entry.term.trim().toLowerCase(), entry]),
)

export const dictionaryByLongestTerm = [...dictionary].sort(
  (a, b) => b.term.trim().length - a.term.trim().length,
)

export function lookupLegalTerm(rawTerm) {
  const term = String(rawTerm || '').trim()
  if (!term) return null

  const key = term.toLowerCase()
  if (byTerm.has(key)) return byTerm.get(key)

  const normalized = key.replace(/\s+/g, ' ')
  for (const [dictKey, entry] of byTerm.entries()) {
    if (dictKey === normalized) return entry
  }

  const candidates = dictionary.filter((entry) => {
    const dictKey = entry.term.trim().toLowerCase()
    return dictKey.includes(normalized) || normalized.includes(dictKey)
  })

  if (candidates.length === 1) return candidates[0]
  if (candidates.length > 1) {
    const exactWord = candidates.find((entry) => entry.term.trim().toLowerCase() === normalized)
    if (exactWord) return exactWord
    return candidates.sort((a, b) => a.term.length - b.term.length)[0]
  }

  return null
}

export const legalDictionaryCount = dictionary.length
