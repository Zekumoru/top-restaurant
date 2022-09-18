import ElementCreator from "./ElementCreator";

export default function () {
  return ElementCreator.create('header', 'primary-header', createContent());
};

function createContent() {
  return ElementCreator.create('div', 'content-wrap flex-horizontal-center', [
    createLogo(),
    createTitle(),
  ]);
}

function createLogo() {
  return ElementCreator.create('div', 'logo');
}

function createTitle() {
  return ElementCreator.create('p', 'title', 'Sushi Sushi');
}