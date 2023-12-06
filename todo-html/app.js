function newEl (element, str) {
  let newEl = document.createElement(element);
  newEl.textContent = str;
  return newEl;
}

function newLi(str) {
  let newTodo = document.createElement('li');
  let span = document.createElement('span');
  
  span.appendChild(newEl('button', 'Edit'));
  span.appendChild(newEl('button', 'Delete'));
  newTodo.appendChild(span);
  
  newTodo.textContent = str;
  return newTodo;
}

function Store() {
  let input = document.getElementById("todo");
  let lists = document.getElementById("lists");
  if (input.value == null || input.value == '') {
    return
  }

  lists.appendChild(newLi(input.value));
}