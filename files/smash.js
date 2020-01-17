var characters = 79
var active = characters;
var characterList = {
	"1":"Mario",
	"2":"Donkey Kong",
	"3":"Link",
	"4":"Samus",
	"5":"Dark Samus",
	"6":"Yoshi",
	"7":"Kirby",
	"8":"Fox",
	"9":"Pikachu",
	"10":"Luigi",
	"11":"Ness",
	"12":"Captain Falcon",
	"13":"Jigglypuff",
	"14":"Peach",
	"15":"Daisy",
	"16":"Bowser",
	"17":"Ice Climbers",
	"18":"Sheik",
	"19":"Zelda",
	"20":"Dr. Mario",
	"21":"Pichu",
	"22":"Falco",
	"23":"Marth",
	"24":"Lucina",
	"25":"Young Link",
	"26":"Ganandorf",
	"27":"Mewtwo",
	"28":"Roy",
	"29":"Chrom",
	"30":"Mr. Game & Watch",
	"31":"Meta Knight",
	"32":"Pit",
	"33":"Dark Pitt",
	"34":"Zero Suit Samus",
	"35":"Wario",
	"36":"Snake",
	"37":"Ike",
	"38":"Pokemon Trainer",
	"39":"Diddy Kong",
	"40":"Lucas",
	"41":"Sonic",
	"42":"King Dedede",
	"43":"Olimar",
	"44":"Lucario",
	"45":"R.O.B.",
	"46":"Toon Link",
	"47":"Wolf",
	"48":"Villager",
	"49":"Mega Man",
	"50":"Wii Fit Trainer",
	"51":"Rosalina & Luma",
	"52":"Little Mac",
	"53":"Greninja",
	"54":"Palutena",
	"55":"Pac Man",
	"56":"Robin",
	"57":"Shulk",
	"58":"Bowser Jr.",
	"59":"Duck Hunt",
	"60":"Ryu",
	"61":"Ken",
	"62":"Cloud",
	"63":"Corrin",
	"64":"Bayoneta",
	"65":"Inkling",
	"66":"Ridley",
	"67":"Simon",
	"68":"Richter",
	"69":"King K. Rool",
	"70":"Isabelle",
	"71":"Incineroar",
	"72":"Piranha Plant",
	"73":"Joker",
	"74":"Hero",
	"75":"Banjo & Kazooie",
	"76":"Terry",
	"77":"Mii Brawler",
	"78":"Mii Swordfighter",
	"79":"Mii Gunner"
}
var index = -1

function createBoard() {
    var images = []
    for (i = 1; i < characters + 1; i++) {
        var imageUrl = "files/characters/" + i + ".jpg"
        images.push(imageUrl);
    }
    var table = "<table>\n";
    for (i = 0; i < images.length; i++) {
        if (i % 12 == 0) {
            table += "\t<tr>\n";
        }
        table += "\t\t<td id = " + i + "><img src=\"" + images[i] + "\"></td>\n";
    }
    return table;
}

function toggleOpacity() {
    for (i = 0; i < characters; i++) {
        $('#' + i).click(function() {
            if ($(this).css("opacity") == 0.25) {
                $(this).css({
                    'opacity': '1'			
                })
				active += 1;
            }
            else {
                $(this).css({
                    'opacity': '0.25'			
                })
				active -= 1
            }
        });
    }
}

function chooseRandom(remove = false) {
    for (i = 0; i < characters; i++) {
        $('#' + i).css({
            'border': 'white thick solid'
        })
    }
	console.log(remove)
	console.log(index)
    bool = false
    if (remove == true && index != -1) {
        $('#' + index).css({
            'opacity': '0.25'
        })
		active -= 1;
    }
	
	if (active == 0){
		alert("No more characters")
		index = -1;
		$('#char').text("Character: No more characters")
		return;
	}
    // Get random value from 1-80
    while (bool == false) {
        index = Math.floor(Math.random() * characters)
        if ($('#' + index).css("opacity") != 0.25) {
            bool = true;
        }
    }
    $('#' + index).css({
        'border': '#FAED27 thick solid',
        'border-radius': '50%'
    })
	
	$('#char').text("Character: " + characterList[index+1])
}
// Chosen character = characterList[index]	
$(document).ready(function() {
	
    var table = createBoard();
    $("#canvas").append(table);
    toggleOpacity();
    $('#rand').click(function() {
        chooseRandom();
    });
    $('#randRemove').click(function() {
        chooseRandom(true);
    });
});