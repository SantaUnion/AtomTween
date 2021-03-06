/**
	* @author					Lee Redmond <lee@santaunion.co.uk>
	* @title					AtomTween
	* @version				2.0
	* @since					2015-07-04
	* @github					https://github.com/SantaUnion/AtomTween
	* @description		A lightweight and versatile Javascript CSS Animation Engine for Modern Browsers
	* @api						AtomTween API is similar to GSAP TweenLite
	* example					var myID = AtomTween.getElement("id", "myDiv");
										AtomTween.to (myID, 4, {delay:1, y:92, x:104, width:300, height:20, scale:2, rotate:30, opacity:0.25, ease:"ease-in-out"});

 * 2.0 Features			1. Mulitple objects in an array can  be sent to animate eg 	AtomTween.to ([id1, id2, id3] , 4, {x:800, ease:"ease-out"});
										2. Set Function: AtomTween.set ([id1, id2, id3], {x:800, ease:"ease-out"});

   2.0 Bug Fixes		1. Bug Fixed on Mulitple objects using onStart and onComplete.
	 									2. onStart and onComplete accurately animated with delays

*/



// Anonymous self-executing function

var	AtomTween 		= {};
var	aTweens 			= [];
var	aElementID		= [];
var	nTweenID;
var bAtomTrace 		= false; // display AtomTrace

