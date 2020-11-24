const themeSwitchRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
let statusThemeSwitcher = localStorage.getItem('theme'); // Если воспользуюсь этим, то переключатель сработает один раз и потом будет неактивен. Не могу понять почему.
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitchRef.addEventListener('change', themeSwitcher);
console.dir(themeSwitchRef.checked);

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', Theme.LIGHT);
  bodyRef.classList.add(Theme.LIGHT);
  themeSwitchRef.checked = false;
} else {
  bodyRef.className = localStorage.getItem('theme');
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    themeSwitchRef.checked = false;
  } else {
    themeSwitchRef.checked = true;
  }
}

function themeSwitcher() {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    themeSwitchRef.checked = true;
  } else if (localStorage.getItem('theme') === Theme.DARK) {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    themeSwitchRef.checked = false;
  }
}
