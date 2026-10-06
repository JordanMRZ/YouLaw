const DAY_MS = 24 * 60 * 60 * 1000

export function localDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function daysBetween(earlier, later) {
  const [yearA, monthA, dayA] = earlier.split('-').map(Number)
  const [yearB, monthB, dayB] = later.split('-').map(Number)
  return Math.round((Date.UTC(yearB, monthB - 1, dayB) - Date.UTC(yearA, monthA - 1, dayA)) / DAY_MS)
}

export function displayedStreak(progress, today = localDateKey()) {
  const last = progress?.lastStreakDate
  const streak = Number(progress?.streak) || 0
  if (!last || streak <= 0) return 0
  const gap = daysBetween(last, today)
  if (gap < 0) return streak
  if (gap <= 1) return streak
  return 0
}

export function recordDailyPractice(progress, today = localDateKey()) {
  const last = progress?.lastStreakDate
  const current = displayedStreak(progress, today)
  if (last === today && current > 0) return { streak: current, lastStreakDate: today }
  if (last && daysBetween(last, today) === 1 && current > 0) return { streak: current + 1, lastStreakDate: today }
  return { streak: 1, lastStreakDate: today }
}
