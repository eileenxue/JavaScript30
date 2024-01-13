const playAudio = (e) => {
  let eType;

  if (e.type === "keydown") {
    // Note: Keycode is deprecated, is there another thing to use?
    eType = e.keyCode;
  } else if (e.type === "click") {
    const keyElement = e.target.closest(".key");
    eType = keyElement ? keyElement.getAttribute("data-key") : null;
  }

  if (!eType) return;

  const audio = document.querySelector(`audio[data-key="${eType}"]`);
  const key = document.querySelector(`.key[data-key="${eType}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
};

const removeAnimation = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeAnimation);
  key.addEventListener("click", playAudio);
});

window.addEventListener("keydown", playAudio);
