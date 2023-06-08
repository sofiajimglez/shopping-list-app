import todoStore, { Filters } from "../../store/todo.store";

/**
 * 
 * @param {String} elementId 
 */
export const renderPending = (element) => {
  const elementBlock = document.querySelector(element);
  elementBlock.innerHTML = todoStore.getTodos(Filters.Pending).length;
};