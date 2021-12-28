// free API from Open Weather
var freeAPI = '3f2e409528a52056b62087fa623591ee';

// display dates using Moment JS
function displayDate () {
    var today = moment().format('L');
    var tommorow = moment().add(1, 'day').format('L');
    var next = moment().add(2, 'day').format('L');
    var then = moment().add(3, 'day').format('L');
    var fourth = moment().add(4, 'day').format('L');
    var last = moment().add(5, 'day').format('L');

    return {
        today,
        tommorow,
        next,
        then, 
        fourth,
        last
    };
}

var {today, tommorow, next, then, fourth, last} = displayDate();

// retrieve APIs from Open Weather website
function retrieveAPIs() {
    var weatherChicago = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&&units=imperial&lon=-94.04&exclude=hourly&appid=' + freeAPI;
    var weatherAustin = 'https://api.openweathermap.org/data/2.5/onecall?lat=30.15&&units=imperial&lon=-97.45&exclude=hourly&appid=' + freeAPI;
    var weatherNewYork = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.40&&units=imperial&lon=-73.56&exclude=hourly&appid=' + freeAPI;
    var weatherOrlando = 'https://api.openweathermap.org/data/2.5/onecall?lat=28.25&&units=imperial&lon=-81.18&exclude=hourly&appid=' + freeAPI;
    var weatherSanFrancisco = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.47&&units=imperial&lon=-122.25&exclude=hourly&appid=' + freeAPI;
    var weatherSeattle = 'https://api.openweathermap.org/data/2.5/onecall?lat=47.37&&units=imperial&lon=-122.20&exclude=hourly&appid=' + freeAPI;
    var weatherDenver = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.44&&units=imperial&lon=-104.56&exclude=hourly&appid=' + freeAPI;
    var weatherAtlanta = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.45&&units=imperial&lon=-84.23&exclude=hourly&appid=' + freeAPI;

    return {weatherChicago, 
        weatherAustin,
        weatherNewYork, 
        weatherOrlando, 
        weatherSanFrancisco, 
        weatherSeattle, 
        weatherDenver, 
        weatherAtlanta};
}

var {weatherChicago, weatherAustin, weatherNewYork, weatherOrlando, weatherSanFrancisco, weatherSeattle, weatherDenver, weatherAtlanta} = retrieveAPIs();


      // // fetch api infomation of popular city
    // var response = await fetch(weatherChicago);
    // var data = await response.json();

    

   

