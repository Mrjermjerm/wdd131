
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the product select field
const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const productName = document.getElementById("productName").value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '';
    const installDate = document.getElementById("installDate").value;
    const features = Array.from(document.querySelectorAll('input[name="features"]:checked')).map(checkbox => checkbox.value);
    const reviewText = document.getElementById("review").value;
    const username = document.getElementById("username").value;

    // Construct query string
    const queryString = new URLSearchParams({
        productName,
        rating,
        installDate,
        features: features.join(", "),  // Join array to display features properly
        review: reviewText,
        username
    }).toString();

    // Redirect to review.html with the data
    window.location.href = `review.html?${queryString}`;
});

document.addEventListener("DOMContentLoaded", function () {
    const currentyear = new Date().getFullYear();
    const lastModified = document.lastModified;

    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = currentyear;
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modification on: ${lastModified}`;
    }

    // Display data from URL params
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("productNameDisplay").textContent = urlParams.get('productName');
    document.getElementById("ratingDisplay").textContent = urlParams.get('rating');
    document.getElementById("installDateDisplay").textContent = urlParams.get('installDate');
    document.getElementById("featuresDisplay").textContent = urlParams.get('features');
    document.getElementById("reviewDisplay").textContent = urlParams.get('review');
    document.getElementById("usernameDisplay").textContent = urlParams.get('username');

    // Update review count using localStorage
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("reviewCount").textContent = reviewCount;
});

  
    