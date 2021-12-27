// free API from Open Weather
KEY = '3f2e409528a52056b62087fa623591ee';

// store(); stores the city that user submits to search bar

function store() {

    var new_data = searchChoice.value;
    
    if(localStorage.getItem('data') === null) {
        localStorage.setItem('data', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data));
}

// searchInput responds to city the user submits into search bar

async function searchInput (event) {
    var searchChoice = document.getElementById('input');
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    var settings = '&units=imperial&appid=' + KEY;

    var searchChoiceUVI = document.getElementById('input');
    var apiUVI = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
    var units = '&&units=imperial&lon=';
    var settingsUVI = '&exclude=hourly&appid=' + KEY;

    event.preventDefault();
    var weatherChoice = api + searchChoice.value + settings;
    
    // fetches API info from Open Weather (akin to method used in script.js)
    var response = await fetch(weatherChoice);
    var data = await response.json();

    // fetches API for the retrieval of UV index, the API fetched from weatherChoice
    // lacks the info for UV index (in contrast to script.js API link variables)
    var weatherUVI = apiUVI + data.coord.lat + units + data.coord.lon + settingsUVI;
    var responseUVI = await fetch(weatherUVI);
    var dataUVI = await responseUVI.json();

    var today = moment().format('L');

    document.getElementById('city').textContent = searchChoice.value + " " + today;
    document.getElementById('c-temp').textContent = data.main.temp;
    document.getElementById('c-wind').textContent = data.wind.speed + " ";
    document.getElementById('c-humidity').textContent = data.main.humidity;
    document.getElementById('c-uv').textContent = dataUVI.current.uvi;

    document.getElementById('f-day').textContent = tommorow;
    document.getElementById('f-temp').textContent = dataUVI.daily[1].temp.day
    document.getElementById('f-wind').textContent = dataUVI.daily[1].wind_speed + " ";
    document.getElementById('f-humidity').textContent = dataUVI.daily[1].humidity;

    document.getElementById('s-day').textContent = next;
    document.getElementById('s-temp').textContent = dataUVI.daily[2].temp.day
    document.getElementById('s-wind').textContent = dataUVI.daily[2].wind_speed + " ";
    document.getElementById('s-humidity').textContent = dataUVI.daily[2].humidity;

    document.getElementById('t-day').textContent = then;
    document.getElementById('t-temp').textContent = dataUVI.daily[3].temp.day
    document.getElementById('t-wind').textContent = dataUVI.daily[3].wind_speed + " ";
    document.getElementById('t-humidity').textContent = dataUVI.daily[3].humidity;

    document.getElementById('o-day').textContent = fourth;
    document.getElementById('o-temp').textContent = dataUVI.daily[4].temp.day
    document.getElementById('o-wind').textContent = dataUVI.daily[4].wind_speed + " ";
    document.getElementById('o-humidity').textContent = dataUVI.daily[4].humidity;

    document.getElementById('i-day').textContent = last;
    document.getElementById('i-temp').textContent = dataUVI.daily[5].temp.day
    document.getElementById('i-wind').textContent = dataUVI.daily[5].wind_speed + " ";
    document.getElementById('i-humidity').textContent = dataUVI.daily[5].humidity;
    
    var div = document.getElementById('icon');

    if (dataUVI.current.wind_speed > 20) { 
        div.classList.add('fas', 'fa-wind');
    }
    else {

        if (dataUVI.current.weather[0].description === "few clouds" ||
        dataUVI.current.weather[0].description === "scattered clouds" ||
        dataUVI.current.weather[0].description === "broken clouds") 
        {
            div.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (dataUVI.current.weather[0].description === "shower rain" ||
        dataUVI.current.weather[0].description === "rain")
        {
            div.classList.add('fas', 'cloud-rain');
        }
        else if (dataUVI.current.weather[0].description === "thunderstorm")
        {
            div.classList.add('fas', 'fa-bolt');
        }
        else if (dataUVI.current.weather[0].description === "snow")
        {
            div.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            div.classList.add('fas', 'fa-sun');
        }
    }

    var divF = document.getElementById('f-icon');

    if (dataUVI.current.wind_speed > 20) { 
        divF.classList.add('fas', 'fa-wind');
    }
    else {

        if (dataUVI.daily[1].weather[0].description === "few clouds" ||
        dataUVI.daily[1].weather[0].description === "scattered clouds" ||
        dataUVI.daily[1].weather[0].description === "broken clouds") 
        {
            divF.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (dataUVI.daily[1].weather[0].description === "shower rain" ||
        dataUVI.daily[1].weather[0].description === "rain")
        {
            divF.classList.add('fas', 'cloud-rain');
        }
        else if (dataUVI.daily[1].weather[0].description === "thunderstorm")
        {
            divF.classList.add('fas', 'fa-bolt');
        }
        else if (dataUVI.daily[1].weather[0].description === "snow")
        {
            divF.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divF.classList.add('fas', 'fa-sun');
        }
    }

    var divS = document.getElementById('s-icon');

    if (dataUVI.current.wind_speed > 20) { 
        divS.classList.add('fas', 'fa-wind');
    }
    else {

        if (dataUVI.daily[1].weather[0].description === "few clouds" ||
        dataUVI.daily[1].weather[0].description === "scattered clouds" ||
        dataUVI.daily[1].weather[0].description === "broken clouds") 
        {
            divS.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (dataUVI.daily[1].weather[0].description === "shower rain" ||
        dataUVI.daily[1].weather[0].description === "rain")
        {
            divS.classList.add('fas', 'cloud-rain');
        }
        else if (dataUVI.daily[1].weather[0].description === "thunderstorm")
        {
            divS.classList.add('fas', 'fa-bolt');
        }
        else if (dataUVI.daily[1].weather[0].description === "snow")
        {
            divS.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divS.classList.add('fas', 'fa-sun');
        }
    }

    var divT = document.getElementById('t-icon');

    if (dataUVI.current.wind_speed > 20) { 
        divT.classList.add('fas', 'fa-wind');
    }
    else {

        if (dataUVI.daily[1].weather[0].description === "few clouds" ||
        dataUVI.daily[1].weather[0].description === "scattered clouds" ||
        dataUVI.daily[1].weather[0].description === "broken clouds") 
        {
            divT.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (dataUVI.daily[1].weather[0].description === "shower rain" ||
        dataUVI.daily[1].weather[0].description === "rain")
        {
            divT.classList.add('fas', 'cloud-rain');
        }
        else if (dataUVI.daily[1].weather[0].description === "thunderstorm")
        {
            divT.classList.add('fas', 'fa-bolt');
        }
        else if (dataUVI.daily[1].weather[0].description === "snow")
        {
            divT.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divT.classList.add('fas', 'fa-sun');
        }
    }

    var divO = document.getElementById('o-icon');

    if (dataUVI.current.wind_speed > 20) { 
        divO.classList.add('fas', 'fa-wind');
    }
    else {

        if (dataUVI.daily[1].weather[0].description === "few clouds" ||
        dataUVI.daily[1].weather[0].description === "scattered clouds" ||
        dataUVI.daily[1].weather[0].description === "broken clouds") 
        {
            divO.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (dataUVI.daily[1].weather[0].description === "shower rain" ||
        dataUVI.daily[1].weather[0].description === "rain")
        {
            divO.classList.add('fas', 'cloud-rain');
        }
        else if (dataUVI.daily[1].weather[0].description === "thunderstorm")
        {
            divO.classList.add('fas', 'fa-bolt');
        }
        else if (dataUVI.daily[1].weather[0].description === "snow")
        {
            divO.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divO.classList.add('fas', 'fa-sun');
        }
    }

    var divI = document.getElementById('i-icon');

    if (dataUVI.current.wind_speed > 20) { 
        divI.classList.add('fas', 'fa-wind');
    }
    else {

        if (dataUVI.daily[1].weather[0].description === "few clouds" ||
        dataUVI.daily[1].weather[0].description === "scattered clouds" ||
        dataUVI.daily[1].weather[0].description === "broken clouds") 
        {
            divI.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (dataUVI.daily[1].weather[0].description === "shower rain" ||
        dataUVI.daily[1].weather[0].description === "rain")
        {
            divI.classList.add('fas', 'cloud-rain');
        }
        else if (dataUVI.daily[1].weather[0].description === "thunderstorm")
        {
            divI.classList.add('fas', 'fa-bolt');
        }
        else if (dataUVI.daily[1].weather[0].description === "snow")
        {
            divI.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divI.classList.add('fas', 'fa-sun');
        }
    }

    var uvIndex = document.getElementById('c-uv');

    uvIndex.style.background = "none";
    uvIndex.style.fontWeight = "bold";

    if (dataUVI.current.uvi >= 0 && dataUVI.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (dataUVI.current.uvi >= 3 && dataUVI.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
    }
    else if (dataUVI.current.uvi >= 6 && dataUVI.current.uvi <= 7) {
        uvIndex.style.background = "orange";
    } 
    else if (dataUVI.current.uvi >= 8 && dataUVI.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
}

document.getElementById('search').addEventListener("click", searchInput);

// allow users to press 'Enter' key on keyboard for convenience

var enterKey = document.getElementById('input');

enterKey.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('search').click();
    }
});






