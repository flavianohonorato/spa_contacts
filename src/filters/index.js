export const filterDate = value => {
  const d = new Date(value)
  return d.toLocaleDateString('pt-BR')
}

export const filterMask = (value, pattern) => {
  let i = 0
  const v = value.toString()
  return pattern.replace(/#/g, () => v[i++] || '')
}
