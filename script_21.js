const button = document.getElementById("get-location-button");
const API_KEY = "YOUR_API_KEY_HERE";

async function getData(lat, long) {
    const promise =  await fetch(
       `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${long}&aqi=yes`
     );
     return await promise.json();
   }

async function gotLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function failedToGet() {
    console.log("There was some issue");
}

button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);

});