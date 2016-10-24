$(document).ready(function(){
  console.log("hello jQuery");
});

var gameData = {
simon:[],
player: []
}



$("button").on("click", function(){
  setTimeout(simonSequence, 1000);
  scoreBoard();
  timer();
});

$(".simon").on("click", playerSequence);

function simonSequence (){
  var number = 	Math.floor( Math.random() * 5)
  gameData.simon.push($("img").eq(number).attr("id"))
  gameData.simon.forEach(function(color, i){
      setTimeout(function(){
        $("img#" + color).fadeOut(200).fadeIn(200);
      }, 800 * i)
    });
    console.log(gameData.simon)
}


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


function checkMatch(){
  var x = true;
  gameData.simon.forEach(function(value, index){
    if(value !== gameData.player[index]){
    x=false;
    }
  })
if (x == false){
  setTimeout(changeBackground, 350)
  // gameOver();

}
else {
  setTimeout(addLevel, 500);
  setTimeout(simonSequence, 1500);
}
  gameData.player=[];
};

function changeBackground(){
  $("body").addClass("false").removeClass("true");
  console.log("wrong")
};

function scoreBoard(){
  $("#mainText").html(`<div id='scoreBoard'>level: 1</div><div id='timer'>timer: 0</div>`).css('border-top', '4px dotted white');
};

var seconds = 0;
function timer(){
    $("#timer").html(`timer: ${seconds} sec`);
    seconds++;
    console.log(seconds);
    setTimeout(timer, 1000);
}

var x = 1;
function addLevel(){
  x++;
  $("#scoreBoard").html(`level: ${x}`)
};

// function gameOver(){
//   simon=[];
//   player=[];
// }
