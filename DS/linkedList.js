class LinkedList {
  constructor(value = 0) {
    this.value = value;
    this.next = null;
  }
}

let root = new LinkedList(10);


function addNewNode(value) {
  let node = new LinkedList(value);
  if (root == undefined) {
    root = node;
  } else {
    let temp = root;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
  }
}

function deleteNode(value) {
  if (root == undefined) {
    console.log("Linked list Empty");
  } else {
    let temp = root;
    while (temp.next) {
      if (temp.next.value === value) {
        temp.next = temp.next.next;
        return;
      }
      temp = temp.next;
    }
    console.log("No value found");
  }
}

function printNodes() {
  let temp = root;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

function searchNode(value) {
  let temp = root;
  while (temp) {
    if (temp.value == value) {
      return true;
    }
    temp = temp.next;
  }
  return false;
}


addNewNode(20);
addNewNode(30);
printNodes();
deleteNode(20);
console.log(searchNode(20));
printNodes();
