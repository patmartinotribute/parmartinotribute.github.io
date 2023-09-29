/* Contextos */
import {citas} from "./citas.js"
//boton
let botonElem = document.querySelector('button')

//texto de la cita
let cita = document.getElementById('cita')

//texto autor
let aut = document.getElementById('autor')

//generar número aleatorio

function randomEntero (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita () {
  let randomIndex = randomEntero(0, citas.length)
  cita.innerText = `"${citas[randomIndex].texto}"`
  aut.innerText = `"${citas[randomIndex].autor}"`
}

cambiarCita ()

botonElem.addEventListener('click', cambiarCita)