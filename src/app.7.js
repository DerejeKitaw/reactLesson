var app = {
  title : 'ToDo App',
  subtitle: 'ToDo app help to organize your works',
  options: ['a']
}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}
var appRoot = document.getElementById('app')
const render = () => {
  var template = (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>Number of options {app.options.length}</div>
      <input type="text" name="option"/>
      <button>Add Option</button>
      </form>
    </div>);

    ReactDOM.render(template, appRoot);
}
render();