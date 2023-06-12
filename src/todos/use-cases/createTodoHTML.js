import { Todo } from '../models/todo.model';

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
  if (!todo) throw new Error('A Todo object is required.')

  const { done, description, id } = todo;

  const html = `<div class="view">
      <input class="toggle relative appearance-none w-4 h-4 border-2 border-sky-900 opacity-85 rounded-sm bg-slate-50 focus:outline-none  checked:after:content-['✓'] checked:after:absolute checked:after:-top-2 checked:after:font-semibold hover:ring hover:ring-sky-200" type="checkbox" ${done ? 'checked' : ''}>
      <label class="cursor-pointer my-3 font-caveat text-2xl text-sky-900 ms-2 ${done ? 'line-through decoration-2 decoration-sky-950' : ''}">${description}</label>
      <button class="destroy ms-1 text-orange-800 font-bold opacity-25 hover:opacity-100">✕</button>
    </div>`;
  
  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  liElement.setAttribute('data-id', id);
  if (done) liElement.classList.add('purchased');

  return liElement;
}