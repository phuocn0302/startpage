
window.onload = displayTime();

function displayTime() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturnday'];
  
  var now = new Date();
  
  var day = days[now.getDay()];
  var dd = now.getDate();
  var mm = months[now.getMonth()];
  
  // Set format
  var date = day + ', ' + mm + ' ' + dd;
  var time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  
  document.getElementById("date").innerText = date;
  document.getElementById("time").innerText = time;
  setTimeout(displayTime, 1000);
}
