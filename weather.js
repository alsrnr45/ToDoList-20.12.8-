const weather = document.querySelector(".weather");

const COORDS = 'coords';
const API_KEY = 'c149024db1cfdef53949b38f970cc834';

function getWeather(latitude,longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperture = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${"Tempurture :"} ${(Math.floor(temperture))} ℃ <br> ${"Place :"} ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handGeoError(){
    console.log("Can't access geo location.");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();
