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

var idProperties 	= AtomTween.getElement("id", "properties");
var idPerspective 	= AtomTween.getElement("id", "perspective");
var idOpacity	 	= AtomTween.getElement("id", "opacity");
var idTop	 		= AtomTween.getElement("id", "top");
var idLeft	 		= AtomTween.getElement("id", "left");
var idWidth	 		= AtomTween.getElement("id", "width");
var idHeight	 		= AtomTween.getElement("id", "height");
var idX	 			= AtomTween.getElement("id", "x");
var idY	 			= AtomTween.getElement("id", "y");
var idRotate	 		= AtomTween.getElement("id", "rotate");
var idRotateX 		= AtomTween.getElement("id", "rotateX");
var idRotateY 		= AtomTween.getElement("id", "rotateY");
var idRotateZ 		= AtomTween.getElement("id", "rotateZ");
var idScale	 		= AtomTween.getElement("id", "scale");
var idShadow	 		= AtomTween.getElement("id", "shadow");







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
	// AtomTween.to (idBanner, 0,		{perspective:500});
	AtomTween.to (idPerspective, 0,		{perspective:100}); 
	
	// set up
	AtomTween.to (idLogo, 		0.25, {delay:del+=0, rotateX:90, opacity:0});
	AtomTween.to (idStrapline, 	0.25, {delay:del+=0, opacity:0});
	AtomTween.to (idParticles, 	0, {delay:del+=0, opacity:0});
	
	AtomTween.to (idProperties, 	0, {delay:del+=0, opacity:0});
	AtomTween.to (idPerspective, 0, {delay:del+=0, opacity:0});
	AtomTween.to (idOpacity, 0, {delay:del+=0, opacity:0});
	AtomTween.to (idTop, 0, {delay:del+=0, top:-20});
	AtomTween.to (idLeft, 0, {delay:del+=0, left:1000});
	AtomTween.to (idWidth, 0, {delay:del+=0, width:0});
	AtomTween.to (idHeight, 0, {delay:del+=0, height:0});
	AtomTween.to (idX, 0, {delay:del+=0, x:1000});
	AtomTween.to (idY, 0, {delay:del+=0, y:350});
	AtomTween.to (idScale, 0, {delay:del+=0, scale:1});
	
	
	
	
	// ----------------------------------------------------------------------
	
	// Intro Animation
	
	/*
	AtomTween.to (idLogo, 			2, {delay:del+=1, rotateX:00, opacity:1, ease:oEnvelope.easeOutBack});
	AtomTween.to (idStrapline, 		1, {delay:del+=0.5, opacity:1, ease:"ease-in-out"});
	
	AtomTween.to (idProperties, 		1, {delay:del+=1.2, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idPerspective, 	1, {delay:del+=1.2, opacity:1, rotateY:45, ease:"ease-in-out"});
	AtomTween.to (idOpacity, 		1, {delay:del+=0.2, opacity:0.5, ease:"ease-in-out"});
	AtomTween.to (idTop, 			1, {delay:del+=0.2, opacity:1, top:255, ease:"ease-in-out"});
	AtomTween.to (idLeft, 			1, {delay:del+=0.2, opacity:1, left:250, ease:"ease-in-out"});
	AtomTween.to (idWidth, 			1, {delay:del+=1,  width:42, ease:"ease-in-out"});
	AtomTween.to (idHeight, 			1, {delay:del+=0.2,  height:16, ease:"ease-in-out"});
	AtomTween.to (idX, 				1, {delay:del+=0.2,  x:419, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idY, 				1, {delay:del+=0.2,  y:258, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idRotate, 			1, {delay:del+=0.2,  rotate:270, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idRotateX, 		1, {delay:del+=0.2,  rotateX:55, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idRotateY, 		1, {delay:del+=0.2,  rotateY:45, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idRotateZ, 		1, {delay:del+=0.2,  rotateZ:45, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idScale, 			1, {delay:del+=0.2,  scale:1.5, opacity:1, ease:"ease-in-out"});
	*/
	
	// Shadow
	// AtomTween.to (idShadow, 			1, {delay:del+=0.2,  opacity:1, ease:"ease-in-out"});

	// AtomTween.shadow (idShadow, 3, {shadow:"10px 10px 2px 2px rgba(255, 255, 255, 1);", ease:"ease-in-out" } ); 
	// AtomTween.shadow (idShadow, 3, {shadow:"50px 50px 20px black;", ease:"ease-in-out" } ); 
	// AtomTween.shadow (idShadow, 2, {shadow:'10px 10px 2px 4px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 
	
	// AtomTween.to (idShadow, 			2, {delay:del+=0.0, opacity:0.25, ease:"ease-in-out"});
	// AtomTween.shadow (idShadow, 		1, {delay:del+=1.0, boxshadow:'5px 5px 5px 1px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 
	// AtomTween.shadow (idShadow, 		1, {delay:del+=2.0, textshadow:'10px 5px 1px 1px rgba(0, 0, 0, 1)', ease:'ease-in-out'}); 

	// AtomTween.shadow (idShadow, 		1, {delay:del+=0.0, textshadow:'5px 5px 2px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 

	// AtomTween.to (idShadow, 2, {delay:del+=0.2, shadow:'10px 10px 2px 4px rgba(0, 0, 0, 1)', ease:'ease-in-out'}); 
	
	
		
	AtomTween.to (idShadow, 				8, {delay:del+=0.2,  x:10, opacity:1, ease:"ease-in-out"});
	
	AtomTween.kill (idShadow, 2);

	
	
	/*
	AtomTween.to (idLogo, 		1, {delay:del+=3, rotateY:90, opacity:0, ease:"ease-in-out"});
	AtomTween.to (idStrapline, 	1, {delay:del+=0, opacity:0, ease:"ease-in-out"});
	*/
	
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
	
	/*
	ParticleGen ({containerID:"particles", newClass:"blob", inlineCSS:"width:30px; height:30px; background:green; ", maxObjects:1000, position:[400,50], spacing:[4,4,20]});
	AtomTween.to (idParticles, 	3, {delay:del+=0.5, opacity:1, ease:"ease-in-out"});
	AtomTween.delayedCall(particleAnimation, del+=-1);
	*/
	
	// var clBlobs 		= AtomTween.getElement("class", "blob");
	// AtomTween.to (clBlobs, 		4, {delay:del+=1, y:GetRandom.number(0,250,false), x:GetRandom.number(0,900,false), ease:"ease-in-out"});
	
	
	// Animation
	function particleAnimation () {
		var w = document.getElementById('particles');
		var count = 0; // this will contain the total elements.
		for (var i = 0; i < w.childNodes.length; i++) {
			var node = w.childNodes[i];
			AtomTween.to (node, GetRandom.number(1,5,false), {delay:del+=0.001, y:GetRandom.number(0,300,false), x:GetRandom.number(0,900,false), rotate:GetRandom.number(0,360,false), scale:GetRandom.number(1,5,false), opacity:1, ease:"ease-in-out"});
		}
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



