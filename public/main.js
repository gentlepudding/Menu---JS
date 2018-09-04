const menuContainer = document.querySelector('.menu');

fetch('http://localhost:3333/menu')
    .then(res => res.json())
    .then(menu => ULEARN.renderMenu(menu, menuContainer))
    .catch(console.error);