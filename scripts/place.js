

// Function to display the current year and last modified date
function displayFooterInfo() {
    // Get the current year and last modified date
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    
    // Display the current year in the footer
    document.getElementById('currentyear').textContent = currentYear;
    
    // Display the last modified date in the footer
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
  }
  
  // Function to calculate windchill
  function calculateWindChill(temperature, windSpeed) {
    let windChill;
  
    // Convert temperature to Fahrenheit if it's in Celsius
    if (temperature <= 10 && windSpeed > 4.8) {
      // Formula for Celsius and km/h
      windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
      return windChill.toFixed(2); // Round to 2 decimal places
    } else {
      return "N/A"; // If wind chill isn't applicable, return "N/A"
    }
  }
  
  // Temperature and wind speed values
  const temperature = 5; // 5°C
  const windSpeed = 10;  // 10 km/h
  
  // Display the windchill in the weather section
  function displayWindChill() {
    const windChillElement = document.getElementById('windchill');
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `Windchill: ${windChill}°C`;
  }
  
  // Wait for the DOM to fully load before running the functions
  document.addEventListener("DOMContentLoaded", function() {
    displayFooterInfo();
    displayWindChill(); 
  });
  