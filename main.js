
var wrapper;
 var userColor = "black;";
var input = "#";

 

function upToggle() {
    
}

function downToggle() {
      
}

function  phone(){
    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="phone"> <div class="thumb-right"></div><div class="volume-up"></div><div class="volume-down"></div> <iframe  src='+input.value+'></iframe></div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
}
function  tablet(){
    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="tablet"> <div class="thumb-right"></div><div class="volume-up"></div><div class="volume-down"></div> <iframe  src='+input.value+'></iframe></div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
}
function  labtop(){
    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="labtop"> <iframe  src='+input.value+'></iframe></div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
}
function  tv(){
    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="tv"><iframe  src='+input.value+'></iframe></div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
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
        userColor = "black";
        break;

        case "silver":
        child.style.borderColor = "#718093";
        userColor = "#718093";
        break;

        case "yellow":
        child.style.borderColor = "#fbc531";
        userColor = "#fbc531";    
    }
    
}


function go() {
    device = document.getElementById('device');
    input = document.getElementsByTagName('input')[0];
    iframe = device.lastElementChild;
    iframe.setAttribute('src', input.value);
}

 
     
  
 
        $(document).ready(function(){
          $(".static-icon").click(function(){
            $("#fade1").fadeToggle(2000);
            $("#fade2").fadeToggle("slow");
            $("#fade3").fadeToggle();
          });
        });
 