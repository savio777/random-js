// fonte: https://medium.com/tableless/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b
// fonte: https://github.com/js-functional/js-funcional#pure-functions
// estudo mais focado em programação funcional com javascript

const espaco = () => console.log("\n\n");

// 0~> FUNÇÃO PURA
//      resolver problemas de efeitos colaterais garantia de acertos nos resultados das funções com parametros

// MANEIRA IMPURA, necessita da crianção de uma variavel para funcionar
let numImpuro = 0;
const incrementarImpuro = () => numImpuro + 1;

// MANEIRA PURA
const incrementarPuro = (num) => num + 1;

// 1~> HIGHER-ORDER FUNCTION
//      função que recebe outra função como parametro

const calcularCompleto = function (func, x, y) {
  return func(x, y);
};

// forma reduzida, não precisa de declarar o retorno e nem {} por ter somente uma linha a função
const calcular = (func, x, y) => func(x, y);

// funções que serão parametro para a
const somar = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => x / y;

console.log("1~> HIGHER-ORDER FUNCTION");
console.log(calcular(somar, 10, 5)); // 15
console.log(calcular(sub, 10, 5)); // 5
console.log(calcular(mult, 10, 5)); // 50
console.log(calcular(div, 10, 5)); // 2

//
espaco();
console.log("2~> MAP");
// 2~> MAP
//      função que retorna um array e pode modificar seus valores utilizando em conjunto com outras funções

let numeros = [1, 2, 3, 4, 5];

const quadrado = (x) => x * x;

numeros = numeros.map(quadrado); // [1, 4, 9, 16, 25]
console.log(numeros);

let alunos = [
  { nome: "sávio", curso: "ADS", periodo: 5 },
  { nome: "thamara", curso: "direito", periodo: 3 },
  { nome: "saudades", curso: "direito", periodo: 3 },
];

let professores = [
  { nome: "thiago", curso: "ADS" },
  { nome: "vitor", curso: "ADS" },
];

const elementosLista = (func, lista) => lista.map(func);

const somenteNomes = (objeto) => objeto.nome; // retornar elemento nome do objeto
const somenteCurso = (objeto) => objeto.curso;

/*const nomes = (lista) => lista.map(somenteNomes)   // retornar nomes das listas
console.log(nomes(alunos) + ',' + nomes(professores))*/

console.log(
  elementosLista(somenteNomes, alunos) +
    "," +
    elementosLista(somenteNomes, professores)
);
// sávio,thamara,saudades,thiago,vitor
console.log(
  elementosLista(somenteCurso, alunos) +
    "," +
    elementosLista(somenteCurso, professores)
);
// ADS,direito,direito,ADS,ADS

//
espaco();
console.log("3~> FILTER");
// 3~> FILTER
//      utilizar regras de filtragem para a criação de novas listas

let listaNum = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somenteNum = (func, lista) => lista.filter(func);

// forma mais explicada
/*const par = (num) => {
    if(num%2 === 0){
        return num
    }
}*/

// forma reduzida
const par = (num) => num % 2 === 0;
const impar = (num) => num % 2 !== 0;
const maior5 = (num) => num > 5;
const menor5 = (num) => num < 5 && num > 0;

console.log(somenteNum(par, listaNum)); // [ -2, 0, 2, 4, 6, 8, 10 ]
console.log(somenteNum(impar, listaNum)); // [ -1, 1, 3, 5, 7, 9 ]
console.log(somenteNum(maior5, listaNum)); // [ 6, 7, 8, 9, 10 ]
console.log(somenteNum(menor5, listaNum)); // [ 1, 2, 3, 4 ]

//
espaco();
console.log("4~> REDUCE");
// 4~> REDUCE
//      retornar somente um valor com alguma regra utilizando os valores da lista, e pode ser utilizado com strings

let listaNumeros = [-1, 1, 2, 3, 4, 5];

const soma = (x, y) => x + y;
const diminuir = (x, y) => x - y;

// recebe como parametro a função da operação matematica e um numero que será somado ao resultado
const reduzir = (func, lista) => lista.reduce(func, 0);
const reduzir10 = (func, lista) => lista.reduce(func, 10);

console.log(reduzir(soma, listaNumeros)); //  14
console.log(reduzir(diminuir, listaNumeros)); // -14
console.log(reduzir10(soma, listaNumeros)); // 24
console.log(reduzir10(diminuir, listaNumeros)); //-4

let data = ["06", "01", "2018"];
let meuNome = ["savio", "palacio", "fontes"];

const palavrasReduzir = (func, lista) => lista.reduce(func);

const juntarNome = (antes, depois) => antes + " " + depois;
const juntarData = (antes, depois) => antes + "/" + depois;

console.log(palavrasReduzir(juntarNome, meuNome)); // savio palacio fontes
console.log(palavrasReduzir(juntarData, data)); // 06/01/2018
console.log(meuNome.reduce(juntarNome, "~> ")); // ~>  savio palacio fontes
console.log(data.reduce(juntarData, "~> ")); // ~>/06/01/2018
// tem q ter cuidado com o parametro que for passar no reduce, não é obrigatorio
// passar parametro para adicionar ao inicio do retorno, aconselhavel não adicionar
// o segundo parametro de adição em reduce para listas com array, a não ser que faça if
// para não gerar resultados indesejados

//
espaco();
console.log("5~> CURRYING");
// 5~> CURRYING
//      utilizar varias função para retornar um valor

/*const adicionar = (x) => {
    (y) => {
        return x + y
    }
}*/

const adicionar = (x) => (y) => x + y;

const adicionarCom5 = adicionar(5);
const adicionarCom10 = adicionar(10);
const adicionarComOi = adicionar("oi");

console.log(adicionar(1)(1)); // 2
console.log(adicionar(1)); // [Function]  errado
console.log(adicionarCom5(1)); // 6
console.log(adicionarCom10(1)); // 11
console.log(adicionar("oi")("kkkk")); // oikkkk
console.log(adicionarComOi("kkkk")); // oikkkk

//
espaco();
console.log("~> COMPOSE");
// ~> COMPOSE
//      funções pequenas para gerar funções mais complexas, fazer reuso

// irá juntar as duas funções e  passar o parametro x para cada função
const compose = (j, k) => {
  return (x) => {
    return j(k(x));
  };
};

// funções para juntar e retornar algum valor
const maiuscula = (x) => x.toUpperCase();
const ponto = (x) => x + ".";
const minuscula = (x) => x.toLowerCase();
const exclamacao = (x) => x + "!";

// utilizar todas as outras funções de forma simples
const gritar = compose(maiuscula, exclamacao);
const falar = compose(minuscula, ponto);

console.log(gritar("oi")); // OI!
console.log(falar("OI")); // oi.
