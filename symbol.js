const symbol1 = Symbol("hello");

const symbol2 = Symbol("hello");

console.log(symbol1 === symbol1); // true

console.log(symbol1 === symbol2); // false

console.log(symbol1 == symbol2); // false

const objectExample = {
  [Symbol("name")]: "joão",
  [Symbol("name")]: "teste",
  [Symbol("lastname")]: "Pontes",
  year: 31,
};

console.log(objectExample);
// {
//     year: 31,
//     [Symbol(name)]: 'joão',
//     [Symbol(name)]: 'teste',
//     [Symbol(lastname)]: 'Pontes'
//   }

console.log(Object.keys(objectExample));
// [ 'year' ]

console.log(Object.getOwnPropertySymbols(objectExample));
// [ Symbol(name), Symbol(name), Symbol(lastname) ]

const getSymbolsData = Object.getOwnPropertySymbols(objectExample).map(
  (keySymbol) => objectExample[keySymbol]
);

console.log(getSymbolsData);
// [ 'joão', 'teste', 'Pontes' ]
