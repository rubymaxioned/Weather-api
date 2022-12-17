var input = document.querySelector('.city-container input'),
    button = document.querySelector('.submit-container button'),
    card = document.querySelector('.card'),
    list = document.querySelector(".weather li"),
    key = "a2dbafd32bfb6d87a7dee017beec62d6",
    city = '';

list.remove();

button.addEventListener('click', function () {
    city = "";
    city += input.value;
    myFunction();
})

function myFunction() {
    var p = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key);
    p.then(function (response) {
        return response.json();
    }).then(function (value) {
        weatherList = document.querySelector('.weather'),
            error = document.querySelector('.error-message');

        if (value.cod == 200) {

            if (weatherList.classList.contains('hide')) {
                weatherList.classList.remove('hide');
            }

            error.classList.add('hide');

            weatherList = value;
            var output = "",
                kelvin = weatherList.main.temp,
                temperature = parseFloat(kelvin - 273.15).toFixed(2),
                feelsLike = weatherList.main.feels_like,
                feelsLikeTemp = parseFloat(feelsLike - 273.15).toFixed(2);

            output += `
            <h3 class="city-head">${weatherList.name}</h3>
            <div class="main-container">
            <img src="http://openweathermap.org/img/w/${weatherList.weather[0].icon}.png">
                <div class="temp">
                    <span>${temperature}&#8451;</span>
                    <span>${weatherList.weather[0].description}</span>
                </div>
            </div>
            <div class="weather-details">
                <h3>weather details</h3>
                <ul class="weather-info">
                    <li>
                        <h4>feels like</h4>
                        <span>${feelsLikeTemp}&#8451;</span>
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
            if (temperature < 10) {
                card.style.backgroundColor = "Pink";
            }
            else if (temperature > 10 && temperature <= 30) {
                card.style.backgroundColor = "LightSalmon";

            } else {
                card.style.backgroundColor = "Apricot";
            }
        }

        if (value.cod == 404 || value.cod == 400) {
            var error = document.querySelector('.error-message'),
                weatherList = document.querySelector('.weather');
            console.log(error);
            weatherList.classList.add('hide');
            error.classList.remove('hide');
        }

    })
}
