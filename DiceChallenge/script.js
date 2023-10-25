let randomNumber1 = 1;
let randomNumber2 = 2;

let button = document.querySelector("button");
console.log("clicked !");
button.addEventListener("click", function press() {
  randomNumber1 = Math.floor(Math.random() * 5) + 1;
  randomNumber2 = Math.floor(Math.random() * 5) + 1;

  let image1 = document.querySelectorAll("img")[0];
  let image2 = document.querySelectorAll("img")[1];
  let Win = document.querySelector(".win");

  let randomLink1 = "images/dice" + randomNumber1 + ".png";
  let randomLink2 = "images/dice" + randomNumber2 + ".png";

  image1.setAttribute("src", randomLink1);
  image2.setAttribute("src", randomLink2);

  if (randomNumber2 > randomNumber1) {
    Win.innerHTML = "Player 2 wins !";
  }
  if (randomNumber1 > randomNumber2) {
    Win.innerHTML = "Player 1 wins !";
  }
  if (randomNumber1 == randomNumber2) {
    Win.innerHTML = "It's a draw";
  }
});
