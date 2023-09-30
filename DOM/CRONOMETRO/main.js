/* Contextos */

const cron = document.getElementById('cronometro')
const botonInicio = document.getElementById('inicio-pausa')
const reiniciar = document.getElementById('reiniciar')

let [h, m, s] = [0, 0, 0]

let interval;

let cronState = 'pausado'

function cronAct() {
  s++ // suma el segundo 1

  if (s/60 === 1) { //verifica si los segundos llegan a 60, los reinicia a 0 y agrega un minuto
    s = 0
    m++

    if(m/60 === 1) { //verifica si los minutos llegan a 60, los reinicia a 0 y agrega una hora
      m = 0
      h++
    }
  }
/* Formatos para el texto de hora: 00:00:00 */
  const sFormat = formatAsg(s)
  const mFormat = formatAsg(m)
  const hFormat = formatAsg(h)

  cron.innerText = `${hFormat}:${mFormat}:${sFormat}` // actualiza texto del cronometro
}


function formatAsg(t) {
  return t < 10 ? `0${t}` : t
}

/*  */

function activar() {
  botonInicio.innerHTML = '<i class="bi bi-pause-fill"></i>'
  botonInicio.classList.remove('iniciar')
  botonInicio.classList.add('pausar')
  cronState = 'activo'
}

function pausar() {
  botonInicio.innerHTML = '<i class="bi bi-play-fill"></i>'
  botonInicio.classList.remove('pausar')
  botonInicio.classList.add('iniciar')
  cronState = 'pausado'
}

function rei () {
  botonInicio.innerHTML = '<i class="bi bi-play-fill"></i>'
  botonInicio.classList.remove('pausar')
  botonInicio.classList.add('iniciar')
  cron.innerText = `00:00:00`
}

botonInicio.addEventListener('click', () => {
  if (cronState === 'pausado') {
    interval = window.setInterval(cronAct, 1000)
    activar()
  } else {
    window.clearInterval(interval)
    pausar()
  }
})

reiniciar.addEventListener('click', () => {
  [h, m, s] = [0, 0, 0]
  window.clearInterval(interval)
  rei()
})