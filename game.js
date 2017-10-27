var health = 100;
var hits = 0

function gameBrains() {

}

function slap() {
    health -= 1;
    hits += 1
        //alert(health)
    update()
}

function nunchuckSkills() {
    health -= 5;
    hits += 1;
    //alert(health)
    update()

}

function bowstaffSkills() {
    health -= 10;
    hits += 1;
    //alert(health)
    update()
}

//function computerChoice() {
//  var choices = [1, 5, 10]
//   var num = Math.floor(Math.random() * choices.length);
//  return choices[num] {


function update() {
    document.getElementById("health").innerText = health
    document.getElementById("hits").innerText = hits
    document.getElementById("hits").innerText = hits
    document.getElementById("health").innerText = health
}
update()