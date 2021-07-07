const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=601aa5c6221cb660a44b58b8dc29f890&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description.toUpperCase(); 
    document.getElementById('current-temp').textContent = jsObject.main.temp + " ˚F"; 
    document.getElementById('humidity').textContent = jsObject.main.humidity + " %"; 
    document.getElementById('wind-speed').textContent = jsObject.wind.speed + " mph"; 

    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;

    if (t <= 50 && s > 3) {
      let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
      document.getElementById("windchill").textContent = chill.toFixed(2) + " ˚F"; 
    } else {
      document.getElementById("windchill").textContent = "N/A"; 
    }
  });



// 5 DAYS FORECAST
  const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=601aa5c6221cb660a44b58b8dc29f890&units=imperial";
 
  fetch(apiURL_forecast)
  .then(response => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

console.log(forecastData);

const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  let day = 0;

  
forecastData.forEach(forecast => {
  let x = new Date(forecast.dt_txt);
  document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
  document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
  document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
day++;	  
});
});

// Upcoming Events
eventURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(eventURL)
.then((response)=>response.json())
.then((jsonObject)=>{console.log()
    
const towns = jsonObject.towns[2];

let calender = document.createElement('div');
let h3 = document.createElement('h3');
let item1 = document.createElement('p');
let item2 = document.createElement('p');
let item3 = document.createElement('p');
h3.textContent = "Upcoming Events";
item1.textContent = towns.events[0];
item2.textContent = towns.events[1];
item3.textContent = towns.events[2];
calender.append(h3, item1, item2, item3);
document.querySelector('div.upcoming').appendChild(calender);

    }); 
