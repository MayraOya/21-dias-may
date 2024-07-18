let nome = prompt('Digite os seu nome: ')

let idade = parseInt(prompt('Digite a sua idade: '))

let altura = parseFloat(prompt('Digite a sua altura: '))

let peso = parseInt(prompt('Digite seu peso: '))

let anoNasc = 2024 - idade

let imc = parseInt(peso / (altura * altura))

console.log(' Olá ' + nome + ' você tem ' + idade + ' anos, nasceu em ' + anoNasc + 
    ', tem ' + altura + ' de altura, pesa ' + peso +  ' kg e seu IMC é ' + imc + ' kg/m² ')