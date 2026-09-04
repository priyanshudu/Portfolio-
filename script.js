// ================================
// PRIYANSHU DUBEY PORTFOLIO JS
// ================================

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  const icon = menuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Active navigation link while scrolling
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");

const updateActiveNav = () => {
  let current = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
};

window.addEventListener("scroll", updateActiveNav);

// Back to top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing effect
const typingText = document.getElementById("typingText");
const roles = [
  "Full-Stack Development",
  "Backend Development",
  "Software Development",
  "Building Real-World Applications"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1400);
      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 45 : 75);
}

typeRole();

// Reveal sections on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => observer.observe(element));

// Theme toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
});

if (localStorage.getItem("portfolioTheme") === "light") {
  document.body.classList.add("light");
}

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
