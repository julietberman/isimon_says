$(document).ready(function(){
  console.log("hello jQuery");
});

var gameData = {
simon:[],
player: []
}

$("button").on("click", simonSequence);

$(".simon").on("click", playerSequence);

function simonSequence (){
  var number = 	Math.floor( Math.random() * 5)
  gameData.simon.push($("img").eq(number).attr("id"))
  gameData.simon.forEach(function(color, i){
      setTimeout(function(){
        $("img#" + color).fadeOut(300).fadeIn(300);
      }, 1000 * i)
    });
    console.log(gameData.simon)
}


function playerSequence(){
  $(this).fadeOut(300).fadeIn(300);
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
  $("body").removeClass("true", 1000).addClass("false", 1000);
  console.log("wrong")

}
else {
  setTimeout(simonSequence, 2000);
}
  gameData.player=[];
};

// function gameOver(){
//   simon=[];
//   player=[];
// }

// for (var i = 0; i < gameData.simon.length; i++) {
//   setTimeout(function(){
//         $("div#" + gameData.simon[number]).fadeIn(500).fadeOut(500).fadeIn(500);
//       }, 1000 * i)
//     }
