// alert("Working");

var button = document.getElementById("menu");
var nav = document.getElementById("nav");
var uni = document.getElementById("close");
var mike = document.getElementById("picture");
var dami = document.getElementById("image");
var ayo = document.getElementById("michael");
var hermana = document.getElementById("sister");
var ilorin = document.getElementById("ilorin");
button.addEventListener("click", () => {
  nav.style.display = "block";
  button.style.display = "none";
  uni.style.display = "block";
});

uni.addEventListener("click", () => {
  nav.style.display = "none";
  button.style.display = "block";
  uni.style.display = "none";
});

mike.addEventListener("click", () => {
  dami.style.display = "inline";
  mike.style.display = "none";
});

dami.addEventListener("click", () => {
  dami.style.display = "none";
  ayo.style.display = "inline";
});
ayo.addEventListener("click", () => {
  ilorin.style.display = "inline";
  ayo.style.display = "none";
});
ilorin.addEventListener("click", () => {
  hermana.style.display = "inline";
  ilorin.style.display = "none";
});
hermana.addEventListener("click", () => {
  mike.style.display = "inline";
  hermana.style.display = "none";
});
