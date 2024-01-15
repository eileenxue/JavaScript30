const panels = document.querySelectorAll(".panel");

const openPanel = (e) => {
  let anyPanelOpen = false;

  panels.forEach((panel) => {
    if (panel !== e.currentTarget) {
      panel.classList.remove("open");
      panel.classList.add("dim");
    } else {
      panel.classList.toggle("open");
      if (panel.classList.contains("open")) {
        anyPanelOpen = true;
        panel.classList.remove("dim");
      }
    }
  });

  if (!anyPanelOpen) {
    panels.forEach((panel) => panel.classList.remove("dim"));
  }
};

const activePanel = (e) => {
  if (e.propertyName.includes("flex")) {
    e.currentTarget.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", openPanel));
panels.forEach((panel) => panel.addEventListener("transitionend", activePanel));
