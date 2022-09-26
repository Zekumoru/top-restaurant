import ElementCreator from "./ElementCreator";
import Product from "./Product";
import ProductImage from "./ProductImage";
import nigiriSake from '../images/nigiri-sake.jpg';
import nigiriMaguro from '../images/nigiri-maguro.jpg';
import nigiriSuzuki from '../images/nigiri-suzuki.jpg';
import uramakiSake from '../images/uramaki-sake.jpg';
import uramakiEbi from '../images/uramaki-ebi.jpg';
import uramakiRobusuta from '../images/uramaki-robusuta.jpg';
import hosomakiSake from '../images/hosomaki-sake.jpg';
import hosomakiMaguro from '../images/hosomaki-maguro.jpg';
import hosomakiEbi from '../images/hosomaki-ebi.jpg';

const images = {
  nigiri: {
    sake: new ProductImage(nigiriSake, '2 pieces of nigiri sake', '240%', '-58px', '-200px'),
    maguro: new ProductImage(nigiriMaguro, '4 pieces of nigiri maguro', '180%', '-18px', '-58px'),
    suzuki: new ProductImage(nigiriSuzuki, '4 pieces of nigiri suzuki', '200%', '-16px', '-94px'),
  },
  uramaki: {
    sake: new ProductImage(uramakiSake, '8 pieces of uramaki sake', '200%', '-20px', '-75px'),
    ebi: new ProductImage(uramakiEbi, '8 pieces of uramaki ebi', '200%', '-21px', '-47px'),
    robusuta: new ProductImage(uramakiRobusuta, '8 pieces of uramaki robusuta', '170%', '-4px', '-70px'),
  },
  hosomaki: {
    sake: new ProductImage(hosomakiSake, '8 pieces of hosomaki sake', '240%', '-27px', '-74px'),
    maguro: new ProductImage(hosomakiMaguro, '8 pieces of hosomaki maguro', '220%', '-46px', '-110px'),
    ebi: new ProductImage(hosomakiEbi, '8 pieces of hosomaki ebi', '190%', '-29px', '-136px'),
  },
}

const products = {
  nigiri: [
    new Product(images.nigiri.sake, 'Sake', 'Salmon', 'A long white oval-shaped sushi with a cut of fresh salmon on top.', 1199.99, 8),
    new Product(images.nigiri.maguro, 'Maguro', 'Tuna', 'A long white oval-shaped sushi with slices of tuna on top.', 1199.99, 8),
    new Product(images.nigiri.suzuki, 'Suzuki', 'Japanese sea bass', 'A long white oval-shaped sushi with slices of Japanese sea bass on top.', 1199.99, 8),  
  ],
  uramaki: [
    new Product(images.uramaki.sake, 'Sake', 'Salmon', 'A cylindrical nori-hidden sushi with crushed fresh salmon on top.', 1399.99, 8),
    new Product(images.uramaki.ebi, 'Ebi', 'Shrimp', 'A cylindrical nori-hidden sushi with a cooked cut of shrimp on top.', 1399.99, 8),
    new Product(images.uramaki.robusuta, 'Robusuta', 'Lobster', 'A cylindrical nori-hidden sushi with crushed flesh of lobster on top.', 1799.99, 8),
  ],
  hosomaki: [
    new Product(images.hosomaki.sake, 'Sake', 'Salmon', 'A cylindrical sushi with fresh salmon inside.', 1099.99, 8),
    new Product(images.hosomaki.maguro, 'Maguro', 'Tuna', 'A cylindrical sushi with tuna inside.', 1099.99, 8),
    new Product(images.hosomaki.ebi, 'Ebi', 'Shrimp', 'A cylindrical sushi with shrimp inside.', 1199.99, 8),
  ],
};

export default function () {
  return [
    createSection('Nigirizushi', 'Hand-pressed sushi', createProducts(products.nigiri)),
    createSection('Uramaki', 'Inside-out roll', createProducts(products.uramaki)),
    createSection('Hosomaki', 'Thin roll', createProducts(products.hosomaki)),
  ].reverse();
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