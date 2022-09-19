export default {
  create,
  createText,
};

function createText(text) {
  return document.createTextNode(text);
}

function create(tag, optionsOrClassName = {}, childrenOrTextContent = []) {
  if (typeof optionsOrClassName === 'string') {
    const className = optionsOrClassName;
    optionsOrClassName = {};

    if (className) optionsOrClassName.className = className;
  }

  if (typeof childrenOrTextContent === 'string' || typeof childrenOrTextContent === 'number') {
    optionsOrClassName.textContent = childrenOrTextContent;
    childrenOrTextContent = [];
  }

  return assign(document.createElement(tag), optionsOrClassName, childrenOrTextContent);
}

function assign(element, options, children) {
  Object.assign(element, options);
  if (!Array.isArray(children)) {
    element.appendChild(children)
    return element;
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
      return;
    }

    element.appendChild(child);
  });
  return element;
}
