/*
Frases para Teste:

A cara rajada da jararaca.
A Rita, sobre vovô, teve a torir a.
Olé! Maracujá, caju, caramelo!
Socorram-me, subi no ônibus em Marrocos.
Aí, Lima falou: "O lobo ama o bolo", Olavo. Limia.
Roma me tem amor.
A gorda ama a droga.
*/

const str1 = 'A cara rajada da jararaca.';
const str2 = 'A Rita, sobre vovô, teve a torir a.';
const str3 = 'Olé! Maracujá, caju, caramelo!';
const str4 = 'Socorram-me, subi no ônibus em Marrocos.';
const str5 = 'Aí, Lima falou: "O lobo ama o bolo", Olavo. Limia.';
const str6 = 'Roma me tem amor.';
const str7 = 'A gorda ama a droga.';

function verifyIfPalindromo(strParam = '') {
  const str1 = strParam
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ !,;.?]/g, '');
  let str2 = '';
  for (let index = str1.length - 1; index > -1; index--) {
    str2 = str2 + str1[index];
  }
  console.log({ strParam, str1, str2, isTrue: str1 === str2 });
  return str1 === str2;
}

verifyIfPalindromo(str1);
verifyIfPalindromo(str2);
verifyIfPalindromo(str3);
verifyIfPalindromo(str4);
verifyIfPalindromo(str5);
verifyIfPalindromo(str6);
verifyIfPalindromo(str7);
