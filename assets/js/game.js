//This creates a function named fight

var playerName = window.prompt('Please enter your robot\'s name');
var playerHealth = 100;
var playerAttack = 10;
var playerMoney =  10;

//var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];



var fight = function(enemyName){
    
    console.log(enemyName);
    while(enemyHealth>0 && playerHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight == "FIGHT" || promptFight == "fight"){
            enemyHealth -= playerAttack;
            console.log(playerName + ' attacked ' + enemyName + ' . ' + enemyName + ' now has ' + enemyHealth + ' health remaining');
 
            if (enemyHealth <= 0){
                window.alert('Enemy has died');
                playerMoney += 10;
                break;
            }
            else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth -= enemyAttack;
            console.log(enemyName + ' attacked ' + playerName + ' . ' + playerName + ' now has ' + playerHealth + ' health remaining');

            if (playerHealth <= 0){
                window.alert(playerName + 'has died, Game Over!!');
                break;
            }

            else{
                window.alert(playerName + " still has " + playerHealth + " health left.")
            }  
       } else if(promptFight == "SKIP" || promptFight == "skip"){
              var promptAgain = window.confirm("Are you sure you want to quit?");
              if (promptAgain){
                   playerMoney -= 2;
                   window.alert(playerName + " has chosen to skip the fight!");
                   break;
               }
              else{

                    fight();
                }
       } else{
              window.alert("You need to pick a valid option. Try again!");
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
          if (playerMoney>7){
              window.alert("Refilling player's health by 20 for 7 dollars.");

              // increase health and decrease money
              playerHealth = playerHealth + 20;
              playerMoney = playerMoney - 7;
              break;
          }
        case "UPGRADE":
        case "upgrade":
            if (playerMoney>7){
              window.alert("Upgrading player's attack by 6 for 7 dollars.");

              // increase attack and decrease money
              playerAttack = playerAttack + 6;
              playerMoney = playerMoney - 7;
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

var startGame = function(){
   playerHealth = 100;
   playerAttack = 10;
   playerMoney = 10;

   for (var i=0;i<enemyNames.length;i++){
      console.log(enemyNames[i]);
    
      if (playerHealth > 0) {
           window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
           enemyHealth = 50;
           fight(enemyNames[i]);
           if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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


