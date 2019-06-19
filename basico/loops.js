for (let i = 0; i < 11; i++) {
    console.log(i)
}

console.log()

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log()

const num = 10

while (num < 0) {
    console.log(num)

    num--
}

console.log()

// se usar const no 'do while' dá erro 
let num1 = 0

do {
    console.log(num1)

    num1++
} while (num1 <= 10)

console.log()

for (let i = 0; i < 11; i++) {
    (i % 2 == 0) ? console.log(i) : console.log()
}

console.log()

const vetor = [1, 2, 3]

for (let i = 0; i < 3; i++) {
    console.log(vetor[i])
}

console.log()

let vetor1 = []

for (let num = 0; num > -11; num--) {
    vetor1.push(num)
}

for(let i in vetor1){
    console.log(vetor1[i])
}
