function gameBrains(slap, nunchuckSkills, bowstaffSkills) {

}

var Player = function(health, attacks, hits) {
    this.health = health;
    this.items = [];
    this.attacks = attacks;
    this.hits = hits
}

var Item = function(name, modifier, comment) {
    this.name = name
    this.modifier = modifier
    this.comment = comment
}
var Napoleon = new Player(100, [slap, nunchuckSkills, bowstaffSkills], 0);

var grapeFruit = new Item("attack boost", 2, "Napoleon Throws a Grape Fruit!")
var tinaTheLlama = new Item("defense boost", 1, "Tina the Llama comes to your defense")
var tots = new Item("health boost", 25, "You Eat Some of your secret Tots")

//Napoleon.items.push(grapeFruit, tinaTheLlama, tots)

console.log(Napoleon)

var Rex = new Player(100, [slap, nunchuckSkills, bowstaffSkills], 0)

var breakTheWrist = new Item("attack boost", 2, "Rex Breaks Your Wrist then walks Away!")
var theseBadBoys = new Item("defense boost", 1, "No One Wants A Round-House Kick to The Face While You're Wearing These Bad Boys!")
var starla = new Item("health boost", 25, "You Think He Feels Like A Failure Cause He Goes Home To Starla At Night?....Forget About It!")

//Rex.items.push(breakTheWrist, theseBadBoys, starla)

var attacks = [slap, nunchuckSkills, bowstaffSkills];

function slap(Rex) {
    Rex.health -= 1 * itemPowers();
    Rex.hits += 1
    if (Rex.health < 0) {
        Rex.health = 0
    }
    //alert(health)
    update()
}

function nunchuckSkills(Rex) {
    Rex.health -= 5 * itemPowers();
    Rex.hits += 1;
    if (Rex.health < 0) {
        Rex.health = 0
    }
    //alert(health)
    update()

}

function bowstaffSkills(Rex) {
    Rex.health -= 10 * itemPowers();
    Rex.hits += 1;
    if (Rex.health < 0) {
        Rex.health = 0
    }
    //alert(health)
    update()
}

function giveGrapefruit() {
    Napoleon.items.push(grapeFruit)
}

function itemPowers() {
    var total = 1
    for (var index = 0; index < Napoleon.items.length; index++) {
        var item = Napoleon.items[i];
        total += item.modifier
    }
    return total
}



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