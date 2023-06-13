

var btncolor=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];
// $(this).attr(randomChosenColor);
// buttonAnimation(randomChosenColor);
var started= false;
var level =0;

$(document).keydown(function(){
    if(!started){
        $("h1").text("Level " + level);
        nextSequence();
        started = true;

    }
});

$(".btn ").click(function(){
    
    var color = $(this).attr("id");
    userClickedPattern.push(color);
    playSound(color);
    animatePress(color);

    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        

    
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
}

else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over,Press Any Key to Restart");

    setTimeout(function () {
        $("body").removeClass("game-over");

    }, 200);
    statOver();
}
 }
 function nextSequence(){

    userClickedPattern=[];

    level++;
    $("h1").text("Level " + level);
    var random=Math.floor(Math.random()*4);
    var randomChosenColor=btncolor[random];
    gamePattern.push(randomChosenColor);
  


$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
// var audio= new Audio("sounds/" + randomChosenColour+".mp3");
// audio.play();
}
    
  
   




function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");

    setTimeout(function () {
        $("#"+ currentColor).removeClass("pressed");
    },100);

}

// function buttonAnimation(randomChosenColor){
//     $.animate(1,100);
// }

function playSound(color){
    // switch(color){
    //     case 'green': var audio=new Audio("sounds/green.mp3");
    //     audio.play();
    //     break;
    //     case 'red':var audio=new Audio("sounds/red.mp3");
    //     audio.play();
    //     break;
    //     case 'yellow':var audio=new Audio("sounds/yellow.mp3");
    //     audio.play();
    //     break;
    //     case 'blue':var audio=new Audio("sounds/blue.mp3");
    //     audio.play();
    //     break;
    //     default :var audio= new Audio("sounds/wrong.mp3")
    //     audio.play();
    //     break;
    var audio = new Audio("sounds/"+ color +".mp3");
     audio.play();
    }

function startOver(){
    level =0;
    gamePattern=[];
    started=false;
}