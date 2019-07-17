// elementos do ToDo

const lista = document.querySelector('#app ul')
const input = document.querySelector('#app input')
const botao = document.querySelector('#app button')

// tarefas
let data = []

function carregarTarefas() {

    // para começar a contar em 0
    let cont = -1

    // limpar elementos da lista do 'ul'
    lista.innerHTML = ''

    for (i of data) {

        cont++

        // criação de elementos e seus atributos

        const todoElemento = document.createElement('li')
        todoElemento.setAttribute('id', cont)
        const todoTexto = document.createTextNode(i)

        const todoRemover = document.createElement('a')
        todoRemover.setAttribute('href', '#')
        const textoRemover = document.createTextNode('remover')

        // adicionar texto ao link de remover
        todoRemover.appendChild(textoRemover)

        // adicionar texto ao elemento da lista criado
        todoElemento.appendChild(todoTexto)

        // adicionar botão de remover as tarefas
        todoElemento.appendChild(todoRemover)

        todoRemover.setAttribute('onclick', `deletarTarefa(${todoElemento.id})`)

        // adicionar lista os 'li' ao 'lu'
        lista.appendChild(todoElemento)
    }
}

function addTarefa() {
    let textoTarefa = input.value

    data.push(textoTarefa)

    input.value = ''

    carregarTarefas()
}

function deletarTarefa(id) {
    data.splice(id, 1)

    carregarTarefas()
}

botao.onclick = addTarefa
