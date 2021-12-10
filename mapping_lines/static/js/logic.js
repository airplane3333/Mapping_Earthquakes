// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

let line = [
  [33.9416, -118.4085], // SFO
  [30.266, -97.7333], //AUS
  [40.7730, -73.935], // JFK
  [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  //dashArray: 

}).addTo(map);

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  color: "yellow",
  id: "mapbox/satellite-streets-v11",
  accessToken: api_key
}).addTo(map);

