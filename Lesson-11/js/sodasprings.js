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
  
  const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonObject) {
      const towns = jsonObject["towns"];
      for (let i = 0; i < towns.length; i++) {
        if (
          towns[i].name === "Preston" ||
          towns[i].name === "Soda Springs" ||
          towns[i].name === "Fish Haven"
        ) {
          let card = document.createElement("section");
          let photo = document.createElement("img");
          let block = document.createElement("div");
          let h2 = document.createElement("h2");
          let motto = document.createElement("p");
          let p2 = document.createElement("p");
          let p3 = document.createElement("p");
          let p4 = document.createElement("p");
  
          motto.className = "motto";
          card.className = "town";
  
          photo.setAttribute(
            "src",
            "https://cdn.glitch.com/ec026a90-e487-4b73-a1b4-50a79afeb7de%2Fjars.jpeg?v=1571378071642"
          );
          photo.setAttribute("alt", towns[i].name);
          h2.textContent = towns[i].name;
          motto.textContent = towns[i].motto;
          p2.textContent = "Year Founded: " + towns[i].yearFounded;
          p3.textContent = "Population: " + towns[i].currentPopulation;
          p4.textContent = "Average Annual Rainfall: " + towns[i].averageRainfall;
  
          card.appendChild(photo);
          card.appendChild(block);
          block.appendChild(h2);
          block.appendChild(motto);
          block.appendChild(p2);
          block.appendChild(p3);
          block.appendChild(p4);
  
          document.querySelector("div.towns").appendChild(card);
        }
      }
    });
  const apiURL ="https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=8ff253520018a0e2f77fa6d2d13cadb4";
  
  fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
      console.log(jsObject);
  
      document.getElementById("currently").textContent =
        jsObject.weather[0].description;
      document.getElementById("temp").textContent = jsObject.main.temp;
      document.getElementById("humidity").textContent =
        jsObject.main.humidity + "%";
      document.getElementById("speed").textContent = jsObject.wind.speed;
  
      const imagesrc =
        "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".jng";
      const desc = jsObject.weather[0].description;
    
      document.getElementById("icon").setAttribute("src", imagesrc);
      document.getElementById("icon").setAttribute("alt", desc);
    });
  const apiURLfiveDay ="https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=8ff253520018a0e2f77fa6d2d13cadb4";
  
  fetch(apiURLfiveDay)
    .then(response => response.json())
    .then(jsObject => {
      let fiveDayData = jsObject.list;
      let text_splits_value = [];
      let counter = 1;
      for (let i = 0; i < fiveDayData.length; i++) {
        let text_splits = fiveDayData[i].dt_txt.split(" ");
  
        if (text_splits[1] == "18:00:00") {
          document.getElementById("fiveDayValue" + counter).textContent =
            fiveDayData[i].main.temp + '°F';
          let weather_pic = fiveDayData[i].weather[0].icon;
          let img = document.createElement("img");
      
          img.setAttribute("src", "http://openweathermap.org/img/wn/" + weather_pic + '@2x.png');
          img.setAttribute("alt", fiveDayData[i].weather[0].description);
  
          document.getElementById("fiveDayIcon" + counter).appendChild(img);
          counter = counter + 1;
        }
      }
    });
  const apiURLEvents ="https://byui-cit230.github.io/weather/data/towndata.json";
  fetch(apiURLEvents)
  .then(function(response) {
      return response.json();
    })
    .then(function(jsonObject) {
      const currentEvents = jsonObject["towns"];
      for (let i = 0; i < currentEvents.length; i++) {
        if (
          currentEvents[i].name === "Soda Springs"
        ) {
          let card = document.createElement("section");
          let h2 = document.createElement("h2");
          let p2 = document.createElement("p");
          
          card.className = "town";
          h2.textContent = currentEvents[i].name + " Upcoming Events: "
          p2.textContent = currentEvents[i].events;
         
          card.appendChild(h2);
          card.appendChild(p2);
          document.querySelector("div.currentEvents").appendChild(card);
        }
      }
  
    });