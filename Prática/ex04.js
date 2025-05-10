let produto = [
    'FARINHA FINNA TRIGO 25KG',
    'FARINHA DE TRIGO',
    'FINNA','25KG',
    'FD',
    1,
    '78969417273',
    22001,
]
console.log(produto[6])
/*
Crie uma função que gera um valor total da compra de um produto e 
retorna o resultado para o Usuário.
FARINHA FINNA TRIGO 25KG o valor minímo da unidade é de 119 reais.

*/
function Buy(preco,quantidade){
    if(preco >= 119){
        return console.log(`Total da compra é de R$${preco * quantidade}`)
    } else {
        console.log('O valor minímo é de 119 reais')
    }
}
Buy(120,1440);