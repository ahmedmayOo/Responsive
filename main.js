
var wrapper;
 
var input = "https://ahmedghanem.netlify.com/";

( function getWrapper(){

    wrapper = document.getElementById('phone-wrapper');
    
    wrapper.setAttribute('src', "var")

})();

function upToggle() {
    wrapper.innerHTML  = '<div id="device" class="phone"><iframe  src='+ input+'></iframe></div>';
}

function downToggle() {
    wrapper.innerHTML  = '<div id="device" class="tablet"><iframe  src='+ input+'></iframe></div>';
}


function rotate() {
    var child = wrapper.firstElementChild;
    if(child.hasAttribute('rotate','rotate')) {
        child.setAttribute('rotate','back');
    }
    else{
        child.setAttribute('rotate','rotate');
    }
   
      
}

function cdColor(obj) {
    color = obj.getAttribute("color");
    child = wrapper.firstElementChild;
    switch (color) {
        case "black": 
        child.style.borderColor = "black";
        break;

        case "silver":
        child.style.borderColor = "#718093";
        console.log("silver")
        break;

        case "yellow":
        child.style.borderColor = "#fbc531";

    }
    
}


function go() {
    device = document.getElementById('device');
    input = document.getElementsByTagName('input')[0];
    iframe = device.firstElementChild;
    iframe.setAttribute('src', input.value);
}

function button() {

} 
     
html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});