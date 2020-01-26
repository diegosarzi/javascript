const nome = "Diego"
const frase = "Ola " + nome + "!"

const template = `Ola ${nome}!`

const template2 = `
    Ola 
        ${nome}
                !`

console.log(template)
console.log(template2)

// expressoes ...
console.log(`1 + 1 = ${ 1 + 1 }`)

const maiscula = texto => texto.toUpperCase()
console.log(`Ei... ${maiscula('cuidado!')}`)z