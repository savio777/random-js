let number = 10;
const number2 = 20;
const number3 = 5;
const numberString = "10";
const number3String = "5";
const trueStr = "true";
const falseStr = "false";

console.log(`${number} == ${number} = ${number == number}`);

console.log(`${number} == '${numberString}' = ${number == numberString}`);

console.log(`${number} === '${numberString}' = ${number === numberString}`);

console.log(`${number} != ${number} = ${number != number}`);

console.log(`${number} !== ${number} = ${number !== number}`);

console.log(`${number} == ${number} = ${number == number}`);

console.log(`${number} === ${number} = ${number === number}`);

console.log(`${number} != '${numberString}' = ${number != numberString}`);

console.log(`${number} !== '${numberString}' = ${number !== numberString}`);

console.log(`${number} == '${numberString}' = ${number == numberString}`);

console.log(`${number} === '${numberString}' = ${number === numberString}`);

console.log(`\n`);

console.log(`${number} > ${number2} = ${number > number2}`);

console.log(`${number} >= ${number2} = ${number >= number2}`);

console.log(`${number} < ${number2} = ${number < number2}`);

console.log(`${number} <= ${number2} = ${number <= number2}`);

console.log(`${number} <= ${number} = ${number <= number}`);

console.log(`${number} >= ${number} = ${number >= number}`);

console.log(`${number} >= '${numberString}' = ${number >= numberString}`);

console.log(`${number} <= '${numberString}' = ${number <= numberString}`);

console.log(`${number2} <= '${numberString}' = ${number2 <= numberString}`);

console.log(`${number2} >= '${numberString}' = ${number2 >= numberString}`);

console.log(`\n`);

console.log(`${true} == ${true} = ${true == true}`);

console.log(`${false} == ${false} = ${false == false}`);

console.log(`${true} === ${true} = ${true === true}`);

console.log(`${false} === ${false} = ${false === false}`);

console.log(`${true} == ${false} = ${true == false}`);

console.log(`${true} === ${false} = ${true === false}`);

console.log(`${true} == '${trueStr}' = ${true == trueStr}`);

console.log(`${true} === '${trueStr}' = ${true === trueStr}`);

console.log(`${false} == '${falseStr}' = ${false == falseStr}`);

console.log(`${false} === '${falseStr}' = ${false === falseStr}`);

console.log(`\n`);

console.log(`${number} + ${number} = ${number + number}`);

console.log(`${number} + '${numberString}' = ${number + numberString}`);

console.log(`${number} - ${number} = ${number - number}`);

console.log(`${number} - '${numberString}' = ${number - numberString}`);

console.log(`${number2} / ${number} = ${number2 / number}`);

console.log(`${number2} * ${number} = ${number2 * number}`);

console.log(`${number2} * ${number / 100} = ${number2 * (number / 100)}`);

console.log(`${number2} * ${number / 1000} = ${number2 * (number / 1000)}`);

console.log(
  `${number2 / 10} * ${number / 100} = ${(number2 / 10) * (number / 100)}`
);

console.log(`\n`);

console.log(`${number} + ${number3} = ${number + number3}`);

console.log(`${number} + '${number3String}' = ${number + number3String}`);

console.log(`${number} - ${number3} = ${number - number3}`);

console.log(`${number} - '${number3String}' = ${number - number3String}`);

console.log(`\n`);

console.log(`${true} && ${true} = ${true && true}`);

console.log(`${true} ?? ${false} = ${true ?? false}`);

console.log(`${false} ?? ${true} = ${false ?? true}`);

console.log(`${undefined} ?? ${false} = ${undefined ?? false}`);

console.log(`${false} && ${false} = ${false && false}`);

console.log(`${true} ? ${number} : ${number2} = ${true ? number : number2}`);

console.log(`${false} ? ${number} : ${number2} = ${false ? number : number2}`);

console.log(`!true = ${!true}`);

console.log(`!!true = ${!!true}`);

console.log(`!!!true = ${!!!true}`);

console.log(`!false = ${!false}`);

console.log(`!!false = ${!!false}`);

console.log(`!!!false = ${!!!false}`);

console.log(`true || true = ${true || true}`);

console.log(`false || false = ${false || false}`);

console.log(`false || true = ${false || true}`);

console.log(`\n`);

console.log(`number++ = ${number++}`);
console.log(`= ${number}`);

console.log(`number-- = ${number--}`);
console.log(`= ${number}`);

console.log(`++number = ${++number}`);
console.log(`--number = ${--number}`);

console.log(`\n`);

console.log(`${number} % 2 === 0 = ${number % 2 === 0}`);
number++;
console.log(`${number} % 2 === 0 = ${number % 2 === 0}`);
number--;
