const BIRTH_DATE = new Date(2006, 10, 7)

export function getAge(now = new Date()) {
  let age = now.getFullYear() - BIRTH_DATE.getFullYear()
  const hasHadBirthday =
    now.getMonth() > BIRTH_DATE.getMonth() ||
    (now.getMonth() === BIRTH_DATE.getMonth() && now.getDate() >= BIRTH_DATE.getDate())

  if (!hasHadBirthday) age -= 1

  return age
}
