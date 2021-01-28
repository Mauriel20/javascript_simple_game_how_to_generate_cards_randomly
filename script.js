let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function displayCard() {
    
    let numerosize = document.querySelector('#icono-1');
    let numerosize2 = document.querySelector('#icono-2');
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let showCard = `${singleNumber}`;
    let icon1 = `${singleCard}`;
    
    numerosize.style.fontSize = "90px";
    numerosize2.style.fontSize = "90px";
    document.getElementById("numero").innerHTML = showCard;
    document.getElementById("icono-1").innerHTML = icon1;
    document.getElementById("icono-2").innerHTML = icon1;

}

