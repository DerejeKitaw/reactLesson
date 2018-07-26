var app = {
  title : 'ToDo App',
  subtitle  : 'ToDo app hel to organize your works'
}
var template = (
  <div>
    <h1>Title: {app.title}</h1>
    <h3>{app.subtitle}</h3>
  </div>);

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);