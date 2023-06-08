import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'All',
  Completed: 'Completed',
  Pending: 'Pending'
};

const state = {
  todos: [
    new Todo('Patatas'),
    new Todo('Tomates')
  ],
  filter: Filters.All
};

const initStore = () => {
  loadStore();
  console.log('Init store 🥑');
};

const loadStore = () => {
  if (!localStorage.getItem('state')) return;

  const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
  state.todos = todos;
  state.filter = filter;
};

const saveToLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
  switch(filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter(todo => todo.done);
    case Filters.Pending:
      return state.todos.filter(todo => !todo.done);
    default:
      throw new Error(`${filter} is not a valid filter.`);
  }
};

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is required');

  state.todos.push(new Todo(description));
  saveToLocalStorage();
};


const toggleTodo = (todoId) => {
  state.todos = state.todos.map(todo => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
      return todo;
    } else {
      return todo;
    }
  });
  saveToLocalStorage();
};

const deleteTodo = (todoId) => {  
  state.todos = state.todos.filter(todo => todo.id !== todoId);
  saveToLocalStorage();
}

const deleteCompleted = () => {
  state.todos = state.todos.filter(todo => !todo.done);
  saveToLocalStorage();
};

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
  if (!Object.keys(Filters).includes(newFilter)) throw new Error(`${newFilter} is not a valid filter.`);

  state.filter = newFilter;
  saveToLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter.toString();
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo
};