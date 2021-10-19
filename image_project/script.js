var up = document.getElementById('GFG_UP'); 
up.innerHTML = "Click on the button to add image element"; 
var down = document.getElementById('GFG_DOWN'); 
  
function generateRose() {
    var img = document.createElement(img);
    img .src="o7.jpg";
    document.getElementById('body');
    document.appendChild(img);
    down.innerHTML = "Image Element Added."; 
} 