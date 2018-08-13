let visiblity = false;
var appRoot = document.getElementById('app');
const render = () => {
  const toggleVisiblity = () => {
    visiblity = !visiblity;
    render();
  }
  var template = (
    <div>
      <h1>Visiblity Toggle</h1>
      <button onClick={toggleVisiblity}>{visiblity ? 'Hide detail': 'Show detail'}</button>
      {visiblity && (
        <div>
        <p>Here is the detail</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();
