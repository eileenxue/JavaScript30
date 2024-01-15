const panels = document.querySelectorAll(".panel");

const openPanel = (e) => {
  e.currentTarget.classList.toggle("open");
};

const activePanel = (e) => {
  if (e.propertyName.includes("flex")) {
    e.currentTarget.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", openPanel));
panels.forEach((panel) => panel.addEventListener("transitionend", activePanel));
