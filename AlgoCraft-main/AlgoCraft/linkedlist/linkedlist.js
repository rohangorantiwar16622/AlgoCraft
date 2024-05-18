const box = document.querySelectorAll(".box");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.displayList();
  }

  deleteNode() {
    if (this.head == null) {
      alert("List is empty!");
    } else {
      this.head = this.head.next;
    }
    this.displayList();
  }

  displayList() {
    let current = this.head;
    let list = document.getElementById("list");
    list.innerHTML = "";
    box[0].innerHTML = current.value;
    while (current != null) {
      let node = document.createElement("div");
      node.className = "node";
      node.innerHTML = current.value;
      list.appendChild(node);
      current = current.next;
    }
  }

  /*insertAt(index, nodeInput){
      let node = this.head;
      if(index==0) {
          newNode.next = node;
          this.head = newNode;
          return;
      }
      while(--index){
          if(node.next!==null)
              node = node.next;
          else
              throw Error("Index Out of Bound");
      }
      let tempVal = node.next;
      node.next = newNode;
      newNode.next = tempVal;
  }*/
}

let linkedList = new LinkedList();

function addNode() {
  let value = document.getElementById("nodeInput").value;
  if (value == "") {
    alert("Please enter a value!");
  } else {
    linkedList.addNode(value);
    document.getElementById("nodeInput").value = "";
  }
}

function deleteNode() {
  linkedList.deleteNode();
}

/*function insertAt(){
    let value = document.getElementById("indexInput").value;
    linkedList.insertAt();
  }*/
