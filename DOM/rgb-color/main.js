/* Contextos */

const inputRojo = document.getElementById('rojo') // input
let rtext = document.getElementById('texto-rojo') // texto del input (variable)

const inputVerde = document.getElementById('verde') // input
let gtext = document.getElementById('texto-verde') // texto del input (variable)

const inputAzul = document.getElementById('azul') // input
let btext = document.getElementById('texto-azul') // texto del input (variable)



let rojo = inputRojo.value // guarda en variable el valor de cada input
let verde = inputVerde.value
let azul = inputAzul.value

rtext.innerText = rojo
gtext.innerText = verde
btext.innerText = azul


/* funcionalidad para generar nuevo color */
function actColor(r, g, b) {
  const colorRGB = `rgb(${r},${g},${b})`
  document.body.style.backgroundColor = colorRGB
}

/* listener */

inputRojo.addEventListener('change', () => { // ejemplo de usar el contexto con una funcion anonima para obtener el dato
  rojo = inputRojo.value
  console.log("r: " + rojo)
  rtext.innerText = rojo
  actColor(rojo, verde, azul)
})

inputVerde.addEventListener('change', (e) => { //ejemplo de usar el evento para obtener el dato del cambio
  verde = e.target.value
  console.log("g: " + verde)
  gtext.innerText = verde
  actColor(rojo, verde, azul)
})

inputAzul.addEventListener('change', (e) => {
  azul = e.target.value
  console.log("b: " + azul)
  btext.innerText = azul
  actColor(rojo, verde, azul)
})

