import logo from './images/melioraeLogo.png';

export function insertAbout() {
    const content = document.getElementById('content');
    content.classList.add('spotlight');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');

    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');
    aboutUs.textContent = 'About Us';

    const aboutDesc = document.createElement('div');
    aboutDesc.classList.add('about-desc');
    aboutDesc.textContent = 'Meliorae is a cozy pastry brand brought to life by a tight-knit group of individuals who share a deep love for baking. We offer different types of quality pastry products catering to a wide range of tastes and preferences.';

    aboutContent.appendChild(aboutUs);
    aboutContent.appendChild(aboutDesc);

    const aboutImg = document.createElement('img');
    aboutImg.classList.add('about-img');
    aboutImg.src = logo;
    aboutImg.alt = 'brand-logo';

    aboutContainer.appendChild(aboutContent);
    aboutContainer.appendChild(aboutImg);

    content.appendChild(aboutContainer);
}