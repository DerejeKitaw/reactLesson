var app = {
  title : 'ToDo App',
  subtitle: 'ToDo app help to organize your works',
  age: 10,
  hobbies: ['sports','programing','play with kids']
}
function getSubtitle(subtitle) {
  if (subtitle) {
    return <h3>ToDo app help to organize your works</h3>;
  } 
}
// If there is no hobbies display No hobbies found.
var template = (
  <div>
    <h1>Title: {app.title ? app.title : 'Anonymous'}</h1>
    {getSubtitle(app.subtitle)}
    {app.age >= 18 && <p>Age: {app.age}</p>}
    <div>Hobbies: {app.hobbies.length > 0? `you have ${app.hobbies.length} hobbies`:'No hobbies found.'}</div>
  </div>);

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);