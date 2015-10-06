// ------------------------------------------------
// Declarations
// ------------------------------------------------

// Variables

var bDev 			= false;
var del 				= 0;
var nLoopCount 		= 0;
var nMaxLoop 		= 1;


// IDs / Classes


var idBanner 		= cssTweenJS.getElement("id", "banner");
var idSquare1 		= cssTweenJS.getElement("id", "square1");
var idSquare2 		= cssTweenJS.getElement("id", "square2");
var idSquare3 		= cssTweenJS.getElement("id", "square3");
var idSquare4 		= cssTweenJS.getElement("id", "square4");
var idSquare5 		= cssTweenJS.getElement("id", "square5");
var idSquare6 		= cssTweenJS.getElement("id", "square6");


// ------------------------------------------------
// Envelpes
// ------------------------------------------------

var oEnvelope		= { 	 easeOutBack: 	"cubic-bezier(0.175, 0.885, 0.32, 1.275)",
					     easeInBack: 	"cubic-bezier(0.6, -0.28, 0.735, 0.045)"
					  };


// ------------------------------------------------
// Init
// ------------------------------------------------


function init() {

  trace (">> f:init");
    
  // ------------------------------------------------
  // Anim
  // ------------------------------------------------
  
  function anim () {
	
	trace (">> f:anim");
	
	var del = 0;
	nLoopCount += 1;
	
	
	// ----------------------------------------
	// cssTweenJS
	// ----------------------------------------
	
	
	// Perspective on Banner
	// cssTweenJS.to (idBanner, 0,		{perspective:300}); 
	
	
	
	// Frame 1
	// cssTweenJS.to (idSquare1, 		3, {delay:del+=0, width:100, opacity:1, ease:"ease-in-out"});
	// cssTweenJS.to (idSquare2, 		2, {delay:del+=0, width:600, opacity:1, ease:"ease-in-out"});
	// cssTweenJS.to (idSquare3, 		4, {delay:del+=2, y:92, x:104, width:300, ease:"ease-in-out"});
	// cssTweenJS.to (idSquare4, 		5, {delay:del+=0, width:400, opacity:1, ease:"ease-in-out"});
	// cssTweenJS.to (idSquare1, 		getRandom(2,8,true), {delay:del+=0, width:getRandom(200,500,true), rotate:getRandom(-1000,1000,true), opacity:1, onComplete:myTest, ease:"ease-in-out"});
	// cssTweenJS.to (idSquare2, 		getRandom(2,8,true), {delay:del+=0, width:getRandom(50,400,true), scale:getRandom(1,4,true), rotate:getRandom(50,400,true), ease:"ease-in-out"});
	
	
	// Pixel-fitting example
	cssTweenJS.to (pixelSquare1, 		5, {delay:del+=0, left:800, top:70, ease:"ease-in-out"});
	cssTweenJS.to (pixelSquare2, 		5, {delay:del+=0, x:800, y:170, ease:"ease-in-out"});
	
	
	// Shadow
	// cssTweenJS.shadow (idSquare4, 3, {shadow:"10px 10px 2px 2px rgba(255, 255, 255, 1);", ease:"ease-in-out" } ); 
	// cssTweenJS.shadow (idSquare4, 3, {shadow:"50px 50px 20px black;", ease:"ease-in-out" } ); 
	// cssTweenJS.shadow (idSquare3, 2, {shadow:'10px 10px 2px 4px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 
	// cssTweenJS.to (idSquare4, 2, {shadow:'10px 10px 2px 4px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 

	
	// Kill All Tweens
	// setTimeout(function(){ cssTweenJS.killAll() }, 3000);
	
	// cssTweenJS.to (idSquare4, 		5, {delay:del+=0, width:400, opacity:1, onComplete:alertMe, ease:"ease-in-out"});
	
	// ----------------------------------------
	// GeneratorJS
	// ----------------------------------------
	
	GeneratorJS ({containerID:"banner", newClass:"blob", inlineCSS:"width:30px; height:30px; background:green; ", maxObjects:40, position:[300,50], spacing:[40,40,10]});
	
	var clBlobs 		= cssTweenJS.getElement("class", "blob");
	cssTweenJS.to (clBlobs, 		4, {delay:del+=1, y:92, x:104, width:300, ease:"ease-in-out"});
	
	
	// ----------------------------------------
	// Funciion Call Backs
	// ----------------------------------------
	
	
	function alertMe() {
		alert ("This function was call by an 'onComplete from the cssTweenJS.to function");	
		cssTweenJS.to (idSquare5, 		5, {delay:del+=0, width:400, opacity:1, ease:"ease-in-out"});
	}
	
	function myTest () { 
		// alert ("onComplete Works!!") 
	};
	
	
	/*
	 * Listen for the transitionend event on a specified element, e.g. #slidingMenu
	 * Then run a specified function, e.g. showMessage()
	 */
	function showMessage() {
		// alert('idSquare6 Transition has finished');
	}
	
	// var element = document.getElementById("idSquare6");
	idSquare6.addEventListener("transitionend", showMessage, false);
	
	setTimeout(function(){ 
	
		// idSquare6.style.webkitAnimationPlayState="paused";
		// alert ("dsfsf");
		// cssTweenJS.KillTween (idSquare6);
	
	}, 2000);
	
		
	

	
	
  }
  
  anim ();
	
	
 

// End init()
};





// ------------------------------------------------
// On Load 
// ------------------------------------------------

window.onload = function(){
	
	trace (">> f:onload");
	startBanner(true);
  
}; 


// ------------------------------------------------
// Start Banner
// ------------------------------------------------

function startBanner (status) {
	trace (">> f:startBanner | Mode: " + status);
	
	
	 setTimeout(function(){
		// Hide loader
   		
		
		// Init banner
   		init();
  	}, 500);
	
}

// --------------------------------------------------
// Get Elements
// --------------------------------------------------


function getElement(element, id) {
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


// ------------------------------------------------
// Trace function
// ------------------------------------------------

function trace(msg){
  // console.log (msg);
}



