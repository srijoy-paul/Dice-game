var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

console.log(random1);
console.log(random2);
// switch (random1) {
//   case 1:
//     document
//       .getElementsByClassName("img-1")[0]
//       .setAttribute("src", "./images/dice1.png");
//     break;
//   case 2:
//     document
//       .getElementsByClassName("img-1")[0]
//       .setAttribute("src", "./images/dice2.png");
//     break;
//   case 3:
//     document
//       .getElementsByClassName("img-1")[0]
//       .setAttribute("src", "./images/dice3.png");
//     break;
//   case 4:
//     document
//       .getElementsByClassName("img-1")[0]
//       .setAttribute("src", "./images/dice4.png");
//     break;
//   case 5:
//     document
//       .getElementsByClassName("img-1")[0]
//       .setAttribute("src", "./images/dice5.png");
//     break;
//   case 6:
//     document
//       .getElementsByClassName("img-1")[0]
//       .setAttribute("src", "./images/dice6.png");
//     break;
// }

// switch (random2) {
//   case 1:
//     document
//       .getElementsByClassName("img-2")[0]
//       .setAttribute("src", "./images/dice1.png");
//     break;
//   case 2:
//     document
//       .getElementsByClassName("img-2")[0]
//       .setAttribute("src", "./images/dice2.png");
//     break;
//   case 3:
//     document
//       .getElementsByClassName("img-2")[0]
//       .setAttribute("src", "./images/dice3.png");
//     break;
//   case 4:
//     document
//       .getElementsByClassName("img-2")[0]
//       .setAttribute("src", "./images/dice4.png");
//     break;
//   case 5:
//     document
//       .getElementsByClassName("img-2")[0]
//       .setAttribute("src", "./images/dice5.png");
//     break;
//   case 6:
//     document
//       .getElementsByClassName("img-2")[0]
//       .setAttribute("src", "./images/dice6.png");
//     break;
// }

var img1Source = "images/dice" + random1 + ".png";
var img2Source = "images/dice" + random2 + ".png";

document.getElementsByClassName("dice")[0].setAttribute("src", img1Source);
document.getElementsByClassName("dice")[1].setAttribute("src", img2Source);

if (random1 < random2) {
  document.getElementById("pg-title").textContent = "Player 2 Wins! 🚩";
} else if (random1 > random2) {
  document.getElementById("pg-title").textContent = "Player 1 Wins! 🚩";
} else {
  document.getElementById("pg-title").textContent = "Match Draw! 🎌";
}
