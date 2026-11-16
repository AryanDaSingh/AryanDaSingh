import style from './nav.module.css'

const nav = document.createElement('nav');
nav.innerHTML = /*html*/ `
    <ul class="${style.nav}">
        <li class="${style.navLinks}"><a href='index.html'>Breakfast</a></li>
        <li class="${style.navLinks}"><a href="lunch/index.html">Lunch</a></li>
        <li class="${style.navLinks}"><a href="dinner/index.html">Dinner</a></li>
    </ul>
`;

export default nav;