const slider = tns({
  container: ".slider",
  items: 1,
  slideBy: "page",
  mouseDrag: "true",
  autoplay: true,
  responsive: {
    992: {
      items: 2,
    },
  },
});

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(document.querySelector(`.${section.getAttribute("class")}`));
});

const switchThemeButton = document.querySelector(".switch-theme");

function switchSiteTheme() {
  const body = document.body;

  if (
    !localStorage.getItem("theme") ||
    localStorage.getItem("theme") === "dark"
  ) {
    body.style.setProperty("--primary-color", "#132435");
    body.style.setProperty("--secondary-color", "#fff");
    body.style.setProperty("--secondary-support-color", "#f0f0f5");
    localStorage.setItem("theme", "light");
    document.querySelector(".sun svg path").style.transform = "scale(0)";
    setTimeout(() => {
      document.querySelector(".sun").style.display = "none";
      document.querySelector(".moon").style.display = "block";
      document.querySelector(".moon svg path").style.transform = "scale(1)";
    }, 400);
    return;
  }

  body.style.setProperty("--primary-color", "#fff");
  body.style.setProperty("--secondary-color", "#132435");
  body.style.setProperty("--secondary-support-color", "#131a36");
  localStorage.setItem("theme", "dark");
  document.querySelector(".moon svg path").style.transform = "scale(0)";
  setTimeout(() => {
    document.querySelector(".moon").style.display = "none";
    document.querySelector(".sun").style.display = "block";
    document.querySelector(".sun svg path").style.transform = "scale(1)";
  }, 400);
}

switchThemeButton.addEventListener("click", switchSiteTheme);

window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  console.log(localStorage.getItem("theme"));
  if (
    !localStorage.getItem("theme") ||
    localStorage.getItem("theme") !== "dark"
  ) {
    body.style.setProperty("--primary-color", "#132435");
    body.style.setProperty("--secondary-color", "#fff");
    body.style.setProperty("--secondary-support-color", "#f0f0f5");
    document.querySelector(".moon").style.display = "block";
    document.querySelector(".moon svg path").style.transform = "scale(1)";
    document.querySelector(".sun").style.display = "none";
    return;
  }
  body.style.setProperty("--primary-color", "#fff");
  body.style.setProperty("--secondary-color", "#132435");
  body.style.setProperty("--secondary-support-color", "#131a36");
  document.querySelector(".moon").style.display = "none";
  document.querySelector(".sun").style.display = "block";
});
