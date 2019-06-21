function alerta() {
    alert('você clicou no botão')
}

// gera um vetor com todos os elementos da tag selecionado
const botoes = document.getElementsByTagName('button')

// pega somente o elemento do id selecionado
const nome = document.getElementById('nome')

// dessa maneira 
//const enviar = document.querySelector('#enviar')
//ou
//const enviar = document.querySelector('input[name=enviar]')

// funciona igual o element por tag name
const inputs = document.querySelectorAll('input')

const enviar = document.getElementById('enviar')

const botaoTeste = document.getElementById('botao')

botaoTeste.onclick = function () {
    alerta()
}

enviar.onclick = function () {
    alert(nome.value)
}

// criar elementos do html e seus atributos
const link = document.createElement('a')
link.setAttribute('href', 'http://demounidev.com.br')

// criando texto e adicionando o link ao texto
const textLink = document.createTextNode('acessar site')
link.appendChild(textLink)

// adicionando o link a div
const container = document.getElementById('iae')
container.appendChild(link)

// testes
const oi = document.createElement('h1')
const saudacao = document.createTextNode('Iae')
oi.appendChild(saudacao)
const containerOi = document.getElementById('oi')
containerOi.appendChild(oi)

// função para remover elemento
//containerOi.removeChild(oi)

// modificar a estilização dos elementos
containerOi.style.color = 'red'

console.log(botoes, enviar, nome, inputs)
