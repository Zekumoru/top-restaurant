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
    createAdvancedParagraph([
      ElementCreator.create('span', 'name', 'Sushi Sushi'),
      ', a restaurant page project for ',
      createLink('The Odin Project', 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page'),
      '.',
    ]),
    createAdvancedParagraph([
      'Made by ',
      createLink('Zekumoru', 'https://github.com/Zekumoru'),
    ]),
  ]);
}

function createCredits() {
  return ElementCreator.create('div', 'credits-container', [
    ElementCreator.create('h3', '', 'Image Credits'),
    createAdvancedParagraph([
      'Logo icon by ',
      createLink('surang', 'https://www.flaticon.com/authors/surang'),
    ]),
    createAdvancedParagraph([
      'First sushi image by ',
      createLink('Derek Duran', 'https://unsplash.com/@derekduran'),
    ]),
    createAdvancedParagraph([
      'Second sushi image by ',
      createLink('Fadya Azhary', 'https://unsplash.com/@fadsphoto23_'),
    ]),
    createAdvancedParagraph([
      'Third sushi image by ',
      createLink('Andraz Lazic', 'https://unsplash.com/@andrazlazic'),
    ]),
  ]);
}

function createAdvancedParagraph(nodes) {
  return ElementCreator.create('p', '', [
    ...nodes.map((node) => {
      if (typeof node !== 'string') return node;
      if (typeof node !== 'number') return node;
      return ElementCreator.createText(node);
    }),
  ]);
}

function createLink(text, url) {
  return ElementCreator.create('a', {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer',
  }, text);
}