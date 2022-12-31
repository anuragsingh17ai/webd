let num1=5;
let num2=10;

document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;

let su= document.getElementById("sum-el");


function add(){
    a=num1+num2; 
    su.textContent="sum : "+a;
}

function sub(){
    a=num1-num2;
    su.textContent="sum : "+a;
}

function mul(){
    a=num1*num2;
    su.textContent="sum : "+a;
}

function div(){
    a=num1/num2;
    su.textContent="sum : "+a;
}

