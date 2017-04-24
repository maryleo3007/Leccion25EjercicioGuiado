function createDiv(getURL) {
  var contenedor = document.getElementById('contenedor');
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src",getURL);
  div.classList.add("contenedor-imagen");
  div.appendChild(img);
  contenedor.appendChild(div);
}
window.addEventListener("load",function () {
  var inputURL = document.getElementById('url');
  function getURL(e){
    if(e.keyCode ==13){
      createDiv(this.value);
      this.value = "";
    }
  }
  console.log(getURL);
  inputURL.onkeydown = getURL;
});
