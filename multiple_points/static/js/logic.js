// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([45.31, -122.40], 4);

// Get data from cities.js
let cityData = cities;


  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  color: "yellow",
  id: "mapbox/dark-v10",
  accessToken: api_key
}).addTo(map);

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    //prints to screen
    console.log(city)
    // add markerts from the forEach function
    //L.marker(city.location)
    // circle markers to map
    L.circleMarker(city.location, {
        radius: city.population / 200000
    })
    .bindPopup("<h2>" + city.city + "," + city.state + "</h2><hr> <h3>Population: " + city.population.toLocaleString() + "</h3>").addTo(map)
});
//   cityData.forEach(city => L.marker(city.location).addTo(map)
//   );
