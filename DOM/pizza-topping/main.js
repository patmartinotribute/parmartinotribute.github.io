/* Constantes */ 

const topping = document.querySelector('.topping')
const topList = document.getElementById('toppings')
const link = document.getElementsByTagName('a')


/* Agregar estilos desde CSS */ 

topping.style.backgroundColor = 'blue'    // modifica el fondo
topping.style.textTransform = 'uppercase' // modifica la letra a mayus

/* Seleccionar texto */ 

console.log('> inner Text')
console.log(topList.innerText) // muestra el texto de los elem seleccionados

console.log('> text Content')
console.log(topList.textContent) // muestra el texto de los elem seleccionados (incluye espacios identados)

console.log('> innerHTML')
console.log(topList.innerHTML) // muestra html del elemento seleccionado

/* Modificar atributos de elementos HTML */

console.log(link[0].getAttribute('href')) // selecciona atributo

link[0].removeAttribute('href') // elimina atributo
link[0].setAttribute('href', 'elcocodev.com') // crea o modifica si ya existe, el atributo seleccionado


/* Agregar y modificar clases */ 

console.log('> classList')
console.log(topping.classList)

console.log('> Agregar clase')
topping.classList.add('nueva-clase')
// se agregó nueva-clase al topping
console.log('se agregó nueva-clase al topping')
console.log(document.getElementsByTagName('li'))

 // verificar si existe una clase:
 console.log('> verificar si existe clase nueva-clase')
 console.log(topping.classList.contains('nueva-clase'))

 // Eliminar una clase
 topping.classList.remove('nueva-clase')

/* Crea elementos en el DOM */

const newTopping = document.createElement('li'); // crea nuevo elemento html
newTopping.classList.add('topping', 'marron') // asigna clases css
newTopping.innerText = 'Extra Cheese' // asigna texto


topList.append(newTopping)// agregar nuevo elemento creado

newTopping.remove() // elimina un elemento

/* Recorrer el DOM */

console.log('> Parent Element') 
console.log(topList.parentElement) // permite manipular el padre condicionalmente del hijo

console.log('> Parent Node')
console.log(topList.parentNode) // permite manipular el NODO padre condicionalmente del hijo

console.log('> Parent Element (abuelo)') 
console.log(topList.parentElement.parentElement)  // accede al abuelo de un elemento

console.log('> Children Element') 
console.log(topList.children)  // hijos de un elemento

console.log('> Primer Children (NODO)') 
console.log(topList.firstChild)   // primer hijo de un elemento (nodo)

console.log('> Primer Children (Elemento)') 
console.log(topList.firstElementChild)  // primer hijo de un elemento (ELEMENTO)
console.log(topList.children[0]) // primer hijo de un elemento (ELEMENTO)

console.log('> Ultimo Children (NODO)') 
console.log(topList.lastChild) // ultimo hijo de un elemento (nodo)

console.log('> Ultimo Children (ELEMENTO)') 
console.log(topList.lastElementChild) // ultimo hijo de un elemento (elemento)

console.log('> Hermano previo de un elemento (NODO)') 
console.log(topList.previousSibling) // hermano previo (NODO)

console.log('> Hermano previo de un elemento (ELEMENTO)') 
console.log(topList.previousElementSibling) // hermano previo (elemento)

console.log('> Hermano siguiente de un elemento (nodo)') 
console.log(topList.nextSibling) // hermano siguiente (nodo)

console.log('> Hermano siguiente de un elemento (elemento)') 
console.log(topList.nextElementSibling) // hermano siguiente (elemento)

/* EVENTOS */

// forma estatica usando el atributo onclick="clics()" en cada elemento HTML

/* 
function clics (top)  {
  console.log(top)
}  */

// forma dinamica en JS .addEventListener()

// obtenemos contexto del elemento target -- element Target
const tops = document.getElementsByClassName('topping')


// funcion -- eventHandler
/* 

function clics (e)  {
  console.log(e.target.innerText) // e: obtiene el evento - .target: obtiene el elemento html // .innerText: retorna el texto interno del elemento
  
} 

// asociacion -- eventListener
for (const toppings of tops) {
  toppings.addEventListener('click', clics)
}
*/

//resumiendo todo en una sola funcion flecha dentro del for

for (let top of tops) {
  top.addEventListener('click', (e) => {
    console.log(e.target.innerText)
  })
}








