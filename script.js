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
        threed = "51,68";

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
        if (keys.toString().indexOf(threed) >= 0) {

            if(!window.ThreeDit){ThreeDit=function(a,b){function G(a){p=a.clientX+g.scrollLeft;q=a.clientY+g.scrollTop}function F(){var a=g.scrollLeft-t;var b=g.scrollTop-u;p=v=g.scrollLeft+r;q=w=g.scrollTop+s;n+=a;o+=b;x=v+l.clientLeft-e.pageXOffset;y=w+l.clientTop-e.pageYOffset;t=g.scrollLeft;u=g.scrollTop}function E(){r=e.innerWidth/2;s=e.innerHeight/2;p=v=g.scrollLeft+r;q=w=g.scrollTop+s;x=v+l.clientLeft-e.pageXOffset;y=w+l.clientTop-e.pageYOffset}function D(){n+=(p-n)*.05;o+=(q-o)*.05;var a=(n-v)/r*5;var b=-(o-w)/s*5;for(var e=0;e<d.length;e++){var f=d[e].node;var g=f;var h=0;var k=0;var l=d[e].z;f.style[i]=x-h+"px "+(y-k)+"px";f.style[j]="rotateY("+a+"deg) rotateX("+b+"deg)translate3d(0px,0px, "+l*c.zDepth+"px)"}}function C(){var a;for(var b=0;b<d.length;b++){d[b].node.style[j]="none"}delete d;d=[];A(g,0);d.push({node:g,z:0});d.sort(function h(a,b){return a.z-b.z});var c=0;var e=[c];d[0].z=c;for(var b=1;b<d.length;b++){e.push(c=d[b].z==d[b-1].z?c:c+1)}var f=e[e.length-1];for(var b=0;b<d.length;b++){d[b].z=e[b]/f}}function B(a){c.perspective=a;k[h+"Perspective"]=c.perspective+"px"}function A(a,b,e){if(d.length>=c.maxElems-1)return;if(!e&&a.tagName=="DIV"&&a.childNodes.length>0){d.push({node:a,z:b})}for(var f=0;f<a.childNodes.length;f++){A(a.childNodes[f],b+1,a.childNodes.length<2)}}function z(a){f=a;g=f.body;h="webkitTransform"in g.style?"webkit":"MozTransform"in g.style?"Moz":null;i=h+"TransformOrigin";j=h+"Transform";l=f.documentElement;k=l.style;m=e.getComputedStyle;t=g.scrollLeft;u=g.scrollTop;k[h+"Perspective"]=c.perspective+"px";k.backgroundImage=m(g).getPropertyValue("background-image");k.backgroundColor=m(g).getPropertyValue("background-color");C();if(!c.initialized){E();n=p;o=q;e.addEventListener("resize",E);e.addEventListener("scroll",F);f.addEventListener("mousemove",G);setInterval(D,1e3/60)}c.initialized=true}var c={zDepth:300,maxElems:100,perspective:500,initialized:false};var d=[];var e=a;var f=b;var g;var h;var i;var j;var k;var l;var m;var n;var o;var p;var q;var r;var s;var t;var u;var v;var w;var x;var y;c.init=z;c.recollectElems=C;c.render=D;c.changePerspective=B;return c}(window,document);ThreeDit.init(document);}else{ThreeDit.recollectElems();};

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
