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

    return {today, tommorow, next, then, fourth, last}; 
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

    var weatherAPI = [];
    weatherAPI[0] =  weatherChicago;
    weatherAPI[1] =  weatherAustin;
    weatherAPI[2] =  weatherNewYork;
    weatherAPI[3] =  weatherOrlando;
    weatherAPI[4] =  weatherSanFrancisco;
    weatherAPI[5] =  weatherSeattle;
    weatherAPI[6] =  weatherDenver;
    weatherAPI[7] =  weatherAtlanta;

    return weatherAPI;
}

var weatherAPI = retrieveAPIs();

// Popular cities (buttons)
async function infoChicago () {
  var chosenAPI = weatherAPI[0];
  var city = "Chicago ";
  infoWeather(chosenAPI, city);
}

async function infoAustin () {
  var chosenAPI = weatherAPI[1];
  var city = "Austin ";
  infoWeather(chosenAPI, city);
}

async function infoNewYork () {
  var chosenAPI = weatherAPI[2];
  var city = "New York ";
  infoWeather(chosenAPI, city);
}

async function infoOrlando () {
  var chosenAPI = weatherAPI[3];
  var city = "Orlando ";
  infoWeather(chosenAPI, city);
}

async function infoSanFrancisco () {
  var chosenAPI = weatherAPI[4];
  var city = "San Francisco ";
  infoWeather(chosenAPI, city);
}

async function infoSeattle () {
  var chosenAPI = weatherAPI[5];
  var city = "Seattle ";
  infoWeather(chosenAPI, city);
}

async function infoDenver () {
  var chosenAPI = weatherAPI[6];
  var city = "Denver ";
  infoWeather(chosenAPI, city);
}

async function infoAtlanta () {
  var chosenAPI = weatherAPI[7];
  var city = "Atlanta ";
  infoWeather(chosenAPI, city);
}

