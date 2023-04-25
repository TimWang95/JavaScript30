const secondsHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setRotate(deg, pointer) {
  if (deg === 90) {
    pointer.style.transition = `all 0s`
  }
  return `rotate(${deg}deg)`
}

function setDate() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondsHand.style.transform = setRotate(secondsDegrees, secondsHand)

  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) +90 
  minsHand.style.transform = setRotate(minsHand, minsHand)

  const hour = now.getHours()
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90
  hourHand.style.transform = setRotate(hourDegrees, hourHand)
}

setInterval(setDate, 1000)