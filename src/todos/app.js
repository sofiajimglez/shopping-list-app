import html from '../../index.html?raw'; //?raw brings the raw content of the file
import todoStore from '../store/todo.store';
import { renderTodos, renderPending } from './use-cases';

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearPurchased: '.clear-purchased',
  TodoFilters: '.filter',
  PendingLabel: '#pending-count'
}

/**
 * @param {String} elementId
 */

export const App = (elementId) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    renderPending(ElementIDs.PendingLabel);
  };

  //When App() is called:
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    // document.querySelector(elementId).append(app);
    displayTodos();
  })();

  //HTML References
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);
  const clearPurchasedBtn = document.querySelector(ElementIDs.ClearPurchased);
  const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

  //Event Listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;
    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    if (!element || !event.target.classList.contains('destroy')) return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  clearPurchasedBtn.addEventListener('click', () => {
    todoStore.deletePurchased();
    displayTodos();
  });

  filtersLIs.forEach(element => {
    element.addEventListener('click', (element) => {
      filtersLIs.forEach(e => e.classList.remove('selected'));
      element.target.classList.add('selected');

      todoStore.setFilter(element.target.text);
      displayTodos();


    })
  })

};