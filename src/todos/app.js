import html from './app.html?raw'; //?raw brings the raw content of the file

/**
 * @param {String} elementId
 */

export const App = (elementId) => {

  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();

};