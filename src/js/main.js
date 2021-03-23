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
  rootMargin: `${-navHeight + 40}px`,
  // rootMargin: `-35px`,
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

// Mobile Navigation

const mobileMenu = document.querySelector(".mobile-nav-icon ");
const mainNav = document.querySelector(".main-nav ");
const icon = document.querySelector(".fas");
const navItem = document.querySelector(".nav-item");

mobileMenu.addEventListener("click", function () {
  if (mainNav.style.display === "none") {
    mainNav.style.display = "block";
    navItem.style.display = "block";
  } else {
    mainNav.style.display = "none";
    navItem.style.display = "none";
  }
  console.log("test");
  if (mainNav.style.display === "none") {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
});
