let count = 0;

const minusOne = () => {
  count--;
  console.log('minusOne ' + count);
};
const addOne = () => {
  count++;
  console.log('addOne ' + count);
};
const reset = () => {
  count=0;
  console.log('reset' + count);
};

const template = (
  <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>);

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);