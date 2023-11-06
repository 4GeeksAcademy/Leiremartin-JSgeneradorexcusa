/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

wwindow.onload = function() {
  const WHO = [
    "Mi perro",
    "La bebé",
    "El alien",
    "Un duende de 3 cabezas",
    "Un unicornio multicolor"
  ];
  const ACTION = [
    "se comió",
    "robó",
    "pintó con tinta invisible",
    "lanzó al lago",
    "escondió en el horno",
  ];
  const WHAT = [
    "los deberes",
    "todos los relojes de la casa",
    "la carroza",
    "la tarta de la boda",
    "las canicas amarillas",
  ];
  const WHEN = [
    "en el cambio de hora",
    "justo al despertarme",
    "cuando estaba de cañas",
    "cuando salia de casa",
    "por la noche",
    "en el entierro del panadero"
  ];

  function generarExcusa() {
    const RANDOMWHO = WHO[Math.floor(Math.random() * WHO.length)];
    const RAMDOMACTION = ACTION[Math.floor(Math.random() * ACTION.length)];
    const RANDOMWHAT = WHAT[Math.floor(Math.random() * WHAT.length)];
    const RANDOMWHEN = WHEN[Math.floor(Math.random() * WHEN.length)];

    const EXCUSAGENERADA = `${RANDOMWHO} ${RAMDOMACTION} ${RANDOMWHAT} ${RANDOMWHEN}.`;

    document.getElementById("excuse").innerHTML = EXCUSAGENERADA;
  }

  document
    .getElementById("generarExcusa")
    .addEventListener("click", generarExcusa);

  window.onload = generarExcusa;
};
