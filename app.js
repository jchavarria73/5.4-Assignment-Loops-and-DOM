// 5.1 Video Lesson: For and While Loops
const names = ["Jose", "Michael", "Zoey", "Sophia", "Isaac", "Anthony", "Samuel"];


for (name of names) {
  console.log(name);
  if (name === "Zoey") {
    console.log("Zoey is in my list!");
    break;
  }
}

let loading = 0;

while (loading < 100) {
  console.log("Website is still loading");

  loading++;
}

// 5.2 Video Lesson: DOM Manipulation
const userList = document.querySelector(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function() {
  //Create an li out of thin air
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  //Add the input value inside that new li
  newLi.appendChild(liContent);
  //Attaching the li to the user list
  userList.appendChild(newLi);
});

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

let rainbow = "";
for (let i = 0; i < colors.length; i++) { // For Loop
  rainbow += colors[i] + "<br>";
}

document.getElementById("forloop").innerHTML = rainbow;

let text = "";

for (let i = 1; i < 6; i++) { // For Loop
  text += "My favorite number is " + i + "<br>";
}

document.getElementById("number").innerHTML = text;

let number = "";
let i = 0;
while (i < 10) { // While Loop
  number += "<br>Number: " + i;
  i++;
}
document.getElementById("whileloop").innerHTML = number;

const comic = ["Spider-Man", "Iron Man", "Captain America", "Ant-Man", "Doctor Strange"];

let s = 0;
let superhero = "";
while (comic[s]) { // While Loop
  superhero += comic[s] + "<br>";
  s++;
}
document.getElementById("superhero").innerHTML = superhero;

document.querySelector("#cssbutton").onclick = function(){

    const h1 = document.querySelector("#cssh1"); //Change CSS with JS
    h1.style.color = "lightblue"; //Change CSS based upon a variable value
    h1.style.fontSize = "100px";
    h1.style.border = "10px solid black";
}

document.getElementById("cssp").style.color = "red"; //Change CSS based upon a variable value
document.getElementById("cssp").style.fontFamily = "Times New Roman";
document.getElementById("cssp").style.fontSize = "larger";



