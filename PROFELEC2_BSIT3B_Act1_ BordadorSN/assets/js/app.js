// Product Data
const products = [
    { id: 1, name: "Lipstick", price: 500.00, image: "assets/img/lipstick.jpeg" },
    { id: 2, name: "Foundation", price: 1000.00, image: "assets/img/foundation.jpeg" },
    { id: 3, name: "Mascara", price: 750.00, image: "assets/img/mascara.jpeg" },
    { id: 4, name: "Blush", price: 600.00, image: "assets/img/blush.jpeg" },
    { id: 5, name: "Eyeliner", price: 400.00, image: "assets/img/eyeliner.png" },
];

// Shopping Cart Array
let cart = [];

// Function to render products
function renderProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product__title">${product.name}</h3>
            <p class="product__description">₱${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

// Function to render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        cartItemDiv.innerHTML = `
            <div>
                <strong>${item.name}</strong> - ₱${item.price.toFixed(2)}
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItemDiv);
    });

    calculateTotalPrice();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Function to calculate total price
function calculateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

// Initial render
renderProducts();