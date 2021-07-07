const cityid = "5604473";
const APPID ="601aa5c6221cb660a44b58b8dc29f890";

const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=601aa5c6221cb660a44b58b8dc29f890&units=imperial';

fetch(apiURL)
.then((Response) => Response.json())
.then( (jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#current-temp');
    temperature.textContent = jsObject.main.temp; 
    const currently = document.querySelector('#currently'); 
    currently.innerHTML = `<strong>${jsObject.weather[0].description.toUpperCase()} </strong>`;




    
}); 