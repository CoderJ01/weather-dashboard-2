async function infoChicago () {

    var response = await fetch(weatherChicago);
    var data = await response.json();
    console.log(data);
    console.log(today);
    var temp  = data;

    var today = moment().format('L');
    
    var tommorow = moment().add(1, 'day').format('L');
    var next = moment().add(2, 'day').format('L');
    var then = moment().add(3, 'day').format('L');
    var fourth = moment().add(4, 'day').format('L');
    var last = moment().add(5, 'day').format('L');

    document.getElementById('city').textContent = "Chicago " + today;
    document.getElementById('c-temp').textContent = data.current.temp;
    document.getElementById('c-wind').textContent = data.current.wind_speed + " ";
    document.getElementById('c-humidity').textContent = data.current.humidity;
    document.getElementById('c-uv').textContent = data.current.uvi;

    document.getElementById('f-day').textContent = tommorow;
    document.getElementById('f-temp').textContent = data.daily[1].temp.day
    document.getElementById('f-wind').textContent = data.daily[1].wind_speed + " ";
    document.getElementById('f-humidity').textContent = data.daily[1].humidity;

    document.getElementById('s-day').textContent = next;
    document.getElementById('s-temp').textContent = data.daily[2].temp.day
    document.getElementById('s-wind').textContent = data.daily[2].wind_speed + " ";
    document.getElementById('s-humidity').textContent = data.daily[2].humidity;

    document.getElementById('t-day').textContent = then;
    document.getElementById('t-temp').textContent = data.daily[3].temp.day
    document.getElementById('t-wind').textContent = data.daily[3].wind_speed + " ";
    document.getElementById('t-humidity').textContent = data.daily[3].humidity;

    document.getElementById('o-day').textContent = fourth;
    document.getElementById('o-temp').textContent = data.daily[4].temp.day
    document.getElementById('o-wind').textContent = data.daily[4].wind_speed + " ";
    document.getElementById('o-humidity').textContent = data.daily[4].humidity;

    document.getElementById('i-day').textContent = last;
    document.getElementById('i-temp').textContent = data.daily[5].temp.day
    document.getElementById('i-wind').textContent = data.daily[5].wind_speed + " ";
    document.getElementById('i-humidity').textContent = data.daily[5].humidity;

    console.log(data.current.weather[0].description);
    
    var div = document.getElementById('icon');

    console.log(data.daily[1].weather[0].description);

    if (data.current.wind_speed > 20) { 
        div.classList.add('fas', 'fa-wind');
    }
    else {

        if (data.current.weather[0].description === "few clouds" ||
        data.current.weather[0].description === "scattered clouds" ||
        data.current.weather[0].description === "broken clouds") 
        {
            div.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (data.current.weather[0].description === "shower rain" ||
        data.current.weather[0].description === "rain")
        {
            div.classList.add('fas', 'cloud-rain');
        }
        else if (data.current.weather[0].description === "thunderstorm")
        {
            div.classList.add('fas', 'fa-bolt');
        }
        else if (data.current.weather[0].description === "snow")
        {
            div.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            div.classList.add('fas', 'fa-sun');
        }
    }

    var divF = document.getElementById('f-icon');

    if (data.current.wind_speed > 20) { 
        div.classList.add('fas', 'fa-wind');
    }
    else {

        if (data.daily[1].weather[0].description === "few clouds" ||
        data.daily[1].weather[0].description === "scattered clouds" ||
        data.daily[1].weather[0].description === "broken clouds") 
        {
            divF.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (data.daily[1].weather[0].description === "shower rain" ||
        data.daily[1].weather[0].description === "rain")
        {
            divF.classList.add('fas', 'cloud-rain');
        }
        else if (data.daily[1].weather[0].description === "thunderstorm")
        {
            divF.classList.add('fas', 'fa-bolt');
        }
        else if (data.daily[1].weather[0].description === "snow")
        {
            divF.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divF.classList.add('fas', 'fa-sun');
        }
    }

    var divS = document.getElementById('s-icon');

    if (data.current.wind_speed > 20) { 
        div.classList.add('fas', 'fa-wind');
    }
    else {

        if (data.daily[1].weather[0].description === "few clouds" ||
        data.daily[1].weather[0].description === "scattered clouds" ||
        data.daily[1].weather[0].description === "broken clouds") 
        {
            divS.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (data.daily[1].weather[0].description === "shower rain" ||
        data.daily[1].weather[0].description === "rain")
        {
            divS.classList.add('fas', 'cloud-rain');
        }
        else if (data.daily[1].weather[0].description === "thunderstorm")
        {
            divS.classList.add('fas', 'fa-bolt');
        }
        else if (data.daily[1].weather[0].description === "snow")
        {
            divS.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divS.classList.add('fas', 'fa-sun');
        }
    }

    var divT = document.getElementById('t-icon');

    if (data.current.wind_speed > 20) { 
        div.classList.add('fas', 'fa-wind');
    }
    else {

        if (data.daily[1].weather[0].description === "few clouds" ||
        data.daily[1].weather[0].description === "scattered clouds" ||
        data.daily[1].weather[0].description === "broken clouds") 
        {
            divT.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (data.daily[1].weather[0].description === "shower rain" ||
        data.daily[1].weather[0].description === "rain")
        {
            divT.classList.add('fas', 'cloud-rain');
        }
        else if (data.daily[1].weather[0].description === "thunderstorm")
        {
            divT.classList.add('fas', 'fa-bolt');
        }
        else if (data.daily[1].weather[0].description === "snow")
        {
            divT.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divT.classList.add('fas', 'fa-sun');
        }
    }

    var divO = document.getElementById('o-icon');

    if (data.current.wind_speed > 20) { 
        div.classList.add('fas', 'fa-wind');
    }
    else {

        if (data.daily[1].weather[0].description === "few clouds" ||
        data.daily[1].weather[0].description === "scattered clouds" ||
        data.daily[1].weather[0].description === "broken clouds") 
        {
            divO.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (data.daily[1].weather[0].description === "shower rain" ||
        data.daily[1].weather[0].description === "rain")
        {
            divO.classList.add('fas', 'cloud-rain');
        }
        else if (data.daily[1].weather[0].description === "thunderstorm")
        {
            divO.classList.add('fas', 'fa-bolt');
        }
        else if (data.daily[1].weather[0].description === "snow")
        {
            divO.classList.add('fas', 'fa-snowflake');
        }
        else 
        {
            divO.classList.add('fas', 'fa-sun');
        }
    }

    var divI = document.getElementById('i-icon');

    if (data.current.wind_speed > 20) { 
        div.classList.add('fas', 'fa-wind');
    }
    else {

        if (data.daily[1].weather[0].description === "few clouds" ||
        data.daily[1].weather[0].description === "scattered clouds" ||
        data.daily[1].weather[0].description === "broken clouds") 
        {
            divI.classList.add('fas', 'fa-cloud-sun');
        } 
        else if (data.daily[1].weather[0].description === "shower rain" ||
        data.daily[1].weather[0].description === "rain")
        {
            divI.classList.add('fas', 'cloud-rain');
        }
        else if (data.daily[1].weather[0].description === "thunderstorm")
        {
            divI.classList.add('fas', 'fa-bolt');
        }
        else if (data.daily[1].weather[0].description === "snow")
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

    console.log(data.current.uvi);

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
    }
    else if (data.current.uvi === 6 || data.current.uvi === 7) {
        uvIndex.style.background = "orange";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
}



async function infoAustin () {

}

async function infoNewYork () {
    
}

async function infoOrlando () {
    
}

async function infoSanFrancisco () {
    
}

async function infoSeattle () {
    
}

async function infoDenver () {
    
}

async function infoAtlanta () {
    
}



