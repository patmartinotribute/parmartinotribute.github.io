/* Contexto del botón */ 
let button = document.querySelector('button');

/* Contexto del parrafo */
let p = document.getElementById('color')

/* Contexto del body */
let body = document.querySelector('body') 

function hexColor () {
  let num = '0123456789ABCDEF'
  let colorHex = '#'

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16)
    colorHex += num[randomIndex]
  }
  return colorHex
}


button.addEventListener('click', () => {
  let randomColor = hexColor()
  p.textContent = randomColor
  body.style.backgroundColor = randomColor
})


