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
// Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  Earthquakes: earthquakes
};
// creat the map object not using setVeiws like in previous examples
let map = L.map("mapid", {
  // center coords for map
  center:[39.5, -98.5],
  zoom: 3,
  layers:[streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);


// add geoJson data from USGS for past 7 days
usgsEarthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
// let myStyle = {
//   color: "purple",
//   weight: 3,
// }
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5,
  };
}

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
function getColor(mag) {
  if (mag > 6) {
    return "#ff0606";
  }
  if (mag > 5) {
    return "#994c00";
  }
  if (mag > 4) {
    return "#ea822c";
  }
  if (mag > 3) {
    return "#ee9c00";
  }
  if (mag > 2) {
    return "#eecc00";
  }
  if (mag > 1) {
    return "#d4ee00";
  }
  return "#98ee00"
}

// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(mag) {
  if (mag === 0) {
    return 1;
  }
  return mag * 4;
}


//adding data to the map using d3 
d3.json(usgsEarthquake).then(function(data) {
  L.geoJSON(data, {
    pointToLayer: function(feature, latlng) {
      //console.log(data);
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    // create a popup for each cirlce marker that will give the location and mag for each earthquake
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(earthquakes);
  //then we add the earthquake layer to our map
  earthquakes.addTo(map);
})
//adds a legend to the map 
// Create a legend control object.
let legend = L.control({
  position: "bottomright",
});
// Then add all the details for the legend.
legend.onAdd = function () {
  let div = L.DomUtil.create('div', 'info legend');
  const magnitudes = [0, 1, 2, 3, 4, 5, 6];
  const colors = [
    "#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#994c00",
    "#ff0606",
  ];
      // Looping through our intervals to generate a label with a colored square for each interval.
      for (var i = 0; i < magnitudes.length; i++) {
        console.log(colors[i]);
        div.innerHTML +=
          "<i style='background: " + colors[i] + "'></i> " + magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
      }
    return div;
};

legend.addTo(map);