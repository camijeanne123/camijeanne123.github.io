function todaysDate() {
  var d = new Date();
  var day = new Date();
  var years = new Date();
  var months = [
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December "
  ];

  document.getElementById("footdate").innerHTML =
    months[d.getMonth()] + day.getDate() + ", " + years.getFullYear();
}
function getWindChill() {
  var speed = parseFloat(document.getElementById("speed").innerHTML);
  var temp = parseFloat(document.getElementById("temp").innerHTML);
  if (speed < 3) {
    var output = "N/A";
    return output;
  } else if (temp > 50) {
    var output = "N/A";
    return output;
  } else {
    var chilltemp =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16);
    var output = Math.round(chilltemp * 100) / 100 + "°F";
  }
  document.getElementById("chill").innerHTML = output;
}
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name === "Preston" ||  towns[i].name ==="Soda Springs" || towns[i].name === "Fish Haven"){
        let card = document.createElement('section');
        let block = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let photo = document.createElement('img');

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        p2.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p3.textContent = 'Population: ' + towns[i].currentPopulation;
        p4.textContent = 'Average Annual Rainfall: ' + towns[i].averageRainfall;
        photo.setAttribute('src', 'images/' + towns[i].photo);
        photo.setAdttribute('alt', towns[i].name);
        
        card.appendChild(block);
        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(photo);
        
        document.querySelector('div.towns').appendChild(card);
     }  
  }
});
  