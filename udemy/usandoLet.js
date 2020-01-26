// var tem escopo global e funcao
// let tem escopo global, funcao e bloco

let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)