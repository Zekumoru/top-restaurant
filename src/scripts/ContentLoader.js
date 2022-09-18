export default {
  load
};

const content = document.querySelector('.content');

function load(element) {
  content.appendChild(element);
}