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

// Animation: Fade in
// const phone = document.querySelector(".app-display");

// function revealSection(entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;
//   entry.target.classList.add("fadeInUp");
//   entry.target.classList.remove("hidden");
//   observer.unobserve(entry.target);
// }

// const revealOptions = {
//   root: null,
//   threshold: 0.8,
// };

// const phoneObserver = new IntersectionObserver(revealSection, revealOptions);
// phoneObserver.observe(phone);

// let waypoint = new Waypoint({
//   element: document.getElementById("waypoint"),
//   handler: function (direction) {
//     console.log("Scrolled to waypoint!");
//   },
// });
