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
  this.markedArray = [];
  this.computerOpponent = 1;
}

Game.prototype.changePlayer = function() {
  if (this.currentPlayer === this.player1){
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
  if(this.currentPlayer === this.player2 && this.computerOpponent === 1){
    this.computerTurn();
  }

}

Game.prototype.computerTurn = function(){
  var randomNum = getRandomInt(this.markedArray);
  $("#space" + randomNum).append(this.currentPlayer.mark);
  this.board.findById("space" + randomNum).markedBy = this.currentPlayer.mark;
  this.changePlayer();
  this.markedArray.push(randomNum);
  console.log(this.markedArray);
}

Game.prototype.gameOver = function() {
  if(this.board.spaceArray[0].markedBy === "X" && this.board.spaceArray[1].markedBy === "X" && this.board.spaceArray[2].markedBy === "X" || this.board.spaceArray[3].markedBy === "X" && this.board.spaceArray[4].markedBy === "X" && this.board.spaceArray[5].markedBy === "X" || this.board.spaceArray[6].markedBy === "X" && this.board.spaceArray[7].markedBy === "X" && this.board.spaceArray[8].markedBy === "X" || this.board.spaceArray[0].markedBy === "X" && this.board.spaceArray[3].markedBy === "X" && this.board.spaceArray[6].markedBy === "X" || this.board.spaceArray[1].markedBy === "X" && this.board.spaceArray[4].markedBy === "X" && this.board.spaceArray[7].markedBy === "X" || this.board.spaceArray[2].markedBy === "X" && this.board.spaceArray[5].markedBy === "X" && this.board.spaceArray[8].markedBy === "X" || this.board.spaceArray[0].markedBy === "X" && this.board.spaceArray[4].markedBy === "X" && this.board.spaceArray[8].markedBy === "X" || this.board.spaceArray[2].markedBy === "X" && this.board.spaceArray[4].markedBy === "X" && this.board.spaceArray[6].markedBy === "X"){
    return 1;
  } else if(this.board.spaceArray[0].markedBy === "O" && this.board.spaceArray[1].markedBy === "O" && this.board.spaceArray[2].markedBy === "O" || this.board.spaceArray[3].markedBy === "O" && this.board.spaceArray[4].markedBy === "O" && this.board.spaceArray[5].markedBy === "O" || this.board.spaceArray[6].markedBy === "O" && this.board.spaceArray[7].markedBy === "O" && this.board.spaceArray[8].markedBy === "O" || this.board.spaceArray[0].markedBy === "O" && this.board.spaceArray[3].markedBy === "O" && this.board.spaceArray[6].markedBy === "O" || this.board.spaceArray[1].markedBy === "O" && this.board.spaceArray[4].markedBy === "O" && this.board.spaceArray[7].markedBy === "O" || this.board.spaceArray[2].markedBy === "O" && this.board.spaceArray[5].markedBy === "O" && this.board.spaceArray[8].markedBy === "O" || this.board.spaceArray[0].markedBy === "O" && this.board.spaceArray[4].markedBy === "O" && this.board.spaceArray[8].markedBy === "O" || this.board.spaceArray[2].markedBy === "O" && this.board.spaceArray[4].markedBy === "O" && this.board.spaceArray[6].markedBy === "O"){
    return 2;
  } else {
    var emptySpace = false;
    for (var i = 0; i < 9; i++){
      if(!this.board.spaceArray[i].markedBy) {
        emptySpace = true;
      }
    }
    if(emptySpace===false){
      return 3;
    }
  }
}

function getRandomInt(array) {
  if (array.length < 9){
    do {
      var randomNum = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    } while (array.includes(randomNum))
    console.log(randomNum);
    return randomNum;
  }
}

$(document).ready(function() {
  var game = new Game();
  console.log(game);
  $(".spot").click(function(){
    game.computerOpponent = parseInt($("input:radio[name=computer]:checked").val());
    var clickedID = $(this).attr('id')
    var idNum = parseInt(clickedID.charAt(5));
    if(!(game.board.findById(clickedID).markedBy)){
      $(this).append(game.currentPlayer.mark);
      game.board.findById(clickedID).markedBy = game.currentPlayer.mark;
      game.markedArray.push(idNum);
      if (game.markedArray.length < 9){
        game.changePlayer();
      }
      console.log(game.markedArray);
    } else {
      alert("You can't click here");
    }
    var winner = game.gameOver();
    if(winner === 1){
      alert("Player 1 wins!");
      $("#reset").show();
    } else if(winner === 2){
      alert("Player 2 wins!");
      $("#reset").show();
    } else if(winner === 3){
      alert("Draw");
      $("#reset").show();
    }
    $("#reset").click(function(){
      game = new Game();
      $(".spot").text("");
      $("#reset").hide();
    });
  });
});
