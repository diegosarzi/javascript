// funcao simples com 2 parametros
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// se caso nao passar b, ele coloca o valor default 1
// retorna o valor e nao da console
function soma(a, b = 1) {
    return a + b
}

console.log(soma(3, 5))