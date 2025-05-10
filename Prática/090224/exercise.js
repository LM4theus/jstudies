const colors = [
    "Red",
    "Green",
    "Yellow",
    "Blue",
    "Pink",
    "Gray",
    "White",
    "Black",
    "Brown",
    "Purple",
    "Violet",
    "Orange",
];
const colorLoop = () => {
    for(let con = 0; con <= colors.length; con++){
        console.log(`A cor de número ${con} é ${colors[con]}`);
    }
};
console.log(colorLoop());

const colorInLoop = () => {
    for(let i in colors){
        console.log(`A cor de Número ${i} é ${colors[i]}`)
    }
}
console.log(colorInLoop());