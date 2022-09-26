import ElementCreator from "./ElementCreator";
import { createSection, createImageContainer, createContent } from "./loadHomeContents";

const images = [
  {
    src: 'https://www.studiofood33.com/wp-content/uploads/2020/07/lezioni-di-sushi-torino-1.jpg',
    alt: 'diverse set of sushi',
  },
  {
    src: 'https://www.volverviaggi.it/wp-content/uploads/2017/05/bladimir-garcia-YyVxoeJFBBY-unsplash.jpg',
    alt: 'diverse set of sushi',
  },
];

export default function () {
  return [
    createSection(
      'default-section-style contact-section-1', 
      images[0],
      createContent('Famished? Call us now!', ElementCreator.createParagraph('(03) 1234-5678')),
    ),
    createSection(
      'default-section-style contact-section-2',
      images[1],
      createContent('Inquiries? Send us an e-mail!', ElementCreator.createParagraph('contact@sushisushi.sample')),
    ),
  ].reverse();
};
