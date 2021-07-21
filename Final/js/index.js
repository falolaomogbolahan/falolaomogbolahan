const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.tab')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// Weather Summary 
const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=2332459&APPID=601aa5c6221cb660a44b58b8dc29f890&units=imperial';

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

  // 3 DAYS FORECAST
  const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=2332459&APPID=601aa5c6221cb660a44b58b8dc29f890&units=imperial";
 
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

//Last Seen 

const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay(); 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
document.getElementById("date").innerHTML = dateStr;



// Directory 
fetch('./json/business.json') .then(results => results.json()) 
.then(function (jsonObject) {
  const business = jsonObject['business'];
  const cards = document.querySelector('.cards');

  const name = business.filter(x => x.name == 'Simis Tombrown' || x.name == 'Alhaji Tanko Petro' || x.name == 'Dangote Plc' || x.name == 'Macmed Intergrated Farms' || x.name == 'Netcom Africa' || x.name == 'Just Forex' || x.name == 'Cway Nigeria' || x.name == 'Sortz Solution' || x.name == 'Echelonplus Limited'); 
  name.forEach (business => { 
    let section = document.createElement('section'); 
    let div = document.createElement ('div'); 
    div.setAttribute ('id' ,'data'); 

    let h2 = document.createElement('h2');
    h2.textContent = `${business.name}`; 
    div.appendChild(h2);

    let h3 = document.createElement('h3'); 
    h3.textContent = `Website:  ${business.website}`; 
    div.appendChild(h3);

    let p1 = document.createElement('p');
    p1.textContent = `Email:   ${business.email}`; 
    div.appendChild(p1);

let img = document.createElement('img');
img.setAttribute('src', `assests/${business.photo}`);
img.setAttribute('alt', `${business.name}`);



section.appendChild(div);
section.appendChild(img);

cards.append(section);

  })
})


