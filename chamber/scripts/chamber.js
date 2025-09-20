let toggle = document.querySelector(".toggle");
let show = document.querySelector(".hide");
toggle.addEventListener('click',()=>{
show.classList.toggle("hide");
toggle.classList.toggle("show");
});

let cYear = document.getElementById("currentyear");
let date = new Date();
cYear.textContent = date.getFullYear();
let lModified = document.querySelector("#lastModified");
let lDate = new Date(2025,8,19);
lModified.innerText =  lDate;

let card = document.querySelector(".cards");

const data = getData();
createCard(data);

createCard = (list)=>{
list.forEach(i => {
let div = document.createElement("div");
let img = document.createElement("img");
img.setAttribute("src",i["image"]);
let p = document.createElement("p");
let span1 = document.createElement("span");
span1.textContent = i["address"];
let span2 = document.createElement("span");
span2.textContent = i["phone"];
let a = document.createElement("a");
a.textContent = i["email"];
p.appendChild(span1);
p.appendChild(span2);
p.appendChild(a);
div.appendChild(img);
div.appendChild(p);
card.appendChild(div);
});
}
async function getData() {
  const response = await fetch("../data/member.json"); // request
  const data = await response.json(); // parse the JSON data
  return data; // temp output test of data response 
}