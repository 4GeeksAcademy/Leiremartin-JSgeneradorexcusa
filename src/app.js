/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

wwindow.onload = function() {
  const who = [
    "Mi perro",
    "La bebé",
    "El alien",
    "Un duende de 3 cabezas",
    "Un unicornio multicolor"
  ];
  const action = [
    "se comió",
    "robó",
    "pintó con tinta invisible",
    "lanzó al lago",
    "escondió en el horno",
  ];
  const what = [
    "los deberes",
    "todos los relojes de la casa",
    "la carroza",
    "la tarta de la boda",
    "las canicas amarillas",
  ];
  const when = [
    "en el cambio de hora",
    "justo al despertarme",
    "cuando estaba de cañas",
    "cuando salia de casa",
    "por la noche",
    "en el entierro del panadero"
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
