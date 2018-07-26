### 01_Craete public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
 
</body>
</html>
```

### 02_Add react links in index.html
```htm
<script src="https://unpkg.com/react@15/dist/react.js"></script>
 <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
 <script src="/scripts/app.js"></script>
 ```

 ### 03_create scripts/app.js
 
 ### 04_test if react is installed
 ![react-startup](./doc/01_react_startup.png)

 ### 05_test if app.js is running
 ```js
 console.log('App.js is running');
 ```
 ![react-startup](./doc/02_react_startup.png)

### 06_See how babel convert JSX syntax to javascript
```js
 var template = <p>This is JSX from app.js</p>; 
 ```
> * the above code is JSX syntax. html equal to variable template.

> Bable will convert this to javascript syntax
 ![react-startup](./doc/03_react_startup.png)
 ![react-startup](./doc/04_react_startup.png)
 ![react-startup](./doc/05_react_startup.png)

 > React is intended to be used like `var template = <p>This is JSX from app.js</p>;` not compile javascript. So we will installal bable localy.

> Before install bable let us use compiled javascript to our react app

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
 <script src="https://unpkg.com/react@15/dist/react.js"></script>
 <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
 <script src="/scripts/app.js"></script>
</body>
</html>
```
app.js
```js
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
  'div',
  { id: 'app' },
  'This is JSX from app.js'
);

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);
```
 ![react-startup](./doc/06_react_startup.png)

### 07_Install Bable
