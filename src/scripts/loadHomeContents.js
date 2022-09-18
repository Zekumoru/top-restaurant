import ElementCreator from "./ElementCreator";
import sushi from '../images/sushi.jpg';

const images = [
  {
    src: sushi,
    alt: '8 pieces sushi with salmon on top',
  },
];

export default function () {
  return [
    createSection('section-1', images[0], createContent1()),
  ];
};

function createSection(className, imageOptions, content) {
  return ElementCreator.create('section', className, 
    ElementCreator.create('div', 'content-wrap', [
      createImageContainer(imageOptions),
      content,
    ]));
}

function createImageContainer(imageOptions) {
  return ElementCreator.create('div', 'image-container', 
    ElementCreator.create('img', imageOptions));
}

function createContent1() {
  return ElementCreator.create('div', 'content', [
    ElementCreator.create('h2', '', 'Only The Best'),
    createParagraph('All ingredients are carefully handpicked to give you the best of tastes.'),
    createParagraph('Each sushi with a story of its own flavour to tell.'),
  ]);
}

function createParagraph(textContent) {
  return ElementCreator.create('p', '', textContent);
}