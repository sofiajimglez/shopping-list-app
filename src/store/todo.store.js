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
  console.log(state);
  console.log('init store 🥑');
};

export default {
  initStore
}