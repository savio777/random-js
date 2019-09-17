// http://www2.ic.uff.br/~otton/graduacao/programacao/exemplos_pseudo_codigo.pdf

const prompt = require('prompt')

prompt.start()

const x1 = (a, b, delta) => (- b + Math.sqrt(delta)) / 2 * a
const x2 = (a, b, delta) => (- b - Math.sqrt(delta)) / 2 * a

prompt.get(['a', 'b', 'c'], (error, result) => {
    const a = result.a
    const b = result.b
    const c = result.c

    const delta = b * b - (4.0 * (a * c))

    if (a !== 0) {
        if (delta >= 0) {
            console.log(`x'~> ${x1(a, b, delta)}`)
            console.log(`x''~> ${x2(a, b, delta)}`)
        } else {
            console.log('delta negativo. Não ha raízes reais')
        }
    } else {
        console.log(`O polinômio do primeiro grau~> ${-c / b}`)
    }
})
