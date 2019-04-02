// input com nodejs pela linha de comando

const readline = require('readline')
/*
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
})*/


const input1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 
input1.question('> ', (data) => {
    console.log(data)
    input1.close()
})

module.exports.entrada = input1.question