let clicks = 0;

function clicou() {
  console.log("Clicou no elemento");
}

// Outra forma de selecionar um elemento e adicionar um evento
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  clicou();
  clicks += 1;

  if (clicks == 11) {
    console.log("Clicou mais de 10 vezes");
  } else if (clicks > 50) {
    console.log("Minha nossa, o cara é um monstro de paciencia viu.");
  }
});
