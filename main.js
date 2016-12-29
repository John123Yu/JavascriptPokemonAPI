var game = {
  players: [],
  addPlayer: function(name){
  	a = playerConstructor(name)
  	game.players.push(a)
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = "null";
  player.hand = [];
  player.addCard = function(){
  	var apple;
  	var randomNum = Math.floor(Math.random() * 150 ) + 1
  	$.ajax({
    async: false,
    url: "http://pokeapi.co/api/v1/pokemon/" + randomNum + "/",
    success: function(result) {
        apple = result
    }
	});
    player.hand.push(apple);
  };
  return player;
};


game.addPlayer('red')
game.players[0].addCard()
console.log(game.players[0].hand[0]);
game.addPlayer('blue')
game.players[0].addCard()
console.log(game.players[1].hand[0]);
// console.log(game.players[0].name)
$(document).ready(function() {
	$("#Pokemon").html(game.players[0].hand[0].name);
	$("#Pokemon2").html(game.players[1].hand[0].name);
	var red = game.players[0].hand[0].hp
	var blue = game.players[1].hand[0].hp
	if (red > blue) {
		$("#result").html("red wins!");
	}
	else if (blue>red) {
		$("#result").html("blue wins!");
	}
	else {
		$("#result").html("Draw!!");
	}
	
});





