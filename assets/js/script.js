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
            <img src="http://openweathermap.org/img/w/${weatherList.weather[0].icon}.png">
                <div class="temp">
                    <span>${weatherList.main.temp}</span>
                    <span>${weatherList.weather[0].description}</span>
                </div>
            </div>
            <div class="weather-details">
                <h3>weather details</h3>
                <ul class="weather-info">
                    <li>
                        <h4>feels like</h4>
                        <span>${weatherList.main.feels_like}</span>
                    </li>
                    <li>
                        <h4>humidity</h4>
                        <span>${weatherList.main.humidity}</span>
                    </li>
                    <li>
                    <h4>pressure</h4>
                    <span>${weatherList.main.pressure}</span>
                    </li>
                    <li>
                        <h4>wind speed</h4>
                        <span>${weatherList.wind.speed}</span>
                    </li>
                    <li>
                        <h4>wind deg</h4>
                        <span>${weatherList.wind.deg}</span>
                    </li>
                    <li>
                        <h4>visibility</h4>
                        <span>${weatherList.visibility}</span>
                    </li>
                </ul>
            </div>
            </h3>
            `;  
    document.querySelector('.weather').innerHTML = output;
    })
}