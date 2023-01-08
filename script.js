let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");
let val = 0;

function increment() {
  val++;
  console.log(val);
  document.getElementById("val").innerHTML = val;
}
btn1[0].addEventListener("click", increment);

function decrement() {
  val--;
  console.log(val);
  document.getElementById("val").innerHTML = val;
}
btn2[0].addEventListener("click", decrement);

let btn3 = document.getElementById("display-popup");
let overlay = document.getElementById("overlay");
let exit = document.getElementById("exit");

exit.addEventListener("click", exitPopup);

function exitPopup() {
  overlay.style.display = "none";
}

btn3.addEventListener("click", displayPopup);
overlay.addEventListener("click", exitPopup);

function displayPopup() {
  overlay.style.display = "block";
}

let onion = document.getElementById("onion");

let buy = document.getElementById("val").innerHTML;
onion.innerHTML = buy;
console.log(buy);

// dark mode
let darkmode = document.getElementById("dark");
var body = document.getElementsByTagName("BODY")[0];
var title = document.getElementById("title");
darkmode.addEventListener("click", showDark);

function showDark() {
  darkmode.style.color = "white";
  body.style.background = "black";
  title.style.color = "white";
}

let lightmode = document.getElementById("light");
var body = document.getElementsByTagName("BODY")[0];
var title = document.getElementById("title");
lightmode.addEventListener("click", showLight);

function showLight() {
  darkmode.style.color = "white";
  body.style.background = "white";
  title.style.color = "black";
}
