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
