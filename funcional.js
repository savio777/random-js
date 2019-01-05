// fonte: https://medium.com/tableless/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b
// fonte: https://github.com/js-functional/js-funcional#pure-functions
// estudo mais focado em programação funcional com javascript

const espaco = () => console.log('\n\n')

// 0~> FUNÇÃO PURA
//      resolver problemas de efeitos colaterais garantia de acertos nos resultados das funções com parametros

// MANEIRA IMPURA, necessita da crianção de uma variavel para funcionar
let numImpuro = 0
const incrementarImpuro = () => numImpuro + 1

// MANEIRA PURA
const incrementarPuro = (num) => num + 1


// 1~> HIGHER-ORDER FUNCTION
//      função que recebe outra função como parametro

const calcularCompleto = function(func, x, y){
    return func(x, y)
}

// forma reduzida, não precisa de declarar o retorno e nem {} por ter somente uma linha a função
const calcular = (func, x, y) => func(x, y)

// funções que serão parametro para a
const somar = (x, y) => x + y
const sub = (x, y) => x - y
const mult = (x, y) => x * y
const div = (x, y) => x / y

console.log('1~> HIGHER-ORDER FUNCTION') 
console.log(calcular(somar, 10, 5))   // 15
console.log(calcular(sub, 10, 5))     // 5
console.log(calcular(mult, 10, 5))    // 50
console.log(calcular(div, 10, 5))     // 2

//
espaco()
console.log('2~> MAP')
// 2~> MAP
//      função que retorna um array e pode modificar seus valores utilizando em conjunto com outras funções

let numeros = [1, 2, 3, 4, 5]

const quadrado = (x) => x * x

numeros = numeros.map(quadrado)  // [1, 4, 9, 16, 25]
console.log(numeros)

let alunos = [
    {nome: 'sávio', curso: 'ADS', periodo: 5},
    {nome: 'thamara', curso: 'direito', periodo: 3},
    {nome: 'saudades', curso: 'direito', periodo: 3}
]

let professores = [
    {nome: 'thiago', curso: 'ADS'},
    {nome: 'vitor', curso: 'ADS'}
]

const elementosLista = (func, lista) => lista.map(func)  

const somenteNomes = (objeto) => objeto.nome   // retornar elemento nome do objeto
const somenteCurso = (objeto) => objeto.curso  

/*const nomes = (lista) => lista.map(somenteNomes)   // retornar nomes das listas
console.log(nomes(alunos) + ',' + nomes(professores))*/

console.log(elementosLista(somenteNomes, alunos) + ',' + elementosLista(somenteNomes, professores))
console.log(elementosLista(somenteCurso, alunos) + ',' + elementosLista(somenteCurso, professores))

//
espaco()
console.log('3~> Filter     CONTINUAR')
// 3~>   // CONTINUAR FILTER

// https://medium.com/tableless/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b
