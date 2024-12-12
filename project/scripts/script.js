

document.addEventListener("DOMContentLoaded", function() {
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
    
    document.querySelector(".search-bar").addEventListener("input", function(event) {
        let query = event.target.value.toLowerCase();
        let items = document.querySelectorAll(".news-content");
        items.forEach(item => {
            let text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? "block" : "none";
        });
    });

});