function infoChicago() {

    fetch(weatherChicago)
    .then(function(response) {
      // request was successful
      if (response.ok) {  
  
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          console.log(data.current.temp);
          var temp = data.current.temp;
          var wind = data.current.wind_speed;
          var humid = data.current.humidity;
          var uvi = data.current.uvi;
          testC(data, temp, wind, humid, uvi);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()` method
      alert("Unable to connect to Open Weather");
    });
  }

function testC (data, temp, wind, humid, uvi) {
          // display weather conditions for the current day
document.getElementById('city').textContent = "Chicago " + today;
document.getElementById('c-temp').textContent = temp;
document.getElementById('c-wind').textContent = wind + " ";
document.getElementById('c-humidity').textContent = humid;
document.getElementById('c-uv').textContent = uvi; 
}

testC();





    // // display weather conditions for the current day
    // document.getElementById('city').textContent = "Chicago " + today;
    // document.getElementById('c-temp').textContent = data.current.temp;
    // document.getElementById('c-wind').textContent = data.current.wind_speed + " ";
    // document.getElementById('c-humidity').textContent = data.current.humidity;
    // document.getElementById('c-uv').textContent = data.current.uvi;

    // // display weather conditions for the next five days 
    // // 1 : 2 : 3 : 4 : 5 :: f : s : t : o : i
    // document.getElementById('f-day').textContent = tommorow;
    // document.getElementById('f-temp').textContent = data.daily[1].temp.day
    // document.getElementById('f-wind').textContent = data.daily[1].wind_speed + " ";
    // document.getElementById('f-humidity').textContent = data.daily[1].humidity;

    // document.getElementById('s-day').textContent = next;
    // document.getElementById('s-temp').textContent = data.daily[2].temp.day
    // document.getElementById('s-wind').textContent = data.daily[2].wind_speed + " ";
    // document.getElementById('s-humidity').textContent = data.daily[2].humidity;

    // document.getElementById('t-day').textContent = then;
    // document.getElementById('t-temp').textContent = data.daily[3].temp.day
    // document.getElementById('t-wind').textContent = data.daily[3].wind_speed + " ";
    // document.getElementById('t-humidity').textContent = data.daily[3].humidity;

    // document.getElementById('o-day').textContent = fourth;
    // document.getElementById('o-temp').textContent = data.daily[4].temp.day
    // document.getElementById('o-wind').textContent = data.daily[4].wind_speed + " ";
    // document.getElementById('o-humidity').textContent = data.daily[4].humidity;

    // document.getElementById('i-day').textContent = last;
    // document.getElementById('i-temp').textContent = data.daily[5].temp.day
    // document.getElementById('i-wind').textContent = data.daily[5].wind_speed + " ";
    // document.getElementById('i-humidity').textContent = data.daily[5].humidity; 
    
    // // place icon with current day conditions
    // var div = document.getElementById('icon');

    // if (data.current.wind_speed > 20) { 
    //     div.classList.add('fas', 'fa-wind');
    // }
    // else {

    //     if (data.current.weather[0].description === "few clouds" ||
    //     data.current.weather[0].description === "scattered clouds" ||
    //     data.current.weather[0].description === "broken clouds") 
    //     {
    //         div.classList.add('fas', 'fa-cloud-sun');
    //     } 
    //     else if (data.current.weather[0].description === "shower rain" ||
    //     data.current.weather[0].description === "rain")
    //     {
    //         div.classList.add('fas', 'cloud-rain');
    //     }
    //     else if (data.current.weather[0].description === "thunderstorm")
    //     {
    //         div.classList.add('fas', 'fa-bolt');
    //     }
    //     else if (data.current.weather[0].description === "snow")
    //     {
    //         div.classList.add('fas', 'fa-snowflake');
    //     }
    //     else 
    //     {
    //         div.classList.add('fas', 'fa-sun');
    //     }
    // }

    // // place icon for next five days, same anology expression (1 : 2 :: f : s) applys
    // var divF = document.getElementById('f-icon');

    // if (data.current.wind_speed > 20) { 
    //     divF.classList.add('fas', 'fa-wind');
    // }
    // else {

    //     if (data.daily[1].weather[0].description === "few clouds" ||
    //     data.daily[1].weather[0].description === "scattered clouds" ||
    //     data.daily[1].weather[0].description === "broken clouds") 
    //     {
    //         divF.classList.add('fas', 'fa-cloud-sun');
    //     } 
    //     else if (data.daily[1].weather[0].description === "shower rain" ||
    //     data.daily[1].weather[0].description === "rain")
    //     {
    //         divF.classList.add('fas', 'cloud-rain');
    //     }
    //     else if (data.daily[1].weather[0].description === "thunderstorm")
    //     {
    //         divF.classList.add('fas', 'fa-bolt');
    //     }
    //     else if (data.daily[1].weather[0].description === "snow")
    //     {
    //         divF.classList.add('fas', 'fa-snowflake');
    //     }
    //     else 
    //     {
    //         divF.classList.add('fas', 'fa-sun');
    //     }
    // }

    // var divS = document.getElementById('s-icon');

    // if (data.current.wind_speed > 20) { 
    //     divS.classList.add('fas', 'fa-wind');
    // }
    // else {

    //     if (data.daily[1].weather[0].description === "few clouds" ||
    //     data.daily[1].weather[0].description === "scattered clouds" ||
    //     data.daily[1].weather[0].description === "broken clouds") 
    //     {
    //         divS.classList.add('fas', 'fa-cloud-sun');
    //     } 
    //     else if (data.daily[1].weather[0].description === "shower rain" ||
    //     data.daily[1].weather[0].description === "rain")
    //     {
    //         divS.classList.add('fas', 'cloud-rain');
    //     }
    //     else if (data.daily[1].weather[0].description === "thunderstorm")
    //     {
    //         divS.classList.add('fas', 'fa-bolt');
    //     }
    //     else if (data.daily[1].weather[0].description === "snow")
    //     {
    //         divS.classList.add('fas', 'fa-snowflake');
    //     }
    //     else 
    //     {
    //         divS.classList.add('fas', 'fa-sun');
    //     }
    // }

    // var divT = document.getElementById('t-icon');

    // if (data.current.wind_speed > 20) { 
    //     divT.classList.add('fas', 'fa-wind');
    // }
    // else {

    //     if (data.daily[1].weather[0].description === "few clouds" ||
    //     data.daily[1].weather[0].description === "scattered clouds" ||
    //     data.daily[1].weather[0].description === "broken clouds") 
    //     {
    //         divT.classList.add('fas', 'fa-cloud-sun');
    //     } 
    //     else if (data.daily[1].weather[0].description === "shower rain" ||
    //     data.daily[1].weather[0].description === "rain")
    //     {
    //         divT.classList.add('fas', 'cloud-rain');
    //     }
    //     else if (data.daily[1].weather[0].description === "thunderstorm")
    //     {
    //         divT.classList.add('fas', 'fa-bolt');
    //     }
    //     else if (data.daily[1].weather[0].description === "snow")
    //     {
    //         divT.classList.add('fas', 'fa-snowflake');
    //     }
    //     else 
    //     {
    //         divT.classList.add('fas', 'fa-sun');
    //     }
    // }

    // var divO = document.getElementById('o-icon');

    // if (data.current.wind_speed > 20) { 
    //     divO.classList.add('fas', 'fa-wind');
    // }
    // else {

    //     if (data.daily[1].weather[0].description === "few clouds" ||
    //     data.daily[1].weather[0].description === "scattered clouds" ||
    //     data.daily[1].weather[0].description === "broken clouds") 
    //     {
    //         divO.classList.add('fas', 'fa-cloud-sun');
    //     } 
    //     else if (data.daily[1].weather[0].description === "shower rain" ||
    //     data.daily[1].weather[0].description === "rain")
    //     {
    //         divO.classList.add('fas', 'cloud-rain');
    //     }
    //     else if (data.daily[1].weather[0].description === "thunderstorm")
    //     {
    //         divO.classList.add('fas', 'fa-bolt');
    //     }
    //     else if (data.daily[1].weather[0].description === "snow")
    //     {
    //         divO.classList.add('fas', 'fa-snowflake');
    //     }
    //     else 
    //     {
    //         divO.classList.add('fas', 'fa-sun');
    //     }
    // }

    // var divI = document.getElementById('i-icon');

    // if (data.current.wind_speed > 20) { 
    //     divI.classList.add('fas', 'fa-wind');
    // }
    // else {

    //     if (data.daily[1].weather[0].description === "few clouds" ||
    //     data.daily[1].weather[0].description === "scattered clouds" ||
    //     data.daily[1].weather[0].description === "broken clouds") 
    //     {
    //         divI.classList.add('fas', 'fa-cloud-sun');
    //     } 
    //     else if (data.daily[1].weather[0].description === "shower rain" ||
    //     data.daily[1].weather[0].description === "rain")
    //     {
    //         divI.classList.add('fas', 'cloud-rain');
    //     }
    //     else if (data.daily[1].weather[0].description === "thunderstorm")
    //     {
    //         divI.classList.add('fas', 'fa-bolt');
    //     }
    //     else if (data.daily[1].weather[0].description === "snow")
    //     {
    //         divI.classList.add('fas', 'fa-snowflake');
    //     }
    //     else 
    //     {
    //         divI.classList.add('fas', 'fa-sun');
    //     }
    // }

    // // set up color scheme depending of UV index
    // var uvIndex = document.getElementById('c-uv');

    // uvIndex.style.background = "none";
    // uvIndex.style.fontWeight = "bold";

    // if (data.current.uvi >= 0 && data.current.uvi <= 2) {
    //     uvIndex.style.background = "green";
    //     uvIndex.style.color = "white";
    // }
    // else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
    //     uvIndex.style.background = "yellow";
    //     uvIndex.style.color = "black";
    // }
    // else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
    //     uvIndex.style.background = "orange";
    //     uvIndex.style.color = "black";
    // } 
    // else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
    //     uvIndex.style.background = "red";
    //     uvIndex.style.color = "white";
    // }
    // else {
    //     uvIndex.style.background = "purple";
    //     uvIndex.style.color = "white";
    // }

 
async function infoAustin () {
    var response = await fetch(weatherAustin);
    var data = await response.json();

    document.getElementById('city').textContent = "Austin " + today;
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
    
    var div = document.getElementById('icon');

    var div = document.getElementById('icon');

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
        divF.classList.add('fas', 'fa-wind');
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
        divS.classList.add('fas', 'fa-wind');
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
        divT.classList.add('fas', 'fa-wind');
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
        divO.classList.add('fas', 'fa-wind');
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
        divI.classList.add('fas', 'fa-wind');
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

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }

}

async function infoNewYork () {

    var response = await fetch(weatherNewYork);
    var data = await response.json();

    document.getElementById('city').textContent = "New York " + today;
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
    
    var div = document.getElementById('icon');

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
        divF.classList.add('fas', 'fa-wind');
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
        divS.classList.add('fas', 'fa-wind');
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
        divT.classList.add('fas', 'fa-wind');
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
        divO.classList.add('fas', 'fa-wind');
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
        divI.classList.add('fas', 'fa-wind');
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

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
    
}

async function infoOrlando () {

    var response = await fetch(weatherOrlando);
    var data = await response.json();

    document.getElementById('city').textContent = "Orlando " + today;
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
    
    var div = document.getElementById('icon');

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
        divF.classList.add('fas', 'fa-wind');
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
        divS.classList.add('fas', 'fa-wind');
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
        divT.classList.add('fas', 'fa-wind');
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
        divO.classList.add('fas', 'fa-wind');
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
        divI.classList.add('fas', 'fa-wind');
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

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
    
}

async function infoSanFrancisco () {

    var response = await fetch(weatherSanFrancisco);
    var data = await response.json();

    document.getElementById('city').textContent = "San Francisco " + today;
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
    
    var div = document.getElementById('icon');

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
        divF.classList.add('fas', 'fa-wind');
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
        divS.classList.add('fas', 'fa-wind');
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
        divT.classList.add('fas', 'fa-wind');
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
        divO.classList.add('fas', 'fa-wind');
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
        divI.classList.add('fas', 'fa-wind');
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

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
    
}

async function infoSeattle () {

    var response = await fetch(weatherSeattle);
    var data = await response.json();

    document.getElementById('city').textContent = "Seattle " + today;
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
    
    var div = document.getElementById('icon');

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
        divF.classList.add('fas', 'fa-wind');
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
        divS.classList.add('fas', 'fa-wind');
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
        divT.classList.add('fas', 'fa-wind');
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
        divO.classList.add('fas', 'fa-wind');
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
        divI.classList.add('fas', 'fa-wind');
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

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
    
}

async function infoDenver () {

    var response = await fetch(weatherDenver);
    var data = await response.json();

    document.getElementById('city').textContent = "Denver " + today;
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
    
    var div = document.getElementById('icon');

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
        divF.classList.add('fas', 'fa-wind');
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
        divS.classList.add('fas', 'fa-wind');
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
        divT.classList.add('fas', 'fa-wind');
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
        divO.classList.add('fas', 'fa-wind');
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
        divI.classList.add('fas', 'fa-wind');
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

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
}

async function infoAtlanta () {

    var response = await fetch(weatherAtlanta);
    var data = await response.json();

    document.getElementById('city').textContent = "Atlanta " + today;
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
    
    var div = document.getElementById('icon');

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
        divF.classList.add('fas', 'fa-wind');
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
        divS.classList.add('fas', 'fa-wind');
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
        divT.classList.add('fas', 'fa-wind');
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
        divO.classList.add('fas', 'fa-wind');
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
        divI.classList.add('fas', 'fa-wind');
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

    if (data.current.uvi >= 0 && data.current.uvi <= 2) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
}





