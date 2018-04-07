$(document).ready(function() {

    // Generates a random number between 19 and 120 for the target number
    var targetNumber = (Math.floor(Math.random() * 102) + 19);
    $("#random-number").html(targetNumber);
    console.log("Your random number is " + targetNumber);

    //Generates a number between 1 and 12 for each crystal
    var crystalNumber1 = (Math.floor(Math.random() * 11) + 1);
    $("#crystal1").html(crystalNumber1);
    console.log("Your random number for Crystal 1 is " + crystalNumber1);

    var crystalNumber2 = (Math.floor(Math.random() * 11) + 1);
    $("#crystal1").html(crystalNumber2);
    console.log("Your random number for Crystal 2 is " + crystalNumber2);

    var crystalNumber3 = (Math.floor(Math.random() * 11) + 1);
    $("#crystal1").html(crystalNumber3);
    console.log("Your random number for Crystal 3 is " + crystalNumber3);

    var crystalNumber4 = (Math.floor(Math.random() * 11) + 1);
    $("#crystal1").html(crystalNumber4);
    console.log("Your random number for Crystal 4 is " + crystalNumber4);


    function reset () {
        // Generates a random number between 19 and 120 for the target number
        var targetNumber = (Math.floor(Math.random() * 102) + 19);
        $("#random-number").html(targetNumber);
        console.log("Your random number is " + targetNumber);

        //Generates a number between 1 and 12 for each crystal
        var crystalNumber1 = (Math.floor(Math.random() * 11) + 1);
        $("#crystal1").html(crystalNumber1);
        console.log("Your random number for Crystal 1 is " + crystalNumber1);

        var crystalNumber2 = (Math.floor(Math.random() * 11) + 1);
        $("#crystal1").html(crystalNumber2);
        console.log("Your random number for Crystal 2 is " + crystalNumber2);

        var crystalNumber3 = (Math.floor(Math.random() * 11) + 1);
        $("#crystal1").html(crystalNumber3);
        console.log("Your random number for Crystal 3 is " + crystalNumber3);

        var crystalNumber4 = (Math.floor(Math.random() * 11) + 1);
        $("#crystal1").html(crystalNumber4);
        console.log("Your random number for Crystal 4 is " + crystalNumber4);

        totalScore = 0;
        $("#total-score").html(totalScore);
        console.log("Your total score is " + totalScore);

    }

    // Define variable total score
    var totalScore = 0;


    // Initialize wins and losses
    var wins = 0;
    var losses = 0;
    
    $("#crystal1").on("click", function() {
        totalScore = totalScore + crystalNumber1;

        console.log("The new total score is " + totalScore);
        

        if (totalScore === targetNumber) {
            wins ++;
            alert("You win, congrats!");
            $("#wins").html("Wins: " + wins);
            reset();
        }
            else if (totalScore > targetNumber) {
                losses ++;
                alert("You lose!");
                $("#losses").html("Losses: " + losses);
                reset();
            }
               // Display total score
                $("#total-score").html(totalScore);
                console.log("Your total score is " + totalScore);
        }
        
    )

    $("#crystal2").on("click", function() {
        totalScore = totalScore + crystalNumber2;

        console.log("The new total score is " + totalScore);
        

        if (totalScore === targetNumber) {
            wins ++;
            alert("You win, congrats!");
            $("#wins").html("Wins: " + wins);
            reset();
        }
            else if (totalScore > targetNumber) {
                losses ++;
                alert("You lose!");
                $("#losses").html("Losses: " + losses);
                reset();
            }
             // Display total score
             $("#total-score").html(totalScore);
             console.log("Your total score is " + totalScore);
        }
        
    )

    $("#crystal3").on("click", function() {
        totalScore = totalScore + crystalNumber3;

        console.log("The new total score is " + totalScore);
        

        if (totalScore === targetNumber) {
            wins ++;
            alert("You win, congrats!");
            $("#wins").html("Wins: " + wins);
            reset();
        }
            else if (totalScore > targetNumber) {
                losses ++;
                alert("You lose!");
                $("#losses").html("Losses: " + losses);
                reset();
            }
             // Display total score
             $("#total-score").html(totalScore);
             console.log("Your total score is " + totalScore);
        }
        
    )

    $("#crystal4").on("click", function() {
        totalScore = totalScore + crystalNumber4;

        console.log("The new total score is " + totalScore);
        

        if (totalScore === targetNumber) {
            wins ++;
            alert("You win, congrats!");
            $("#wins").html("Wins: " + wins);
            reset();
        }
            else if (totalScore > targetNumber) {
                losses ++;
                alert("You lose!");
                $("#losses").html("Losses: " + losses);
                reset();
            }
             // Display total score
             $("#total-score").html(totalScore);
             console.log("Your total score is " + totalScore);
        }
        
        
    )

    

    




 







});