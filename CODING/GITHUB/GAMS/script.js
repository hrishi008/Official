// Make a REST callout to Salesforce REST API
console.log(3);
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
function getAccessToken() {
  var clientId = '3MVG9wt4IL4O5wvLEQhFtkJDmLCRo54fwUeseqyyZf1dMZdIXK4BX8b571326pkIC5yFY7EnNhfW_RGtm5pqX';
  var clientSecret = '8AC0C084CEA9A48AFAD87696D98700EFF630BA13588A6C3A48A56A01FCEE70AD';
  var username = 'hrishi@cyntexa.com';
  var password = 'Mmskhj@786';
  var securityToken = 'rYI5x6y96MKixjZr4wY5yqDg';

  var url = 'https://login.salesforce.com/services/oauth2/token';
  var params = 'grant_type=password' +
               '&client_id=' + encodeURIComponent(clientId) +
               '&client_secret=' + encodeURIComponent(clientSecret) +
               '&username=' + encodeURIComponent(username) +
               '&password=' + encodeURIComponent(password + securityToken);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var accessToken = response.access_token;
      console.log('Access Token:', accessToken);
      // Use the access token for your subsequent API calls
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.error('Error getting access token:', xhr.responseText);
    }
  };
  xhr.send(params);
}
