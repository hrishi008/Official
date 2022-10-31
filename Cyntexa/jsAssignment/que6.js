const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e07470b1amsh642ec301293a240p1340ecjsnd6c2bfc3a487',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

function doit(){
fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${document.getElementById('location').value}`, options)
	.then(response => response.json())
	.then(response =>{    for(a in response){
		document.getElementById('map').innerHTML+=`<button class="btn btn-danger" onclick="maping(${response[a].longitude},${response[a].latitude},'${response[a].name}')">${response[a].name} Hotel</button><br>`;;
		
    }})
	.catch(err => console.error(err));

}
function maping(a,b,c){
var map = L.map('map').setView([b, a], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([b, a]).addTo(map)
    .bindPopup(`${c} Hotel`)
    .openPopup();
}