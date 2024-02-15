class Graph {
  constructor() {
    this.adjList = new Map();
    this.nodes = [];
  }
  notPresentIn(node) {
    for (const iterator of this.nodes) {
      if (iterator === node) {
        return false;
      }
    }
    return true;
  }

  addNode(ele) {
    this.nodes.push(ele);
  }

  printAll() {
    console.log("Nodes : ");
    for (const iterator of this.nodes) {
      console.log(iterator);
    }
    console.log("Adjacency List : ");
    for (const iterator of this.adjList) {
      console.log(iterator);
    }
  }
}

function addNode(g, nodeA, nodeB) {
  g.adjList.set(nodeA, nodeB);
  if (g.notPresentIn(nodeA)) {
    g.addNode(nodeA);
  }
  if (g.notPresentIn(nodeB)) {
    g.addNode(nodeB);
  }
}

let g = new Graph();
addNode(g, 0, 1);
addNode(g, 1, 2);
addNode(g, 2, 0);

g.printAll()
