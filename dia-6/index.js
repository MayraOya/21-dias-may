let numero = parseInt(prompt('Insira o numero de tabuada'))

//Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o
//resultado da sua tabuada e dos próximos 2 números.
for(let contador = numero; contador <= numero + 2; contador++){
    console.log('tabuada do número: ' + contador)
    for(let tabua = 0; tabua <= 10; tabua++){
        console.log(contador + ' x ' + tabua + ' = ' + contador*tabua)
    }        
}