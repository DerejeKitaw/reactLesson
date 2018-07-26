'use strict';

var idValue = 'my_id';
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Counter'
  ),
  React.createElement(
    'button',
    { id: idValue, className: 'button' },
    '+1'
  )
);
console.log(template);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
