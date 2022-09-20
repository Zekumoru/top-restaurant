import ElementCreator from "./ElementCreator";

export default function (currentTab, buttonOnClickListeners) {
  const primaryNav = ElementCreator.create('nav', 'primary-nav', createContent());
  primaryNav.querySelector(`.${currentTab}`).classList.add('current');

  Object.entries(buttonOnClickListeners).forEach(([button, listener]) => {
    primaryNav.querySelector(`.${button}`).addEventListener('click', (e) => {
      primaryNav.querySelector('button.current').classList.remove('current');
      e.target.classList.add('current');
      listener(e);
    });
  });
  
  return primaryNav;
};

function createContent() {
  return ElementCreator.create('ul', 'content-wrap', [
    createNavItem(createNavItemButton('home', 'Home')),
    createNavItem(createNavItemButton('menu', 'Menu')),
    createNavItem(createNavItemButton('contact', 'Contact')),
  ]);
}

function createNavItem(button) {
  return ElementCreator.create('li', '', button);
}

function createNavItemButton(className, textContent) {
  return ElementCreator.create('button', className, textContent);
}