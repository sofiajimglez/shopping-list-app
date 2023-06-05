import html from './app.html?raw'; //?raw brings the raw content of the file
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases/renderTodos';

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input'
}

/**
 * @param {String} elementId
 */

export const App = (elementId) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
  };

  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  //HTML References
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

  //Event Listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;
    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

};