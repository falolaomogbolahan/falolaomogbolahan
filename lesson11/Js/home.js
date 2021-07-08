const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.tab')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

 
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay(); 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
document.getElementById("date").innerHTML = dateStr;



if (day1[day] == 'Friday') {
    document.getElementById("announce").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("announce").style.display = "block";
}
else {
    document.getElementById("announce").style.display = "none";
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
.then(function(response) {
  return response.json(); 
})

.then(function (jsonObject) {
  const towns = jsonObject['towns'];
  const cards = document.querySelector('.cards');

  const name = towns.filter(x => x.name == 'Preston' || x.name == 'Soda Springs' || x.name == 'Fish Haven'); 
  name.forEach (towns => { 
    let section = document.createElement('section'); 
    let div = document.createElement ('div'); 
    div.setAttribute ('id' ,'data'); 

    let h2 = document.createElement('h2');
    h2.textContent = `${towns.name}`; 
    div.appendChild(h2);

    let h3 = document.createElement('h3'); 
    h3.textContent = `${towns.motto}`; 
    div.appendChild(h3);

    let p1 = document.createElement('p');
    p1.textContent = `Year Founded:   ${towns.yearFounded}`; 
    div.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = `Current Population:  ${towns.currentPopulation}`; 
    div.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent = `Average Rainfall:  ${towns.averageRainfall}`;
    div.appendChild(p3);

let img = document.createElement('img');
img.setAttribute('src', `Images/${towns.photo}`);
img.setAttribute('alt', `${towns.name}`);



section.appendChild(div);
section.appendChild(img);

cards.append(section);

  })
})
