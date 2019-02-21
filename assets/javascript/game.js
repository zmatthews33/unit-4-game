$(document).ready(function() {
  var enemyHealth;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var isGameOver = false;

  var byow = $("#byow");
  var dusty = $("#dusty");
  var heavy = $("#heavy");
  var lucky = $("#lucky");

  var heroes = [byow, dusty, heavy, lucky];

  function getRandomEnemyHealth() {
    var randomEnemyHealth = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    return randomEnemyHealth;
  }

  console.log(getRandomEnemyHealth());

  function getHeroHP() {
    var randomHeroHP = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    return randomHeroHP;
  }

  console.log(getHeroHP());

  // goal to match total score to the random target number
  // when match happens, log win and a "you won"
  // if total score goes over the target number, log a loss and "you lost"
  // reset game to new random target number (19-120) and total score back to zero, and each crystal gets new random number (1-12) attached to it.
  function gameStatus() {
    if (enemyHealth === totalScore) {
      isGameOver = true;
      $("#gameoverbox").text("You defeated the Supreme Leader!!!");
      wins++;
      totalScore = 0;
      reset();
    } else if (totalScore > enemyHealth) {
      isGameOver = true;

      $("#gameoverbox").text("You were defeated!!! GAME OVER!!!");
      losses++;
      totalScore = 0;
      reset();
    }
  }

  function reset() {
    isGameOver = false;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score").text(totalScore);

    enemyHealth = getRandomEnemyHealth();

    for (var i = 0; i < heroes.length; i++) {
      heroes[i].attr("data-random", getHeroHP());
    }

    $("#enemy-health").text(enemyHealth);
  }

  $(".characters").on("click", function() {
    $("#gameoverbox").empty();

    var number = $(this).attr("data-random");
    totalScore += parseInt(number);
    console.log(totalScore);
    $("#score").text(totalScore);
    gameStatus();
  });

  reset();
});
