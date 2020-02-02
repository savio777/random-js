const phoneInput = document.getElementById('phone')

// (99) 99999 9999
const maskPhone = (phone) => {
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1 $2')
  // work only in opera
  //.replace(/(\d{4})\f(\d)(\d{4})/, '$1$2 $3')
  //.replace(/(\ \d{4})\d+?$/, '$1')
}

phoneInput.addEventListener('input', (event) => {
  event.target.value = maskPhone(event.target.value)
}, false)


const cpfInput = document.getElementById('cpf')

// 999.999.999-99
const maskCpf = (cpf) => {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})(\d)/, '$1')
}

cpfInput.addEventListener('input', (event) => {
  event.target.value = maskCpf(event.target.value)
}, false)


const cnpjInput = document.getElementById('cnpj')

// 99.999.999/9999-99
const maskCnpj = (cnpj) => {
  return cnpj
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})(\d)/, '$1')
}

cnpjInput.addEventListener('input', (event) => {
  event.target.value = maskCnpj(event.target.value)
}, false)


const priceInput = document.getElementById('price')

// 999.999.999,99
const maskPrice = (price) => {
  return price
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})/, '$1,$2')
}

priceInput.addEventListener('click', (event) => {
  event.target.value = maskPrice(event.target.value)
})
