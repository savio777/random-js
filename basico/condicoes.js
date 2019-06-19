const num1 = 1
const num2 = '1'

// somente '==' ou '!=' verifica somente o valor  
// com '===' ou '!==' verifica o valor e tipo

if (num1 == '1') {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num1 === '1') {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num2 == 1) {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num2 === 1) {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num1 != '1') {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num1 !== '1') {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num2 != 1) {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num2 !== 1) {
    console.log(true)
} else {
    console.log(false)
}

console.log()

const num3 = 5
const num4 = '10'

if (num3 > num4) {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num3 < num4) {
    console.log(true)
} else {
    console.log(false)
}

console.log()

if (num3 == num4) {
    console.log(true)
} else if (num3 <= num4) {
    console.log(true)
} else {
    console.log(false)
}

console.log()

const sexo = 'F'

switch (sexo) {
    case 'M':
        console.log('masculino')
        break
    case 'F':
        console.log('feminino')
        break
    default:
        console.log('não definido')
}

console.log()

if((1 == 1) && (1 == '1')){
    console.log(true)
}else{
    console.log(false)
}

console.log()

if((1 === 1) || (1 === '1')){
    console.log(true)
}else{
    console.log(false)
}

console.log()

if((1 === 1) != (1 === '1')){
    console.log(true)
}else{
    console.log(false)
}

console.log()

const teste = (1 === 1) != (1 === '1')

const teste1 = (1 == '1') ? 'verdade' : false

console.log(teste)

console.log()

console.log(teste1)