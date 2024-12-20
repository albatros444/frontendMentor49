const tabs = document.querySelectorAll(".tab");
const mobileTabs = document.querySelectorAll(".tabMob");
const slidesLine = document.querySelector(".slidesLine");
const accordeonBtns = document.querySelectorAll(".accordeon__button");
const accordionPanels = document.querySelectorAll(".accordeon__panel");
//////////
//////tabs desktop////////
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
///////////tabs mobile////////

mobileTabs.forEach((tabM) => {
  tabM.addEventListener("click", () => {
    mobileTabs.forEach((tabToRemove) => {
      tabToRemove.classList.remove("active");
    });
    tabM.classList.add("active");
    if (tabM.classList.contains("tab1")) {
      //   console.log("tab1");
      slidesLine.classList.remove("tab2", "tab3");
      slidesLine.classList.add("tab1");
    } else if (tabM.classList.contains("tab2")) {
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
////accordeon/////
accordeonBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("btnActive");
    let panel = btn.nextElementSibling;
    if (panel.classList.contains("panelActive")) {
      panel.classList.remove("panelActive");
      btn.classList.remove("btnActive");
    } else {
      accordionPanels.forEach((accPan) => {
        accPan.classList.remove("panelActive");
      });
      accordeonBtns.forEach((accBtn) => {
        accBtn.classList.remove("btnActive");
      });
      panel.classList.add("panelActive");
      btn.classList.add("btnActive");
    }
  });
});

//////email validation in browser///
const form = document.querySelector("form");
const emailField = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
  form.classList.remove("formInvalid");
});
emailField.addEventListener("invalid", (e) => {
  e.preventDefault();
  console.log("invalid email");
  form.classList.add("formInvalid");
});

/////hamburger menu
const hamburgerMenu = document.querySelector(".hamburgerMenu");
hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("hamburgerActive")) {
    console.log("remove");
    hamburgerMenu.classList.remove("hamburgerActive");
  } else {
    console.log("add");
    hamburgerMenu.classList.add("hamburgerActive");
  }
});
