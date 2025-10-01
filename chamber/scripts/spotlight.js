let spotlight = document.querySelector(".spotlight");
getData1();
let a = 0;
function spotlightCard(arr){
for(i = 0; i < 3; i++){
a = Math.round(Math.random()*6,1);
let aside = document.createElement("aside");
let h3 = document.createElement("h3");
h3.textContent = arr[a]["name"];
let img = document.createElement("img");
img.setAttribute("src",arr[a]["image"]);
img.setAttribute("alt","images");
let p = document.createElement("p");
p.textContent = arr[a]["phone"];
let p1 = document.createElement("p");
p1.textContent = arr[a]["address"];
let a1 = document.createElement("a");
a1.setAttribute("href",arr[a].website);
a1.textContent = "View Site";
let p2 = document.createElement("p");
p2.textContent = `Membership Level: ${arr[a].membershipLevel}`;
aside.appendChild(h3);
aside.appendChild(img);
aside.appendChild(p);
aside.appendChild(p1);
aside.appendChild(a1);
aside.appendChild(p2);
spotlight.appendChild(aside);
}
}

async function getData1(){
const response = await fetch("https://ugwu-chukwuebuka-martins.github.io/wdd231/chamber/data/member.json");
const data = await response.json();
spotlightCard(data);
}