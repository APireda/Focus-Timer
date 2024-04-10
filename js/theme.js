import { buttonSound } from "./sounds.js"
import { timerState } from "./timer/timerState.js"

let darkMode = true
const body = document.querySelector('body')

export const handleToggleMode = (event) => {
  if(!timerState.isMute) {
    buttonSound.play()
  }

  const mode = darkMode ? 'light' : 'dark'
  
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
  
  body.classList.toggle('light-mode')
  
  toggleModeButton.classList.toggle('ph-sun')
  toggleModeButton.classList.toggle('ph-moon')
  
  darkMode = !darkMode
}