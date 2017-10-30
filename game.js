function gameBrains(slap, nunchuckSkills, bowstaffSkills) {

}

var player = function(health, items, attacks, hits) {
    this.health = health;
    this.attacks = attacks;
    this.items = items;
    this.hits = hits
}
var Napoleon = new player(100, [{
    grapeFruit: ("attack boost", 0.5, "Napoleon Throws a Grape Fruit!"),
    tinaTheLlama: ("defense boost", 1, "Tina the Llama comes to your defense"),
    tots: ("health boost", 25, "You Eat Some of your secret Tots")
}], [slap, nunchuckSkills, bowstaffSkills], 0);

var Rex = new player(100, [{
    breakTheWrist: ("attack boost", 0.5, "Rex Breaks Your Wrist then walks Away!"),
    theseBadBoys: ("defense boost", 1, "No One Wants A Round-House Kick to The Face While You're Wearing These Bad Boys!"),
    starla: ("health boost", 25, "You Think He Feels Like A Failure Cause He Goes Home To Starla At Night?....Forget About It!")
}], [slap, nunchuckSkills, bowstaffSkills], 0)

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