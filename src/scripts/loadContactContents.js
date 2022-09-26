import ElementCreator from "./ElementCreator";
import { createSection, createImageContainer, createContent } from "./loadHomeContents";
import sushiMix1 from '../images/sushi-mix-1.jpg';
import sushiMix2 from '../images/sushi-mix-2.jpg';

const images = [
  {
    src: sushiMix1,
    alt: 'diverse set of sushi',
  },
  {
    src: sushiMix2,
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
