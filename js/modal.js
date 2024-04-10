import { timerState } from "./timer/timerState.js"
import { buttonSound } from "./sounds.js"

export const timerModal = document.querySelector('.modal-wrapper')
export const minutesSelect = document.getElementById('minutes-select')
export const secondsSelect = document.getElementById('seconds-select')

export const handleCloseModal = () => {
  timerModal.classList.toggle('visible')

  if(!timerState.isMute) {
    buttonSound.play()
  }
}

export const handleConfirmTimer = () => {
  minutes.textContent = minutesSelect.value
  seconds.textContent = secondsSelect.value

  if(!timerState.isMute) {
    buttonSound.play()
  }

  handleCloseModal()
}