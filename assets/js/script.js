var weather = document.querySelector('.weather');
var key = "a2dbafd32bfb6d87a7dee017beec62d6";
var city = "";

console.log(weather);
var p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    p.then(function(response) {
        return response.json();
    }).then(function(value){
        weather = value;
        console.log(weather);
    })