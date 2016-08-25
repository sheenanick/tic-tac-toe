function Player(mark){
  this.mark = mark;
}

function Space(x, y, id){
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.htmlID = id;
  this.markedBy;
}
// Space.prototype.markSpace = function(player){
//   if(!this.markedBy){
//     this.markedBy = player;
//   } else {
//     alert("You can't click here");
//   }
// }
function Board(){
  this.space1 = new Space(1, 3, "#space1");
  this.space2 = new Space(2, 3, "#space2");
  this.space3 = new Space(3, 3, "#space3");
  this.space4 = new Space(1, 2, "#space4");
  this.space5 = new Space(2, 2, "#space5");
  this.space6 = new Space(3, 2, "#space6");
  this.space7 = new Space(1, 1, "#space7");
  this.space8 = new Space(2, 1, "#space8");
  this.space9 = new Space(3, 1, "#space9");
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
  // game.board.space3.markSpace(game.player1);
  // console.log(game.board.space3.markedBy.mark);
  $(".spot").click(function(){
    if(!this.markedBy){
      $(this).append(game.currentPlayer.mark)
    } else {
      alert("You can't click here");
    }
  });



});
