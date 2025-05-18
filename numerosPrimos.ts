/* para ser número primo:
    - maior que 1
    - só ser divisível por 1 ou ele mesmo
*/

function isPrimeNumber(n: number) {
  // deve ser maior que 1
  if (n <= 1) return false;

  // verificação se 'n' é divisível por outro número sem resto
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

for (let index = 0; index < 21; index++) {
  if (isPrimeNumber(index)) {
    console.log(`é primo: ${index}`);
  }
}
