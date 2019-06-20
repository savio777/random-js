let num = 0

function contar() {
    if (num < 61) {
        num++
        console.log(num)
        setTimeout(contar, 1000)
    }
}

contar()