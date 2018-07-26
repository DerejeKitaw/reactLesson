'use strict';

var app = {
  title: 'ToDo App',
  subtitle: 'ToDo app hel to organize your works'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Title: ',
    app.title
  ),
  React.createElement(
    'h3',
    null,
    app.subtitle
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
