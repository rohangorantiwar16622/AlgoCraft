const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const box = document.querySelectorAll(".box");
const stack = [];

//When the push button will be clicked
//When the push button will be clicked
push.addEventListener("click", () => {
  //if the stack is full
  if (stack.length == 5) {
    input.value = "";
    return;
  }
  //for store the input value
  const itemValue = input.value;
  stack.push(itemValue); //push the value into the stack

  //creating a new element
  const element = document.createElement("div");
  element.classList.add("ele");
  element.innerText = stack[stack.length - 1];
  bucket.appendChild(element);

  //update the top
  box[0].innerHTML = stack[stack.length - 1];

  //clear the input box
  input.value = "";
});

//When the pop button will be clicked
//When the pop button will be clicked
pop.addEventListener("click", () => {
  stack.pop();
  //adding the popping animation
  bucket.lastElementChild.classList.add("ele-remove");

  if (stack.length == 0) {
    box[0].innerHTML = "";
  } else {
    box[0].innerHTML = stack[stack.length - 1];
  }
  bucket.removeChild(bucket.lastElementChild);
});

// When the reset button will be clicked
reset.addEventListener("click", () => {
  //clear the full array
  while (stack.length > 0) {
    stack.pop();
  }

  //reset the top
  box[0].innerHTML = "";

  //clear all elements from the bucket
  while (bucket.firstChild) {
    bucket.removeChild(bucket.firstChild);
  }
});
