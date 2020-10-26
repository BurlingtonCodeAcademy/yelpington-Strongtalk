// This is the starting zoomed location
let myMap = L.map("map-container").setView([44.47817, -73.21265], 16);

// imported style for home page map
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(myMap);

// below is where i was stuck... stuck on fetch, wont readline 29
// this takes from url and sanitizes THEN turns array into id
let url = window.location.search;
let urlArray = url.split("?");
let urlId = urlArray.pop();

// DOMS
let htmlName = document.getElementById("name");
let htmlPhone = document.getElementById("phone-number");
let htmlAddress = document.getElementById("address");
let htmlHours = document.getElementById("hours");
let htmlNotes = document.getElementById("notes");

// this function takes restaurant info from their json's and running it against the api, then bringing back respective specifics
function restDetails() {
  // at this point "restaurant" is an array list of each restaurant's name
  fetch(`/api/${urlId}`)
    .then((res) => res.json())
    .then((restSpecs) => {
      // this returns the json obj of each restaurant
      htmlName.textContent = restSpecs.name;
      htmlPhone.textContent = restSpecs.phonenumber;
      htmlAddress.textContent = restSpecs.address;
      htmlHours.textContent = restSpecs.hours;
      console.log(restSpecs);
      htmlNotes.innerHTML = restSpecs.notes.join("<br/><br/>");

      let latLong = [restSpecs.latitude, restSpecs.longitude];
      myMap.setView(latLong, 17);

      L.marker(latLong).addTo(myMap);
    });
}
restDetails();
