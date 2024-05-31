import brownieImg from './images/bestseller1.jpg';

export function insertMenu() {
    const content = document.getElementById('content');
    content.classList.remove('spotlight');

    const category = document.createElement('div');
    category.classList.add('category');
    category.textContent = 'Classic Brownies';

    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');

    for (let i = 0; i < 6; i++) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')

        const img = document.createElement('img');
        img.classList.add('product-image');
        img.src = brownieImg;
    
        const productContent = document.createElement('div');
        productContent.classList.add('product-content');
    
        const productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.textContent = 'Chocolate Brownie';
    
        const productDescription = document.createElement('div');
        productDescription.classList.add('product-description');
        productDescription.textContent = 'Rich and fudgy chocolate brownie made with premium cocoa.';
    
        const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.textContent = 'Php150.00';
    
        productContent.appendChild(productName);
        productContent.appendChild(productDescription);
        productContent.appendChild(productPrice);
    
        productCard.appendChild(img);
        productCard.appendChild(productContent);
        
        productsContainer.appendChild(productCard)
    }

    content.appendChild(category);
    content.appendChild(productsContainer);
};
