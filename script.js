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
