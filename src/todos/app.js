import html from './app.html?raw'; //?raw brings the raw content of the file
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases/renderTodos';

const ElementIDs = {
  TodoList: '.todo-list'
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

};