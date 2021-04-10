/**
 * Validate CPF
 *
 * @param {*} cpf
 * @returns {boolean}
 */
export const validateCPF = (cpf) => {
  if (cpf) {
    cpf = cpf.replace(/[^\d]+/g, '')
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return 'formato inválido'
    }
    var add = 0
    for (var i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i)
    }
    var rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) {
      rev = 0
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return 'formato inválido'
    }
    add = 0
    for (i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i)
    }
    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) {
      rev = 0
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return 'formato inválido'
    }
    return true
  }
}

/**
 * Validate Email
 *
 * @param email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  if (email) {
    const emailReg = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
    return emailReg.test(email) || 'Formato inválido'
  }
  return 'formato inválido'
}
