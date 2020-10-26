// DOMs for selecting certain containers
let sidebar = document.getElementById("restList");

// this is the code for the centerd Burlington map on the home page
let myMap = L.map("map-container").setView([44.47817, -73.21265], 16);

// imported style for home page map
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 15,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(myMap);

// This function generates the restaurant list that is displayed along with creating a map marker
function fetchRestName() {
  fetch("./api")
    .then((res) => {
      return res.json();
    })
    .then((jsonObj) => {
      // jsonObj at this point is the fetched retun of /api aka restaurant names
      console.log(jsonObj);
      jsonObj.restaurants.forEach((id) => {
        // <---- thank you Michael & Bob
        let restaurant = id; // line 25 turns jsonObj contents into an array
        console.log(restaurant);
        // at this point "restaurant" is an array list of each restaurant's name
        fetch(`/api/${restaurant}`)
          .then((res) => res.json())
          .then((listData) => {
            // this returns the json obj of each restaurant
            console.log(listData);
            let dispRestName = listData.name; // this grabs the name key out of each JSON object

            let latLong = [listData.latitude, listData.longitude]; // this is retrieving the lat, long values of each Json
            let markCoord = id + "coord"; // a variable for restaurant id + coordinate

            markCoord = L.marker(latLong).addTo(myMap); // this is creating an icon for each restaurant
            markCoord.bindPopup(
              `<a class='links' href='/restaurant?${restaurant}'>${dispRestName}</a>`
            ); // icons say restaurant name when hovered over

            // generates sidebar anchor links for each restaurant
            sidebar.innerHTML += `<div class='linkContainer'> <a class='links' href='/restaurant?${restaurant}'>${dispRestName}</a></div>`;
          });
      });
    });
}
fetchRestName();
