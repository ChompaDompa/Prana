var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

var formBox = document.querySelector('.form-box');

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  formBox.style.maxHeight = '600px';
}

function login() {
  formBox.style.maxHeight = '400px';
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}
