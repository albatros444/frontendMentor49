const tabs = document.querySelectorAll(".tab");
const slidesLine = document.querySelector(".slidesLine");
const accordeonBtns = document.querySelectorAll(".accordeon__button");
const accordionPanels = document.querySelectorAll(".accordeon__panel");
//////////
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tabToRemove) => {
      tabToRemove.classList.remove("active");
    });
    tab.classList.add("active");
    if (tab.classList.contains("tab1")) {
      //   console.log("tab1");
      slidesLine.classList.remove("tab2", "tab3");
      slidesLine.classList.add("tab1");
    } else if (tab.classList.contains("tab2")) {
      //   console.log("tab2");
      slidesLine.classList.remove("tab1", "tab3");
      slidesLine.classList.add("tab2");
    } else {
      //   console.log("tab3");
      slidesLine.classList.remove("tab1", "tab2");
      slidesLine.classList.add("tab3");
    }
  });
});

accordeonBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let panel = btn.nextElementSibling;
    if (panel.classList.contains("panelActive")) {
      panel.classList.remove("panelActive");
    } else {
      accordionPanels.forEach((accPan) => {
        accPan.classList.remove("panelActive");
      });
      panel.classList.add("panelActive");
    }
  });
});
