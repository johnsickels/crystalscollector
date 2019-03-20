$(document).ready(function () {

    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    var usedValues = [];
    var crystalAry = [];
    var numCrystals = 4;

    function reset() {
        playerScore = 0;
        usedValues = [];
        initCrystal();

        $("#crystal1").html('<img src=' + '"./assets/images/crystal1.jpg"' + 'value =' + crystalAry[0] + ' alt="crystal" class="img-fluid">')
        $("#crystal2").html('<img src=' + '"./assets/images/crystal2.jpg"' + 'value =' + crystalAry[1] + ' alt="crystal" class="img-fluid">')
        $("#crystal3").html('<img src=' + '"./assets/images/crystal3.jpg"' + 'value =' + crystalAry[2] + ' alt="crystal" class="img-fluid">')
        $("#crystal4").html('<img src=' + '"./assets/images/crystal4.jpg"' + 'value =' + crystalAry[3] + ' alt="crystal" class="img-fluid">')

        $("#player-score").html(playerScore);

        givenScore = Math.floor(Math.random() * 102 + 19);
        $("#given-score").html(givenScore);
        console.log("The given score is: " + givenScore);

        console.log("used values: " + usedValues);
        console.log("crystal array: " + crystalAry);

    };

    function initCrystal() {
        for (var i = 0; i < numCrystals; i++) {
            crystalAry[i] = Math.floor(Math.random() * 12 + 1);
            while (usedValues.includes(crystalAry[i])) {
                crystalAry[i] = Math.floor(Math.random() * 12 + 1);
            };
            usedValues.push(crystalAry[i]);
        }
    };

    $("span").on("click", function () {
        playerScore += parseInt($(this).children().attr("value"));
        $("#player-score").html(playerScore);

        if (playerScore === givenScore) {
            wins++;
            $("#wins").html("Wins: " + wins);
            alert("Congrats! You win!");
            reset();
        } else if (playerScore > givenScore) {
            losses++;
            $("#losses").html("Losses: " + losses);
            alert("Boo! You lose!");
            reset();
        }
    });

    reset();

});