var count = 0;

var span = document.getElementById("value");
span.innerText = count;

document.getElementById("add").addEventListener("click", () => {

    count+=1; //updating the count 
    span.innerText = count; //updating the dom
})

document.getElementById("minus").addEventListener("click", () => {
  if(count-1>=0) {
    count-=1; //updating the count 
    span.innerText = count; //updating the dom
  } else {
    e.target.disabled = true;
  }
})

document.getElementById("reset").addEventListener("click", () => {

    count = 0; //updating the count 
    span.innerText = count; //updating the dom
})