let spotlight = document.querySelector(".spotlight");
getData1();
let a = 0;
function spotlightCard(arr){
for(i = 0; i < 3; i++){
a = Math.round(Math.random()*6,1);
let aside = document.createElement("aside");
let h3 = document.createElement("h3");
h3.textContent = arr[a]["name"];
let div = document.createElement("div");
div.setAttribute("id","div");
let div1 = document.createElement("div");
let img = document.createElement("img");
img.setAttribute("src",arr[a]["image"]);
img.setAttribute("alt","images");
let div2 = document.createElement("div");
let p = document.createElement("p");
p.textContent = arr[a]["phone"];
let p1 = document.createElement("p");
p1.textContent = arr[a]["address"];
let a1 = document.createElement("a");
a1.setAttribute("href",arr[a].website);
a1.textContent = "View Site";
let p2 = document.createElement("p");
p2.textContent = `Membership Level: ${arr[a].membershipLevel}`;
div1.appendChild(img);
div2.appendChild(p);
div2.appendChild(p1);
div2.appendChild(a1);
div2.appendChild(p2);
aside.appendChild(h3);
div.appendChild(div1);
div.appendChild(div2);
aside.appendChild(div);
spotlight.appendChild(aside);
}
}

async function getData1(){
const response = await fetch("https://ugwu-chukwuebuka-martins.github.io/wdd231/chamber/data/member.json");
const data = await response.json();
spotlightCard(data);
}