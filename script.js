var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.getElementById('ulist');
var list;
var deleteList = document.querySelectorAll('.deleteBtn');

function inputExists() {
  return input.value.length > 0;
}

function addEvents() {
  list = document.querySelectorAll('li');
  list.forEach(item => {
    if (item.classList.contains('listening') === false) {
      // Listeners Checking
      item.classList.add('listening');
      // Done-Undone Listener
      item.addEventListener('click', () => {
        // Done-Undone Toggle
        item.classList.toggle('done');
      });
      // Delete Buttons Listeners
      item.children[0].addEventListener('click', () => {
        // Removing Item
        item.parentNode.removeChild(item);
      });
    }
  });
}

function createItem() {
  var li = document.createElement('li');
  // var text = document.createTextNode('Testing');
  li.innerHTML =
    input.value +
    "<button class='deleteBtn'><img src='delete.jpg' alt='' class='delete' /></button>";
  // li.style.textTransform = 'capitalize';
  // li.appendChild(text);
  ul.appendChild(li);
  input.value = '';
  addEvents();
  // console.log('Item created');
}

function addItemByClick() {
  if (inputExists()) {
    createItem();
  }
}

function addItemByPress(event) {
  if (inputExists() && event.keyCode === 13) {
    createItem();
  }
}

button.addEventListener('click', addItemByClick);

input.addEventListener('keydown', addItemByPress);

addEvents();
