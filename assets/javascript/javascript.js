$(document).ready(function () {
//Global Variables
    // #given-score
    // var givenScore = 0;
    // crystal1
    // var crystal1 = 0;
    // crystal2
    // var crystal2 = 0;
    // crystal3
    // var crystal3 = 0;
    // crystal4
    // var crystal4 = 0;
    // #player-score
var playerScore = 0;
    // wins: 0
var wins = 0;
    // loses: 0
var losses = 0;
var usedValues = [];

//reset
    // given-score
        // 19-120
    // crystals
        // 1-12
function reset () {
    playerScore = 0;
    $("#player-score").html("Your total score is: " + playerScore);
    givenScore = Math.floor(Math.random() * 102 + 19);
    document.querySelector("#given-score").innerHTML = givenScore;
    console.log (givenScore);



    crystal1 = Math.floor(Math.random() * 12 + 1);
    $("#crystal1").html('<img src=' + '"https://via.placeholder.com/100"' + 'value =' + crystal1 +'alt="crystal">')
    console.log ("crystal1 = " + crystal1);
    usedValues.push(crystal1);

    crystal2 = Math.floor(Math.random() * 12 + 1);
    if (usedValues.includes(crystal2)) {
        crystal2 = Math.floor(Math.random() * 12 + 1);
    };
    usedValues.push(crystal2);
    $("#crystal2").html('<img src=' + '"https://via.placeholder.com/100"' + 'value =' + crystal2 +'alt="crystal">')
    console.log ("crystal2 = " + crystal2);
    

    crystal3 = Math.floor(Math.random() * 12 + 1);
    if (usedValues.includes(crystal3)) {
        crystal3 = Math.floor(Math.random() * 12 + 1);
    };
    usedValues.push(crystal3);
    $("#crystal3").html('<img src=' + '"https://via.placeholder.com/100"' + 'value =' + crystal3 +'alt="crystal">')
    console.log ("crystal3 = " + crystal3);
    

    crystal4 = Math.floor(Math.random() * 12 + 1);
    if (usedValues.includes(crystal4)) {
        crystal4 = Math.floor(Math.random() * 12 + 1);
    };
    usedValues.push(crystal4);
    $("#crystal4").html('<img src=' + '"https://via.placeholder.com/100"' + 'value =' + crystal4 +'alt="crystal">')
    console.log ("crystal4 = " + crystal4);
    

    console.log ("used values: " + usedValues);

    $("img").on("click", function () {
        playerScore += parseInt($(this).attr("value"));
        $("#player-score").html("Your total score is: " + playerScore);
    
        if (playerScore === givenScore) {
            wins++;
            $("#wins").html("Wins: " + wins);
            alert("Congrats! You win!");
            reset ();
        } else if (playerScore > givenScore) {
            losses++;
            $("#losses").html("Losses: " + losses);
            alert("Boo! You lose!");
            reset ();
        }
    });
};

reset ();
    
//onClick crystals
    // add to player-score

// Send variables to html

});