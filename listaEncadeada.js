/*fonte: 
https://www.youtube.com/watch?v=ANrh76RUvHs&t=208s
https://www.youtube.com/watch?v=tVl7Z-FnQ50
*/
function listaEncadeada(){

    // elementos da lista
    let cabeca = null
    let tamanho = 0

    // elementos de um nó
    const no = (valor) => {
        // retornar valor do nó e o valor de proximo 
        return {
            valor,
            proximo: null
        }
    }

    // função para adicionar nós
    const adicionar = (valor) => {
        // se cabeça não existir, o primeiro nó vira a cabeça e será retornado
        if(!cabeca){
            cabeca = no(valor)
            tamanho++  // incrementar tamanho da lista
            return cabeca
        }

        // guardar primeiro nó
        let novoNo = cabeca
        
        // passar para o ultimo nó (atual)
        while(novoNo.proximo){
            novoNo = novoNo.proximo
        }

        // adicionar novo nó em proximo do nó atual (ultimo), (onde estava vazio) 
        novoNo.proximo = no(valor)
        tamanho++
        return novoNo.proximo
    }

    // função para remover nó
    const remover = (noRemover) => {
        // se a lista estiver vazia
        if(tamanho === 0){
            return console.log('lista está vazia')
        }

        // se for um item no começo da lista
        if(noRemover === cabeca){
            cabeca = noRemover.proximo
            return
        }

        // 
        let noAtual = cabeca
        // enquanto o nó existir e for diferente do nó que quer remover 
        while(noAtual.proximo && (noAtual.proximo !== noRemover)){
            noAtual = noAtual.proximo
        }

        // sobrescrever o nó que é para ser removido pelo proximo nó
        noAtual.proximo = noRemover.proximo
    }

    const getPorIndice = (indice) => {
        if((tamanho === 0) || (indice >= tamanho)){
            return null
        }

        let cont = 0
        let noAtual = cabeca
        while(noAtual.proximo && (cont < indice)){
            noAtual = noAtual.proximo
            cont++
        }

        return noAtual

    }

    const getPorValor = (noValor) => {
        if((tamanho === 0)){
            return null
        }

        if(cabeca.valor === noValor){
            return cabeca
        }

        let noAtual = cabeca
        while(noAtual.proximo){
            noAtual = noAtual.proximo
            if(noAtual.valor === noValor){
                return noAtual
            }
        }
    }

    // funções de retorno (parecido com as funções publicas de retorno da OO)
    return {
        tamanho: () => console.log(tamanho),  // função para retornar tamanho da lista
        adicionar: (valor) => adicionar(valor),  // adicionar nó
        imprimir: () => console.log(cabeca),  // imprimir lista inteira
        remover: (noRemover) => remover(noRemover),  // remover nó da lista
        getPorValor: (noValor) => getPorValor(noValor),    // mostrar  
        getPorIndice: (indice) => getPorIndice(indice) // mostrar indice do nó
    }
}

const lista = listaEncadeada()

/* errado (quando o metodo tamanho ainda retornava só o valor de tamanho)
console.log(lista)       // { size: [Function: size] }
console.log(lista.tamanho)  // [Function: size]  
*/

// certo
//lista.tamanho() // 0 se a lista estiver vazia

lista.adicionar('oi kkk')  // adicionado no a lista
//lista.tamanho()
//lista.imprimir()  // valor do nó e proximo nó

lista.adicionar('iae kkk')
//lista.tamanho()

lista.adicionar('flw kkkkk')
lista.tamanho()
//lista.imprimir()  // um nó se ligando ao outro

// doferemtes maneiras de imprimir o ultimo nó
console.log(lista.getPorIndice(2))  // irá imprimir ultimo nó (tamanho - 1)
//console.log(lista.getPorIndice(3))  // irá imprimir null por não existir nó com esse indice
console.log(lista.getPorValor('flw kkkkk'))
//console.log(lista.getPorValor('oi kkk'))  // irá retornar toda a lista por ser o valor do primeiro no

// foi removido o ultimo nó
lista.remover(lista.getPorIndice(2))
//lista.imprimir()

// foi removido o primeiro nó
lista.remover(lista.getPorIndice(0))
lista.imprimir()