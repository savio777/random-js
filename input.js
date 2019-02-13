// input com nodejs pela linha de comando

const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let answer = ''

input.question('seu nome~> ', (nome) => {
    answer = nome
    console.log(answer)
    input.close()
})

// segundo input pelo readline não funciona
input.question('seu sobrenome~> ', (sobrenome) => {
    console.log(`seu sobrenome~> ${sobrenome}`)
    input.close()
})