// Create the map object with center at setView [lat and lng] with zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

//adding a tilelayer for map with parameters. 
let light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
<<<<<<< HEAD
  id: "mapbox/outdoors-v11",
=======
  id: "mapbox/streets-v11",
>>>>>>> earthquakes_past7days
  accessToken: api_key
});

//adding another tilelayer to the map, this is dar view
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/dark-v10",
    accessToken: api_key
});

//creating a base layer that holds both tilelayers above.
let baseMaps = {
<<<<<<< HEAD
  street: streets,
=======
  street: light,
>>>>>>> earthquakes_past7days
  dark: dark
}

// creat the map object not using setVeiws
let map = L.map("mapid", {
  center:[30, 30],
  zoom: 2,
<<<<<<< HEAD

=======
  layers:[light]
>>>>>>> earthquakes_past7days
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

<<<<<<< HEAD

let airportData = "https://raw.githubusercontent.com/airplane3333/Mapping_Earthquakes/main/majorAirports.json"
//let airportData = "majorAiports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  // creating a geoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Airport Code: "  + feature.properties.faa + "<hr>" + feature.properties.city + ", " + feature.properties.country)

=======
// Add GeoJSON data.
>>>>>>> earthquakes_past7days
let torontoData = "https://raw.githubusercontent.com/airplane3333/Mapping_Earthquakes/main/torontoRoutes.json"
//let airportData = "https://raw.githubusercontent.com/airplane3333/Mapping_Earthquakes/main/majorAirports.json"
//let airportData = "majorAiports.json"

//creating style for the lines
let style = {
  color: "purple",
  weight: 1
}


// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  L.geoJSON(data, {
    style: style,
    onEachFeature: function(feature,layer) {
      layer.bindPopup("<h3>Airline: </h3>" + feature.properties.airline)
<<<<<<< HEAD

=======
>>>>>>> earthquakes_past7days
    }
  }).addTo(map);
});

// d3.json(airportData).then(function(data) {
//   //console.log(data);
//   // creating a geoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("Airport Code: "  + feature.properties.faa + "<hr>" + feature.properties.city + ", " + feature.properties.country)
//     }
//   }).addTo(map);
// });



<<<<<<< HEAD


=======
>>>>>>> earthquakes_past7days
//notes from part 13.5
// adding geoJson data to the map and a pop-up using pointToLayer
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h4>" + feature.properties.city + ", " + feature.properties.country + "</h4>");
//    }
// }).addTo(map);

// adding geoJson data to the map using onEach featuer
// L.geoJSON(layer, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer)
//     layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h4>" + feature.properties.name +  feature.properties.tz +"</h4>");
//    }
// }).addTo(map);

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

// We use the addTo method to add objects to our map
