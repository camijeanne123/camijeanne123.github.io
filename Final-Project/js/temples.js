const apiURLClosures ='https://temple-suites.glitch.me/temples.json';
fetch(apiURLClosures)
  .then(function(jsonObject) {
    const temples  = jsonObject["temples"];
    for (let i = 0; i < temples.length; i++) {
       let idName = temples[i].name + "-closure";
      document.getElementById(idName).textContent = temples[i].closure
      }

  });
const apiURLM = 'https://api.openweathermap.org/data/2.5/weather?zip=84642,us&units=imperial&appid=8ff253520018a0e2f77fa6d2d13cadb4';

fetch(apiURLM)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 document.getElementById('Manti-temp').textContent = jsObject.main.temp + "°F";
});

const apiURLP = 'https://api.openweathermap.org/data/2.5/weather?zip=6107,au&units=imperial&appid=8ff253520018a0e2f77fa6d2d13cadb4';

fetch(apiURLP)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 document.getElementById('Perth-temp').textContent = jsObject.main.temp + "°F";
});

const apiURLC = 'https://api.openweathermap.org/data/2.5/weather?q=Cardston,ca&units=imperial&appid=8ff253520018a0e2f77fa6d2d13cadb4';

fetch(apiURLC)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 document.getElementById('Cardston-temp').textContent = jsObject.main.temp + "°F";
});

const apiURLPa= 'https://api.openweathermap.org/data/2.5/weather?zip=14522,us&units=imperial&appid=8ff253520018a0e2f77fa6d2d13cadb4';

fetch(apiURLPa)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 document.getElementById('Palmyra-temp').textContent = jsObject.main.temp + "°F";
});

