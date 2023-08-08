function createTag(element, text, classList = []){
  const elem = document.createElement(element);
  elem.innerText = text;
  classList.forEach(individualClass => {
    elem.classList.add(individualClass);
  })
  return elem;
}

function createContainer(element, classList = [], children = []){
  const elem = document.createElement(element);
  children.forEach(child => {
    elem.appendChild(child);
  })
  classList.forEach(individualClass => {
    elem.classList.add(individualClass);
  })
  return elem;
}

export {createTag, createContainer};