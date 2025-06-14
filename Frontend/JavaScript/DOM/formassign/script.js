const submit = document.getElementById("submit");
// console.log(submit);
const mydiv = document.getElementById("item");
const form = document.getElementById("form");
// console.log(mydiv);
const input1 = document.getElementById("fname");
const input2 = document.getElementById("lname");
const input3 = document.getElementById("clg");
const input4 = document.getElementById("add");

const labl = document.getElementsByTagName("label")

const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2")
const l3 = document.getElementById("l3")
const l4 = document.getElementById("l4")



submit.addEventListener("click", (e) => {
  e.preventDefault();
  const i1 = document.createElement("p");
  i1.textContent = input1.value;
  mydiv.append(l1);
  mydiv.append(i1);

  const i2 = document.createElement("p");
  i2.textContent = input2.value;
  mydiv.append(l2);
  mydiv.append(i2);
  

  const i3 = document.createElement("p");
  i3.textContent = input3.value;
  mydiv.append(l3);
  mydiv.append(i3);

  const i4 = document.createElement("p");
  i4.textContent = input4.value;
  mydiv.append(l4);
  mydiv.append(i4);

  const def = document.createElement("button");
  def.textContent = "Default"
  mydiv.appendChild(def);

  form.style.display = "none";

  def.addEventListener("click",()=>{
    
  })

});
