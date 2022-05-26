(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "September 23, 2022 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

  
  // greet
  var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b>, ayuuuu!';


// clock
// Javascript is used to set the clock to your computer time.

// var currentSec = getSecondsToday();

// var seconds = (currentSec / 60) % 1;
// var minutes = (currentSec / 3600) % 1;
// var hours = (currentSec / 43200) % 1;

// setTime(60 * seconds, "second");
// setTime(3600 * minutes, "minute");
// setTime(43200 * hours, "hour");

// function setTime(left, hand) {
//   $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
// }

// function getSecondsToday() {
//   let now = new Date();

//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; 
//   return Math.round(diff / 1000);
// }
//finish

// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT