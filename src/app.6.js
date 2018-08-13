var app = {
  title : 'ToDo App',
  subtitle: 'ToDo app help to organize your works',
  options: ['sports','programing','play with kids']
}
const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted');
}
var template = (
  <div>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"/>
    <button>Add Option</button>
    </form>
  </div>);

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);