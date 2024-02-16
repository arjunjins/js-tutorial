class Stack {
  constructor() {
    this.top = -1;
    this.arr = [];
  }

  push(ele) {
    this.arr.push(ele);
    this.top++;
  }

  pop() {
    if (this.top == -1) {
      console.log("Stack Empty");
      return undefined;
    }
    return this.arr[this.top--];
  }

  peek() {
    if (this.top == -1) {
      console.log("Stack Empty");
      return undefined;
    }
    return this.arr[this.top];
  }

  isEmpty() {
    return this.top == -1 ? true : false;
  }

  get getTop() {
    return this.top;
  }

  get getArr() {
    return this.arr;
  }

  get length() {
    return this.top + 1;
  }
}

let st = new Stack();

st.push(2);
console.log("Now top is " + st.getTop);
st.push(3);
console.log("Now top is " + st.getTop);
console.log(st.pop());
console.log(st.peek());
console.log(st.pop());
console.log(st.peek());
