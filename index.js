const images = [
    "images/one.png",
    "images/two.png",
    "images/three.png",
    "images/four.png",
    "images/five.png",
    "images/six.png"
];
let attempts = 0;

function Roll() {
    let rolls = 10;
    let rollInterval = setInterval(() => {
        let diceValue1 = Math.floor(Math.random() * 6) + 1;
        let diceValue2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById("dice1").src = images[diceValue1 - 1];
        document.getElementById("dice2").src = images[diceValue2 - 1];

        rolls--;
        
        if (rolls === 0) {
            clearInterval(rollInterval);
            const product = diceValue1 * diceValue2;
            document.getElementById("Product").innerHTML = `Product: ${product}`;
            attempts++;
        document.getElementById("attempts").innerHTML= `<h3>Attempts: ${attempts}</h3>`;
        }
    }, 100);
}

function Retry(){
    const product = document.getElementById("Product");
    product.innerHTML = ``;
    
    document.getElementById("dice1").src = "images/six.png";
    document.getElementById("dice2").src = "images/six.png";
    attempts = 0;
    document.getElementById("attempts").innerHTML= `<h3>Attempts: ${attempts}</h3>`;
}

function End(){
    document.getElementById("attempts").innerHTML= `<h3>Game Over! Your attempts were: ${attempts}</h3>`;
    const product = document.getElementById("Product");
    product.innerHTML = ``;
}