---
tags:
  - 
share: "true"
---

# 10 Programování Na Straně Klienta

## Syntax JavaScriptu

### Variables

Variables are used to store data values. JavaScript uses `var`, `let`, and `const` for variable declarations.

```javascript
let name = 'John Doe';
const PI = 3.14;
```

### Data Types

JavaScript is a loosely typed language, supporting various data types such as:

- **Primitive Types**: String, Number, Boolean, Undefined, Null, Symbol, BigInt
- **Structural Types**: Object, Array, Function

```js
let message = "Hello, world!"; // String
let age = 25; // Number
let isActive = true; // Boolean
let user = { name: "Jane Doe", age: 28 }; // Object
let colors = ["Red", "Green", "Blue"]; // Array
```

### Operators

JavaScript supports arithmetic operators (`+`, `-`, `*`, `/`), assignment operators (`=`, `+=`, `-=`), comparison operators (`==`, `===`, `!=`, `!==`), and logical operators (`&&`, `||`, `!`).

```js
let sum = 10 + 5; // 15
let isEqual = (sum === 15); // true
```

### Control Structures

#### If-else

```js
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

#### For Loop

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

#### While Loop

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

#### Functions

```js
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));
```

#### Events

```js
<button onclick="alert('Button clicked')">Click me</button>
```

#### Objects

```js
let person = {
    firstName: "John",
    lastName: "Doe",
    greet: function() {
        console.log("Hi, " + this.firstName);
    }
};
// Declare object with object initializer.
let myObject = { key1: "value1", "key2": "value2" }; 
// Access object, 
myObject.key1; 
myObject["key1"]; 
// Redefine object. 
myObject = {}; 
myObject.key1 = "value1"; 
myObject["key2"] = "value2"; 
JSON.stringify(myObject); 
console.log(myObject);

// This is an array. 
const left = ["a", "b"]; 
// This is an object. 
const right = { 0: "a", 1: "b" }; 
// You can not tell the difference here! 
left[0] == right[0] // First items are the same.
```

#### Arrays

```js
let fruits = ["Apple", "Banana", "Cherry", 4];
```

### Type Conversions

```js
5 + null; // 5 (null is converted to 0) 
"5" + null; // "5null" (null is converted to "null") 
"5" + 2; // 52 (2 is converted to "2") 
"5" - 2; // 3 ("5" is converted to 5) 
"5" * "2"; // 10 ("5" and "2" are converted to 5 and 2) 
"5" == 5; // true 
"5" === 5; // false 
null == undefined // true null === undefined // false

// CONTROLLING CONVERSIONS
const five = "5"; 
Number(five) + 2; // 7 
parseInt(five, 10) + 2; // 7 
parseFloat(five) + 2; // 7 
const number = 2; 
number.toString(10); // "2"
const five = "5"; 
five + 2; // "52" 
+five + 2; // 7
```

## Modifikace DOMu a Obsluha Událostí Pomocí JavaScriptu

### Modifying the DOM with JavaScript

JavaScript can interact with the DOM to dynamically change the content, structure, and style of web pages:

- **Accessing DOM Elements**
  JavaScript provides various methods to select elements from the DOM:

```javascript
let elementById = document.getElementById('elementId');
let elementsByClassName = document.getElementsByClassName('className');
let elementsByTagName = document.getElementsByTagName('tagName');
```

- **Changing Content** The `innerHTML` property can modify the content of an element: `elementById.innerHTML = 'New content';
- **Manipulating Attributes** Attributes of DOM elements can be modified using JavaScript: `elementById.setAttribute('href', 'https://www.example.com');
- **Creating and Removing Elements** New nodes can be created and added to the DOM:

```js
// creating
let newElement = document.createElement('div');
document.body.appendChild(newElement);
// removing
let parentElement = document.getElementById('parent');
let childElement = document.getElementById('child');
parentElement.removeChild(childElement);
```

- **Changing Styles** JavaScript can modify CSS styles: `elementById.style.color = 'blue';`

### Handling Events with JavaScript

Events in JavaScript allow you to execute code in response to user actions:

- **Adding Event Listeners** Use `addEventListener` to attach an event listener to an element:

```js
let elementById = document.getElementById('elementId');
elementById.addEventListener('click', function() {
  console.log('Element clicked!');
});
```

- **Triggering event from js:** `document.getElementById('elementId').click();`

- **Event Object** Event listeners receive an event object that provides information about the event:

```js
elementById.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('Clicked element:', event.target);
});

