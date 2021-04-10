export const customMask = (value, pattern) => {
  let i = 0
  const v = value.toString()
  return pattern.replace(/#/g, () => v[i++] || '')
}
