
let count = 0;
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el');


function increment(){
    count += 1
    countEl.innerText = count;
    console.log(count)
}

function save(){
    let result = count + " - ";
    saveEl.textContent += result;
    countEl.textContent = 0;
    count = 0;
}
















/*let welcomeEl = document.getElementById('welcome-el')
let name = "HAPPI";
let greeting = "Hi, Mr."+name+" Welcome to this fabulos js course";

welcomeEl.innerText = greeting;
welcomeEl.innerText += "✌";*/



