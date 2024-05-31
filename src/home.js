import brownieImg from './images/brownie.png';

export function insertHome() {
    // const homeContainer = document.createElement('div');
    // homeContainer.classList.add('home-container');

    const content = document.getElementById('content');
    content.classList.add('spotlight');

    const slogan = document.createElement('div');
    slogan.classList.add('slogan');

    const stellar = document.createElement('span');
    stellar.classList.add('stellar');
    stellar.textContent = 'stellar';

    const textBefore = document.createTextNode('where your palate meets ');
    const textAfter = document.createTextNode(' delights.');

    slogan.appendChild(textBefore);
    slogan.appendChild(stellar);
    slogan.appendChild(textAfter);

    const brownie = document.createElement('img');
    brownie.classList.add('brownie');
    brownie.src = brownieImg;
    brownie.alt = 'brownie';

    content.appendChild(slogan);
    content.appendChild(brownie);

    // homeContainer.appendChild(content);
}