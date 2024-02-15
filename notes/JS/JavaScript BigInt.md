To create a `BigInt`, append n to the end of an integer or call `BigInt()`:
JavaScript integers are only accurate up to 15 digits, after that it will be rounded/overflow

## Precision Curiosity
Rounding can compromise program security:
```js
9007199254740992 === 9007199254740993; // is true !!!
```

With `BigInt` the total number of supported data types in JavaScript is 8:

1. String  
2. Number  
3. Bigint  
4. Boolean  
5. Undefined  
6. Null  
7. Symbol  
8. Object