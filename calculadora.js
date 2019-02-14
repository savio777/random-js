const args = process.argv

if(args[3]){
    return console.log('escreva a operação no argumento da execução tudo junto sem espaços')
}

let calculo = args[2].toString()

// teste~> node calculadora.js 2+1
//console.log(calculo.search('2'))
//console.log(calculo.search(' '))
//console.log(calculo.search('[+]'))

if(calculo.search('[+]') >= 0){
    let num1 = calculo.substring(0, calculo.search('[+]'))
    let num2 = calculo.substr(calculo.search('[+]') +1, calculo.length -1)
    
    return console.log(parseInt(num1) + parseInt(num2))

}else if(calculo.search('[-]') >= 0){
    let num1 = calculo.substring(0, calculo.search('[-]'))
    let num2 = calculo.substr(calculo.search('[-]') +1, calculo.length -1)
    
    return console.log(parseInt(num1) - parseInt(num2))

}else if(calculo.search('[*]') >= 0){
    let num1 = calculo.substring(0, calculo.search('[*]'))
    let num2 = calculo.substr(calculo.search('[*]') +1, calculo.length -1)
    
    return console.log(parseInt(num1) * parseInt(num2))

}else if(calculo.search('[/]') >= 0){
    let num1 = calculo.substring(0, calculo.search('[/]'))
    let num2 = calculo.substr(calculo.search('[/]') +1, calculo.length -1)
    
    return console.log(parseInt(num1) / parseInt(num2))
} 
