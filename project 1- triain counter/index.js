//document.getElementById("count-el").innerText=5;
// let count=5;
// count=count+1
// console.log(count);

let countEL = document.getElementById("count-el");
let sav=document.getElementById("save-element");


let count =0;

function increment()
{
    count =count+1;
    countEL.textContent=count;
}


function save()
{
    let s=count+' - ';
    sav.textContent+=s;
    countEL.textContent=0;
    count=0;
}






