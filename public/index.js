let myMap = L.map('map-container').setView([44.4759, -73], 13)


L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(myMap)


let firstMark = L.marker([44.46, -73.2]).addTo(myMap)


firstMark.bindPopup('<h5> Hello!</h5>')


// pseudo code for fetches
async function burlRestaurants() {
fetch('./api').then(res => {
	return res.json()
}).then(jsonObj => {
	console.log(jsonObj)
	//let name = jsonObj.name
	//let nameId = document.getElementById('name-id')
	//nameId.innerText = name
})
console.log("here")
}
burlRestaurants();



//jsonObj.forEach()

//fetch(`./JSONs/${id}.json`).then(res.json)