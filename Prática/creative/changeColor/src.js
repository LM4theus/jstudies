function randomColorB() {
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    return color;
}
function changeBackground() {
    let color = randomColorB();
    document.body.style.backgroundColor = color;
}
function randomColorF() {
    let colorFont = "#" + Math.floor(Math.random()*16777215).toString(16);
    return colorFont;
}
function changeColor() {
    let colorFont = randomColorF();
    document.body.style.color = colorFont;
}