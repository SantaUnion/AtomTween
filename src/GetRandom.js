/*
	* @author			Lee Redmond <lee@santaunion.co.uk>
	* @title			GetRandom
	* @version			Beta 1
	* @since			2015-10-26
	* @description		Radomizer for numbers and hex colour
	* @API:				var myRandomInteger = GetRandom.number (0, 10, true);  // Returns: random whole number between 0-10 eg. 5
						var myRandomNumber  = GetRandom.number (0, 10, false);  // Returns: randomw number between 0-10 eg. 1.234564 
						var myRandomColour  = GetRandom.colour ();  // Returns: Hexidecimal string. eg. "#ef6660" 
	
*/





var   GetRandom = {};

// self-executing anonymous function
(function(window) {

	
	// ------------------------------------------------------
	//	Get Random Number
	// ------------------------------------------------------
	
	GetRandom.number = function (nMin, nMax, bRound) {

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
	
	
	GetRandom.colour = function () {
		
		var sColour = '#'+Math.floor(Math.random()*16777215).toString(16);
		return sColour;
		
	}
	 
	
	
	
	
	
	
	
	
	
	// Make function available to main window
	window.GetRandom = GetRandom;
	
	// ---- end of get randomw ----
}(window));
