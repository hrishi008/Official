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
        document.getElementById('display').innerText+=response[a].name;
    }})
	.catch(err => console.error(err));

}