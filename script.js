document.documentElement.classList.add('js');

// Optional progressive enhancement: all page content is present without JavaScript.
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#primary-nav');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('open', !isOpen);
  });

  menu.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  });
}
