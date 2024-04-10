import { minutesOptions, secondsOptions } from './js/timer/timerOptions.js'
import { handleToggleMode } from './js/theme.js'
import { handleCloseModal, handleConfirmTimer } from './js/modal.js'
import { handleControls } from './js/timer/timerState.js'
import { minutesSelect, secondsSelect } from './js/modal.js'
import { backgroundMusic } from './js/sounds.js'
import { timerState } from './js/timer/timerState.js'

const toggleModeButton = document.getElementById('toggle-mode')
const controls = document.getElementById('controls')

const closeModalButton = document.getElementById('close-modal')
const confirmTimerButton = document.getElementById('confirm-timer')

toggleModeButton.addEventListener('click', handleToggleMode)
controls.addEventListener('click', handleControls)

closeModalButton.addEventListener('click', handleCloseModal)
confirmTimerButton.addEventListener('click', handleConfirmTimer)

minutesOptions.map((minute) => {
  const option = document.createElement('option')
  option.setAttribute('value', minute)
  option.textContent = minute

  if(option.textContent == 1) {
    option.setAttribute('selected', '')
  }

  minutesSelect.appendChild(option)
})

secondsOptions.map((second) => {
  const option = document.createElement('option')
  option.setAttribute('value', second)
  option.textContent = second
  
  secondsSelect.appendChild(option)
})

if(!timerState.isMute) {
  backgroundMusic.play()
}