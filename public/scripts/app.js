'use strict';

var app = {
  title: 'ToDo App',
  subtitle: 'ToDo app help to organize your works',
  options: ['a']
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
var appRoot = document.getElementById('app');
var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement(
        'div',
        null,
        'Number of options ',
        app.options.length
      ),
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
render();
