(function () {
    window.ULEARN = window.ULEARN || {};

    function renderMenu(menu, menuContainer) {
        menuContainer.innerHTML = '';
        for (let task of menu) {
            const menuItem = document.createElement('li');
            menuItem.classList.add('menu__task');
            
            const link = document.createElement('a');
            link.textContent = task.title;
            link.setAttribute('href', '#');
            if (task.score !== undefined) {
                link.setAttribute('data-score', task.score);
            }
            menuItem.appendChild(link);
            
            const submenuContainer = document.createElement('ul');
            submenuContainer.classList.add('menu__submenu');
            submenuContainer.classList.add('_collapsed');
            menuItem.addEventListener('click', () => openSubmenu(submenuContainer));
            menuItem.appendChild(submenuContainer);
            for (let subtask of task.children) {
                const submenuItem = document.createElement('li');
                submenuItem.classList.add('menu__subtask');
                submenuContainer.appendChild(submenuItem);
                const subLink = document.createElement('a');
                subLink.textContent = subtask.title;
                subLink.setAttribute('href', subtask.link);
                if (subtask.score !== undefined) {
                    subLink.setAttribute('data-score', subtask.score);
                }
   
                submenuItem.appendChild(subLink);
            }
            menuContainer.appendChild(menuItem);
        }
    }
    
    function openSubmenu(submenu) {
        submenu.classList.toggle('_collapsed');
    }

    window.ULEARN.renderMenu = renderMenu;
}());


