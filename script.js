// nav toggle (mobile)
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
if (navClose) navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
document.querySelectorAll('.nav__link').forEach(l =>
  l.addEventListener('click', () => navMenu.classList.remove('show-menu'))
);

// active link + scroll-up visibility
const sections = document.querySelectorAll('main section[id]');
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const top = sec.offsetTop - 140;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector('.nav__menu a[href*=' + id + ']');
    if (link) {
      if (scrollY > top && scrollY <= top + height) link.classList.add('active-link');
      else link.classList.remove('active-link');
    }
  });

  if (scrollY >= 400) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
});

// typing effect
const phrases = [
  "designing systems that streamline recruitment",
  "shipping full-stack apps end to end",
  "learning something new about climate tech"
];
const typedEl = document.getElementById('typed');
let pIndex = 0, cIndex = 0, deleting = false;

function type() {
  const current = phrases[pIndex];

  if (!deleting) {
    cIndex++;
    typedEl.innerHTML = '> ' + current.slice(0, cIndex) + '<span class="cursor-blink"></span>';
    if (cIndex === current.length) {
      deleting = true;
      setTimeout(type, 1400);
      return;
    }
  } else {
    cIndex--;
    typedEl.innerHTML = '> ' + current.slice(0, cIndex) + '<span class="cursor-blink"></span>';
    if (cIndex === 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();
