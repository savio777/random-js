// input com nodejs pela linha de comando

const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let answer = ''

input.question('seu nome~> ', (string) => {
    answer = string
    console.log(answer)
    input.close()
})