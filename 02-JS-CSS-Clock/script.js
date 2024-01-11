// Declare variables
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const currentDate = () => {

  // Get the local current date
  const now = new Date();

  // Define seconds
  const seconds = now.getSeconds();
  const secondsToDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

  // Define minutes
  const minutes = now.getMinutes();
  const minutesToDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;

  // Define hours
  const hours = now.getHours();
  const hoursToDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

  console.log(hours, minutes, seconds);
}

setInterval(currentDate, 1000)