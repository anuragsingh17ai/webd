let cards=[]; //array
let sum=0;
let hasBlackJack=false;
let isAlive=false;

let message=""

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("cards-el")
// let sumEl=document.querySelector("#sum-el");


//object in javascript;
let player={
    name:'Anurag',
    chips:145,
}



let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;

function getRandomCard()
{
    let num=Math.floor(Math.random()*13)+1;
    if(num===1)
        return 11;
    else if(num>10 )
        return 10;
    else 
        return num;
}

function startGame()
{
    if(sum===0)
    {
    let firstCard =getRandomCard();
    let secondCard=getRandomCard();
    cards.push(firstCard)
    cards.push(secondCard);
    sum=cards[0]+cards[1];
    isAlive=true;
    renderGame();
    }
}

function renderGame(){
    if(sum<21)
    {
        message="Do you want a draw a new card ?"
    }
    else if(sum===21)
    {
        message="You've blackjack!"
        hasBlackJack=true
    }
    else 
    {
        message="you are out of game! "
        isAlive=false;

    }
    messageEl.textContent=message;
    sumEl.textContent="Sum: "+sum;
    cardEl.innerText='Cards: ';
    for(let i=0;i<cards.length;i++)
        cardEl.textContent+=cards[i]+" ";

}

function newCard()
{
    if(isAlive && hasBlackJack==false)
    {
        let card=getRandomCard();
        cards.push(card);
        sum+=cards[2];
        renderGame();
    }

}
function rload(){
    location.reload();
}


