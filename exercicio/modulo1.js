//exerc: https://station.rocketseat.com.br/api/files/1536602858136.pdf

// 1° EXERCICIO

function retornarEndereco(endereco) {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com n° ${endereco.numero}.`
}

const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

console.log(retornarEndereco(endereco), '\n')

//  2° EXERCICIO

function pares(x, y) {
    for (let i = x; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

pares(32, 321)

console.log('\n')

// 3° EXERCICIO 

function temHabilidades(skills) {
    for (i in skills) {
        if ((skills[i] === 'Javascript') || (skills[i] === 'javascript')) {
            return true
        }
        return false
    }
}

const skills = ["Javascript", "ReactJS", "React Native"]

console.log(temHabilidades(skills))

console.log('\n')

// 4° EXERCICIO

function experiencia(anos) {
    if ((anos > 0) && (anos <= 1)) {
        return 'Iniciante'
    } else if ((anos > 1) && (anos <= 3)) {
        return 'Intermediário'
    } else if ((anos > 3) && (anos <= 6)) {
        return 'Avançado'
    } else if (anos > 6) {
        return 'Jedi Master'
    }
}

const anosEstudo = 7

console.log(experiencia(anosEstudo), '\n')

// 5° EXERCICIO

function imprimir(usuarios) {
    for(let i in usuarios){
        console.log(`O ${usuarios[i].nome} possui as habilidades: ${usuarios[i].habilidades.join(', ')}`)
    }
}

const usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

imprimir(usuarios)

//console.log(imprimir(usuarios))