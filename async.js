// fonte: https://www.youtube.com/watch?v=7Bs4-rqbCQc

// carregar file system
const fs = require("fs");

// callback

// vai executar assincronamente para não comprometer a velocidade do processamento do codigo
// pelo fato do fs consumir mais recursos
// o callback executa depois do promisse
fs.readFile("./teste.txt", (erro, conteudo) => {
  console.log(4); // vai executar primeiro
  fs.readFile("./README.md", (erro1, conteudo1) => {
    console.log(erro, String(conteudo), conteudo); // null 'iae\n777\n1.14' <Buffer 69 61 65 0a 37 37 37 0a 31 2e 31 34>
    //console.log(erro1, String(conteudo1))
  });
});

// promise

// mais rapido que o callback normal
// promete antecipadamente um valor e faz um tratamento desse retorno utilizando um callback
// mais recomendavel pelo fato de não gerar codigos em seta como no callback
const lerArquivo = (arquivo) => {
  return new Promise((resolver, rejeitar) => {
    fs.readFile(arquivo, (erro, conteudo) => {
      if (erro) {
        rejeitar(erro);
      } else {
        resolver(conteudo);
      }
    });
  });
};

// testando
lerArquivo("teste.txt").then((conteudo) => {
  console.log(5); // executa antes novamente
  console.log(String(conteudo)); //iae
  //777
  //1.14
  // resultado saiu executando as quebras de linhas por não ter executado o error que retornava null

  lerArquivo("./README.md")
    .then((conteudo) => {
      console.log(6);
      console.log(String(conteudo));
    })
    .finally(() => {
      console.log(7);
    });
});

// async/await

// é um açucar sintatico para utilizar o promisse
// mais simples de ler e escrever

const teste = async () => {};

console.log(teste()); // Promise { undefined }

const asyncAwait = async () => {
  const conteudo = await lerArquivo("README.md");
  console.log(8);
  console.log(String(conteudo));
};

const asyncAwait2 = async () => {
  try {
    const conteudo = await lerArquivo("teste.txt");
    return String(conteudo);
  } catch (erro) {
    console.log(erro);
  }
};

console.log(asyncAwait());

asyncAwait2().then((conteudo) => {
  console.log(9);
  console.log(conteudo);
});

// executa antes por demandar menos recursos

console.log(1);

console.log(2);

console.log(3);

Promise.all([lerArquivo("./README.md"), lerArquivo("./teste.txt")]).then(
  (res) => console.log({ all: res })
);
