'use strict';

var visiblity = false;
var appRoot = document.getElementById('app');
var render = function render() {
  var toggleVisiblity = function toggleVisiblity() {
    visiblity = !visiblity;
    render();
  };
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visiblity Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisiblity },
      visiblity ? 'Hide detail' : 'Show detail'
    ),
    visiblity && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Here is the detail'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
render();
