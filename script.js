// Sample data for products
const productsData = {
    Laptops: ["Product 1", "Product 2", "Product 3"],
    Headphones: ["Product A", "Product B", "Product C"],
    Watches: ["Product X", "Product Y", "Product Z"],
    Speakers: ["Product S1", "Product S2", "Product S3"],
    Camera: ["Product C1", "Product C2", "Product C3"],
    Tablets: ["Product T1", "Product T2", "Product T3"],
    // Add data for other categories
};

function viewProducts(category) {
    const products = productsData[category];

    if (products) {
        // Create a new HTML page content
        const pageContent = `
            <h1>Products for ${category}</h1>
            <ul>
                ${products.map(product => `<li>${product}</li>`).join('')}
            </ul>
        `;

        // Update the current page with the new content
        document.body.innerHTML = pageContent;
    } else {
        alert(`No products available for ${category}`);
    }
}

function searchProducts() {
    const searchQuery = document.querySelector('#search-bar input').value;
    // Perform search logic and update the content as needed
    alert(`Searching for products: ${searchQuery}`);
}
