import { Todo } from '../models/todo.model';

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
  if (!todo) throw new Error('A Todo object is required.')

  const { done, description, id } = todo;

  const html = `<div class="view">
      <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
      <label class="cursor-pointer my-3 font-caveat text-2xl text-sky-900 ms-2 ${done ? 'line-through decoration-2 decoration-sky-950' : ''}">${description}</label>
      <button class="destroy ms-1 text-orange-800 font-bold opacity-25 hover:opacity-100">✕</button>
    </div>`;
  
  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  liElement.setAttribute('data-id', id);
  if (done) liElement.classList.add('purchased');

  return liElement;
}