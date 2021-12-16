function openNav() {
  document.getElementById("sidebar").style.width = "100vw";
  document.getElementById("sidebar").style.height = "100vh";
  document.getElementById("sidebar").style.opacity=  "1";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}