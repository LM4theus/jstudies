function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    ul.children[0].innerHTML = '<li><strong>Item alterado</strong</li>'
}