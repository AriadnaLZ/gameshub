
import { createTrivial } from '../trivial/trivial'
import './botonesInicio.css'
import { createAhorcado } from '../Ahorcado/ahorcado'
import { initializeMemoryGame } from '../memory/memory'
import { buttonRetorno } from '../botonRetorno/botonRetorno'

export const botonesInicio = (place) => {
  const divBotonesInicio = document.createElement('div')
  divBotonesInicio.className = 'divBotonesInicio'
  place.append(divBotonesInicio)
  const button1 = document.createElement('button')
  const button2 = document.createElement('button')
  const button3 = document.createElement('button')

  button1.className = 'buttonInicio'
  button2.className = 'buttonInicio'
  button3.className = 'buttonInicio'

  button1.innerText = 'Ahorcado'
  button2.innerText = 'Trivial'
  button3.innerText = 'Memory'

  divBotonesInicio.appendChild(button1)
  divBotonesInicio.appendChild(button2)
  divBotonesInicio.appendChild(button3)

  const divApp = document.querySelector('#app')

  button1.addEventListener('click', () => {
    divBotonesInicio.style.display = 'none'
    createAhorcado(divApp)
  })

  button2.addEventListener('click', () => {
    divBotonesInicio.style.display = 'none'
    createTrivial(divApp)
  })

  button3.addEventListener('click', () => {
    divBotonesInicio.style.display = 'none'
  })
}

