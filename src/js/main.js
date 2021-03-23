import "materialize-css";
// Sticky navigation: Intersection Observer API
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight - 35}px`,
});

headerObserver.observe(header);

// Smooth scrolling

document.querySelector(".main-nav").addEventListener("click", function (event) {
  event.preventDefault(); //matching strategy
  if (event.target.classList.contains("nav-item")) {
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
