/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

wwindow.onload = function() {
  const who = ["My dog", "the cat", "Her turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car", "the cake"];
  const when = [
    "at night",
    "right on time",
    "after work",
    "while I was crying"
  ];

  function generarExcusa() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    const excusaGenerada = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

    document.getElementById("excuse").innerHTML = excusaGenerada;
  }

  document
    .getElementById("generarExcusa")
    .addEventListener("click", generarExcusa);

  window.onload = generarExcusa;
};
