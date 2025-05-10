function precoImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}

let metragem = 150;
let quartos = 2;
let preco = precoImovel(metragem, quartos);
console.log(`A casa custa R$${preco}`)