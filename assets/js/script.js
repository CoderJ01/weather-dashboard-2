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

    console.log();

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



