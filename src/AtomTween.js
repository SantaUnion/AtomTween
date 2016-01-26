/* 	
		AtomTween (Beta v0.19 2015)
		Code by:
		Lee Redmond 
		lee@santaunion.co.uk
		
        Description: - Super light weight CSS animation engine for modern browsers
					 - API similar to Greensock TweenNano for Flash! Remember that?
					 - however this heavily uses setTimout to apply CSS properties and transforms to objects.
					 - Please use with caution - this is by not means as advanced or robust as GSAP but is 
					   a good solution to achieve very lightweight animation sequences
		beta.v16 	-  KillAllTweens - not working
					-  KillTween (obj) - working on most common properties
					-  Transforms are string concatenated allowing for multiple transforms on a single object
					-  OnComplete function 
		beta.v17	-  left/top animation method changed to translateX and TranslateY which ensures smoother transitions
					   and effective used of GPU - works well on Chrome - see http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
					   also pixel fitting - http://dcurt.is/pixel-fitting
		beta.v18	-  Left / Top properties are now distrinct from TranslateX / TranslateY and can now be addressed directly through the API
		beta.v19	-  Delaycall function added
		
*/
     
// Anonymous self-executing function	 

var	AtomTween 		= {};
var	aTweens 			= [];
var	aElementID		= [];
var	nTweenID;

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
		
		aElementID.push(object.id);
		var sTween 				= "";
		var sTransformSetting	= "";
		var nAbsoluteX			= object.offsetLeft;
		var nAbsoluteY			= object.offsetTop;
		
		// Seconds
		sTween = "AtomTween.to ( " + object.id + ", " + seconds + ", {";
		if (arg.delay != null) 		{ sTween += "delay:"+arg.delay + ", "; }
		if (arg.opacity != null) 	{ sTween += "opacity:"+arg.opacity + ", "; }
		if (arg.x != null) 			{ sTween += "x:"+arg.x + ", "; }
		if (arg.y != null) 			{ sTween += "y:"+arg.y + ", "; }
		if (arg.scale != null) 		{ sTween += "scale:"+arg.scale + ", "; }
		if (arg.perspective != null) { sTween += "perspective:"+arg.perspective + ", "; }
		if (arg.rotate != null) 		{ sTween += "rotate:"+arg.rotate + ", "; }
		if (arg.rotateY != null) 	{ sTween += "rotateY:"+arg.rotateY + ", "; }
		if (arg.rotateZ != null) 	{ sTween += "rotateZ:"+arg.rotateZ + ", "; }
		if (arg.ease != null) 		{ sTween += "ease:'"+arg.ease + "' "; }
		sTween += "});"
		
		trace ("----------------------------------------------------------------------------------------------------");
		trace (sTween);
		
		if ( arg.delay == null) {  arg.delay = 0 }
		
			
	   	aTweens.push( nTweenID = setTimeout(function(){
	  
		  // --------------------------------------------------
		  // Transition
		  // --------------------------------------------------
		  
		  if (arg.ease == null) { arg.ease == 'linear'; }
		  
		  CssUtil.applyCssWithBrowserPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
		   

		  // --------------------------------------------------
		  // Perspective
		  // --------------------------------------------------
	  
		  if (arg.perspective != null) {
			  trace (">> perspective");
			  CssUtil.applyCssWithBrowserPrefix(object,'perspective', arg.perspective + 'px');		  
		  }
		  
		  // --------------------------------------------------
		  // Property: Opacity
		  // --------------------------------------------------
	  
		  if (arg.opacity != null) {
			  trace (">> Opacity");
			  CssUtil.applyCssWithBrowserPrefix(object,'opacity', arg.opacity); 
		  }
		  
		  // --------------------------------------------------
		  // Property: Left
		  // --------------------------------------------------
	  	
		  if (arg.left != null) {
			  trace (">> Left");
			  CssUtil.applyCssWithBrowserPrefix(object,'left', arg.left + 'px');
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
			  trace (">> rotate");
			  sTransformSetting +=  'rotate('+arg.rotate + 'deg) ';
		  }
		  
		  // --------------------------------------------------
		  // Transform: RotateX
		  // --------------------------------------------------
	  
		  if (arg.rotateX != null) {
			  trace (">> rotateX");
			  sTransformSetting += 'rotateX('+arg.rotateX + 'deg) ';	  
		  }
		  
		  // --------------------------------------------------
		  // Transform: RotateY
		  // --------------------------------------------------
	  
		  if (arg.rotateY != null) {
			  trace (">> rotateY");
			  sTransformSetting += 'rotateY('+arg.rotateY + 'deg) ';	  	  
		  }
		  
		  // --------------------------------------------------
		  // Transform: RotateZ
		  // --------------------------------------------------
	  
		  if (arg.rotateZ != null) {
			  trace (">> rotateZ");
			  sTransformSetting += 'rotateZ('+arg.rotateZ + 'deg) ';	  
		  }
		  
		  // --------------------------------------------------
		  // Transform: Scale
		  // --------------------------------------------------
	  
		  if (arg.scale != null) {
			  trace (">> scale");
			  sTransformSetting += 'scale('+arg.scale + ',' + arg.scale + ') ';
		  }
		  
		  // --------------------------------------------------
		  // Transform: Shadow
		  // --------------------------------------------------
	  
		  if (arg.shadow != null) {
			  trace (">> shadow");
			  sTransformSetting += 'box-shadow(' + arg.shadow + ') ';
		  }
		  
		  // --------------------------------------------------
		  // Transform: Origin
		  // --------------------------------------------------
	  
		  if (arg.tranformOrigin != null) {
			  console.log ('>>>> transform-origin(' + arg.tranformOrigin + ' ');
			  // sTransformSetting += 'transform-origin:' + arg.tranformOrigin + ' ';
			  CssUtil.applyCssWithBrowserPrefix(object,'transform-origin', arg.tranformOrigin);
		  }
		  
		  
		  
		 
		  
		  
		  // --------------------------------------------------
		  // Set the final Transform
		  // -------------------------------------------------- 
		  
		  if (sTransformSetting != "") {
			CssUtil.applyCssWithBrowserPrefix(object,'transform', sTransformSetting);  
		  }
		  
		  // --------------------------------------------------
		  // onStart : function call
		  // -------------------------------------------------- 
		  
		  if (arg.onStart != "") {
		  	var onStartID 	= setTimeout ( arg.onStart, 20);
		  }
		  
		  
		   // --------------------------------------------------
		  // OnComplete : function call
		  // -------------------------------------------------- 
		  
		  if (arg.onComplete != "") {
		  	var nOnCompleteTime 	= ( arg.delay + seconds ) * 1000;
		  	var onCompleteID 	= setTimeout ( arg.onComplete, nOnCompleteTime);
		  }
		  
		  
		
	  	  /* -------- of AtomTween.to -------- */
	  
	  }, arg.delay * 1000));
		
		
		
	}
	
	
	
	// ------------------------------------------------------------
	// AtomTween.shadow' function
	// ------------------------------------------------------------
	
	// AtomTween.shadow (idShadow, 	1, {delay:0, boxshadow:'5px 5px 5px 1px rgba(100, 100, 100, 1)', ease:'ease-in-out'}); 
	// AtomTween.shadow (idShadow, 	1, {delay:0, textshadow:'10px 5px 5px 1px rgba(0, 255, 0, 1)', ease:'ease-in-out'}); 
	
	AtomTween.shadow = function (object, seconds, arg) {
		
		if ( arg.delay == null) 	{ arg.delay = 0 }
		
		aTweens.push( nTweenID = setTimeout(function(){
			
			if (arg.ease == null) 	{ arg.ease == 'linear' }
			
			// Seconds
			sTween = "AtomTween.shadow (" + object.id + ", {" + arg.boxshadow + "}";
			trace ("••• >> Shadow / object = " + object);
			
			if (arg.boxshadow != null) {
				// alert ("boxshadow");
				CssUtil.applyCssWithBrowserPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
				CssUtil.applyCssWithBrowserPrefix(object,'box-shadow', arg.boxshadow);	
			}
			
			if (arg.textshadow != null) {
				// alert ("textshadow");
				CssUtil.applyCssWithBrowserPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
				CssUtil.applyCssWithBrowserPrefix(object,'text-shadow', arg.textshadow);	
			}
		
		}, arg.delay * 1000));
	
	}
	
	
	// ------------------------------------------------------------
	// AtomTween.kill  function - kill individual tween
	// ------------------------------------------------------------
	
	
	AtomTween.kill = function (object,delay) {
		
		// CssUtil.applyCssWithBrowserPrefix(object,'transition','none !important');
		
		setTimeout(function(){
			// alert (object.id);	
			//
			CssUtil.applyCssWithBrowserPrefix(object,'transform','none');
			// CssUtil.applyCssWithBrowserPrefix(object,'transition','none');
			// CssUtil.applyCssWithBrowserPrefix(object,'animation-play-state','paused');
			// CssUtil.applyCssWithBrowserPrefix(object,'animation','0');
			
			CssUtil.applyCssWithBrowserPrefix(object,'transition-property','none !important');
			 CssUtil.applyCssWithBrowserPrefix(object,'transition','none');
			 
			 
			
		}, delay * 1000);
		
	}
	
	
	
	// ------------------------------------------------------------
	// AtomTween.KillAll  function - kill all tweens
	// ------------------------------------------------------------
	
	AtomTween.killAll = function () {
	
		trace (">> f:killAll tweens");	
		
		for (var i = 0; i < aTweens.length; i++) {
			window.clearTimeout(aTweens[i]);
			trace ( aTweens[i]);
			aTweens[i] = null;
		}
		//quick reset of the timer array you just cleared
		aTweens = [];
				
		
		
	}
	
	
	// ------------------------------------------------------------
	// AtomTween.KillTween function - kill tween on object
	// ------------------------------------------------------------
	/*
	AtomTween.KillTween = function (object) {
	
	  // Get Current Property Values
	  var computedStyle 		= window.getComputedStyle(object);
	  var nWidth 			= computedStyle.getPropertyValue('width');
	  var nHeight 			= computedStyle.getPropertyValue('height');
	  var nLeft 				= computedStyle.getPropertyValue('left');
	  var nTop 				= computedStyle.getPropertyValue('top');
	  var nOpacity 			= computedStyle.getPropertyValue('opacity');
	  var nScale 			= computedStyle.getPropertyValue('scale');
	 
	  // Set Current Property Values
	  object.style.width 	= nWidth;
	  object.style.height 	= nHeight;
	  object.style.left 		= nLeft;
	  object.style.top 		= nTop;
	  object.style.opacity 	= nOpacity;
	  object.style.scaleX 	= nScale;
	  object.style.scaleY 	= nScale;
	
	 
		var st = window.getComputedStyle(object, null);
		var tr = st.getPropertyValue("-webkit-transform") ||
				 st.getPropertyValue("-moz-transform") ||
				 st.getPropertyValue("-ms-transform") ||
				 st.getPropertyValue("-o-transform") ||
				 st.getPropertyValue("transform") ||
				 "FAIL";
		
		// With rotate(30deg)...
		// matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
		console.log('Matrix: ' + tr);
		// rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
		
		// var values = tr.split('(')[1].split(')')[0].split(',');
		
		var values = tr.split('(')[1],
    	values = values.split(')')[0],
    	values = values.split(',');
		
		
		var a = values[0];
		var b = values[1];
		var c = values[2];
		var d = values[3];
		
		// ---------------------
		// Scale
		// ---------------------
		var scale = Math.sqrt(a*a + b*b);
		CssUtil.applyCssWithBrowserPrefix(object,'transform', 'scale('+ scale + ',' + scale + ')');
		var sScaleSetting = 'scale('+ scale + ',' + scale + ') ';
	
		// ---------------------	
		// Rotate
		// ---------------------
		// arc sin, convert from radians to degrees, round
		var sin = b/scale;
		// next line works for 30deg but not 130deg (returns 50);
		// var angle = Math.round(Math.asin(sin) * (180/Math.PI));
		var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
		// var angle = Math.round(Math.asin(sin) * (180/Math.PI));
		CssUtil.applyCssWithBrowserPrefix(object,'transform', 'rotate('+ angle + 'deg)');	
		
		var sRotateSetting = 'rotate('+ angle + 'deg) ';
		
		CssUtil.applyCssWithBrowserPrefix(object,'transform', sScaleSetting + sRotateSetting);

	
	}
	*/
	
	
	
    
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
			// trace ("•••• " + [CssUtil.aBrowserPrefixes[i] + sProperty] + " " + (bOptPrefixOnValue ? CssUtil.aBrowserPrefixes[i] : '') + sValue);
          

       }catch(e){}
     }

    };
	
	
	// --------------------------------------------------
	// Get Elements - get ID or Class
    // --------------------------------------------------
	
	
	AtomTween.getElement = function (element, id) {
	  //trace(element + "  " + id);
	  trace (">> f:getElement: " + element + ":"+ id);
	  
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