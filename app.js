var display = document.getElementById("display");
var display2 = document.getElementById("display2");
var display3 = document.getElementById("display3");
var display4 = document.getElementById("display4");
var display5 = document.getElementById("display5");

function count() {
  var date = new Date();
  var day = date.getDay();
  if (day == 0) {
    day = "Sunday";
  } else if (day == 1) {
    day = "Monday";
  } else if (day == 2) {
    day = "Tuesday";
  } else if (day == 3) {
    day = "Wednesday";
  } else if (day == 4) {
    day = "Thursday";
  } else if (day == 5) {
    day = "Friday";
  } else if (day == 6) {
    day = "Saturday";
  }
  display.innerHTML = "Today Is : " + day + "<br>";
  var h = date.getHours();
  if (h <= 0) {
    h += " AM";
  } else if (h >= 12) {
    h += " PM";
  }
  var m = date.getMinutes();
  var s = date.getSeconds();
  display.innerHTML += "Current Time Is : " + h + " : " + m + " : " + s;
}
setInterval(function () {
  count();
}, 1000);
// ?----------------------------------
var date = new Date();
var day = date.getDay();

var month = date.getMonth() + 1;
var year = date.getFullYear();
if (day == 0) {
  day = "Sun";
} else if (day == 1) {
  day = "Mon";
} else if (day == 2) {
  day = "Tue";
} else if (day == 3) {
  day = "Wed";
} else if (day == 4) {
  day = "Thu";
} else if (day == 5) {
  day = "Fri";
} else if (day == 6) {
  day = "Sat";
}

var stringDate = day + " / " + month + " / " + year;
display2.textContent = stringDate;
console.log(stringDate);

// ?-----------------------------//

var endDate = "14 August 2024";
var end = new Date(endDate);
console.log(end);

var minus = end - date;
console.log(minus);

var result = minus / (1000 * 60 * 60 * 24);
display3.innerHTML = Math.floor(result) + " Day's Left";

// ?---------------------------------------------
var startYear = new Date(2024);
var endYear = new Date(2050);

function jan1sunday() {
  for (var i = startYear; i <= endYear; i++) {
    var date1 = new Date(i, 0, 1);

    if (date1.getDay() == 0) {
      console.log(`January 1st ${i} is a Sunday`);

      display4.innerHTML += `January 1st ${i} is a Sunday <br>`;
    }
    // console.log(sunday);
  }
  // console.log(daycount);
}
jan1sunday();

let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

let userGuessNumber = parseInt(prompt("Write A Number Between 1 to 10"));
if (randomNumber === userGuessNumber) {
  display5.innerHTML = "Good Work";
} else {
  display5.innerHTML = `Not Matched! Correct Number Was ${randomNumber}`;
}
