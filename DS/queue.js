class Queue {
  constructor() {
    this.front = -1;
    this.back = -1;
    this.arr = [];
  }

  enqueue(ele) {
    if (this.front === -1) {
      this.front = 0;
    }
    this.arr.push(ele);
    this.back++;
  }

  dequeue() {
    if (this.front == -1) {
      console.log("Queue empty");
      return undefined;
    }
    if (this.front == this.back) {
      this.front = -1;
    }
    this.back--;
    return this.arr.shift();
  }

  peek() {
    if (this.front == -1) {
      console.log("Queue empty");
      return undefined;
    }
    return this.arr[this.front];
  }

  isEmpty() {
    return this.front === -1 ? true : false;
  }

  get length() {
    return this.back + 1;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.peek())
console.log(q.dequeue());
console.log(q.dequeue());