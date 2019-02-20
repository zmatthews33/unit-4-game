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
  var randomTarget = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  
    return ;
}

console.log(getRandomEnemyHealth());
  
function getHeroHP() {
    var randomHeroHP = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  
    return randomHeroHP;
}

console.log(getCrystalNumber());
  
