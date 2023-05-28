/* APRENDENDO PARADIGMA FUNCIONAL
 * fonte:
 * https://www.youtube.com/watch?v=y97WSB4GRdA
 */

// es5 (antigo)
var somar5 = function (x, y) {
  return x + y;
};

/* es6 (atual e recomendado)
 *  ~> utilizar const em funções para não ser possivel modificar o valor da variavel sem passar parametros
 *   ex: somar6 = 1  -> isso irá gerar erro
 *  ~> não usar function e em vez de disso utilizar =>
 */

const somar6 = (x, y) => {
  return x + y;
};

// como a função só tem uma linha pode tirar {} e a palavra return
//const somarSimplificado = (x, y) => x + y

// problemas q podem ser gerados por metodos antigos sem const
somar5 = 2;

// ERROS
// TypeError: Assignment to constant variable.
//somar6 = 2

// se declarar o valor no lugar errado não irá imprimir ou retornar o que é desejado no local desejado
/*x, y) => {
    return x + y
}*/
//somar6(1, 1)
//console.log(`${somar5}, ${somar6}`)

// certo
//console.log(`${somar5}, ${somar6(1, 1)}`)

/* segunda parte
 ** uso do HIGHER-ORDER FUNCTION
 **/

const mult = (x, y) => x * y;

// função para chamar outras funções de calculo, e já passa os parametros
const calcular = (fn, x, y) => fn(x, y);

console.log(calcular(somar6, 1, 1)); // 2
console.log(calcular(mult, 1, 1)); // 1

// CURRYING
const somarSimplificado = (x) => (y) => x + y;
const somarDeNovo = somarSimplificado(1);

console.log(somarDeNovo(1)); // 2

// https://www.youtube.com/watch?v=nZ1DMMsyVyI

const add = (...nums) => nums.reduce((x, y) => x + y);

console.log(add(1, 2, 3, 6, 1, 5, 8, 8));
