function Resultado (num1 , num2) {
    return (num2 / num1) * 100;
}

let x = 1;
let y = 0.2;
let final = Resultado(x, y)
console.log(`${final}% de ${x} é ${y}`)