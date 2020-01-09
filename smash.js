/*class character {
  constructor(name, number, picture) {
    this.name = name;
	this.number = number;
	this.picture = picture;
  }
}*/

function createBoard(){
	var images = []
	for (i = 1; i < 80; i++){
		var imageUrl = "characters/" + i + ".jpg"
		images.push(imageUrl);
	}
	return images;
	
}


function createRowsAndCols(images)
{
    var result = "<table>\n";   
    for (i = 0; i < images.length; i++)
    {
        if (i % 12 == 0)
        {
            result += "\t<tr>\n";
        }

        result += "\t\t<td><img src=\"" + images[i] + "\"></td>\n";

    }
	console.log(result)
    return result;
}

$( document ).ready(function() {
    var images = createBoard();
    var result = createRowsAndCols(images);
    $("#canvas").append(result);
});

characterList = []
