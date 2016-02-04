// ------------------------------------------------
// Variable Declarations
// ------------------------------------------------

// Variables

var bDev 			= false;
var del 				= 0;
var nLoopCount 		= 0;
var nMaxLoop 		= 1;


// IDs / Classes / 


var idBanner 		= AtomTween.getElement("id", "banner");
var idSquare1 		= AtomTween.getElement("id", "square1");
var idSquare2 		= AtomTween.getElement("id", "square2");
var idSquare3 		= AtomTween.getElement("id", "square3");
var idSquare4 		= AtomTween.getElement("id", "square4");
var idSquare5 		= AtomTween.getElement("id", "square5");
var idSquare6 		= AtomTween.getElement("id", "square6");


var idLogo 			= AtomTween.getElement("id", "logo");
var idStrapline 		= AtomTween.getElement("id", "strapline");
var idParticles 		= AtomTween.getElement("id", "particles");


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
  
  // Set up
    
  // ------------------------------------------------
  // Anim
  // ------------------------------------------------
  
  function anim () {
	
	trace (">> f:anim");
	
	var del = 0;
	nLoopCount += 1;
	
	
	// ----------------------------------------
	// AtomTween
	// ----------------------------------------
	
	
	// Perspective on Banner
	AtomTween.to (idBanner, 0,		{perspective:500}); 
	
	// set up
	AtomTween.to (idLogo, 		0.25, {delay:del+=0, rotateX:90, opacity:0});
	AtomTween.to (idStrapline, 	0.25, {delay:del+=0, opacity:0});
	AtomTween.to (idParticles, 	0, {delay:del+=0, opacity:0});
	
	
	
	
	
	// ----------------------------------------------------------------------
	
	// Intro Animation
	
	
	AtomTween.to (idLogo, 		2, {delay:del+=1, rotateX:00, opacity:1, ease:oEnvelope.easeOutBack});
	AtomTween.to (idStrapline, 	1, {delay:del+=0.5, opacity:1, ease:"ease-in-out"});
	
	AtomTween.to (idLogo, 		1, {delay:del+=3, rotateY:90, opacity:0, ease:"ease-in-out"});
	AtomTween.to (idStrapline, 	1, {delay:del+=0, opacity:0, ease:"ease-in-out"});
	
	
	// ----------------------------------------------------------------------
	
	// Frame 1
	// AtomTween.to (idSquare1, 		3, {delay:del+=0, width:100, opacity:1, ease:"ease-in-out"});
	// AtomTween.to (idSquare2, 		2, {delay:del+=0, width:600, opacity:1, ease:"ease-in-out"});
	// AtomTween.to (idSquare3, 		4, {delay:del+=2, y:92, x:104, width:300, ease:"ease-in-out"});
	// AtomTween.to (idSquare4, 		5, {delay:del+=0, width:400, opacity:1, ease:"ease-in-out"});
	// AtomTween.to (idSquare1, 		GetRandom.number(2,8,true), {delay:del+=0, width:GetRandom.number(200,500,true), rotate:GetRandom.number(-1000,1000,true), opacity:1, onComplete:myTest, ease:"ease-in-out"});
	// AtomTween.to (idSquare2, 		GetRandom.number(2,8,true), {delay:del+=0, width:GetRandom.number(50,400,true), scale:GetRandom.number(1,4,true), rotate:GetRandom.number(50,400,true), ease:"ease-in-out"});
	
	
	// Pixel-fitting example
	// AtomTween.to (pixelSquare1, 		5, {delay:del+=0, left:800, top:70, });
	// AtomTween.to (pixelSquare2, 		5, {delay:del+=0, x:800, y:170, ease:"ease-in-out"});
	
	
	// Shadow
	// AtomTween.shadow (idSquare4, 3, {shadow:"10px 10px 2px 2px rgba(255, 255, 255, 1);", ease:"ease-in-out" } ); 
	// AtomTween.shadow (idSquare4, 3, {shadow:"50px 50px 20px black;", ease:"ease-in-out" } ); 
	// AtomTween.shadow (idSquare3, 2, {shadow:'10px 10px 2px 4px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 
	// AtomTween.to (idSquare4, 2, {shadow:'10px 10px 2px 4px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 

	
	// Kill All Tweens
	// setTimeout(function(){ AtomTween.killAll() }, 3000);
	
	// AtomTween.to (idSquare4, 		5, {delay:del+=0, width:400, opacity:1, onComplete:alertMe, ease:"ease-in-out"});
	
	// ----------------------------------------
	// ParticleGen
	// ----------------------------------------
	
	// ParticleGen ({containerID:"banner", newClass:"blob", inlineCSS:"width:30px; height:30px; background:green; ", maxObjects:2550, position:[400,200], spacing:[1,3,90]});
	
	ParticleGen ({containerID:"particles", newClass:"blob", inlineCSS:"width:30px; height:30px; background:green; ", maxObjects:1000, position:[400,50], spacing:[4,4,20]});
		
	AtomTween.to (idParticles, 	3, {delay:del+=0.5, opacity:1, ease:"ease-in-out"});
	AtomTween.delayedCall(particleAnimation, del+=-1);
	
	
	// var clBlobs 		= AtomTween.getElement("class", "blob");
	// AtomTween.to (clBlobs, 		4, {delay:del+=1, y:GetRandom.number(0,250,false), x:GetRandom.number(0,900,false), ease:"ease-in-out"});
	
	
	// Animation
	function particleAnimation () {
		var w = document.getElementById('particles');
		var count = 0; // this will contain the total elements.
		for (var i = 0; i < w.childNodes.length; i++) {
			var node = w.childNodes[i];
			AtomTween.to (node, GetRandom.number(1,5,false), {	delay:del+=0.001, 
																y:GetRandom.number(-300,300,false), 
																x:GetRandom.number(0,900,false), 
																rotate:GetRandom.number(0,360,false), 
																scale:GetRandom.number(1,2,false), 
																rotateX:GetRandom.number(1,180,false),
																rotateY:GetRandom.number(1,180,false), 
																rotateZ:GetRandom.number(1,180,false), 
																opacity:1, 
																ease:"ease-in-out"});
		}
		
		AtomTween.delayedCall(particleIntro, del+=0.2);
	}
	
	// Animation
	function particleIntro () {
		var w = document.getElementById('particles');
		var count = 0; // this will contain the total elements.
		for (var i = 0; i < w.childNodes.length; i++) {
			var node = w.childNodes[i];
			AtomTween.to (node, 1, {	delay:del+=0.001, 
									y:150, x:450, 
									rotate:0, 
									rotateX:0, 
									rotateY:0, 
									rotateZ:0, 
									scale:1, opacity:0, ease:"ease-in"});
		}
		
		AtomTween.delayedCall(particleOutro, del+=0.2);
	}
	
	
	// Animation
	function particleOutro () {
		var w = document.getElementById('particles');
		var count = 0; // this will contain the total elements.
		for (var i = 0; i < w.childNodes.length; i++) {
			var node = w.childNodes[i];
			AtomTween.to (node, GetRandom.number(1,5,false), {delay:del+=0.001, 
															y:GetRandom.number(0,300,false), 
															x:GetRandom.number(0,900,false), 
															rotate:GetRandom.number(0,360,false),
															rotateX:GetRandom.number(1,180,false),
															rotateY:GetRandom.number(1,180,false), 
															rotateZ:GetRandom.number(1,180,false), 
															scale:GetRandom.number(1,5,false), 
															opacity:1, ease:"ease-in-out"});
		}
		AtomTween.delayedCall(particleIntro, del+=0.2);
		
	}
	
	
	
	
	
	
	
	
	// ----------------------------------------
	// Funciion Call Backs
	// ----------------------------------------
	
	
	function alertMe() {
		alert ("This function was call by an 'onComplete from the AtomTween.to function");	
		AtomTween.to (idSquare5, 		5, {delay:del+=0, width:400, opacity:1, ease:"ease-in-out"});
	}
	
	function myTest () { 
		// alert ("onComplete Works!!") 
	};
	
	

	

	
	
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
  	}, 1);
	
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


