/*
		@Title:						ParticleGen (v1.0 2015)
		@Author:					Lee Redmond
		@Contact:					lee@santaunion.co.uk
		@ Description:				Div element particle generator
		@API:						



*/

     
// Anonymous self-executing function	 

var   ParticleGen 	= {};


(function(window) {
    
	 
 	// ------------------------------------------------------------
	// ParticleGen.to' function
	// ------------------------------------------------------------
	
	ParticleGen = function (arg) {
		
		// 	ParticleGen ({containerID:"banner", newClass:"blob", inlineCSS:"width:30px; height:30px; background:green; ", maxObjects:40, position:[300,50], spacing:[40,40,4]});

		var sGenerator = "";
		trace ("==========================================");		
		trace ("containerID: " + arg.containerID);
		trace ("newClass: " + arg.newClass);
		trace ("inlineCSS: " + arg.inlineCSS);
		trace ("maxObjects: " + arg.maxObjects);
		trace ("position: " + arg.position[0] + ',' + arg.position[1]);
		trace ("spacing: " + arg.spacing[0] + ',' + arg.spacing[1]);
		trace ("==========================================");
		
		var nSpaceLeft		= 0;
		var nSpaceLeftCount	= 0;
		
		var nSpaceTop		= 0;
		var nSpaceTopCount	= 0;
		
		var nColMax		= 0;
		var nColCount	= 0;
		
		var nRowCount	= 0;
		
		if (arg.spacing != null) {
			
			nSpaceLeft			= arg.spacing[0];
			nSpaceLeftCount 	= 0;
			
			nSpaceTop			= arg.spacing[1];
			nSpaceTopCount	 	= arg.spacing[1];
			
			nColMax 				= arg.spacing[2];
		}
		
		// ------------------------------------------------------------
		//	Generate new Divs in ContainerID
		// ------------------------------------------------------------
		
		
		for(i=0; i< arg.maxObjects; i++) {
			var newDiv = document.createElement('div');
			newDiv.className = arg.newClass;
	
			var containerID = document.getElementById(arg.containerID);
			containerID.appendChild(newDiv);
			
			trace ("nSpaceLeftCount = " + nSpaceLeftCount);
			
			// Position divs
			if (arg.position != null) {
				
				newDiv.style.left 				= (arg.position[0] + nSpaceLeftCount) + "px";
				newDiv.style.top 				= (arg.position[1] + nRowCount) + "px";
				newDiv.style.backgroundColor		= '#'+Math.floor(Math.random()*16777215).toString(16);
				
				nSpaceLeftCount 				+= nSpaceLeft;
				nColCount 						+=1;
				
				if (nColCount > nColMax -1 ) { 
					
					nRowCount 		+= nSpaceTop; 
					nColCount 		= 0; 
					nSpaceTopCount 	+= nSpaceTop;
					nSpaceLeftCount	= 0;
					
				}
				
				trace ( "col:" + nSpaceLeftCount + " row:" + nRowCount);
			
			}
	
		}
		
	}
	
	// --------------------------------------------------
	// Get Elements - get ID or Class
    // --------------------------------------------------
	
	
	ParticleGen.getElement = function (element, id) {
	  //trace(element + "  " + id);
	  trace (">> f:getElement");
	  
	  var mc;
	  switch(element){
		case "id":
		  mc = document.getElementById(id);
		break;
	
		case "class":
		  mc = document.getElementsByClassName(id);
		break;
	  }
	
	  return mc;
	}
	
    // --------------------------------------------------
	// trace == console
    // --------------------------------------------------
	
	function trace(msg){
  		console.log (msg);
	}
    
	// --------------------------------------------------
	// Expose to function scope to the window
    // --------------------------------------------------
    
    
    window.ParticleGen = ParticleGen;
    
    
})(window);