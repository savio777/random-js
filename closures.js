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
