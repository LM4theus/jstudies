const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const texto = document.querySelector("#texto").value;
  const list = document.querySelector(".list");

  //Criando um elemento em JS
  let new_li = document.createElement("li");
  new_li.innerText = `${texto}`;

  //adicionando no elemento lista ul;
  list.append(new_li);

  /*
  A principal diferença do append ou appendchild para o innerHTML, é que o innerHTML deleta e adiciona novamente todos os elementos referenciados ou seja
  para adicionar um elemento ele recebe todos mais esse elemento. O que é poder de processamento é muito cansativo para a máquina. Por isso existe a função
  append e appendchild que apenas adicionam o elemento e não mexem na raiz dos elementos. Ou seja quando estiver trabalhando com milhares de elementos, o mais
  adequado e leve que voce deve usar é os metodos append e appendchild.
  */
});
