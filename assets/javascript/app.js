// write array to store user selection
var userChoice =[];
// write array to store correct answers
var correctChoice = [ Steven Spielberg, The Amazon, Aaron Burr, France, 252 average ];

// write a function that looks for common elements in both arrays

function retComElAnotherWay ( userChoice,correctChoice) {
	userChoice = userChoice.sort();
	correctChoice = correctChoice.sort();

	for (var i = 0; i < userChoice.length; i++) {
	 	if (correctChoice.indexOf (userChoice [i] > -1) {
	 		return userChoice [i];
	 	}
	}
}








function retComElEvenBetter (userChoice, correctChoice){
	var arrToLoopOver;
	var arrToCheck;

	if (userChoice.length > correctChoice.length) {
		arrToLoopOver = correctChoice.sort();
		arrToCheck = userChoice.sort();
	} else {
		arrToLoopOver = userChoice.sort();
		arrToCheck = correctChoice.sort();
	}

	for ( var i=0; i<arrToLoopOver.length; i++) {
		arrToCheck.indexOf ( arrToLoopOver [i]) > -1 {
			return arrToLoopOver [i];
		}

	}
}



function retComElBetter (userChoice, correctChoice){
	var arrToLoopOver;
	var arrToCheck;
	if (userChoice.length > correctChoice.length) {
		arrToLoopOver = correctChoice;
		arrToCheck = userChoice;
	} else {
		arrToLoopOver = userChoice;
		arrToCheck = correctChoice;
	}

	for ( var i=0; i<arrToLoopOver.length; i++) {
		arrToCheck.indexOf ( arrToLoopOver [i]) > -1 {
			return arrToLoopOver [i];
		}

	}
}







function retComEl (userChoice, correctChoice) {
	for (var i=0; i<userChoice.length; i++) {
		for ( var j=0; j<correctChoice.length; j++ ) {
			if (userChoice [i] == correctChoice[j]) {
				return userChoice [i];
			}
		}
	}
}

console.log (retComEl(userChoice, correctChoice));