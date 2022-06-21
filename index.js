function addClipboard() {
    navigator.clipboard.writeText("javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://alfiearmadillo.github.io/gatherioClient.js';})();");
  }





document.getElementById("button1").addEventListener("mouseover", makeButtonLight);
document.getElementById("button1").addEventListener("mouseout", makeButtonDark);
document.getElementById("button2").addEventListener("mouseover", makeButtonLight);
document.getElementById("button2").addEventListener("mouseout", makeButtonDark);
document.getElementById("button3").addEventListener("mouseover", makeButtonLight);
document.getElementById("button3").addEventListener("mouseout", makeButtonDark);

function makeButtonLight(){
  if(this.style.background==="rgb(180, 180, 180)" || this.style.background===""){
  this.style.background='#ededed'
  }
}

function makeButtonDark(){
  if(this.style.background==="rgb(237, 237, 237)"||this.style.background===""){
  this.style.background='#b4b4b4'
  }
}