// fetch info for API (button or history menu)
function infoWeather(chosenAPI, city) {
  fetch(chosenAPI)
  .then(function(response) {
    // request was successful
    if (response.ok) {  
      response.json().then(function(data) {
        
        // create variables for current conditions
        var temp = data.current.temp;
        var wind = data.current.wind_speed;
        var humid = data.current.humidity;
        var uvi = data.current.uvi;
        displayCurrent (data, temp, wind, humid, uvi);
        var fiveDayTemp = [];
        var fiveDayWind = [];
        var fiveDayHumid = [];
        var description = [];

        for (var i = 0; i < 6; i++) {
            fiveDayTemp[i] = data.daily[i].temp.day;
            fiveDayWind[i] = data.daily[i].wind_speed;
            fiveDayHumid[i] = data.daily[i].humidity;
            description[i] = data.daily[i].weather[0].description;
        }

        tempForFive(fiveDayTemp);
        windForFive(fiveDayWind);
        humidForFive(fiveDayHumid);
        displayIcons(wind, description);
        uvIndex(uvi);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  })
  .catch(function(error) {
    alert("Unable to connect to Open Weather");
  });

  document.getElementById('city').textContent = city + today;
}

// fetch API info for searched city
async function searchInput(event) {
   
  var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
  var settings = '&units=imperial&appid=' + freeAPI;

  var apiUVI = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
  var units = '&&units=imperial&lon=';
  var settingsUVI = '&exclude=hourly&appid=' + freeAPI;

  event.preventDefault();
  var weatherChoice = api + searchChoice.value + settings;

  fetch(weatherChoice)
  .then(function(response) {
    // request was successful
    if (response.ok) {  
      //var preventSave = false; 
      response.json().then(function(data) {

        var weatherUVI = apiUVI + data.coord.lat + units + data.coord.lon + settingsUVI;

        // fetches API for the retrieval of UV index, the API fetched from weatherChoice
        // first API within this function lacks the info for UV index
        fetch(weatherUVI)
        .then(function (responseUVI) {
          if(responseUVI.ok) {
            responseUVI.json().then(function (dataUVI) {

              var temp = data.main.temp;
              var wind = data.wind.speed + " ";
              var humid = data.main.humidity;
              var uvi = dataUVI.current.uvi;
              displayCurrent (data, temp, wind, humid, uvi);
              var fiveDayTemp = [];
              var fiveDayWind = [];
              var fiveDayHumid = [];
              var description = [];
    
              for (var i = 0; i < 6; i++) {
                  fiveDayTemp[i] = dataUVI.daily[i].temp.day;
                  fiveDayWind[i] = dataUVI.daily[i].wind_speed;
                  fiveDayHumid[i] = dataUVI.daily[i].humidity;
                  description[i] = dataUVI.daily[i].weather[0].description;
              }
    
              tempForFive(fiveDayTemp);
              windForFive(fiveDayWind);
              humidForFive(fiveDayHumid);
              displayIcons(wind, description);
              uvIndex(uvi);
            });
          }
          else {
            alert("Error: " + responseUVI.statusText);
          }
        }).catch(function (error) {
            alert("Unable to connect to Open Weather");
        }); 

      });
    } 
    else {
      alert("Error: " + response.statusText);
      //preventSave = true;
    }
    //storeSearch(preventSave); // uncommit and pass on to storeSearch() to prioritize
    // storage quality over searchability
  })
  .catch(function(error) {
    alert("Unable to connect to Open Weather");
  });

  document.getElementById('city').textContent = searchChoice.value + " " + today;
}

var searchChoice = document.getElementById('input'); 

// Store city that user submits to search bar
function storeSearch () {

  var new_data =  searchChoice.value;

  // Prohibit storage of popular cities with buttons
  if(new_data === "Austin" || new_data === "Chicago" || new_data === "New York" || new_data === "Orlando" || 
  new_data === "San Franciso" || new_data === "Seattle" || new_data === "Denver" || new_data === "Atlanta") 
  {
    new_data = "";
  }
  else 
  {
    new_data = new_data;
  }
  
  if(localStorage.getItem('data') === null) {
      localStorage.setItem('data', '[]');
  }

  var old_data = JSON.parse(localStorage.getItem('data'));
  old_data.push(new_data);

  localStorage.setItem('data', JSON.stringify(old_data));

  // delete blanks from array
  var output = old_data.filter(function (x) {
    return x;
  });

  // delete duplicates from array
  var result = [];
  result = [...new Set(output)];

  // Prevent display of the word "undefined" in search menu
  for (var i = 0; i < 12; i++) {
    
    if (result[i] === undefined) {
      result[i] = "";
    }
  
  }

  return result;
}

var result = storeSearch();

// display user's search history
async function displayResultsMenu() {

  document.getElementById('menu-a').innerHTML = result[0];
  document.getElementById('menu-b').innerHTML = result[1];
  document.getElementById('menu-c').innerHTML = result[2];
  document.getElementById('menu-d').innerHTML = result[3];
  document.getElementById('menu-e').innerHTML = result[4];
  document.getElementById('menu-f').innerHTML = result[5];
  document.getElementById('menu-g').innerHTML = result[6];
  document.getElementById('menu-h').innerHTML = result[7];
  document.getElementById('menu-i').innerHTML = result[8];
  document.getElementById('menu-j').innerHTML = result[9];
  document.getElementById('menu-k').innerHTML = result[10];
  document.getElementById('menu-l').innerHTML = result[11];
}

displayResultsMenu();

// Allow user to retrieve weather conditions from search history
function menuA () {
  var historyChoice = result[0];
  apiFromHistory(historyChoice);
}

function menuB () {
  var historyChoice = result[1];
  apiFromHistory(historyChoice);
}

function menuC () {
  var historyChoice = result[2];
  apiFromHistory(historyChoice);
}

function menuD () {
  var historyChoice = result[3];
  apiFromHistory(historyChoice);
}

function menuE () {
  var historyChoice = result[4];
  apiFromHistory(historyChoice);
}

function menuF () {
  var historyChoice = result[5];
  apiFromHistory(historyChoice);
}

function menuG () {
  var historyChoice = result[6];
  apiFromHistory(historyChoice);
}

function menuH () {
  var historyChoice = result[7];
  apiFromHistory(historyChoice);
}

function menuI () {
  var historyChoice = result[8];
  apiFromHistory(historyChoice);
}

function menuJ () {
  var historyChoice = result[9];
  apiFromHistory(historyChoice);
}

function menuK () {
  var historyChoice = result[10];
  apiFromHistory(historyChoice);
}

function menuL () {
  var historyChoice = result[11];
  apiFromHistory(historyChoice);
}


// set up first API from clicked city (history menu)
function apiFromHistory (historyChoice) {
  var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
  var settings = '&units=imperial&appid=' + freeAPI;

  weatherChoice = api + historyChoice + settings;

  var stored = historyChoice;
  var chosen = weatherChoice;
  fetchForCoord(stored, chosen);
}

// fetch first API for lat and lon cooord
async function fetchForCoord(stored, chosen) {

  var response = await fetch(chosen);
  var data = await response.json();

  // Obtain coordinates for use
  var latitude = data.coord.lat;
  var longitude = data.coord.lon;

  // Obtain city names
  var name = stored;
    
  getCoord(latitude, longitude, name);
}

// get second API for the UV index 
async function getCoord(latitude, longitude, name) {
  var api = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
  var units = '&&units=imperial&lon=';
  var settings = '&exclude=hourly&appid=' + freeAPI;
 
  var weatherChoice = api + latitude + units + longitude + settings;
  var cityName = name + " ";

  clickedCity(weatherChoice, cityName)
}
  
// Pass on info to infoWeather()
function clickedCity (weatherChoice, cityName) {
  var chosenAPI = weatherChoice;
  var city = cityName;
  infoWeather(chosenAPI, city);
}

// display weather conditions for the current day
function displayCurrent (data, temp, wind, humid, uvi) {
    document.getElementById('c-temp').textContent = temp;
    document.getElementById('c-wind').textContent = wind + " ";
    document.getElementById('c-humidity').textContent = humid;
    document.getElementById('c-uv').textContent = uvi; 
    fiveDates();
}

// display dates for next five days   
function fiveDates() {
    document.getElementById('f-day').textContent = tommorow;
    document.getElementById('s-day').textContent = next;
    document.getElementById('t-day').textContent = then;
    document.getElementById('o-day').textContent = fourth;
    document.getElementById('i-day').textContent = last;
}

// get temperature for next five days
function tempForFive(fiveDayTemp) {
    document.getElementById('f-temp').textContent = fiveDayTemp[1];
    document.getElementById('s-temp').textContent = fiveDayTemp[2];
    document.getElementById('t-temp').textContent = fiveDayTemp[3];
    document.getElementById('o-temp').textContent = fiveDayTemp[4];
    document.getElementById('i-temp').textContent = fiveDayTemp[5]; 
}

// get wind speed for five days
function windForFive(fiveDayWind) {
    document.getElementById('f-wind').textContent = fiveDayWind[1] + " ";
    document.getElementById('s-wind').textContent = fiveDayWind[2] + " ";
    document.getElementById('t-wind').textContent = fiveDayWind[3] + " ";
    document.getElementById('o-wind').textContent = fiveDayWind[4] + " ";
    document.getElementById('i-wind').textContent = fiveDayWind[5] + " ";
}

// get humidity for five days
function humidForFive(fiveDayHumid) {
    document.getElementById('f-humidity').textContent = fiveDayHumid[1];
    document.getElementById('s-humidity').textContent = fiveDayHumid[2];
    document.getElementById('t-humidity').textContent = fiveDayHumid[3];
    document.getElementById('o-humidity').textContent = fiveDayHumid[4];
    document.getElementById('i-humidity').textContent = fiveDayHumid[5];    
}

// place icons
function displayIcons (wind, description) {

    var div = [];
    div[0] = document.getElementById('icon');
    div[1] = document.getElementById('f-icon');
    div[2] = document.getElementById('s-icon');
    div[3] = document.getElementById('t-icon');
    div[4] = document.getElementById('o-icon');
    div[5] = document.getElementById('i-icon');

    for (var i = 0; i < 6; i++) {

        if (wind > 20) { 
            div[i].classList.add('fas', 'fa-wind');
        }
        else {
    
            if (description[i] === "few clouds" ||
            description[i] === "scattered clouds" ||
            description[i] === "broken clouds") 
            {
                div[i].classList.add('fas', 'fa-cloud-sun');
            } 
            else if (description[i] === "shower rain" ||
            description[i] === "rain")
            {
                div[i].classList.add('fas', 'cloud-rain');
            }
            else if (description[i] === "thunderstorm")
            {
                div[i].classList.add('fas', 'fa-bolt');
            }
            else if (description[i] === "snow")
            {
                div[i].classList.add('fas', 'fa-snowflake');
            }
            else 
            {
                div[i].classList.add('fas', 'fa-sun');
            }
        }
    } 
}

// set up color scheme depending of UV index
function uvIndex (uvi) {

    var uvIndex = document.getElementById('c-uv');

    uvIndex.style.background = "none";
    uvIndex.style.fontWeight = "bold";

    if (uvi >= 0 && uvi <= 3) {
        uvIndex.style.background = "green";
        uvIndex.style.color = "white";
    }
    else if (uvi >= 3 && uvi <= 6) {
        uvIndex.style.background = "yellow";
        uvIndex.style.color = "black";
    }
    else if (uvi >= 6 && uvi <= 8) {
        uvIndex.style.background = "orange";
        uvIndex.style.color = "black";
    } 
    else if (uvi >= 8 && uvi <= 10) {
        uvIndex.style.background = "red";
        uvIndex.style.color = "white";
    }
    else {
        uvIndex.style.background = "purple";
        uvIndex.style.color = "white";
    }
}

// allow users to press 'Enter' key on keyboard for convenience
var enterKey = document.getElementById('input');

enterKey.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('search').click();
    }
});


document.getElementById('search').addEventListener("click", searchInput);

 