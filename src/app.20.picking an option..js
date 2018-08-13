var app = {
  title: 'ToDo App',
  subtitle: 'TODO app help to organize your works',
  options: ['option one','option two','option three']
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};
const onRemoveAll = () => {
  app.options = [];
  render();
};
const getSubtitle = subtitle => {
  if (subtitle) {
    return <h3>{subtitle}</h3>;
  }
};
const numbers = [12, 24, 56];

var appRoot = document.getElementById('app');
const render = () => {
  var template = (
    <div>
      <h1>Title: {app.title ? app.title : 'Anonymous'}</h1>
      {getSubtitle(app.subtitle)}
      <div>Number of options {app.options.length}</div>
      <p>{app.options.length > 0 ? 'Here is your options' : 'No Options'}</p>
      <button  disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>
      })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();
