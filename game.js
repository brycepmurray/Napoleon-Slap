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

var attacks = [slap, nunchuckSkills, bowstaffSkills];

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

//function items(arr) {
// this.arr;
//}

//var arr = new items

//function RexChoice() {
//  var choices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   var num = Math.floor(Math.random() * choices.length);
//
//  {


function update() {
    document.getElementById("Napoleon.health").innerText = Napoleon.health;
    document.getElementById("Napoleon.hits").innerText = Napoleon.hits;
    document.getElementById("Rex.health").innerText = Rex.health;
    document.getElementById("Rex.hits").innerText = Rex.hits
    if (Napoleon.health <= 0) {
        document.getElementsByClassName("buttons").innerHTML = "<h3> You're a Freaking Bowdaggit! </h3>"
    }
    if (Rex.health <= 0) {
        document.getElementsByClassName("buttons").innerHTML = "<h3> You are Freakin Sweet! </h3>"
    }
}
update()