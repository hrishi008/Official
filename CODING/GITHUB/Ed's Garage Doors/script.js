function generateToken(){
let myHeaders = new Headers();
myHeaders.append("Cookie", "BrowserId=i5NNmcPKEe27z-VvUVnttQ; CookieConsentPolicy=0:0; LSKey-c$CookieConsentPolicy=0:0");

let formdata = new FormData();
formdata.append("grant_type", "password");
formdata.append("username", "hrishi@cyntexa.com");
formdata.append("password", "Mmskhj@786eyjcDpfJhpdLcAqCWYjHu90x1");
formdata.append("client_id", "3MVG9n_HvETGhr3CWfD.zNq8EMt5XyCEJIjqXxGfvznwpR8.eXV.ktCHIZjFvqvlZ4ogMrsfmET6.WucUIEjX");
formdata.append("client_secret", "4CAF922671F6EB832122665D084DA2751ECC55C8F39295C3B989DA08361E5552");

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://login.salesforce.com/services/oauth2/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
let token ='00D5i00000AGAyc!ARQAQEhtacdZEpznAaGuVwEX4mvda.WTNz6dSvP9niLl5q.BnzqVB9z8k8e0SBcQ8rBogan6gH761PlUQ79ueEru9J5wEFCx';
function getRes(){
    let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 00D5i00000AGAyc!ARQAQEhtacdZEpznAaGuVwEX4mvda.WTNz6dSvP9niLl5q.BnzqVB9z8k8e0SBcQ8rBogan6gH761PlUQ79ueEru9J5wEFCx");
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Cookie", "BrowserId=i5NNmcPKEe27z-VvUVnttQ; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1");

let raw = "{\r\n    \"Heiahi\":\"nbsdm\"\r\n}";

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://cyntexa96-dev-ed.my.salesforce.com/services/apexrest/craeteOrder/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}