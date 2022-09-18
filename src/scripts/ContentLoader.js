export default {
  load,
  loadBefore,
  loadAfter,
};

const content = document.querySelector('.content');
const elements = {
  get content() { return content; },
  set content(value) { throw TypeError('Cannot set property \'content\', it is reserved and unmodifiable'); }
};

function load(element, name = '') {
  if (name) elements[name] = element;
  content.append(element);
}

function loadBefore(before, element, name = '') {
  if (name) elements[name] = element;

  if (before === 'content') {
    content.prepend(element);
    return;
  }

  if (!elements[before]) throw TypeError(`Cannot load before '${before}' since it does not exist`);
  elements[before].insertAdjacentElement('beforebegin', element);
}

function loadAfter(after, element, name = '') {
  if (name) elements[name] = element;
  
  if (after === 'content') {
    content.append(element);
    return;
  }

  if (!elements[after]) throw TypeError(`Cannot load after '${after}' since it does not exist`);
  elements[after].insertAdjacentElement('afterend', element);
}