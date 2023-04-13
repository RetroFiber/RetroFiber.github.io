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
var input = "";
document.body.addEventListener('keypress',function(ev){
    input += String.fromCharCode(ev.keyCode);
    console.log(input);
    if(input == "back in black"){
        var audio = new Audio('https://radioteca.net/media/uploads/audios/%25Y_%25m/back%20in%20black-acdc.mp3');
      audio.play()
      input = "";
    }
    if(input == "mirror"){
      document.querySelector('body').style.setProperty("--matrix", "matrix(-1,0,0,1,0,0)");
      input = "";
    }
});

// reset input when pressing esc
document.body.addEventListener('keyup',function(ev){
    if(ev.keyCode == 49) input = "";
});
