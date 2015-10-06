// Get Random

// self-executing anonymous function
(function(window) {

	// ------------------------------------------------------
	//	Get Random Number
	// ------------------------------------------------------
	
	var nRandom;

	function getRandom (nMin, nMax, bRound)
	{	
	
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
	
	// Make function available to main window
	window.getRandom = getRandom;
	
	// ---- end of get randomw ----
}(window));
