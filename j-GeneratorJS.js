/* 	
		GeneratorJS (Beta v0.17 2015)
		Code by:
		Lee Redmond 
		lee@santaunion.co.uk
		
        Description: - 
		
*/
     
// Anonymous self-executing function	 

var   GeneratorJS 	= {};
var   aTweens 		= [];
var 	  nTweenID;

(function(window) {
    
	 
 	// ------------------------------------------------------------
	// GeneratorJS.to' function
	// ------------------------------------------------------------
	
	GeneratorJS = function (arg) {
		
		// 	GeneratorJS ({containerID:"banner", newClass:"blob", inlineCSS:"width:30px; height:30px; background:green; ", maxObjects:40, position:[300,50], spacing:[40,40,4]});

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
			nSpaceLeftCount 	= arg.spacing[0];
			
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
			
			// Position divs
			if (arg.position != null) {
				
				newDiv.style.left 	= (arg.position[0] + nSpaceLeftCount) + "px";
				newDiv.style.top 	= (arg.position[1] + nRowCount) + "px";
				
				nSpaceLeftCount += nSpaceLeft;
				nColCount +=1;
				
				if (nColCount > nColMax ) { 
					
					
					nRowCount += nSpaceTop; 
					nColCount = 0; 
					nSpaceTopCount += nSpaceTop;
					nSpaceLeftCount= 0;
					
				}
				
				trace ( "col:" + nSpaceLeftCount + " row:" + nRowCount);
				
				
			
			}
			
			
		}
	
	
		
		
		
		
		
		
	}
	

	
	// --------------------------------------------------
	// Get Elements - get ID or Class
    // --------------------------------------------------
	
	
	GeneratorJS.getElement = function (element, id) {
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
    
    
    window.GeneratorJS = GeneratorJS;
    
    
    
})(window);