// Make a REST callout to a Salesforce Apex REST resource
function callApexREST() {
  var url = 'https://cyntexa96-dev-ed.lightning.force.com/services/apexrest/GAMSrestClass';
  
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Set the request method to GET, POST, PUT, DELETE, etc. depending on your Apex class
  xhr.open('GET', url, true);

  // Set the request headers (if required)
  xhr.setRequestHeader('Authorization', 'Bearer 6Cel800D5i00000AGAyc8885i0000011p7gJVVWi4GSitksJaosngyIRANzmmULF2BBRznm0Ya9nibB5DR48FVUvTklvpT7O2vY7oSoZbtz');
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Set the callback function to handle the response
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Request was successful
      var response = JSON.parse(xhr.responseText);
      console.log(response);
    } else {
      // Request failed
      console.error('Request failed. Status code: ' + xhr.status);
    }
  };

  // Send the request
  xhr.send();
}
