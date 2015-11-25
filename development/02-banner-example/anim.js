// ------------------------------------------------
// Declarations
// ------------------------------------------------

// Variables

var bDev 			= false;
var del 				= 0;
var nLoopCount 		= 0;
var nMaxLoop 		= 1;


// IDs / Classes

var idBanner			= AtomTween.getElement("id", "banner");
var idLoader			= AtomTween.getElement("id", "loader");
var idBackground 	= AtomTween.getElement("id", "background");
var idBALogoWhite 	= AtomTween.getElement("id", "ba-logo-white");
var idBALogoBlue 	= AtomTween.getElement("id", "ba-logo-blue");



var idImage1			= AtomTween.getElement("id", "image1");
var idImage2			= AtomTween.getElement("id", "image2");

var idCopy1			= AtomTween.getElement("id", "copy1");
var idCopy2			= AtomTween.getElement("id", "copy2");
var idCopy3			= AtomTween.getElement("id", "copy3");

var idCTA			= AtomTween.getElement("id", "cta");

var sheets          = document.styleSheets;

trace (sheets);
trace(document.styleSheets[0]);


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
	
	
	// Frame 1
	
	AtomTween.to (idCopy1, 			1, {delay:del+=0.5, opacity:1, x:50, y:50, scale:2, rotate:150, ease:"ease-in-out"});
	AtomTween.to (idCopy1, 			1, {delay:del+=1, opacity:1, x:24, y:134, scale:1, rotate:0, ease:"ease-in-out"});
	AtomTween.to (idCopy1, 			1, {delay:del+=1, rotateY:180, ease:"ease-in-out"});
	AtomTween.to (idBanner, 			1, {delay:del+=1, rotate:360, scale:2, ease:"ease-in-out"});	
	AtomTween.to (idBanner, 			1, {delay:del+=1,  scale:1, ease:"ease-in-out"});	
	AtomTween.to (idBanner, 			1, {delay:del+=1,  rotateY:180, ease:"ease-in-out"});	
	AtomTween.to (idBanner, 			1, {delay:del+=1,  rotateY:0, ease:"ease-in-out"});	
	
	// AtomTween.to (idCopy1, 			1, {delay:del+=0.5, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idCopy1, 			1, {delay:del+=3.0, opacity:0, ease:"ease-in-out"});
	AtomTween.to (idCopy1, 			1, {delay:del+=0.5, opacity:0, ease:"ease-in-out"});
	AtomTween.to (idImage1, 			1, {delay:del+=0, opacity:0, ease:"ease-in-out"});
	
	AtomTween.to (idCopy2, 			1, {delay:del+=1, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idCopy2, 			1, {delay:del+=3.0, opacity:0, ease:"ease-in-out"});
	
	AtomTween.to (idImage2, 			1, {delay:del+=0.5, opacity:0, ease:"ease-in-out"});
	AtomTween.to (idBALogoBlue, 		1, {delay:del+=0, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idBALogoWhite, 	1, {delay:del+=1, opacity:0, ease:"ease-in-out"});
	
	AtomTween.to (idCopy3, 			1, {delay:del+=0, opacity:1, ease:"ease-in-out"});
	AtomTween.to (idCTA, 			1, {delay:del+=0.75, opacity:1, ease:"ease-in-out"});
	
	AtomTween.to (idBanner, 			1, {delay:del+=0.75, scale:0.1, ease:"ease-in-out"});
	
	
	// alert ("time = " + del + "s");
	
	
	
	
  }
  
  anim ();
	
	
  // ------------------------------------------------
  // Exits
  // ------------------------------------------------

  getElement("id", "clickthru").addEventListener('click', bgExitHandler, false);
  
  function bgExitHandler(e) {

	trace (">> f:bgExitHandler");

    switch(e.type){
      case "mouseover":
        
        break;

      case "mouseout":
          
        break;

      case "click":
        trace(">> ClickThru Exit");
		window.open(window.clickTag);
		displayLockup ();

        break;
      }
  }



// End init()
};



// ------------------------------------------------
// Check Browser
// ------------------------------------------------


  
function check_browser() { 
  if(navigator.userAgent.indexOf("Chrome") != -1 ) {
    //alert('Chrome');
  }
  else if(navigator.userAgent.indexOf("Opera") != -1 ) {
    //alert('Opera');
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
    //alert('Firefox');
  }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
  {
    //alert('IE');
    isIE = true;

  }  
  else {
    //alert('unknown');
  }
}



// ------------------------------------------------------------
// Get Internet Explorer verion
// ------------------------------------------------------------

function getInternetExplorerVersion() {
 // trace (">> getInternetExplorerVersion");
 // Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
  var rv = -1; // Return value assumes failure.
  
  // trace (">> app name: " + navigator.appName);
  
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

// ------------------------------------------------
// Check for Internet Explorer v 7.0 < 9.0
// ------------------------------------------------

function checkForIE() {
	  // trace (">> checkForIE");
	  var msg = "You're not using Internet Explorer.";
	  var nIEVersion = getInternetExplorerVersion();
	  // alert (">> IE Version = " +  nIEVersion);

  if ( nIEVersion > -1 && nIEVersion >= 7.0 && nIEVersion < 9.0 ) {
		
	  displayLockup ();
		
	
  } else {
	
	  startBanner(true);
	  
  }

}


// ------------------------------------------------
// Display Lockup
// ------------------------------------------------

function displayLockup () {
	
	// This removed the main banner elements and displays
	// the lockup endframe
	
	// Remove banner markup
	var idBanner = document.getElementById("banner");
	idBanner.parentNode.removeChild(idBanner);
	
	// AtomTween.killAll();
	
	// display Lockup
	var idLockup = document.createElement('a');
	idLockup.className = "backup";
	document.getElementById('backup').appendChild(idLockup);
	idLockup.setAttribute("href", "javascript:window.open(window.clickTag)");

}




// ------------------------------------------------
// On Load 
// ------------------------------------------------

window.onload = function(){
	
	trace (">> f:onload");
	checkForIE();
  
}; 



// ------------------------------------------------
// Start Banner
// ------------------------------------------------

function startBanner (status) {
	trace (">> f:startBanner | Mode: " + status);
	
	// Fade Out Loader
	AtomTween.to (idLoader, 0.5, {opacity:0, ease:"ease-in-out"}); 
	
	 setTimeout(function(){
		// Hide loader
   		idLoader.style.display = "none";
		
		// Init banner
   		init();
  	}, 500);
	
}

// ------------------------------------------------
// Trace function
// ------------------------------------------------


function trace(msg){
  // console.log (msg);
}


// --------------------------------------------------
// Get Elements
// --------------------------------------------------


function getElement(element, id) {
  //trace(element + "  " + id);
  console.log (">> f:getElement");
  
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


