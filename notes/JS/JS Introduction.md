- JavaScript does not have any print object or print methods. You <mark style="background: #D2B3FFA6;">cannot access output devices from JavaScript</mark>. The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.
- <mark style="background: #FFB8EBA6;">Numbers are not allowed as the first character in names</mark>. This way JavaScript can easily distinguish identifiers from numbers.
- Variables declared with the `var` always have **Global Scope**.
- Variables declared with the `let` always have **Block Scope**.
- Variables defined with `var` **can** be redeclared.
- Variables defined with `let` **can not** be redeclared.
- ![[Screenshot 2024-02-12 at 12.45.08 PM.png]]

### Const Keyword
The keyword `const` is a little misleading.
It does not define a constant value. It defines a constant reference to a value.
Because of this you can NOT:
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of constant array
- Change the properties of constant object
Example : 
```js
// You can create a constant array:  
const cars = ["Saab", "Volvo", "BMW"];  
  
// You can change an element:  
cars[0] = "Toyota";  
  
// You can add an element:  
cars.push("Audi");
```

```js
const cars = ["Saab", "Volvo", "BMW"];  
  
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

## The ??= Operator

The **Nullish coalescing assignment operator** is used between two values.
If the first value is undefined or null, the second value is assigned.
```js
let x;  
x ??= 5; //assigns 5 to x
```

### JavaScript has 8 Datatypes

1. String  
2. Number  
3. Bigint  
4. Boolean  
5. Undefined  
6. Null  
7. Symbol  
8. Object

### The Object Datatype

The object data type can contain:

1. An object  
2. An array  
3. A date

- **Javascript numbers are always one type:  double (64-bit floating point).**

## [[JavaScript BigInt]]

All JavaScript numbers are stored in a a 64-bit floating-point format.

JavaScript BigInt is a new datatype ([ES2020](https://www.w3schools.com/js/js_2020.asp)) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
Example 
```js
let x = BigInt("123456789012345678901234567890");
```

- Any variable can be emptied, by setting the value to `undefined`. The type will also be `undefined`.
- `car = undefined;    // Value is undefined, type is undefined`
- Comparing two JavaScript objects **always** returns **false**.
## Property Access [ ]
Property access might be a little **unpredictable:**
- It makes strings look like arrays (but they are not)
- If no character is found, [ ] returns undefined, while charAt() returns an empty string.
- It is read only. str[0] = "A" gives no error (but does not work!)
- Strings are immutable: Strings cannot be changed, only replaced.

