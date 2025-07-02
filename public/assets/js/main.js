// Toggle hamburger menu
const navToggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");
navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Initialize Glide.js
new Glide('.glide', {
  type: 'carousel',
  autoplay: 3000,
  hoverpause: true,
  perView: 1,
  animationDuration: 800,
}).mount();

// Initialize Leaflet Map of Spain
const map = L.map('map-container').setView([40.4637, -3.7492], 6); // Center on Spain
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

const cities = [
  { name: "Madrid", coords: [40.4168, -3.7038] },
  { name: "Barcelona", coords: [41.3851, 2.1734] },
  { name: "Seville", coords: [37.3891, -5.9845] },
  { name: "Granada", coords: [37.1773, -3.5986] },
  { name: "Valencia", coords: [39.4699, -0.3763] }
];

cities.forEach(city => {
  L.marker(city.coords).addTo(map).bindPopup(`<b>${city.name}</b>`);
});

// Chart.js: Average temperature in major Spanish cities
const ctx = document.getElementById('weatherChart').getContext('2d');
const weatherChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Madrid', 'Barcelona', 'Seville', 'Granada', 'Valencia'],
    datasets: [{
      label: 'Avg. Temp (°C)',
      data: [19, 21, 24, 22, 20],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 30
      }
    }
  }
});
