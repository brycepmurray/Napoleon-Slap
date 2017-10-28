function gameBrains(slap, nunchuckSkills, bowstaffSkills) {

}

var player = function(health, items, attacks, hits) {
    this.health = health;
    this.items = items;
    this.attacks = attacks;
    this.hits = hits
}
var Napoleon = new player(100, ['grapefruit', 'tots', 'tina'], [slap, nunchuckSkills, bowstaffSkills], 0);

var Rex = new player(100, ['Starla', 'These Bad Boys', 'Break the Wrist, and Walk Away'], [slap, nunchuckSkills, bowstaffSkills], 0)

var attacks = { slap, nunchuckSkills, bowstaffSkills };

function slap(Rex) {
    Rex.health -= 1;
    Rex.hits += 1
        //alert(health)
    update()
}

function nunchuckSkills(Rex) {
    Rex.health -= 5;
    Rex.hits += 1;
    //alert(health)
    update()

}

function bowstaffSkills(Rex) {
    Rex.health -= 10;
    Rex.hits += 1;
    //alert(health)
    update()
}

//function RexChoice() {
//  var choices = [1, 5, 10]
//   var num = Math.floor(Math.random() * choices.length);
//  return choices[num] {


function update() {
    document.getElementById("Napoleon.health").innerText = Napoleon.health;
    document.getElementById("Napoleon.hits").innerText = Napoleon.hits;
    document.getElementById("Rex.health").innerText = Rex.health;
    document.getElementById("Rex.hits").innerText = Rex.hits
}
update()