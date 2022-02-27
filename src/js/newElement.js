"use strict";

/* -function newElement-
first arg  - tag name
second arg - object with attributes
third arg  - array with childs */

function newElement(tagName, attributes, childs) {
  const element = document.createElement(tagName);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  element.append(...childs);

  return element;
}

export default newElement;