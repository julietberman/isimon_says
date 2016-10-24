$(document).ready(function(){
  console.log("hello jQuery");
});

var gameData = {
simon:[],
player: []
}

var counter = null;

// Click event for begin game button triggers the random simon sequence to begin, the score board to populate, and timer function to initiate

$("button").on("click", function(){
  setTimeout(simonSequence, 1000);
  scoreBoard();
  counter = setInterval(timer, 1000);
});

// Letter buttons triggers player sequence to capture and store player values in an array and compare to simon sequence values
$(".simon").on("click", playerSequence);

// simon sequence randomly generates letter to flash and stores sequence value

function simonSequence (){
  var number = 	Math.floor( Math.random() * 5)
  gameData.simon.push($("img").eq(number).attr("id"))
  gameData.simon.forEach(function(color, i){
      setTimeout(function(){
        $("img#" + color).fadeOut(200).fadeIn(200);
      }, 800 * i)
    });
}

// player sequence function captures and stores player values in an array and compares to simon sequence values
function playerSequence(){
  $(this).fadeOut(200).fadeIn(200);
  gameData.player.push(($(this).attr("id")))

  if (gameData.player.length > gameData.simon.length) {
    gameData.player=[];
    }
  else if (gameData.simon.length === gameData.player.length) {
    checkMatch();
  }
};

// if simon data and player data have the same number of values, a level is added, simon sequence is triggered again, and player data is cleared for the next level
function checkMatch(){
  var x = true;
  gameData.simon.forEach(function(value, index){
    if(value !== gameData.player[index]){
    x=false;
    }
  })
if (x == false){
  setTimeout(changeBackground, 350)
  setTimeout(gameOver, 350);

}
else {
  setTimeout(addLevel, 500);
  setTimeout(simonSequence, 1500);
}
  gameData.player=[];
};

// triggered if there is no match between player and simon values
function changeBackground(){
  $("body").addClass("false").removeClass("true");
  console.log("wrong")
};

// generates score board upon begin game
function scoreBoard(){
  $("#mainText").html(`<div id='scoreBoard'>level: 1</div><div id='timer'>timer: 0 sec</div>`).css('border-top', '4px dotted white');
};

// timer feature
var seconds = 0;
function timer(){
    $("#timer").html(`timer: ${seconds} sec`);
    seconds++;

}

// level feature
var level = 1;
function addLevel(){
  level++;
  $("#scoreBoard").html(`level: ${level}`)
};

function gameOver(){
  var total = level * seconds
  clearInterval(counter);
  $("#mainText").html(`<p>final score:<br/><span class='total'>(level ${level} *  ${seconds} sec)</span>:</p><p id = "total">${total} points</p>`);
}
