import ElementCreator from "./ElementCreator";

export default function (currentTab = 'home') {
  const primaryNav = ElementCreator.create('nav', 'primary-nav', createContent());
  primaryNav.querySelector(`.${currentTab}`).classList.add('current');
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