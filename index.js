const clicksCounter = document.querySelector("#counter span");
const upgrades = document.querySelectorAll("#upgrade");


const Game = {
    Moon: {
        moon: document.getElementById("moon"),
        clicks: 0,
        bonus: 0,
        increment: ()=>{
            Game.Moon.add(1+Game.Moon.bonus);
        },
        add: (amount)=>{
            Game.Moon.clicks += amount;
            updateScore();
        }
    }
}

function updateScore() {
    clicksCounter.textContent = Game.Moon.clicks;
}

Game.Moon.moon.addEventListener("click", ()=>{
    Game.Moon.increment();
});

upgrades.forEach((upgrade)=>{
    const price = upgrade.querySelector("span"); 
    upgrade.addEventListener("click", ()=>{
        if (Game.Moon.clicks >= price.textContent) {
            Game.Moon.bonus += Math.floor(price.textContent/10);
            Game.Moon.clicks -= price.textContent;
            price.textContent = Math.floor(price.textContent*1.1);
            updateScore();
        }
    });
});