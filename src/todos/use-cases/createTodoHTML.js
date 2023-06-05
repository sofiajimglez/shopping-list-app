import { Todo } from '../models/todo.model';

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
  if (!todo) throw new Error('A Todo object is required.')
  const html = `<h3>${todo.description}</h3>`;
  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  return liElement;
}