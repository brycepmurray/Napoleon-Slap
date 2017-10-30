function gameBrains(slap, nunchuckSkills, bowstaffSkills) {

}

var Player = function(health, attacks, hits) {
    this.health = health;
    this.items = [];
    this.attacks = attacks;
    this.hits = hits
}

var Items = function(items) {
    this.items
}
var Napoleon = new Player(100, [slap, nunchuckSkills, bowstaffSkills], 0);

var grapeFruit = new Item("attack boost", 2, "Napoleon Throws a Grape Fruit!")
var tinaTheLlama = new Item("defense boost", 1, "Tina the Llama comes to your defense")
var tots = new Item("health boost", 25, "You Eat Some of your secret Tots")

Napoleon.items.push(grapeFruit, tinaTheLlama)

var Rex = new Player(100, [slap, nunchuckSkills, bowstaffSkills], 0)

var breakTheWrist = new Item("attack boost", 2, "Rex Breaks Your Wrist then walks Away!")
var theseBadBoys = new Item("defense boost", 1, "No One Wants A Round-House Kick to The Face While You're Wearing These Bad Boys!")
var starla = new Item("health boost", 25, "You Think He Feels Like A Failure Cause He Goes Home To Starla At Night?....Forget About It!")

Rex.items.push(breakTheWrist, theseBadBoys, starla)

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

function itemPowers(Napoleon, Rex) {
    if (Napoleon.items[1]) {}

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