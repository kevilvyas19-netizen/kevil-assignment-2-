const products = [
    { id: 1, name: "Royal Bloom CZ Studs", category: "earring", material: "Gold plated alloy with CZ stones", price: 1299, image: "b.jpeg" },
    { id: 2, name: "Temple Grace Pendant Set", category: "necklace", material: "Oxidised silver finish", price: 1899, image: "hy.jpeg" },
    { id: 3, name: "Bridal Emerald Rani Haar", category: "bridal", material: "Gold tone kundan with green beads", price: 4599, image: "WhatsApp Image 2026-04-13 at 19.15.29.jpeg" },
    { id: 4, name: "Rose Aura Kada", category: "bangle", material: "Rose gold plated finish", price: 1499, image: "k.jpeg" },
    { id: 5, name: "Mehendi Hand Harness", category: "other", material: "Gold tone stone work", price: 999, image: "WhatsApp Image 2026-04-13 at 19.15.30.jpeg" },
    { id: 6, name: "Silver Sparkle Bracelet", category: "bangle", material: "Silver tone CZ finish", price: 1399, image: "l.jpeg" },
    { id: 7, name: "Classic Sun Studs", category: "earring", material: "Gold plated everyday wear", price: 899, image: "m.jpeg" },
    { id: 8, name: "Chakra Festive Drops", category: "earring", material: "Multicolour enamel and stones", price: 1199, image: "o.jpeg" },
    { id: 9, name: "Double Line Mangalsutra", category: "necklace", material: "Black beads with gold tone chain", price: 1699, image: "r.jpeg" },
    { id: 10, name: "Navratri Waist Chain", category: "other", material: "German silver style finish", price: 1599, image: "t.jpeg" },
    { id: 11, name: "Ruby Leaf Mangalsutra", category: "necklace", material: "Gold tone chain with red accents", price: 1499, image: "w.jpeg" },
    { id: 12, name: "Pink Pearl Bridal Set", category: "bridal", material: "Kundan style with pink beadwork", price: 4399, image: "WhatsApp Image 2026-04-13 at 19.15.32.jpeg" },
    { id: 13, name: "Princess Cut Shine Kada", category: "bangle", material: "Rose finish with crystal setting", price: 1799, image: "WhatsApp Image 2026-04-13 at 19.15.33.jpeg" },
    { id: 14, name: "Twinkle Screw Bangle", category: "bangle", material: "Rose gold tone designer kada", price: 1599, image: "WhatsApp Image 2026-04-13 at 19.15.34.jpeg" },
    { id: 15, name: "Crystal Line Silver Kada", category: "bangle", material: "Silver tone baguette crystal style", price: 1699, image: "WhatsApp Image 2026-04-13 at 19.15.36.jpeg" },
    { id: 16, name: "Minimal Bar Bracelet", category: "bangle", material: "Rose finish daily wear design", price: 1349, image: "WhatsApp Image 2026-04-13 at 19.15.37.jpeg" },
    { id: 17, name: "Pearl Fan Party Studs", category: "earring", material: "Pearl and stone finish", price: 999, image: "WhatsApp Image 2026-04-13 at 19.15.43.jpeg" },
    { id: 18, name: "Hexa Pearl Studs", category: "earring", material: "Gold plated pearl setting", price: 949, image: "WhatsApp Image 2026-04-13 at 19.15.46.jpeg" },
    { id: 19, name: "Classic Daily Mangalsutra", category: "necklace", material: "Black bead chain with gold finish", price: 1299, image: "WhatsApp Image 2026-04-13 at 19.15.47.jpeg" },
    { id: 20, name: "Golden Pearl Festive Set", category: "bridal", material: "Statement bridal finish with pearls", price: 3899, image: "WhatsApp Image 2026-04-13 at 19.16.06.jpeg" }
];

const menuToggleBtn = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const navLinks = document.querySelectorAll("#mainNav a");
const productsGrid = document.querySelector("#productsGrid");
const noProductsMsg = document.querySelector("#noProducts");
const filterButtons = document.querySelectorAll(".filter-btn");
const categoryLinks = document.querySelectorAll(".category-link");

if (menuToggleBtn !== null && mainNav !== null) {
    menuToggleBtn.addEventListener("click", function () {
        mainNav.classList.toggle("nav-open");
    });
}

function formatPrice(price) {
    return "Rs. " + price.toLocaleString("en-IN");
}

function buildWhatsAppLink(product) {
    const message = "Hello Sai Krupa Jewels! I am interested in " + product.name + " priced at " + formatPrice(product.price) + ". Please share availability.";
    return "https://wa.me/919157756540?text=" + encodeURIComponent(message);
}

function renderProducts(categoryFilter) {
    if (productsGrid === null || noProductsMsg === null) {
        return;
    }

    productsGrid.innerHTML = "";

    const filteredProducts = products.filter(function (product) {
        return categoryFilter === "all" || product.category === categoryFilter;
    });

    if (filteredProducts.length === 0) {
        noProductsMsg.style.display = "block";
        return;
    }

    noProductsMsg.style.display = "none";

    filteredProducts.forEach(function (product) {
        const card = `
            <article class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-card-img">
                <div class="product-card-info">
                    <span class="product-category-tag">${product.category}</span>
                    <h3>${product.name}</h3>
                    <p class="product-material">${product.material}</p>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <a href="${buildWhatsAppLink(product)}" class="btn-small" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
                </div>
            </article>
        `;

        productsGrid.innerHTML += card;
    });
}

function setActiveFilter(selectedFilter) {
    filterButtons.forEach(function (button) {
        if (button.getAttribute("data-filter") === selectedFilter) {
            button.classList.add("active-filter");
        } else {
            button.classList.remove("active-filter");
        }
    });
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = this.getAttribute("data-filter");
        setActiveFilter(selectedFilter);
        renderProducts(selectedFilter);
    });
});

categoryLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const selectedCategory = this.getAttribute("data-category");
        setActiveFilter(selectedCategory);
        renderProducts(selectedCategory);
    });
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });
        this.classList.add("active");

        if (mainNav !== null) {
            mainNav.classList.remove("nav-open");
        }
    });
});

renderProducts("all");
