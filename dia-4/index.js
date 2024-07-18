let nome = prompt('Digite o seu nome: ')
let idade = parseInt(prompt('Digite a sua idade'))
let temCarta = false
let temCarro = false
let opcaoCarta = prompt('Você tem carta de motorista s/n')
if (opcaoCarta == 's') {
    temCarta = true
}
let opcaoCarro = prompt('Você tem carro s/n')
if (opcaoCarro == 's') {
    temCarro = true
}

if (idade < 18 || !temCarta) {
    console.log(nome + ' você não pode dirigir.')
} else if(idade >= 18 && temCarta && !temCarro) {
    console.log(nome + ' você pode dirigir mas não tem carro.')
} else {
    console.log(nome + ' ,você será o motorista!')
}
