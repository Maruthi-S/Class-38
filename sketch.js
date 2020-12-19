var gameState = 0, database;
var playerCount , form;
var game , player;
var allPlayers,distance = 0;
var car1,car2,car3,car4,cars;


function setup(){
  createCanvas(displayWidth - 20, displayHeight - 30);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
 
  if(playerCount === 4 ){
    game.update(1);
  }
  if(gameState === 1){
    // clear();
    game.play();
  }
}
