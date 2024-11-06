

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
  });
  
