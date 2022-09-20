import ElementCreator from "./ElementCreator";
import Product from "./Product";
import ProductImage from "./ProductImage";
import nigiriSake from '../images/nigiri-sake.jpg';

const nigiriSakeImage = new ProductImage(nigiriSake, '2 pieces of nigiri sake', '240%', '-58px', '-200px');

const nigiriProducts = [
  new Product(nigiriSakeImage, 'Sake', 'Salmon', 'A long white oval-shaped sushi with a cut of fresh salmon on top.', 1199.99, 8),
];

export default function () {
  return [
    createSection('Nigirizushi', 'Hand-pressed Sushi', createProducts(nigiriProducts)),
  ];
};

function createSection(title, description, products = []) {
  return ElementCreator.create('section', 'menu-section', 
    ElementCreator.create('div', 'content-wrap flex-vertical-center', [
      ElementCreator.create('h2', '', title),
      ElementCreator.create('p', '', description),
      ...products,
    ])
  );
}

function createProducts(products) {
  return products.map((product) => {
    return ElementCreator.create('div', 'product', [
      createImageContainer(product.image),
      createContent(product),
    ]);
  });
}

function createImageContainer(image) {
  const imageElement = ElementCreator.create('img', {
    src: image.src,
    alt: image.alt,
  });
  Object.assign(imageElement.style, image.getStyleObject());
  return ElementCreator.create('div', 'image-container', imageElement);
}

function createContent(product) {
  return ElementCreator.create('div', 'content', [
    ElementCreator.create('h3', 'product-name', product.name),
    ElementCreator.create('p', 'english-name', product.englishName),
    ElementCreator.create('p', 'description', product.description),
    ElementCreator.createParagraph([
      `¥ ${product.price} `,
      ElementCreator.create('span', 'quantity', `(${product.quantity} pieces)`)
    ], 'price'),
  ]);
}