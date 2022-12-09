const XMLHhttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.con/api/v1';

const fetchData = (urlApi, callback) => {
  let xhttp = new XMLHhttpRequest();
  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    }else{
      const err = new Error('Error hijo'+urlApi)
      return callback(err, null);
    }
  }

  xhttp.send();
}