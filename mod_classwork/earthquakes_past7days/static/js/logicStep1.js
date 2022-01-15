//adding a tilelayer for map with parameters. 
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: api_key
});

//adding another tilelayer to the map, this is dar view
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-streets-v11",
    accessToken: api_key
});

//creating a base layer that holds both tilelayers above.
let baseMaps = {
  "Streets": streets,
  "Sattelite": satelliteStreets
}

// creat the map object not using setVeiws like in previous examples
let map = L.map("mapid", {
  // center coords for map
  center:[39.5, -98.5],
  zoom: 3,
  layers:[streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// add geoJson data from USGS for past 7 days
usgsEarthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


//adding data to the map using d3 
d3.json(usgsEarthquake).then(function(data) {
  console.log(data);
  L.geoJSON(data).addTo(map);
})




// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     //prints to screen
//     console.log(city)
//     // add markerts from the forEach function
//     //L.marker(city.location)
//     // circle markers to map
//     L.circleMarker(city.location, {
//         radius: city.population / 200000
//     })
//     .bindPopup("<h2>" + city.city + "," + city.state + "</h2><hr> <h3>Population: " + city.population.toLocaleString() + "</h3>").addTo(map)
// });
// //   cityData.forEach(city => L.marker(city.location).addTo(map)
// //   );
