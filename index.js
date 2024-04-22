let btn = document.querySelector("button");
let dice = document.querySelector("#mainDice");

let history = [];
let counter = 0;

btn.addEventListener("click", () => {
    dice.style = `animation:roll 0.3s;`;

    setTimeout(() => {
        dice.style = "animation:none;";

        let max = 7, min = 1;
        let rand = Math.floor(Math.random() * (max - min) + min);
        history.push(rand);
    
        switch(rand){
            case 1:dice.src = "dice1.png";
            break;
            case 2:dice.src = "dice2.png";
            break;
            case 3:dice.src = "dice3.png";
            break;
            case 4:dice.src = "dice4.png";
            break;
            case 5:dice.src = "dice5.png";
            break;
            case 6:dice.src = "dice6.png";
            break;
        };
    
        document.querySelector(".rollHistory").innerHTML += `
        <div class="rollItem">
            <h2>Roll <span id="count">${counter+1}</span>:</h2>
            <img src="dice${history[counter]}.png" alt="6" height="35px">
        </div>
        `
        counter++;
    }, 300)
})