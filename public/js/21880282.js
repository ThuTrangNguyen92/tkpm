/* Code to convert lat,long to address */
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  apiKey: 'YOUR_API_KEY',
};

const geocoder = NodeGeocoder(options);

const latitude = 10.7306635;
const longitude = 106.7056029;

geocoder.reverse({ lat: latitude, lon: longitude })
  .then((res) => {
    console.log(res[0].formattedAddress);
  })
  .catch((err) => {
    console.log(err);
  });


//get location to address
function getAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showAddress);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showAddress(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = latitude + ", " + longitude;

    const NodeGeocoder = require('node-geocoder');

    const options = {
    provider: 'google',
    apiKey: 'YOUR_API_KEY',
    };

    const geocoder = NodeGeocoder(options);
    
    geocoder.reverse({ lat: latitude, lon: longitude })
    .then((res) => {
      console.log(res[0].formattedAddress);
    })
    .catch((err) => {
      console.log(err);
    });
    document.getElementById("pickup-location").value = res[0].formattedAddress;
  }

  //get function original 
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = latitude + ", " + longitude;
    
    document.getElementById("pickup-location").value = location;
  }
