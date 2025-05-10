let lista = document.querySelector(".lista")
let texto = document.querySelector("#texto")

document.getElementById("texto").addEventListener("keyup", (e) => {
  if(e.key === "Enter" && texto.value.trim() !== "") {
    let item = document.createElement("li");
    item.textContent = texto.value;
  
    lista.append(item);

    texto.value = '';
  
  }
} )