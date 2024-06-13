/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#ExcuseMe").innerHTML = GeneradordeExcusas();
  });
  document.querySelector("#ExcuseMe").innerHTML = GeneradordeExcusas();
  console.log("Hello Rigo from the console!");
};
let GeneradordeExcusas = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let whoI = Math.floor(Math.random() * who.length);
  let actionI = Math.floor(Math.random() * action.length);
  let whatI = Math.floor(Math.random() * what.length);
  let whenI = Math.floor(Math.random() * when.length);
  return (
    who[whoI] + " " + action[actionI] + " " + what[whatI] + " " + when[whenI]
  );
};
