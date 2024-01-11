// Declare variables
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


// Reset transition animation when the hands reach the full cycle
const resetTransition = (hand, value) => {
  if (value === 0) {
    hand.style.transition = 'none';
  } else {
    hand.style.transition = '';
  }
}

const currentDate = () => {
  // Get the local current date
  const now = new Date();

  // Define seconds
  const seconds = now.getSeconds();
  const secondsToDegrees = ((seconds / 60) * 360) + 90;
  resetTransition(secondHand, seconds);
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

  // Define minutes
  const minutes = now.getMinutes();
  const minutesToDegrees = ((minutes / 60) * 360) + 90;
  resetTransition(minuteHand, minutes);
  minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;

  // Define hours
  const hours = now.getHours();
  const hoursToDegrees = ((hours / 12) * 360) + 90;
  resetTransition(hourHand, hours);
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(currentDate, 1000);
