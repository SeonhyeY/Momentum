const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');

const TODOS_KEY = 'todoItems';

let todoItems = [];

function deleteTodo(e) {
  const itemDelete = e.target.parentElement;
  todoItems = todoItems.filter(
    (todoItem) => todoItem.id !== parseInt(itemDelete.id)
  );
  saveTodos(todoItems);
  itemDelete.remove();
}

function saveTodos() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function addTodo(newTodo) {
  const liEl = document.createElement('li');
  liEl.id = newTodo.id;
  const spanEl = document.createElement('span');
  const buttonEl = document.createElement('button');

  liEl.classList.add('todo__item');
  spanEl.classList.add('item__text');
  buttonEl.classList.add('btn--delete');

  spanEl.innerText = newTodo.text;
  buttonEl.innerHTML = '❌';
  buttonEl.addEventListener('click', deleteTodo);

  liEl.appendChild(spanEl);
  liEl.appendChild(buttonEl);
  todoList.appendChild(liEl);
}

function handleTodoSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = '';

  const todoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoItems.push(todoObj);
  addTodo(todoObj);
  saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todoItems = parsedTodos;
  parsedTodos.forEach(addTodo);
}
