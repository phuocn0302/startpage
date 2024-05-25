var text = getGreet();

var speed = 50; // Latency between type, lower is faster
var index = 0; 
   
function typewriter()
{

  if (index == text.length) {
    return;
  }

  document.getElementById("greeting").innerHTML = 
    text.substring(0, index++) + "_"
    ;
  setTimeout("typewriter()", speed);
}

function getGreet() {
  const time = new Date().getHours();

  const g1 = `${CONFIG.greetingNight}\xa0`;
  const g2 = `${CONFIG.greetingMorning}\xa0`;
  const g3 = `${CONFIG.greetingAfternoon}\xa0`;
  const g4 = `${CONFIG.greetingEvening}\xa0`;

  var greet = 'Welcome back ' + `${CONFIG.name}` + '. ';

  if (time >= 23 || time < 6) {
    greet = greet + g1;
  } else if (time >= 6 && time < 12) {
    greet = greet + g2;
  } else if (time >= 12 && time < 17) {
    greet = greet + g3;
  } else {
    greet = greet + g4;
  }

  // document.getElementById("greeting").innerText = greet ;
  return greet;
}

typewriter();