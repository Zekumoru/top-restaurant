import ElementCreator from "./ElementCreator";
import sushi from '../images/sushi.jpg';
import sushi2 from '../images/sushi-2.jpg';

const images = [
  {
    src: sushi,
    alt: '8 pieces sushi with salmon on top',
  },
  {
    src: sushi2,
    alt: 'board of mixed sushi',
  }
];

export default function () {
  return [
    createSection('section-1', images[0], createContent1()),
    createSection('section-2', images[1], createContent2()),
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

function createContent2() {
  return ElementCreator.create('div', 'content', [
    ElementCreator.create('h2', '', 'Hours'),
    createHoursTable(),
  ]);
}

function createParagraph(textContent) {
  return ElementCreator.create('p', '', textContent);
}

function createHoursTable() {
  return ElementCreator.create('table', 'hours-table',
    ElementCreator.create('tbody', '', [
      createHoursTableRow('Monday to Friday', '11:00 A.M. - 3:00 P.M.', '5:00 P.M. - 10:00 P.M.'),
      createHoursTableRow('Saturday', '11:00 A.M. - 3:00 P.M.', '5:00 P.M. - 12:00 A.M.'),
      createHoursTableRow('Sunday', '11:00 A.M. - 3:00 P.M.', ''),
    ]));
}

function createHoursTableRow(days, afternoon, evening) {
  return ElementCreator.create('tr', '', [
    ElementCreator.create('th', { scope: 'row' }, days),
    ElementCreator.create('td', '', afternoon),
    ElementCreator.create('td', '', evening),
  ]);
}