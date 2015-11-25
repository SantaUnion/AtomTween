/** 	
	* @author			Lee Redmond <lee@santaunion.co.uk>
	* @title			AtomTween.Beta.minified
	* @version			Beta 1.3
	* @since			2015-10-26
	* @description		Light weight CSS animation engine for modern browsers
	* @api				AtomTween API is based on GSAP TweenLite		
	* example			var myID = AtomTween.getElement("id", "myDiv");
						AtomTween.to (myID, 4, {delay:1, y:92, x:104, width:300, height:20, scale:2, rotate:30, opacity:0.25, ease:"ease-in-out"});
*/

     
// Anonymous self-executing function	 

var   AtomTween 	= {};
var   aTweens 		= [];
var 	  nTweenID;


(function(window) {
    
	 
	 // ------------------------------------------------------------
	// AtomTween.delayedCall' function
	// ------------------------------------------------------------
	
	AtomTween.delayedCall = function (functName, seconds) {
	 	
		var miliseconds	= seconds * 1000;
		
		setTimeout ( functName, miliseconds);
	}
	 
 	// ------------------------------------------------------------
	// AtomTween.to' function
	// ------------------------------------------------------------
	
	AtomTween.to = function (object, seconds, arg) {
		
		var sTween 				= "";
		var sTransformSetting	= "";
		var nAbsoluteX			= object.offsetLeft;
		var nAbsoluteY			= object.offsetTop;
		// alert ("nAbsoluteX = " + nAbsoluteX + " nAbsoluteY = " + nAbsoluteY);
		
	
		
		
		// Seconds
		sTween = "AtomTween.to (" + object.id + ", " + seconds + ", {";
		
		// Delay
		if (arg.delay != null) 		{ sTween += "delay:"+arg.delay + ", "; }
		
		// Opacity
		if (arg.opacity != null) 	{ sTween += "opacity:"+arg.opacity + ", "; }
	
		// X + Y
		if (arg.x != null) 			{ sTween += "x:"+arg.x + ", "; }
		if (arg.y != null) 			{ sTween += "y:"+arg.y + ", "; }
		
		// Scale	
		if (arg.scale != null) 		{ sTween += "scale:"+arg.scale + ", "; }
		
		// Perspective	
		if (arg.perspective != null) { sTween += "perspective:"+arg.perspective + ", "; }
		
		// Rotate	
		if (arg.rotate != null) 		{ sTween += "rotate:"+arg.rotate + ", "; }
		if (arg.rotateY != null) 	{ sTween += "rotateY:"+arg.rotateY + ", "; }
		if (arg.rotateZ != null) 	{ sTween += "rotateZ:"+arg.rotateZ + ", "; }
		
		// Ease
		if (arg.ease != null) 		{ sTween += "ease:'"+arg.ease + "' "; }

		
		sTween += "});"
		
		
		trace ("----------------------------------------------------------------------------------------------------");
		trace (sTween);
		
		
		if ( arg.delay == null) {  arg.delay = 0 }
		
			
		
			
	   aTweens.push( nTweenID = setTimeout(function(){
	  
		  // --------------------------------------------------
		  // Transition
		  // --------------------------------------------------
		  
		  // CssUtil.applyCssWithBrowserPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
		  
		  
		  if (arg.ease == null) { arg.ease == 'linear'; }
		  
		   CssUtil.applyCssWithBrowserPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
		   

		  // --------------------------------------------------
		  // Perspective
		  // --------------------------------------------------
	  
		  if (arg.perspective != null) {
			  trace ("••• >> perspective");
			  CssUtil.applyCssWithBrowserPrefix(object,'perspective', arg.perspective + 'px');		  
		  }
		  
		  // Transition
		  // CssUtil.applyCssWithBrowserPrefix(object,'transition-property','all ' + seconds + 's ' + arg.ease);
		  
		  // --------------------------------------------------
		  // Property: Opacity
		  // --------------------------------------------------
	  
		  if (arg.opacity != null) {
			  trace (">> Opacity");
			  CssUtil.applyCssWithBrowserPrefix(object,'opacity', arg.opacity); 
			  // object.style.opacity = arg.x;
		  }
		  
		  // --------------------------------------------------
		  // Property: Left
		  // --------------------------------------------------
	  	
		  if (arg.left != null) {
			  trace (">> Left");
			  CssUtil.applyCssWithBrowserPrefix(object,'left', arg.left + 'px');
			  // object.style.left = arg.x + 'px';
		  }
		  
		  // --------------------------------------------------
		  // Property: Top
		  // --------------------------------------------------
		  
		  if (arg.top != null) {
			  trace (">> Top");
			  CssUtil.applyCssWithBrowserPrefix(object,'top', arg.top + 'px'); 
		  }
		  
		  // --------------------------------------------------
		  // Property: Width
		  // --------------------------------------------------
		  
		  if (arg.width != null) {
			  trace (">> Width");
			  CssUtil.applyCssWithBrowserPrefix(object,'width', arg.width + 'px'); 
		  }
		  
		  // --------------------------------------------------
		  // Property: Height
		  // --------------------------------------------------
		  
		  if (arg.height != null) {
			  trace (">> Height");
			  CssUtil.applyCssWithBrowserPrefix(object,'height', arg.height + 'px'); 
		  }
		  
		   // --------------------------------------------------
		  // Transform: TranslateX 
		  // --------------------------------------------------
	  
		  if (arg.x != null) {
			  trace (">> x");
			  var x = arg.x - nAbsoluteX;
			  sTransformSetting += 'translateX('+ x + 'px) ';
		  }
		  
		  // --------------------------------------------------
		  // Transform: TranslateY 
		  // --------------------------------------------------
		  
		  if (arg.y != null) {
			  trace (">> y");
			  var y = arg.y - nAbsoluteY;
			  sTransformSetting += 'translateY('+ y + 'px) ';
		  }
		  
		  // --------------------------------------------------
		  // Transform: Rotate
		  // --------------------------------------------------
	  
		  if (arg.rotate != null) {
			  trace ("••• >> rotate");
			  sTransformSetting +=  'rotate('+arg.rotate + 'deg) ';
			  	  
		  }
		  
		  // --------------------------------------------------
		  // Transform: RotateX
		  // --------------------------------------------------
	  
		  if (arg.rotateX != null) {
			  trace ("••• >> rotateX");
			  sTransformSetting += 'rotateX('+arg.rotateX + 'deg) ';	  
		  }
		  
		  // --------------------------------------------------
		  // Transform: RotateY
		  // --------------------------------------------------
	  
		  if (arg.rotateY != null) {
			  trace ("••• >> rotateY");
			  sTransformSetting += 'rotateY('+arg.rotateY + 'deg) ';	  	  
		  }
		  
		  // --------------------------------------------------
		  // Transform: RotateZ
		  // --------------------------------------------------
	  
		  if (arg.rotateZ != null) {
			  trace ("••• >> rotateZ");
			  sTransformSetting += 'rotateZ('+arg.rotateZ + 'deg) ';	  
		  }
		  
		  // --------------------------------------------------
		  // Transform: Scale
		  // --------------------------------------------------
	  
		  if (arg.scale != null) {
			  trace ("••• >> scale");
			  sTransformSetting += 'scale('+arg.scale + ',' + arg.scale + ') ';
		  }
		  
		  // --------------------------------------------------
		  // Transform: Scale
		  // --------------------------------------------------
	  
		  if (arg.shadow != null) {
			  trace ("••• >> shadow");
			  sTransformSetting += 'box-shadow(' + arg.shadow + ') ';
		  }
		  
		  
		  
		  // --------------------------------------------------
		  // Set the final Transform
		  // -------------------------------------------------- 
		  
		  if (sTransformSetting != "") {
			CssUtil.applyCssWithBrowserPrefix(object,'transform', sTransformSetting);  
		  }
		  
		  // --------------------------------------------------
		  // OnComplete : function call
		  // -------------------------------------------------- 
		  
		  if (arg.onComplete != "") {
		  	var nOnCompleteTime 	= ( arg.delay + seconds ) * 1000;
		  	var onCompleteID 		= setTimeout ( arg.onComplete, nOnCompleteTime);
		  }
		  
		  
	  	  /* -------- of AtomTween.to -------- */
	  
	  }, arg.delay * 1000) );
		
		
		
	}
	
	
	// ------------------------------------------------------------
	// AtomTween.shadow' function
	// ------------------------------------------------------------
	
	// AtomTween.shadow (idTest, params:"2px 2px 2px 1px rgba(0, 0, 0, 0.2);" ); 
	
	AtomTween.shadow = function (object, seconds, arg) {
		
		var sTween;
		
		// Seconds
		sTween = "AtomTween.shadow (" + object.id + ", {" + arg.shadow + "}";
		trace ("••• >> Shadow / object = " + object);
		
		if (arg.ease == null) { arg.ease == 'linear'; }
		
		CssUtil.applyCssWithBrowserPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
		CssUtil.applyCssWithBrowserPrefix(object,'box-shadow', arg.shadow);	
		// object.style.boxShadow = params.shadow;
		
		
		
	}
	
	

	
    
    // --------------------------------------------------
	// CSS Util - browser vendor prefixer
    // --------------------------------------------------
    
    
    /**
    * @fileoverview Utility function for working with CSS.
    * @author paulyang@google.com (Paul Yang)
    */


    var CssUtil = {};


    /**
    * An array of browser prefixes. Note that the first element is an empty string.
    * @type {!Array.<string>}
    * @const
    * @private
    */
    CssUtil.aBrowserPrefixes = ['', '-ms-', '-moz-', '-webkit-', '-o-'];

	 /**
    * Applies named CSS property with given value to the provided element.
    * @param {!Element} idElement the element.
    * @param {string} sProperty The property of the css attribute to set.
    * @param {string} sValue The value of the css to set.
    * @param {boolean=} bOptPrefixOnValue Whether or not to add the borwser prefix to the value, too.
    */
    
    CssUtil.applyCssWithBrowserPrefix = function( idElement, sProperty, sValue, bOptPrefixOnValue) {

     for (var i = 0; i < CssUtil.aBrowserPrefixes.length; ++i) {
        try{
            idElement.style[CssUtil.aBrowserPrefixes[i] + sProperty] = (bOptPrefixOnValue ? CssUtil.aBrowserPrefixes[i] : '') + sValue;
			trace ("•••• " + [CssUtil.aBrowserPrefixes[i] + sProperty] + " " + (bOptPrefixOnValue ? CssUtil.aBrowserPrefixes[i] : '') + sValue);
          

       }catch(e){}
     }

    };
	
	
	// --------------------------------------------------
	// Get Elements - get ID or Class
    // --------------------------------------------------
	
	
	AtomTween.getElement = function (element, id) {
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
    
    
    window.AtomTween = AtomTween;
    
    
    
})(window);