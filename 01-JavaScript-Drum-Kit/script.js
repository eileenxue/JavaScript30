const playAudio = (e) => {
  // Note: Keycode is deprecated, is there another thing to use? 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

const removeAnimation = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeAnimation));

window.addEventListener("keydown", playAudio);