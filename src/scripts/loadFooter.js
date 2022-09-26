import ElementCreator from "./ElementCreator";

export default function () {
  return ElementCreator.create('footer', '', 
    ElementCreator.create('div', 'content-wrap', [
      createInformation(),
      createCredits(),
    ]));
}

function createInformation() {
  return ElementCreator.create('div', 'information', [
    ElementCreator.createParagraph([
      ElementCreator.create('span', 'name', 'Sushi Sushi'),
      ', a restaurant page project for ',
      ElementCreator.createLink('The Odin Project', 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page'),
      '.',
    ]),
    ElementCreator.createParagraph([
      'Made by ',
      ElementCreator.createLink('Zekumoru', 'https://github.com/Zekumoru'),
    ]),
  ]);
}

function createCredits() {
  return ElementCreator.create('div', 'credits-container', [
    ElementCreator.create('h3', '', 'Image Credits'),
    ElementCreator.createParagraph([
      'Logo icon by ',
      ElementCreator.createLink('surang', 'https://www.flaticon.com/authors/surang'),
    ]),
    ElementCreator.createParagraph([
      'Home sushi images by ',
      ElementCreator.createLink('Derek Duran', 'https://unsplash.com/@derekduran'),
      ', ',
      ElementCreator.createLink('Fadya Azhary', 'https://unsplash.com/@fadsphoto23_'),
      ', and ',
      ElementCreator.createLink('Andraz Lazic', 'https://unsplash.com/@andrazlazic'),
    ]),
    ElementCreator.createParagraph([
      'Menu sushi images by ',
      ElementCreator.createLink('MANGA', 'https://www.mangarestaurant.it/'),
    ]),
    ElementCreator.createParagraph([
      'Contact sushi images by ',
      ElementCreator.createLink('STUDIOFOOD33', 'https://www.studiofood33.com'),
      ' and ',
      ElementCreator.createLink('Bladimir Garcia', 'https://unsplash.com/@bladimirgarcia'),
    ]),
  ]);
}
