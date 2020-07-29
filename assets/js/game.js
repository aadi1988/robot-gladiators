//This creates a function named fight

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max-min+1) + min);
  
    return value;
};

//var pickedEnemyObj.name = "Roberto";




var fight = function(pickedEnemyObj){
    
    
    while(pickedEnemyObj.health>0 && playerInfo.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight == "FIGHT" || promptFight == "fight"){
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            pickedEnemyObj.health = Math.max(0, pickedEnemyObj.health - damage);
            
            console.log(playerInfo.name + ' attacked ' + pickedEnemyObj.name + ' . ' + pickedEnemyObj.name + ' now has ' + pickedEnemyObj.health + ' health remaining');
 
            if (pickedEnemyObj.health <= 0){
                window.alert('Enemy has died');
                playerInfo.money += 10;
                break;
            }
            else{
                window.alert(pickedEnemyObj.name + " still has " + pickedEnemyObj.health + " health left.");
            }

            var damage = randomNumber(pickedEnemyObj.attack - 3, pickedEnemyObj.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(pickedEnemyObj.name + ' attacked ' + playerInfo.name + ' . ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining');

            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + 'has died, Game Over!!');
                break;
            }

            else{
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
            }  
       } else if(promptFight == "SKIP" || promptFight == "skip"){
              var promptAgain = window.confirm("Are you sure you want to quit?");
              if (promptAgain){
                   playerInfo.money = Math.max(0, playerInfo.money - 2);
                   window.alert(playerInfo.name + " has chosen to skip the fight!");
                   break;
               }
              else{

                    fight(pickedEnemyObj);
                }
       } else{
              window.alert("You need to pick a valid option. Try again!");
       } 
    }
};


var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,

    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },

    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
    },
    
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } 
          else {
            window.alert("You don't have enough money!");
        }
    }
};


var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
          if (playerInfo.money>7){
              

              // increase health and decrease money
              playerInfo.refillHealth();
              break;
          }
        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money>7){
              

              playerInfo.upgradeAttack();
              break;
            }
        case "LEAVE":
        case "leave":
              window.alert("Leaving the store.");

              // do nothing, so function will end
              break;
        default:
              window.alert("You did not pick a valid option. Try again.");

              // call shop() again to force player to pick a valid option
              shop();
              break;
     }
}


var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
  ];

var startGame = function(){
    playerInfo.reset();

   for (var i=0;i<enemyInfo.length;i++){
      
      var pickedEnemyObj =  enemyInfo[i];
      if (playerInfo.health > 0) {
           window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
           pickedEnemyObj.health = randomNumber(40,60);
           fight(pickedEnemyObj);
           if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
               var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

               // if yes, take them to the store() function
               if (storeConfirm) {
                   shop();
            }
          }
      }

      else {
           window.alert("You have lost your robot in battle! Game Over!");
           break;
      }
    
   }

   endGame();
}

var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }

      var playAgainConfirm = window.confirm("Would you like to play again?");

      if (playAgainConfirm) {       
            // restart the game
            startGame();
       }  
       else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
       }
};

startGame();
