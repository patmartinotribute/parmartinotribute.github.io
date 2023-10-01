/* Contextos */ 
const input = document.getElementById('agregar') //input de texto -- acceder al valor con input.value
const boton = document.getElementById('crear') // boton
const lista = document.getElementById('lista-tareas') // contenedor de tareas

// contexto de iconos

function agregarTarea() {
  if (input.value) { // esta comprobacion devuelve false si es vacía la cadena

    //crear tarea nueva
    let tareaNueva = document.createElement('div')
    tareaNueva.classList.add('tarea')

    //texto ingresado por el usuario y agregar a la lista
    let texto = document.createElement('p')
    texto.innerText = input.value
    tareaNueva.appendChild(texto)

    // crear y agregar contenedor de iconos
    let icon = document.createElement('div')
    icon.classList.add('iconos')
    tareaNueva.appendChild(icon)

    function completarTarea (e) { // selecciona el elemento donde ocurre el evento y agrega sino existe, o elimina si existe la clase al elem
      let elem = e.target.parentNode.parentNode
      elem.classList.toggle('completada') 
    }

    function eliminarTarea (e) { // selecciona el elemento donde ocurre el evento elimina su contenedor abuelo
      let elem = e.target.parentElement.parentElement
      elem.remove()
    }

    // iconos
    let completar = document.createElement('i')
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar')
    completar.addEventListener('click', completarTarea)  

    let eliminar = document.createElement('i')
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
    eliminar.addEventListener('click', eliminarTarea)

    icon.append(completar,eliminar) // agrega los iconos al elemento icon

    // Agregar elementos creados a la lista
    lista.appendChild(tareaNueva)
  } else {
    alert('Ingresa una tarea primero')
  }
}
// agregar tardea al dom al hacer clic en agregar
boton.addEventListener('click', agregarTarea )

// agregar tardea al dom al pulsar enter
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    agregarTarea()
  }
  }
)

