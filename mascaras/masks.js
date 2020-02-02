const phoneInput = document.getElementById('phone')

const maskPhone = (phone) => {
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1\f$2')
    .replace(/(\d{4})\f(\d)(\d{4})/, '$1$2 $3')
    .replace(/(\d{4})\d+?$/, '$1')
}

phone.addEventListener('input', (event) => {
  event.target.value = maskPhone(event.target.value)
}, false)
