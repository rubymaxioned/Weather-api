var weatherList = document.querySelector('.weather');
var input = document.querySelector('.city-container input');
var button = document.querySelector('.submit-container button');
var key = "a2dbafd32bfb6d87a7dee017beec62d6";
var city = '';

button.addEventListener('click',function(){
    city = "";
    city += input.value;
    myFunction();
})

function myFunction(){
var p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    p.then(function(response) {
        return response.json();
    }).then(function(value){
        weatherList = value;
        output = "";
        console.log(weatherList);

            output += `
            <h3 class="city-head">${weatherList.name}</h3>
            <div class="main-container">
                <span>${weatherList.weather[0].icon}</span>
                <div class="temp">
                    <span>${weatherList.main.temp}</span>
                    <span>${weatherList.weather[0].description}</span>
                </div>
            </div>
            <div class="weather-details">
                <h3>weather details</h3>
                <ul class="weather-info">
                </ul>
            </div>
            </h3>
            `;  
    document.querySelector('.weather').innerHTML = output;
    })
}