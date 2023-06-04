// Make a REST callout to Salesforce REST API
console.log(2);
function callSalesforceREST() {
  var url = 'https://cyntexa96-dev-ed.my.salesforce.com/services/data/v52.0/query?q=SELECT+Id,Name+FROM+Account';

  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Set the request method to GET or other required method
  xhr.open('GET', url, true);

  // Set the request headers
  xhr.setRequestHeader('Authorization', 'Bearer 6Cel800D5i00000AGAyc8885i0000011p7g1v9umaJnuE5skkTKdptKBG7PyllwEZKeHYdsJguPPFrCausRa5T1LRUobrvasPuT7tA4aknH');
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
