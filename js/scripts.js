function Player(mark){
  this.mark = mark;
}

function Space(x, y, id){
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.htmlID = id;
  this.markedBy;
}

function Board(){
  this.spaceArray = [];
  this.spaceArray.push(new Space(1, 3, "space1"));
  this.spaceArray.push(new Space(2, 3, "space2"));
  this.spaceArray.push(new Space(3, 3, "space3"));
  this.spaceArray.push(new Space(1, 2, "space4"));
  this.spaceArray.push(new Space(2, 2, "space5"));
  this.spaceArray.push(new Space(3, 2, "space6"));
  this.spaceArray.push(new Space(1, 1, "space7"));
  this.spaceArray.push(new Space(2, 1, "space8"));
  this.spaceArray.push(new Space(3, 1, "space9"));
  console.log(this);
}

Board.prototype.findById = function(id){
  for(var i = 0; i < 9; i++){
    if (this.spaceArray[i].htmlID === id){
      return this.spaceArray[i];
    }
  }
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
  $(".spot").click(function(){
    var clickedID = $(this).attr('id')
    console.log(clickedID);
    game.board.findById(clickedID);
    console.log(game.board.findById(clickedID).markedBy);
    if(!(game.board.findById(clickedID).markedBy)){
      $(this).append(game.currentPlayer.mark);
      game.board.findById(clickedID).markedBy = game.currentPlayer.mark;
      game.changePlayer();
    } else {
      alert("You can't click here");
    }
  });



});
