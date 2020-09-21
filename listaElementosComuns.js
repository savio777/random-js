const L1 = [2, 5, 5, 5];
const L2 = [2, 2, 3, 5, 5, 7];
const L3 = [];

const tamanhoL1 = L1.length;
const tamanhoL2 = L2.length;

if (tamanhoL1 < tamanhoL2) {
  let i = 0;
  let j = 0;

  while (i < tamanhoL1 - 1) {
    if (L1[i] == L2[j]) {
      L3.push(L1[i]);
      i++;
    } else {
      j++;
    }
  }
} else {
  let i = 0;
  let j = 0;

  while (j < tamanhoL2 - 1) {
    if (L1[i] == L2[j]) {
      L3.push(L2[j]);
      j++;
    } else {
      i++;
    }
  }
}

console.log(L3);
