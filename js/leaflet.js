let Kmap = L.map('KMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Kmap);

var marker = L.marker([51.23009, 4.41616]).addTo(Kmap);
