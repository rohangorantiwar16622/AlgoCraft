const enqueue = document.querySelector(".enqueue");
const dequeue = document.querySelector(".dequeue");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const box = document.querySelectorAll(".box");
const stack = [];

//When the push button will be clicked
//When the push button will be clicked
enqueue.addEventListener("click", () => {
  //if the stack is full
  if (stack.length == 5) {
    input.value = "";
    return;
  }
  const itemValue = input.value; //for store the input value
  stack.push(itemValue); //push the value into the stack

  //creating a new element
  const element = document.createElement("div");

  element.classList.add("ele");
  element.innerText = stack[stack.length - 1];
  bucket.appendChild(element);

  //update the top
  box[0].innerHTML = stack[stack.length - 1];
  box[1].innerHTML = stack[0];

  //clear the input box
  input.value = "";
});

//When the pop button will be clicked
//When the pop button will be clicked
dequeue.addEventListener("click", () => {
  stack.shift();
  //adding the popping animation
  bucket.firstElementChild.classList.add("ele-remove");

  if (stack.length == 0) {
    box[0].innerHTML = "";
    box[1].innerHTML = "";
  } else {
    //updating the last popped item
    box[1].innerHTML = stack[0];
  }
  bucket.removeChild(bucket.firstElementChild);
});

// When the reset button will be clicked
reset.addEventListener("click", () => {
  //clear the full array
  while (stack.length > 0) {
    stack.shift();
  }

  //reset the top
  box[0].innerHTML = "";
  box[1].innerHTML = "";

  //clear all elements from the bucket
  while (bucket.firstChild) {
    bucket.removeChild(bucket.firstChild);
  }
});
