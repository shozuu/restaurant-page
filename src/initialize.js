import { insertHome } from "./home"
import { insertMenu } from "./menu"
import { insertAbout } from "./about";

export function initializePage() {
    insertHome();
    switchPage();
}

function switchPage() {
    const content = document.getElementById('content');

    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');

    home.style.color = '#FFB800';

    home.addEventListener('click', () => {
        content.innerHTML = '';
        home.style.color = '#FFB800';
        menu.style.color = '#FFFFFF';
        about.style.color = '#FFFFFF';
        insertHome();
    });

    menu.addEventListener('click', () => {
        content.innerHTML = '';
        home.style.color = '#FFFFFF';
        menu.style.color = '#FFB800';
        about.style.color = '#FFFFFF';
        insertMenu();
    });

    about.addEventListener('click', () => {
        content.innerHTML = '';
        home.style.color = '#FFFFFF';
        menu.style.color = '#FFFFFF';
        about.style.color = '#FFB800';
        insertAbout();
    });
}