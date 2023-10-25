//2.Second Way:- Creating a random Hex Code generator for changing colors through changing hexcode
//It will give us any random color
//Will discuss later
function randomHexCodeGen() {}

//1. First way :- taking random colors from an array
let colors = ["red", "blue", "yellow", "green", "brown"];

//Selecting  Elements and their styles
let btn = document.querySelector(".clickMe");
let body = document.querySelector("body");
let colorName = document.querySelector(".changeColorName");

btn.addEventListener("click", () => {
  console.log("YO it is working");

  //Below line will genrate a random index
  let random = (randomValue = Math.floor(Math.random() * colors.length));
  let color = colors[random];

  //Or you can also use
  // let  random  =  colors.random() , random will contain a
  //random color  from colors
  //Here you will use let color = random
  console.log(color);

  //Assiging color to BackgroundColor of  body
  body.style.backgroundColor = color;
  color = color.toUpperCase();
  colorName.innerHTML = color;
});
