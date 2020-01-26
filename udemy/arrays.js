const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

// adicionar valor no indice escolhido
valores[4] = 10
console.log(valores)
// contar quantos indices
console.log(valores.length)

// adicionar valores no final
valores.push({id: 3}, 'texto', false, null)
console.log(valores)

// remover ultimo valor
console.log(valores.pop())
// remover valor do indice escolhido
delete valores[0]
console.log(valores)

// arrays sao considerados objetos em js
console.log(typeof valores)
