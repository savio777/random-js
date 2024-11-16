(() => {
  console.log("arrow func");
})();

(function () {
  console.log("regular func");
})();

console.log(
  -(() => {
    return 1;
  })()
);
// -1

console.log(
  !(() => {
    return "";
  })()
);
// true

const test = function hello() {
  console.log("hello");
};
// hello

console.log(test());
// undefined

// essas funções serão mostradas em logs de erro como funções anônimas
// recomendável usar nome para essas funções para facilitar no debug

// no caso do closure (()=>{})() -> executa algo e não fica armazenado na memoria após a execução
