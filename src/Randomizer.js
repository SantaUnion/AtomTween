/*
		@Title:						Randomizer (v1.0 2015)
		@Author:					Lee Redmond
		@Contact:					lee@santaunion.co.uk
		@Description:				Radomizer for numbers and hex colour
		@API:						var myRandomInteger = Ranomizer.number (0, 10, true);  // Returns: random whole number between 0-10 eg. 5
									var myRandomNumber = Ranomizer.number (0, 10, false);  // Returns: randomw number between 0-10 eg. 1.234564
*/



var   Randomizer = {};

// self-executing anonymous function
(function(window) {

	
	// ------------------------------------------------------
	//	Get Random Number
	// ------------------------------------------------------
	
	Randomizer.number = function (nMin, nMax, bRound) {

	// console.log ("getRandom");
	
		switch (bRound)
		{
			case true:
				nRandom = (Math.floor(Math.random() * (nMax - nMin + 1)) + nMin);
				return nRandom
				break;
				  
			case false:
				nRandom = Math.random() * (nMax - nMin + 1) + nMin;
				return nRandom
				break;
		}
	}
	
	// ------------------------------------------------------
	//	Get Random Hex Colour
	// ------------------------------------------------------
	
	
	Randomizer.colour = function () {
		
		var sColour = '#'+Math.floor(Math.random()*16777215).toString(16);
		return sColour;
		
	}
	 
	
	
	
	
	
	
	
	
	
	// Make function available to main window
	window.Randomizer = Randomizer;
	
	// ---- end of get randomw ----
}(window));
