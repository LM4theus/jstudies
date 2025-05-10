function alterarCor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  const btn = document.querySelector(".btn_cor");
  const fundo = document.querySelector(".container");

  fundo.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
