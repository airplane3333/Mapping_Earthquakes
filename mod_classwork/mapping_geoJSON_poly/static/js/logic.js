// Create the map object with center at setView [lat and lng] with zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

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
  "Sattelite Streets": satelliteStreets
}

// creat the map object not using setVeiws
let map = L.map("mapid", {
  center:[43.7, -79.3],
  zoom: 11,
  layers:[streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Add GeoJSON data.
let yyzHoods = "https://raw.githubusercontent.com/airplane3333/Mapping_Earthquakes/main/torontoNeighborhoods.json"
//let torontoData = "https://raw.githubusercontent.com/airplane3333/Mapping_Earthquakes/main/torontoRoutes.json"
//let airportData = "https://raw.githubusercontent.com/airplane3333/Mapping_Earthquakes/main/majorAirports.json"
//let airportData = "majorAiports.json"

//creating style for the lines
let style = {
  color: "purple",
  weight: 1, 
  closePopupOnClick: true,
  opacity: .7,
  fillColor: "blue",
}


// Grabbing our GeoJSON data.
d3.json(yyzHoods).then(function(data) {
  console.log(data);
    L.geoJSON(data, {
      style: style,
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Neighborhood: " + feature.properties.AREA_NAME)
    }
  }).addTo(map);
});

// this is a function that maps lines on a map with a var for style, this is for JSON data
// d3.json(torontoData).then(function(data) {
//   L.geoJSON(data, {
//     style: style,
//     onEachFeature: function(feature,layer) {
//       layer.bindPopup("<h3>Airline: </h3>" + feature.properties.airline)
//     }
//   }).addTo(map);
// });

// d3.json(airportData).then(function(data) {
//   //console.log(data);
//   // creating a geoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("Airport Code: "  + feature.properties.faa + "<hr>" + feature.properties.city + ", " + feature.properties.country)
//     }
//   }).addTo(map);
// });



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
