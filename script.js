"use strict"

//window.document.documentElement.body
//поиск элементов
/*let coffeeMachine = document.getElementById("coffee"); 
console.log(coffeeMachine);
let images = document.getElementsByTagName("img");
console.log(images);
let coffeeItems = document.getElementsByClassName("coffee-item");
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);*/

//-----современные методы поиска
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image = document.querySelector("img");
console.log(image);
let coffeeItems = document.querySelectorAll(".coffeeItem");
console.log(coffeeItems);
let itemImages = document.querySelectorAll(".coffee-item img");
console.log(itemImages);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);*/

//-----------------------работа с элементами-------
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "10px solid yellow";
coffeeMachine.style.borderRadius = "25px";
coffeeMachine.style.absolute = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";

let coffeeMachinetop = coffeeMachine.style.top;
console.log(parseInt(coffeeMachinetop));*/

//----Изменим атрибуты-----
/*let balance = document.querySelector("input[type='text']");
let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log(balance.hasAttribute("placeholder") );
balance.removeAttribute("aria-label");*/

/*let balance = document.querySelector("input[type='text']");
balance.value = 500; //==balance.getAttribute('value', 500);
console.log(balance.value);//==balance.getAttribute('value'); */

//----Изменение классов---
/*let changeButton = document.querySelector(".btn");
console.log(changeButton.classList);
changeButton.classList.remove("btn-primary");
changeButton.classList.add("btn-success");*/
// changeButton.classList.toggle("");//вкл - выкл

//Изменение содержимого элементов - текст на дисплеее в кофе машине
/*let displayText = document.querySelector(".display-text");
console.log( displayText.innerHTML);
console.log( displayText.innerText);
//displayText.innerHTML = "<b>Готовим кофе</b>";
displayText.innerText = "<b>Готовим кофе</b>";*/

//---События и слушатели событий
//мышь - click mouseover mouseup mousedown mousemove
//для input - focus change

//Ключевое THIS
/*<div class="coffee-item" onclick="buyCoffee('Americano', 50, this)"> */

//то же самое что
/*let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function () {
  buyCoffee('Americano, 50, this');
}*/

//Планирование
//таймаут
 /*setTimeout(paintBody, 5000);

function paintBody() {
  document.body.style.background = "crimson";
}*/

/*setTimeout(paintBody, 5000, 'aqua');
function paintBody(color) {
  document.body.style.background = color;
} */

/*let timeout = setTimeout(paintBody, 5000, 'aqua');

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);
}

function paintBody(color) {
  document.body.style.background = color;
}*/

/*let coffeeMachine = document.querySelector('.coffee-machine');
coffeeMachine.style.position = "absolute";*/

 /*let interval = setInterval(trashConsole, 1000);
 
 let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearInterval(interval);
}
function trashConsole() {
 console.log(Math.random());
}*/