[JS Strings](https://www.w3schools.com/js/js_string_search.asp)
- toString() can be used to specify the base you want
# JS Arrays
```js
// Create an array with three elements:
const points = new Array(40);

// Create an array with two elements:  
const points = new Array(40, 100);

// Create an array with one element ???  
const points = new Array(40);
// No, the above code creates an array with 40 undefined elements:
```
### JavaScript Array find()

The `find()` method returns the value of the first array element that passes a test function.
This example finds (returns the value of) the first element that is larger than 18:
```js
const numbers = [4, 9, 16, 25, 29];  
let first = numbers.find(myFunction);  
  
function myFunction(value, index, array) {  
  return value > 18;  
}
```
### JavaScript Array findLast() Method

ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
```js
const temp = [27, 28, 30, 40, 42, 35, 30];  
let high = temp.findLast(x => x > 40);
```
### Numeric Sort

By default, the `sort()` function sorts values as **strings**.
This works well for strings ("Apple" comes before "Banana").
If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the `sort()` method will produce incorrect result when sorting numbers.
You can fix this by providing a **compare function**:
```js
const points = [40, 100, 1, 5, 25, 10];  
points.sort(function(a, b){return a - b});
```
#### The Compare Function

The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:
When the `sort()` function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, `a` is sorted before `b`.
If the result is positive, `b` is sorted before `a`.
If the result is 0, no changes are done with the sort order of the two values.
**Example:**
The compare function compares all the values in the array, two values at a time `(a, b)`.
When comparing 40 and 100, the `sort()` method calls the compare function(40, 100).
The function calculates 40 - 100 `(a - b)`, and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

## Using Math.min() on an Array

You can use `Math.min.apply` to find the lowest number in an array:
```js
function myArrayMin(arr) {  
  return Math.min.apply(null, arr);  
}
```
## JavaScript Array forEach()

The `forEach()` method calls a function (a callback function) once for each array element.
```js
const numbers = [45, 4, 9, 16, 25];  
let txt = "";  
numbers.forEach(myFunction);  
  
function myFunction(value, index, array) {    //Or only value is passed
  txt += value + "<br>";  
}

//Output : 
// "45<br>4<br>9<br>16<br>25<br>"
```
- Map is the better forEach function which does not modify on the current array
## JavaScript Array map()

The `map()` method creates a new array by performing a function on each array element.
The `map()` method does not execute the function for array elements without values.
The `map()` method does not change the original array.
This example multiplies each array value by 2:
```js
const numbers1 = [45, 4, 9, 16, 25];  
const numbers2 = numbers1.map(myFunction);  
  
function myFunction(value, index, array) {  
  return value * 2;  
}
```
## JavaScript Array filter()

The `filter()` method creates a new array with array elements that pass a test.
This example creates a new array from elements with a value larger than 18:
```js
const numbers = [45, 4, 9, 16, 25];  
const over18 = numbers.filter(myFunction);  
  
function myFunction(value, index, array) {  
  return value > 18;  
}
```
## JavaScript Array.from()

The `Array.from()` method returns an Array object from any object with a length property or any iterable object.
```js
Array.from("ABCDEFG");

//OUTPUT : 
//["A", "B", "C", "D", "E", "F", "G"]

```
## JavaScript Array Spread (...)

The ... operator expands an iterable (like an array) into more elements:
```js
const q1 = ["Jan", "Feb", "Mar"];  
const q2 = ["Apr", "May", "Jun"];  
const q3 = ["Jul", "Aug", "Sep"];  
const q4 = ["Oct", "Nov", "May"];  
  
const year = [...q1, ...q2, ...q3, ...q4];
```

# JS Dates
Date objects are created with the `new Date()` constructor.
There are **9 ways** to create a new date object:
```js
new Date()  
new Date(_date string_)  
  
new Date(_year,month_)  
new Date(_year,month,day_)  
new Date(_year,month,day,hours_)  
new Date(_year,month,day,hours,minutes_)  
new Date(_year,month,day,hours,minutes,seconds_)  
new Date(_year,month,day,hours,minutes,seconds,ms_)  
  
new Date(_milliseconds_)
```
Specifying a day higher than max, will not result in an error but add the overflow to the next month:
```js
const d = new Date(2018, 5, 35, 10, 33, 30);
//is the same as
const d = new Date(2018, 6, 5, 10, 33, 30);
```

- You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
```js
const d = new Date(2018);
//treated as milliseconds
```

## JavaScript ISO Dates

ISO 8601 is the international standard for the representation of dates and times.
The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
`const d = new Date("2015-03-25");`
ISO dates can be written without specifying the day (YYYY-MM):
`const d = new Date("2015-03");`
ISO dates can be written without month and day (YYYY):
`const d = new Date("2015");`

## The Nullish Coalescing Operator (??)

The `??` operator returns the first argument if it is not **nullish** (`null` or `undefined`).
Otherwise it returns the second argument
```js
let name = null;  
let text = "missing";  
let result = name ?? text;
```

## JavaScript Declarations are Hoisted

In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
Example : 
```js
x = 5; // Assign 5 to x  
  
elem = document.getElementById("demo"); // Find an element  
elem.innerHTML = x;                     // Display x in the element  
  
var x; // Declare x
```
### Declare Your Variables At the Top !
Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
If a developer doesn't understand hoisting, programs may contain bugs (errors).
To avoid bugs, always declare all variables at the beginning of every scope.
Since this is how JavaScript interprets the code, it is always a good rule.

## Strict Mode in JS
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

## this Keyword in JS
Let's consider a common scenario where you have an object representing a person and you want to define methods for that object to introduce the person using regular and arrow functions. 

```js
const person = {
  name: "John",
  // Regular function to introduce the person
  introduceRegular: function() {
    console.log("Hello, my name is " + this.name);
  },
  // Arrow function to introduce the person
  introduceArrow: () => {
    console.log("Hello, my name is " + this.name);
  }
};

// Using the regular function to introduce the person
person.introduceRegular(); // Output: "Hello, my name is John"

// Using the arrow function to introduce the person
person.introduceArrow(); // Output: "Hello, my name is undefined"
```

In this example, the `person` object has two methods: `introduceRegular` and `introduceArrow`. 

- `introduceRegular` is a regular function. When called, it properly accesses the `name` property of the `person` object because `this` refers to the object itself. So, it outputs the correct introduction.
- `introduceArrow` is an arrow function. When called, it attempts to access the `name` property using `this`, but arrow functions don't have their own `this` binding, so they use the `this` value from the surrounding lexical context, which in this case is the global object. As a result, it outputs `undefined` because `name` is not defined in the global scope.

This demonstrates that when you need to reference properties of the object itself, it's typically better to use regular functions as methods of that object. Arrow functions are more suitable when you want to maintain the lexical scope of the surrounding context, such as in callback functions or when you don't want to bind a new `this` context.

## The debugger Keyword

The `debugger` keyword stops the execution of JavaScript, and calls (if available) the debugging function.
This has the same function as setting a breakpoint in the debugger.
If no debugging is available, the debugger statement has no effect.
With the debugger turned on, this code will stop executing before it executes the third line.

# [[JavaScript Objects]]
# JavaScript Object Accessors
## JavaScript Getter (The get Keyword)

This example uses a `lang` property to `get` the value of the `language` property.
```js
// Create an object:  
const person = {  
  firstName: "John",  
  lastName: "Doe",  
  language: "en",  
  get lang() {  
    return this.language;  
  }  
};  
  
// Display data from the object using a getter:  
document.getElementById("demo").innerHTML = person.lang;
```
## JavaScript Setter (The set Keyword)

This example uses a `lang` property to `set` the value of the `language` property.
```js
const person = {  
  firstName: "John",  
  lastName: "Doe",  
  language: "",  
  set lang(lang) {  
    this.language = lang;  
  }  
};  
  
// Set an object property using a setter:  
person.lang = "en";  
  
// Display data from the object:  
document.getElementById("demo").innerHTML = person.language;
```

## Object.defineProperty()

The `Object.defineProperty()` method can also be used to add Getters and Setters:
```js
// Define object  
const obj = {counter : 0};  
  
// Define setters and getters  
Object.defineProperty(obj, "reset", {  
  get : function () {this.counter = 0;}  
});  
Object.defineProperty(obj, "increment", {  
  get : function () {this.counter++;}  
});  
Object.defineProperty(obj, "decrement", {  
  get : function () {this.counter--;}  
});  
Object.defineProperty(obj, "add", {  
  set : function (value) {this.counter += value;}  
});  
Object.defineProperty(obj, "subtract", {  
  set : function (value) {this.counter -= value;}  
});  
  
// Play with the counter:  
obj.reset;  
obj.add = 5;  
obj.subtract = 1;  
obj.increment;  
obj.decrement;  

```

## Function Rest Parameter

The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
```js
function sum(...args) {  
  let sum = 0;  
  for (let arg of args) sum += arg;  
  return sum;  
}  
  
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

# JavaScript Function call()
## Method Reuse

With the `call()` method, you can write a method that can be used on different objects.
The `call()` method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
```js
const person = {  
	fullName: function() {  
    return this.firstName + " " + this.lastName;  
  }  
}  
const person1 = {  
  firstName:"John",  
  lastName: "Doe"  
}  
const person2 = {  
  firstName:"Mary",  
  lastName: "Doe"  
}  
  
// This will return "John Doe":  
person.fullName.call(**person1**);
```
## The JavaScript apply() Method

The `apply()` method is similar to the `call()` method
The difference is:
- The `call()` method takes arguments **separately**.
- The `apply()` method takes arguments as an **array**.
```js
const person = {  
  fullName: function(city, country) {  
    return this.firstName + " " + this.lastName + "," + city + "," + country;  
  }  
}  
  
const person1 = {  
  firstName:"John",  
  lastName: "Doe"  
}  
  
person.fullName.apply(person1, ["Oslo", "Norway"]);
```
[Bind Function](https://www.w3schools.com/js/js_function_bind.asp)

## JavaScript Closures
```js
const add = (function () {  
  let counter = 0;  
  return function () {counter += 1; return counter}  
})();  
  
add();  
add();  
add(); 
// counter is now 3
```

## JavaScript Promise Object

"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code
A Promise contains both the producing code and calls to the consuming code:
Promise Syntax : 
```js
let myPromise = new Promise(function(myResolve, myReject) {  
// "Producing Code" (May take some time)  
  
  myResolve(); // when successful  
  myReject();  // when error  
});  
  
// "Consuming Code" (Must wait for a fulfilled Promise)  
myPromise.then(  
  function(value) { /* code if successful */ },  
  function(error) { /* code if some error */ }  
);
```
[JS Promise API](https://javascript.info/promise-api)
## Asynchronous function
Asynchronous functions in JavaScript allow you to execute code without blocking the execution of other code. This is particularly useful for tasks such as fetching data from a server, reading files, or waiting for user input, where the operation might take some time to complete. Rather than waiting for these operations to finish, asynchronous functions enable you to specify code that should execute after the operation completes, ensuring that your program remains responsive.

Here are some key concepts related to asynchronous functions in JavaScript:

1. **Callbacks**: Traditionally, asynchronous operations in JavaScript were handled using callbacks. A callback is a function passed as an argument to another function, to be executed later once an operation completes. Callback functions are often used with asynchronous functions like `setTimeout`, `setInterval`, and AJAX requests.

   Example:
   ```javascript
   setTimeout(function() {
     console.log('This code runs after 1 second.');
   }, 1000);
   ```

2. **Promises**: Promises provide a more structured way to work with asynchronous code. A Promise represents the eventual completion (or failure) of an asynchronous operation and allows you to attach callbacks to handle its success or failure. Promises simplify asynchronous code, making it easier to read and write compared to using nested callbacks.

   Example:
   ```javascript
   const fetchData = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('Data fetched successfully');
     }, 2000);
   });

   fetchData.then(data => {
     console.log(data); // Output: Data fetched successfully
   });
   ```

3. **Async/Await**: Async functions and the `await` keyword provide a more synchronous-looking syntax for working with asynchronous code. Async functions allow you to write asynchronous code using a synchronous style, making it easier to read and reason about asynchronous operations. The `await` keyword can only be used inside async functions and is used to wait for a Promise to resolve before proceeding with the execution of the code.

   Example:
   ```javascript
   async function fetchData() {
     const data = await fetch('https://api.example.com/data');
     const json = await data.json();
     console.log(json);
   }

   fetchData();
   ```

Asynchronous functions are crucial in JavaScript for handling tasks that involve waiting for external events or resources, ensuring that your code remains efficient and responsive. They are foundational for modern web development, especially in environments like Node.js and browser-based applications.

## The localStorage Object

The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
The data is stored with no expiration date, and will not be deleted when the browser is closed.
The data will be available for days, weeks, and years.

## The setItem() Method
The localStorage.setItem() method stores a data item in a storage.
It takes a name and a value as parameters, example : 
```js
localStorage.setItem("name", "John Doe");
```
## The getItem() Method

The localStorage.getItem() method retrieves a data item from the storage.
It takes a name as parameter, example:
```js
localStorage.getItem("name");
```

# [[JS API]]
