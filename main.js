var x = document.getElementById("geo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {

  if(position.coords.latitude > 67) {
    alert("Polar Bears might be nearby");
  }else {
    //calculates distance to the arctic circle
    angle = (67 - position.coords.latitude) * (1/90) ;
    diameter = 40000;
    alert("Distance to the next wild polar bear: " 
    + (angle * (diameter * 0.5)).toFixed(2) 
    + "km");
  }
}


