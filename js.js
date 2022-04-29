const button = document.getElementById('button-add');
const inputList = document.getElementById('input-list');
const list = document.getElementById('ul-list');

const addItemList = () => {
  const itemValue = inputList.value;

  if (itemValue.trim().length > 0) {
    const item = document.createElement('li');
    item.createTextNode(itemValue);
    list.appendChild(item);
  }
};

button.addEventListener('click', addItemList);
