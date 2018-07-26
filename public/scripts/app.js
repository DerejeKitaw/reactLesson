'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'div',
    null,
    'This is JSX from app.js!'
  ),
  React.createElement(
    'p',
    null,
    'paragraph'
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