```

- **Removing Event Listeners** Event listeners can be removed using `removeEventListener`:

```js
let clickHandler = function() {
  console.log('Element clicked!');
};
elementById.removeEventListener('click', clickHandler);
```

- **Common Event Types**
	- `click`: User clicks on an element.
	- `mouseover`: Mouse pointer moves over an element.
	- `mouseout`: Mouse pointer moves out of an element.
	- `keydown`: User presses a key.
	- `Window.load`: Web page has finished loading.

## Aynchroní Programování V JavaScriptu (promise, Callback, async/await)

### Callbacks

A callback is a function passed as an argument to another function, which is then executed at a later time to handle the result of an asynchronous operation.

```javascript
function fetchData(callback) {
    // Simulate a delay with setTimeout
    setTimeout(() => {
        callback('Data loaded');
    }, 1000);
}

fetchData((data) => {
    console.log(data); // 'Data loaded'
});
```

- **Issues with Callbacks**: While simple for single asynchronous calls, callbacks can lead to "callback hell" with complex or nested asynchronous operations, making code hard to read and maintain.

### Promises

A `Promise` is an object representing the eventual completion (`.then()`) or failure (`.catch()`) of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

```js
let promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        resolve('Data loaded');
    }, 1000);
});

promise.then(data => {
    console.log(data); // 'Data loaded'
}).catch(error => {
    console.error(error);
});


doSomethingAsynchronouslyAndReturnPromise() 
	.then(function (result) { return transformTheResult(result); })
	.then(function (finalResult) { console.log("Got the final result: " + finalResult); }) 
	.catch(failureCallback);
```

- **Chaining Promises**: Promises can be chained to handle complex asynchronous sequences in a more manageable way.

### Async/Await

The `async/await` syntax provides a more elegant way to handle promises, making asynchronous code look and behave a bit more like synchronous code.

- An `async` function returns a promise.
- The `await` keyword is used to wait for a promise to settle, and it can only be used inside an `async` function.

```js
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


try { 
	const result = await doSomethingAsynchronouslyAndReturnPromise(); 
	const finalResult = transformTheResult(result); 
	console.log("Got the final result: " + finalResult); 
} catch (exception) { 
	failureCallback(); 
}
```

- **Advantages**: The `async/await` syntax simplifies the chaining of promises and improves readability, especially for complex asynchronous operations.

### Best Practices

- **Prefer Promises and Async/Await**: Use callbacks for simple, single asynchronous operations, but prefer promises and `async/await` for handling complex asynchronous workflows.
- **Error Handling**: Use `.catch()` with promises and `try/catch` blocks with `async/await` to handle errors.
- **Avoid Mixing**: Try not to mix callbacks, promises, and `async/await` unnecessarily in the same function or workflow to maintain code clarity and consistency.

## AJAX

AJAX (Asynchronous JavaScript and XML) is a technique for creating interactive web applications by making asynchronous HTTP requests to the server without reloading the entire page.This technique significantly improves the user experience by making web applications feel more dynamic and faster.

### How AJAX Works

**XMLHttpRequest Object**: Historically, AJAX requests were made using the `XMLHttpRequest` object.

```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', 'server/data.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
	  let data = JSON.parse(xhr.responseText);
	  console.log(data);
  }
};
xhr.send();
```

**Fetch API**: Modern approach using the `fetch` API, which provides a more powerful and flexible feature set for making HTTP requests.

```js
// promises
function fetchData(url){
	fetch(url)
	    .then(response => response.json())
	    .then(data => console.log(data))
	    .catch(error => console.error('Error:', error));
}
// async await
async function fetchData() { 
	try { 
		const response = await fetch(url); 
		const data = await response.json(); // Use .text() to get text content. 
		console.log("Got the data:", data); 
	} catch(error) { 
		console.log("Can't fetch data", error); 
	} 
}
```

### Use Cases for AJAX

- **Form Submission**: Submit forms and process server responses without page reloads.
- **Data Retrieval**: Dynamically retrieve and display data from the server based on user actions.
- **Autocomplete**: Implement autocomplete functionality in search fields by fetching data as the user types.

### Benefits of Using AJAX

- **Improved User Experience**: Reduces reloading times and makes the application feel more responsive.
- **Efficient Network Use**: Sends only necessary data to and from the server, reducing bandwidth usage.
- **Asynchronous Operations**: Allows the rest of the web page to remain interactive while requests are being processed.

### Best Practices

- **Error Handling**: Implement proper error handling for AJAX requests to manage failed or delayed responses.
- **Security**: Be cautious of security implications, such as cross-site scripting (XSS) and ensure that sensitive data is properly handled.
- **Accessibility**: Ensure that dynamic content updates are accessible to users with disabilities, possibly by leveraging ARIA roles and properties.

### Challenges

- **Search Engine Optimization (SEO)**: Dynamically loaded content may not be indexed by search engines as effectively as statically loaded content.
- **Browser History and Bookmarking**: AJAX can make it challenging to bookmark specific states of an application or use the browser's back and forward buttons.