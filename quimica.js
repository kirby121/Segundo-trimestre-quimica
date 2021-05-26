if (window.matchMedia("(max-width: 1024px)").matches) console.log();

function hamburguerMenu(panelBtn, panel, menuLink) {

  const d = document;

  d.addEventListener("click", e => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");

    }
  })
}

hamburguerMenu(".panel-btn", ".panel", ".menu a");
