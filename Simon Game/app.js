let gamePattern = [],
    userClickedPattern = [];
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let level = 0,
    lastPressed = 0;

$(document).on('keypress',function(e) {
    if(gamePattern.length == 0){
        nextSequence();
        $("h1").text("level "+level);
    }
});

function playSound(name){
    let audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass("pressed");
    setTimeout(function(){
        $('#'+currentColor).removeClass("pressed");
    }, 100)
}

function nextSequence(){
    ++level;
    $("h1").text("level "+level);

    let random = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColors[random];
    gamePattern.push(randomChosenColour);

    let selectedButton = '#'.concat(randomChosenColour);
    $(selectedButton).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$('.btn').click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(lastPressed);
    ++lastPressed;
});

function checkAnswer(currentLevel){
    if(gamePattern[lastPressed] != userClickedPattern[lastPressed]){
        if(gamePattern.length > 0){
            $("h1").text("Game Over, Press Any Key to Restart");
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);
            startOver();
        }
    }else{
        if(lastPressed+1 == gamePattern.length){
            setTimeout(function(){
                lastPressed = 0;
                userClickedPattern = [];
                nextSequence();
            }, 1000);
        }
    }
}

function startOver(){
    level = 0;
    lastPressed = 0;
    gamePattern = [];
    userClickedPattern = [];
}