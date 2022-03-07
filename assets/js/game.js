var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

/* You can also log multiple values at once like this */
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    /* Alerts players that they are starting the round */
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    
    /* if player chooses to fight */
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

        /* check enemy health */
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        /* remove player's health */
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        /* check player health */
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }  
    /* if player chooses to skip */      
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        /* confirmation */
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        /* if yes (true), leave fight */
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight!");
            /* subtract money */
            playerMoney = playerMoney - 2;
            console.log("$2 monies was shaved off the top! " + playerName + " now has $" + playerMoney + " monies.");
        } else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

fight();