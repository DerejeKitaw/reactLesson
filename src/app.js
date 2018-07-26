const idValue = 'my_id';
var template = (
  <div>
    <h1>Counter</h1>
    <button id={idValue} className='button'>+1</button>
  </div>);
console.log(template);
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);