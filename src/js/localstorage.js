const themeSwitchRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
const statusThemeSwitcher = localStorage.getItem('theme');

themeSwitchRef.addEventListener('change', themeSwitcher);

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light-theme');
    bodyRef.classList.add("light-theme");
  }

function themeSwitcher() {
  if (localStorage.getItem('theme') === 'light-theme') {
    localStorage.setItem('theme', 'dark-theme');
    bodyRef.classList.remove("light-theme");
    bodyRef.classList.add("dark-theme");
  } else {
    localStorage.setItem('theme', 'light-theme');
    bodyRef.classList.remove("dark-theme");
    bodyRef.classList.add("light-theme");
  }
}

