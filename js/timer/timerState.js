import { minutesSelect, secondsSelect, timerModal } from "../modal.js"
import { buttonSound, alarmSound, backgroundMusic } from "../sounds.js"

const stopTimer = document.getElementById('reset-timer-button')

export const timerState = {
  countdown: null,
  isRunning: false,
  isMute: false,
}

export const handleTimer = () => {
  clearTimeout(timerState.countdown)

  if(!timerState.isRunning) {
    return
  }
  
  const shouldContinue = Number(seconds.textContent) > 0
  
  if(shouldContinue) {
    const secondsUpdate = Number(seconds.textContent) - 1
    seconds.textContent = String(secondsUpdate).padStart(2, '0')
  } else {
    const minutesUpdate = Number(minutes.textContent) - 1
    minutes.textContent = String(minutesUpdate).padStart(2, '0')
    seconds.textContent = 59
  }

  const shouldStop = Number(minutes.textContent) < 0

  if(shouldStop) {
    controls.firstChild.nextSibling.classList.toggle('ph-pause-circle')
    controls.firstChild.nextSibling.classList.toggle('ph-play-circle')
    stopTimer.disabled = !stopTimer.disabled
    minutes.textContent = minutesSelect.value
    seconds.textContent = secondsSelect.value
    alarmSound.play()
    return
  }

  timerState.countdown = setTimeout(() => {
    handleTimer()
  }, 1000)
}

export const handleControls = (event) => {
  if(event.target.id === 'play-button') {
    event.target.classList.toggle('ph-pause-circle')
    event.target.classList.toggle('ph-play-circle')
    stopTimer.disabled = !stopTimer.disabled
    timerState.isRunning = !timerState.isRunning

    if(!timerState.isMute) {
      buttonSound.play()
    }
    handleTimer()
  }

  if(event.target.id === 'define-timer-button') {
    timerModal.classList.toggle('visible')

    if(!timerState.isMute) {
      buttonSound.play()
    }  }

  if(event.target.id === 'reset-timer-button') {
    controls.firstChild.nextSibling.classList.toggle('ph-pause-circle')
    controls.firstChild.nextSibling.classList.toggle('ph-play-circle')
    timerState.isRunning = !timerState.isRunning
    stopTimer.disabled = !stopTimer.disabled
    minutes.textContent = minutesSelect.value
    seconds.textContent = secondsSelect.value
    
    if(!timerState.isMute) {
      buttonSound.play()
    }  }

  if(event.target.id === 'music-button') {
    event.target.classList.toggle('ph-speaker-high')
    event.target.classList.toggle('ph-speaker-simple-slash')
    timerState.isMute = !timerState.isMute

    if(!timerState.isMute) {
      buttonSound.play()
      backgroundMusic.play()
    } else {
      backgroundMusic.pause()
    }
  }
}