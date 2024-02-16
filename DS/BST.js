class BST {
  constructor(value = 0) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

let root = new BST(10);

function add(root, value) {
  if (value >= root.value) {
    if (root.right) {
      add(root.right, value);
    } else {
      let node = new BST(value);
      root.right = node;
    }
  } else {
    if (root.left) {
      add(root.left, value);
    } else {
      let node = new BST(value);
      root.left = node;
    }
  }
}

function search(root, value) {
  if (root == undefined) {
    return false;
  }
  if (value == root.value) {
    return true;
  } else if (value > root.value) {
    return search(root.right, value);
  } else {
    return search(root.left, value);
  }
}

function inorder(root) {
  if (root == undefined) {
    return;
  }
  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}

add(root, 20);
add(root, 25);
add(root, 9);
add(root, 13);
add(root, 3);

inorder(root);
console.log(search(root, 25));
