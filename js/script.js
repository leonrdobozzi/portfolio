const slider = tns({
  container: ".slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
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
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(document.querySelector(`.${section.getAttribute("class")}`));
});
