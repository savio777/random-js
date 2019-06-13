// classe do modo convencional
class Test{
    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
    }

    somar(){
        return this.num1 + this.num2
    }
}

// maneira convencional pode ser alterado

const test = new Test(1, 2)
console.log(test.somar()) // 3
console.log(test.somar.bind({num1: 2, num2: 3})()) // 5

console.log()

// classe feito de modo mais correto no javascript
// construtor
const Calculadora = function (num1, num2) {
    this.num1 = num1
    this.num2 = num2

    // funções 
    return {
        somar: () => {
            return this.num1 + this.num2
        },
        diminuir: () => {
            return this.num1 - this.num2
        },
        multiplicar: () => {
            return this.num1 * this.num2
        },
        dividir: () => {
            return this.num1 / this.num2
        }
    }
}

// resultado imutavel
const calc = new Calculadora(1, 2)
console.log(calc.somar()) // 3
console.log(calc.somar.bind({ num1: 5, num2: 5 })()) // 3

console.log()

// funcional 
const calculadora = (func, num1, num2) => func(num1, num2)
const somar = (num1, num2) => num1 + num2

console.log(calculadora(somar, 1, 2)) // 3