(function(window) {


	 // ------------------------------------------------------------
	// AtomTween.delayedCall function
	// ------------------------------------------------------------

	AtomTween.delayedCall = function (functName, seconds) {

		AtomTrace (">> delayedCall: " + functName + ", " + seconds);
		var miliseconds		= seconds * 1000;
		var delayCallID 		= setTimeout ( functName, miliseconds);
	}

 	// ------------------------------------------------------------
	// AtomTween.to' function
	// ------------------------------------------------------------

	AtomTween.to = function (object, seconds, arg) {

		isArray = Array.isArray(object);

		if (isArray == false) {
			object = [object];
		}

    var aObjects = object.length;
		for (i=0; i < aObjects; i++) {
      animate (object[i], seconds, arg);
		}

	}

	// ------------------------------------------------------------
	// AtomTween.set' function
	// ------------------------------------------------------------

	AtomTween.set = function (object, arg) {

		isArray = Array.isArray(object);

		arg.delay = 0;

		if (isArray == false) {
			object = [object];
		}

		var aObjects = object.length;
		for (i=0; i < aObjects; i++) {

			CssUtil.cssVendorPrefix(object[i],'transition','none !important');
			animate (object[i], 0, arg);

		}

	}

	// ------------------------------------------------------------
	// animate function
	// ------------------------------------------------------------


  function animate (object, seconds, arg) {

    aElementID.push(object.id);
    var sTween = "";
    var sTransformSetting	= "";
    var nAbsoluteX = object.offsetLeft;
    var nAbsoluteY = object.offsetTop;

    // Seconds
    sTween = "AtomTween.to ( " + object.id + ", " + seconds + ", {";
    if (arg.delay != null) { sTween += "delay:"+arg.delay + ", "; }
    if (arg.opacity != null) { sTween += "opacity:"+arg.opacity + ", "; }
    if (arg.x != null) { sTween += "x:"+arg.x + ", "; }
    if (arg.y != null) { sTween += "y:"+arg.y + ", "; }
    if (arg.scale != null) { sTween += "scale:"+arg.scale + ", "; }
    if (arg.perspective != null) { sTween += "perspective:"+arg.perspective + ", "; }
    if (arg.rotate != null) { sTween += "rotate:"+arg.rotate + ", "; }
    if (arg.rotateY != null) { sTween += "rotateY:"+arg.rotateY + ", "; }
    if (arg.rotateZ != null) { sTween += "rotateZ:"+arg.rotateZ + ", "; }
    if (arg.ease != null) { sTween += "ease:'"+arg.ease + "' "; }
    sTween += "});"

    AtomTrace ("--------------------------------------------------------------------");
    AtomTrace (sTween);

    if ( arg.delay == null) {  arg.delay = 0 }


      aTweens.push( nTweenID = setTimeout(function(){

      // --------------------------------------------------
      // Transition
      // --------------------------------------------------

      if (arg.ease == null) { arg.ease == 'linear'; }

      CssUtil.cssVendorPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);


      // --------------------------------------------------
      // Perspective
      // --------------------------------------------------

      if (arg.perspective != null) {
        AtomTrace (">> perspective");
        CssUtil.cssVendorPrefix(object,'perspective', arg.perspective + 'px');
      }

      // --------------------------------------------------
      // Property: Opacity
      // --------------------------------------------------

      if (arg.opacity != null) {
        AtomTrace (">> Opacity");
        CssUtil.cssVendorPrefix(object,'opacity', arg.opacity);
      }

      // --------------------------------------------------
      // Property: Left
      // --------------------------------------------------

      if (arg.left != null) {
        AtomTrace (">> Left");
        CssUtil.cssVendorPrefix(object,'left', arg.left + 'px');
      }

      // --------------------------------------------------
      // Property: Top
      // --------------------------------------------------

      if (arg.top != null) {
        AtomTrace (">> Top");
        CssUtil.cssVendorPrefix(object,'top', arg.top + 'px');
      }

      // --------------------------------------------------
      // Property: Width
      // --------------------------------------------------

      if (arg.width != null) {
        AtomTrace (">> Width");
        CssUtil.cssVendorPrefix(object,'width', arg.width + 'px');
      }

      // --------------------------------------------------
      // Property: Height
      // --------------------------------------------------

      if (arg.height != null) {
        AtomTrace (">> Height");
        CssUtil.cssVendorPrefix(object,'height', arg.height + 'px');
      }



       // --------------------------------------------------
      // Transform: TranslateX
      // --------------------------------------------------

      if (arg.x != null) {
        AtomTrace (">> x");
        var x = arg.x - nAbsoluteX;
        sTransformSetting += 'translateX('+ x + 'px) ';
      }

      // --------------------------------------------------
      // Transform: TranslateY
      // --------------------------------------------------

      if (arg.y != null) {
        AtomTrace (">> y");
        var y = arg.y - nAbsoluteY;
        sTransformSetting += 'translateY('+ y + 'px) ';
      }

      // --------------------------------------------------
      // Transform: Rotate
      // --------------------------------------------------

      if (arg.rotate != null) {
        AtomTrace (">> rotate");
        sTransformSetting +=  'rotate('+arg.rotate + 'deg) ';
      }

      // --------------------------------------------------
      // Transform: RotateX
      // --------------------------------------------------

      if (arg.rotateX != null) {
        AtomTrace (">> rotateX");
        sTransformSetting += 'rotateX('+arg.rotateX + 'deg) ';
      }

      // --------------------------------------------------
      // Transform: RotateY
      // --------------------------------------------------

      if (arg.rotateY != null) {
        AtomTrace (">> rotateY");
        sTransformSetting += 'rotateY('+arg.rotateY + 'deg) ';
      }

      // --------------------------------------------------
      // Transform: RotateZ
      // --------------------------------------------------

      if (arg.rotateZ != null) {
        AtomTrace (">> rotateZ");
        sTransformSetting += 'rotateZ('+arg.rotateZ + 'deg) ';
      }


      // --------------------------------------------------
      // Transform: translateX
      // --------------------------------------------------

      if (arg.translateX != null) {
        AtomTrace (">> translateX");
        sTransformSetting += 'translateX('+arg.translateX + 'px) ';
      }

      // --------------------------------------------------
      // Transform: translateY
      // --------------------------------------------------

      if (arg.translateY != null) {
        AtomTrace (">> translateY");
        sTransformSetting += 'translateY('+arg.translateY + 'px) ';
      }

      // --------------------------------------------------
      // Transform: translateZ
      // --------------------------------------------------

      if (arg.translateZ != null) {
        AtomTrace (">> translateZ");
        sTransformSetting += 'translateZ('+arg.translateZ + 'px) ';
      }

      // --------------------------------------------------
      // Transform: SkewX
      // --------------------------------------------------

      if (arg.skewX != null) {
        AtomTrace (">> skewX");
        sTransformSetting += 'skewX('+arg.skewX + ') ';
      }

      // --------------------------------------------------
      // Transform: SkewY
      // --------------------------------------------------

      if (arg.skewY != null) {
        AtomTrace (">> skewY");
        sTransformSetting += 'skewY('+arg.skewY + ') ';
      }


      // --------------------------------------------------
      // Transform: Skew
      // --------------------------------------------------

      if (arg.skew != null) {
        AtomTrace (">> skew");
        sTransformSetting += 'skew('+arg.skew + ') ';
      }

      // --------------------------------------------------
      // Transform: Scale
      // --------------------------------------------------

      if (arg.scale != null) {
        AtomTrace (">> scale");
        sTransformSetting += 'scale('+arg.scale + ',' + arg.scale + ') ';
      }

      // --------------------------------------------------
      // Transform: Shadow
      // --------------------------------------------------

      if (arg.shadow != null) {
        AtomTrace (">> shadow");
        sTransformSetting += 'box-shadow(' + arg.shadow + ') ';
      }

      // --------------------------------------------------
      // Transform: Origin
      // --------------------------------------------------

      if (arg.tranformOrigin != null) {
        AtomTrace ('>>>> transform-origin(' + arg.tranformOrigin + ' ');
        // sTransformSetting += 'transform-origin:' + arg.tranformOrigin + ' ';
        CssUtil.cssVendorPrefix(object,'transform-origin', arg.tranformOrigin);
      }


      // --------------------------------------------------
      // Set the final Transform
      // --------------------------------------------------

      if (sTransformSetting != "") {
      CssUtil.cssVendorPrefix(object,'transform', sTransformSetting);
      }

      // --------------------------------------------------
      // onStart : function call
      // --------------------------------------------------

      if (arg.onStart != "" && arg.bStart == undefined) {
				 AtomTrace (">>> arg.bStart = " + arg.bStart );
				 arg.bStart = true;
        var onStartID 	= setTimeout ( arg.onStart, 20);
      }


      // --------------------------------------------------
      // OnComplete : function call
      // --------------------------------------------------

      if (arg.onComplete != "" && arg.bComplete == undefined) {
				AtomTrace (">>> arg.bComplete = " + arg.bComplete );
				arg.bComplete = true;
        // var nOnCompleteTime 	= ( arg.delay + seconds ) * 1000;
        var nOnCompleteTime 	= ( seconds ) * 1000;


				var test = arg.delay + seconds;
				// console.log ("delay = " + test);

        var onCompleteID 	= setTimeout ( arg.onComplete, nOnCompleteTime);
      }



        /* -------- end of AtomTween.to -------- */

    }, arg.delay * 1000));




  }



	/*
	------------------------------------------------------------
	>>> AtomTween.shadow' function
	------------------------------------------------------------

	Example:
	AtomTween.shadow (idShadow, 	1, {delay:0, boxshadow:'5px 5px 5px 1px rgba(100, 100, 100, 1)', ease:'ease-in-out'});
	AtomTween.shadow (idShadow, 	1, {delay:0, textshadow:'10px 5px 5px 1px rgba(0, 255, 0, 1)', ease:'ease-in-out'});

	------------------------------------------------------------
	*/


	AtomTween.shadow = function (object, seconds, arg) {

		if ( arg.delay == null) 	{ arg.delay = 0 }

		aTweens.push( nTweenID = setTimeout(function(){

			if (arg.ease == null) 	{ arg.ease == 'linear' }

			// Seconds
			sTween = "AtomTween.shadow (" + object.id + ", {" + arg.boxshadow + "}";
			AtomTrace ("••• >> Shadow / object = " + object);

			if (arg.boxshadow != null) {
				// alert ("boxshadow");
				CssUtil.cssVendorPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
				CssUtil.cssVendorPrefix(object,'box-shadow', arg.boxshadow);
			}

			if (arg.textshadow != null) {
				// alert ("textshadow");
				CssUtil.cssVendorPrefix(object,'transition','all ' + seconds + 's ' + arg.ease);
				CssUtil.cssVendorPrefix(object,'text-shadow', arg.textshadow);
			}

		}, arg.delay * 1000));

	}

	/*
	------------------------------------------------------------
	>>> AtomTween.kill  function - kill individual tween
	------------------------------------------------------------
	*/

	AtomTween.kill = function (object,delay) {

		// CssUtil.cssVendorPrefix(object,'transition','none !important');

		setTimeout(function(){
			// alert (object.id);
			//
			CssUtil.cssVendorPrefix(object,'transform','none');
			// CssUtil.cssVendorPrefix(object,'transition','none');
			// CssUtil.cssVendorPrefix(object,'animation-play-state','paused');
			// CssUtil.cssVendorPrefix(object,'animation','0');

			CssUtil.cssVendorPrefix(object,'transition-property','none !important');
			 CssUtil.cssVendorPrefix(object,'transition','none');

		}, delay * 1000);

	}


	/*
	------------------------------------------------------------
	>>> AtomTween.KillAll  function - kill all tweens
	------------------------------------------------------------
	*/

	AtomTween.killAll = function () {

		AtomTrace (">> f:killAll tweens");

		for (var i = 0; i < aTweens.length; i++) {
			window.clearTimeout(aTweens[i]);
			AtomTrace ( aTweens[i]);
			aTweens[i] = null;
		}
		//quick reset of the timer array you just cleared
		aTweens = [];



	}

	/*
	------------------------------------------------------------
	>>> AtomTween.KillTween function - kill tween on object
	------------------------------------------------------------
	*/

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
		AtomTrace('Matrix: ' + tr);
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
		CssUtil.cssVendorPrefix(object,'transform', 'scale('+ scale + ',' + scale + ')');
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
		CssUtil.cssVendorPrefix(object,'transform', 'rotate('+ angle + 'deg)');

		var sRotateSetting = 'rotate('+ angle + 'deg) ';

		CssUtil.cssVendorPrefix(object,'transform', sScaleSetting + sRotateSetting);


	}
	*/


    /*
    --------------------------------------------------
	>>> CSS Util - css vendor prefixer
    --------------------------------------------------
    */

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

    CssUtil.cssVendorPrefix = function( idElement, sProperty, sValue, bOptPrefixOnValue) {

     for (var i = 0; i < CssUtil.aBrowserPrefixes.length; ++i) {
        try{
            idElement.style[CssUtil.aBrowserPrefixes[i] + sProperty] = (bOptPrefixOnValue ? CssUtil.aBrowserPrefixes[i] : '') + sValue;
			// AtomTrace (">>> " + [CssUtil.aBrowserPrefixes[i] + sProperty] + " " + (bOptPrefixOnValue ? CssUtil.aBrowserPrefixes[i] : '') + sValue);


       }catch(e){}
     }

    };


	// --------------------------------------------------
	// Get Elements - get ID or Class
  // --------------------------------------------------


	AtomTween.getElement = function (element, id) {
	  //AtomTrace(element + "  " + id);
	  AtomTrace (">> f:getElement: " + element + ":"+ id);

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
	// AtomTrace == console
    // --------------------------------------------------

	function AtomTrace(msg){
		if (bAtomTrace) {
  			console.log (msg);
		}
	}

	// --------------------------------------------------
	// Expose to function scope to the window
    // --------------------------------------------------


    window.AtomTween = AtomTween;



})(window);
