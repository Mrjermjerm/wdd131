
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const nav = document.getElementById('navbar');
  
  // Event listener for hamburger menu
  hamburgerIcon.addEventListener('click', function () {
      nav.classList.toggle('visible');
      hamburgerIcon.classList.toggle('open');
  });

  // Display last modified date
  const lastModified = new Date(document.lastModified);
  document.getElementById('lastModified').textContent = lastModified.toLocaleString();

  // Display current year
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;

  // Temple data
  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Raleigh North Carolina",
        location: "Raleigh North Carolina",
        dedicated: "1999, December, 18",
        area: 12864,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/raleigh-north-carolina-temple/raleigh-north-carolina-temple-6727-main.jpg"
      },
      {
        templeName: "Logan Utah",
        location: "Logan Utah",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
      },
      {
        templeName: "Idaho Falls",
        location: "Idaho Falls",
        dedicated: "1940, October, 19",
        area: 85624,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-31085-main.jpg"
      },
  ];

  // Function to display temples
  function displayTemples(filteredTemples) {
      const templeContainer = document.getElementById('temple-container');
      templeContainer.innerHTML = ''; // Clear previous content

      filteredTemples.forEach(temple => {
          const templeCard = document.createElement('div');
          templeCard.className = 'temple-card';

          templeCard.innerHTML = `
              <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          `;

          templeContainer.appendChild(templeCard);
      });
  }

  // Function to filter temples based on category
  function filterTemples(category) {
      let filteredTemples = temples;

      if (category === 'old') {
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      } else if (category === 'new') {
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      } else if (category === 'large') {
          filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (category === 'small') {
          filteredTemples = temples.filter(temple => temple.area < 10000);
      }

      if (category === 'home') {
          filteredTemples = temples;
      }

      displayTemples(filteredTemples);
  }

  // Event listeners for navigation filters
  document.querySelector('a[href="#home"]').addEventListener('click', () => filterTemples('home'));
  document.querySelector('a[href="#old"]').addEventListener('click', () => filterTemples('old'));
  document.querySelector('a[href="#new"]').addEventListener('click', () => filterTemples('new'));
  document.querySelector('a[href="#large"]').addEventListener('click', () => filterTemples('large'));
  document.querySelector('a[href="#small"]').addEventListener('click', () => filterTemples('small'));

  // Initial load to display all temples
  displayTemples(temples);
});