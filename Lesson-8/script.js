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