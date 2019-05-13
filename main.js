
var wrapper;
var userColor = "black;";
var input = "#";



function upToggle() {

}

function downToggle() {

}

function phone() {
 
    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="phone"> <div class="thumb-right"></div><div class="volume-up"></div><div class="volume-down"></div><div id="inner"> <iframe  src=""> </iframe></div></div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
    scale(); 
}
function tablet() {
   
    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="tablet">  <div class="thumb-right"></div><div class="volume-up"></div><div class="volume-down"></div><div id="inner"> <iframe  src=""></</iframe></div><div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
    scale();
}
function labtop() {
  

    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="labtop"><div id="inner"><iframe  src=""> </iframe></div></div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
    scale();
}
function tv() {
 
    wrapper = document.getElementById('phone-wrapper');
    wrapper.innerHTML = '<div id="device" class="tv"><div id="inner"> <iframe  src""></iframe></div></div> ';
    child = wrapper.firstElementChild;
    child.style.borderColor = userColor;
    scale();
}


function rotate() {
    var child = wrapper.firstElementChild;
    if (child.hasAttribute('rotate', 'rotate')) {
        child.setAttribute('rotate', 'back');
    }
    else {
        child.setAttribute('rotate', 'rotate');
    }


}

function cdColor(obj) {
    color = obj.getAttribute("color");
    wrapper = document.getElementById('phone-wrapper');
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

$(document).ready(function () {
    $(".static-icon").click(function () {
        $("#fade1").fadeToggle(2000);
        $("#fade2").fadeToggle("slow");
        $("#fade3").fadeToggle();
    });
});

function scale() {
    var clientWidth = document.getElementById('inner').clientWidth;
    var clientHeight = document.getElementById('inner').clientHeight;
    var device = document.getElementById('inner');
    var iframe = document.getElementsByTagName('iframe')[0];
    iframe.src = "https://flatuicolors.com/";


    var width = 100 / (1950 / clientWidth) / 100;

    iframe.style.transform = "scale("+width+")";
    var w = iframe.getBoundingClientRect().width;  
    var z = (clientWidth - 1950) /2 ;

    var h = iframe.getBoundingClientRect().height;  
 

    var hh = Math.round((clientHeight / h) * clientHeight) +1.5  ;
   
    console.log( hh )
    var t = Math.round((clientHeight-hh) / 2) ;
    console.log(t);
    iframe.style.width = "1950px";
    iframe.style.height = hh+"px"; 
    iframe.style.left = z +"px";
    iframe.style.top = t+'px';
   
    /* iframe.style.height = 
    
    iframe.style.top =    */
    
 
}

/* $(window).resize(function() { 
    scale();
}); */