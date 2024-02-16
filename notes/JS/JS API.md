JavaScript can send network requests to the server and load new information whenever it’s needed.

For example, we can use a network request to:
- Submit an order,
- Load user information,
- Receive latest updates from the server,
- …etc.
…And all of that without reloading the page!

There are multiple ways to send a network request and get information from the server.
The `fetch()` method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.

Basic Syntax : 
```js
let promise = fetch(url, options])
```
- **`url`** – the URL to access.
- **`options`** – optional parameters: method, headers etc.

Example for GET and POST in github