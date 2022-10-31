const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e07470b1amsh642ec301293a240p1340ecjsnd6c2bfc3a487',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

fetch('https://booking-com.p.rapidapi.com/v1/hotels/nearby-cities?latitude=65.9667&longitude=-18.5333&locale=en-gb', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));