function selectbgColor() {
         let bgcolor = document.getElementById('bgcolorInput');
         // changing the background color
         localStorage.setItem("bgc", bgcolor.value);
         document.querySelector(':root').style.setProperty("--backgroundcolor", bgcolor.value);
        }
if (!(localStorage.getItem("bgc"))) { 
  localStorage.setItem("bgc", "black"); 
  document.querySelector(':root').style.setProperty("--backgroundcolor", "black");
}
document.querySelector(':root').style.setProperty("--backgroundcolor", localStorage.getItem('bgc'));

function selectColor() {
         let color = document.getElementById('colorInput');
         // changing the background color
         localStorage.setItem("color", color.value);
         document.querySelector(':root').style.setProperty("--color", color.value);
        }
if (!(localStorage.getItem("color"))) { 
  localStorage.setItem("color", "#63de00"); 
  document.querySelector(':root').style.setProperty("--color", "#63de00");
}
document.querySelector(':root').style.setProperty("--color", localStorage.getItem('color'));

function black_white() {
         localStorage.setItem("color", "black");
         document.querySelector(':root').style.setProperty("--color", "black");
         localStorage.setItem("bgc", "white");
         document.querySelector(':root').style.setProperty("--backgroundcolor", "white");
        }
function white_garnet() {
         localStorage.setItem("color", "white");
         document.querySelector(':root').style.setProperty("--color", "white");
         localStorage.setItem("bgc", "#2C0A21");
         document.querySelector(':root').style.setProperty("--backgroundcolor", "#2C0A21");
        }
function white_black() {
         localStorage.setItem("color", "white");
         document.querySelector(':root').style.setProperty("--color", "white");
         localStorage.setItem("bgc", "black");
         document.querySelector(':root').style.setProperty("--backgroundcolor", "black");
        }
function green_black() {
         localStorage.setItem("color", "#63de00");
         document.querySelector(':root').style.setProperty("--color", "#63de00");
         localStorage.setItem("bgc", "black");
         document.querySelector(':root').style.setProperty("--backgroundcolor", "black");
        }
function mirror() {
      document.querySelector(':root').style.setProperty("transform", "matrix(-1,0,0,1,0,0)");
};
if (window.addEventListener) {
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
        fix = "70,73,88";
        acdc = "65,67,68,67";
        flip = "70,76,73,80";
        mirror = "77,73,82,82,79,82";
        eagler = "69,65,71,76,69,82";

    window.addEventListener("keydown", function(e){

        keys.push(e.keyCode);

        if (keys.toString().indexOf(konami) >= 0) {

            alert('This is where the magic would happen');

            keys = [];
        };
        if (keys.toString().indexOf(acdc) >= 0) {

            acdcee();

            keys = [];
        };
        if (keys.toString().indexOf(flip) >= 0) {

            document.querySelector(':root').style.setProperty("transform", "matrix(1,0,0,-1,0,0)");

            keys = [];
        };
        if (keys.toString().indexOf(eagler) >= 0) {

            eewindow("https://retrofiber.github.io/Offline_Download_Version.html")

            keys = [];
        };
        if (keys.toString().indexOf(mirror) >= 0) {

            document.querySelector(':root').style.setProperty("transform", "matrix(-1,0,0,1,0,0)");

            keys = [];
        };
        if (keys.toString().indexOf(fix) >= 0) {

            document.querySelector(':root').style.setProperty("transform", "matrix(1,0,0,1,0,0)");acdceepause();

            keys = [];
        };
    }, true);
};
var song = new Audio("https://radioteca.net/media/uploads/audios/%25Y_%25m/back%20in%20black-acdc.mp3");
function acdcee(){
  song.play();
}
function acdceepause(){
  song.load();
}
function eewindow(url){
  win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url
  win.document.body.appendChild(iframe)
}
