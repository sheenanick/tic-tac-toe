function Player(mark){
  this.mark = mark;
}

function Space(x, y){
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.markedBy;
}

Space.prototype.markSpace = function(player){
  if(!this.markedBy){
    this.markedBy = player;
  } else {
    alert("You can't click here");
  }
}

function Board(){
  this.space1 = new Space(1, 3);
  this.space2 = new Space(2, 3);
  this.space3 = new Space(3, 3);
  this.space4 = new Space(1, 2);
  this.space5 = new Space(2, 2);
  this.space6 = new Space(3, 2);
  this.space7 = new Space(1, 1);
  this.space8 = new Space(2, 1);
  this.space9 = new Space(3, 1);
}

function Game(){
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.board = new Board();
  this.currentPlayer = this.player1;
}

Game.prototype.changePlayer = function() {
  if (this.currentPlayer === this.player1){
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}

$(document).ready(function() {
  var game = new Game();
  console.log(game);
  game.board.space3.markSpace(game.player1);
  console.log(game.board.space3.markedBy.mark);

});
