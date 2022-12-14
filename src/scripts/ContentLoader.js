export default {
  load,
  loadFirst,
  loadBefore,
  loadAfter,
  loadMultiple,
  loadMultipleBefore,
  loadMultipleAfter,
  removeFrom,
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

function loadFirst(element, name = '') {
  if (name) elements[name] = element;
  content.prepend(element);
}

function loadMultiple(elements) {
  elements.forEach((element) => load(element));
}

function loadBefore(element, before, name = '') {
  if (name) elements[name] = element;

  if (before === 'content') {
    content.prepend(element);
    return;
  }

  if (!elements[before]) throw TypeError(`Cannot load before '${before}' since it does not exist`);
  elements[before].insertAdjacentElement('beforebegin', element);
}

function loadAfter(element, after, name = '') {
  if (name) elements[name] = element;
  
  if (after === 'content') {
    content.append(element);
    return;
  }

  if (!elements[after]) throw TypeError(`Cannot load after '${after}' since it does not exist`);
  elements[after].insertAdjacentElement('afterend', element);
}

function loadMultipleBefore(elements, before) {
  elements.forEach((element) => loadBefore(element, before));
}

function loadMultipleAfter(elements, after) {
  elements.forEach((element) => loadAfter(element, after));
}

function removeFrom(fromName, toName = null, { includeFrom, includeTo } = { includeFrom: true, includeTo: false }) {
  const finish = elements[fromName] ?? content.firstChild;
  let current = content.lastChild;

  if (toName) {
    current = elements[toName];
    if (!includeTo) current = current.previousElementSibling;
  }

  while (current !== finish) {
    const toRemove = current;
    
    Object.entries(elements).forEach(([key, element]) => {
      if (element === current) {
        delete elements[key];
      }
    });

    current = current.previousElementSibling;
    toRemove.remove();
  }

  if (includeFrom) current.remove();
}