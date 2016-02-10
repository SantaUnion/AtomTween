# AtomTween

#### A lightweight and versatile Javascript CSS Animation Engine for Modern Browsers

* Super lightweight 5KB library, ideal for standard HTML5 banners
* Simple API
* Fast and silky smooth CSS animation
* A plethora of animation properties available including 3D transforms and function calls including onStart and onComplete
* Create complex CSS animated sequences with minimal code



## API Example

**AtomTween's** API is modelled on similar lines to [GSAP TweenLite](https://greensock.com/tweenlite) with a few minor differences.


```javascript
// Get element from the DOM
var box1ID = AtomTween.getElement("id", "box1");

// Delay for 2 seconds then apply paramters to several properties over 1 second with an 'ease-in'
AtomTween.to (box1ID, 1, {delay:2, x:500, opacity:0.5, rotate:180, scale:2, ease:"ease-in"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=01_example&mode=html5' target='blank'>example</a>*

## Usage & Techniques
<a href="#techniques">Sequencing and loops</a>,
<a href="#pixel-fitting">Pixel Fitting</a>

## Properties
<a href="#delay">delay</a>,
<a href="#opacity">opacity</a>,
<a href="#left">left</a>,
<a href="#top">top</a>,
<a href="#width">width</a>,
<a href="#height">height</a>,
<a href="#scale">scale</a>,
<a href="#rotate">rotate</a>,
<a href="#x">x</a>,
<a href="#y">y</a>,
<a href="#transformorigin">transformOrigin</a>,
<a href="#skewx">skewX</a>,
<a href="#skewy">skewY</a>,
<a href="#skew">skew</a>,
<a href="#perspective">perspective</a>,
<a href="#rotatex">rotateX</a>,
<a href="#rotatey">rotateY</a>,
<a href="#rotatez">rotateZ</a>,
<a href="#translatex">translateX</a>,
<a href="#translatey">translateY</a>,
<a href="#translatez">translateZ</a>,
<a href="#shadow">shadow</a>,
<a href="#oncomplete">onComplete</a>,
<a href="#onstart">onStart</a>

#### **<span id="delay">delay</span>:**
```javascript
// delay: numerical value in seconds d
// delay the animation on element by 5 seconds
AtomTween.to (box1ID, 1, {delay:5, x:800, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=02_delay&mode=html5' target='blank'>example</a>*


#### **<span id="opacity">opacity</span>:**
```javascript
// opacity: numerical value from 0 to 100
// animate elements opacity to 0 over 5 seconds
AtomTween.to (box1ID, 5, {opacity:0, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=03_opacity&mode=html5' target='blank'>example</a>*


#### **<span id="left">left</span>:**
```javascript
// left: numerical value based on pixels
// animate element 500px left relative to its parent element
AtomTween.to (box1ID, 1, {left:500, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=04_left&mode=html5' target='blank'>example</a>*

#### **<span id="top">top</span>:**
```javascript
// top: numerical value based on pixels
// animate element 230px from the top relative to its parent element
AtomTween.to (box1ID, 1, {top:230, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=05_top&mode=html5' target='blank'>example</a>*


#### **<span id="width">width</span>:**
```javascript
// width: numerical value based on pixels
// animate the width of the element to 700px
AtomTween.to (box1ID, 3, {width:700, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=06_width&mode=html5' target='blank'>example</a>*


#### **<span id="height">height</span>:**
```javascript
// height: numerical value based on pixels
// animate the height of the element to 1500px
AtomTween.to (box1ID, 1, {height:150, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=07_height&mode=html5' target='blank'>example</a>*


#### **<span id="scale">scale</span>:**
```javascript
// scale: numerical value ie. 1 = 100%, 2 = 200%
// animate the scale of the element to 200%
AtomTween.to (box1ID, 3, {scale:2, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=08_scale&mode=html5' target='blank'>example</a>*


#### **<span id="rotate">rotate</span>:**
```javascript
// rotate: angle in degrees
// rotate elelent clockwise by 180° degrees over 3 seconds
AtomTween.to (box1ID, 3, {rotate:180, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=09_rotate&mode=html5' target='blank'>example</a>*


#### **<span id="x">x</span>:**
```javascript
// x: numerical value in pixels. Use 'x' in preference to 'top' for smoother css transitions
// animate element 500px on the x-axis relative its parent element
AtomTween.to (box1ID, 1, {x:500, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=10_x&mode=html5' target='blank'>example</a>*


#### **<span id="y">y</span>:**
```javascript
// y: numerical value in pixels. Use 'y' in preference to 'left' for smoother css transitions
// animate element 240px on the y-axis relative its parent element
AtomTween.to (box1ID, 3, {y:240, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=11_y&mode=html5' target='blank'>example</a>*


#### **<span id="transformorigin">transformOrigin</span>:**
```javascript
/* transformOrigin: modify the origin of the transformation point of an element
   acceptable paramters: "100% 0%", "20px 100px", 'top right' */
AtomTween.to (box1, 3, {tranformOrigin:"50% 50%", rotate:90, ease:"linear"});
AtomTween.to (box2, 3, {tranformOrigin:"0% 0%", rotate:90, ease:"linear"});
AtomTween.to (box3, 3, {tranformOrigin:"100% 100%", rotate:90, ease:"linear"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=12_transformOrigin&mode=html5' target='blank'>example</a>*

#### **<span id="skewx">skewX</span>:**
```javascript
// SkewX: string value - angle in degrees plus deg eg. '90deg'
AtomTween.to (box1ID, 4, {skewX:"30deg", ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=13_skewXY&mode=html5' target='blank'>example</a>*


#### **<span id="skewy">skewY</span>:**
```javascript
// SkewY: string value - angle in degrees plus deg eg. '45deg'
AtomTween.to (box2ID, 4, {skewY:"30deg", ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=13_skewXY&mode=html5' target='blank'>example</a>*


#### **<span id="skew">skew</span>:**
```javascript
/* Skew: string value x-angle in degrees plus deg
   separated by comma and y-angle in degrees plus deg eg. '90deg, 30deg' */
AtomTween.to (box3ID, 4, {skew:"30deg, 30deg", ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=13_skewXY&mode=html5' target='blank'>example</a>*


#### **<span id="perspective">perspective</span>:**

```javascript
// perspective: numerical value from 0-2000
// 150 yields extreme perspective, 2000 yields subtle perspective

// Set perspective for div container
AtomTween.to (containerID, 0, {perspective:500});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **<span id="rotatex">rotateX</span>:**
```javascript
// rotateX: angle in degrees
// rotateX clockwise by 90° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateX:90, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **<span id="rotatey">rotateY</span>:**
```javascript
// rotateY: angle in degrees
// rotateY anti-clockwise by 45° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateY:-45, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **<span id="rotatez">rotateZ</span>:**
```javascript
// rotateZ: angle in degrees
// rotateZ clockwise 180° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateZ:180, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **<span id="translatex">translateX</span>:**
```javascript
// translateX: numerical value in pixels
// translateX -50px
AtomTween.to (box1ID, 4, {translateX:-50, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=15_translateXYZ&mode=html5' target='blank'>example</a>*


#### **<span id="translatey">translateY</span>:**
```javascript
// translateY: numerical value in pixels
// translateY 50px
AtomTween.to (box2ID, 4, {translateY:50, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=15_translateXYZ&mode=html5' target='blank'>example</a>*


#### **<span id="translatez">translateZ</span>:**
```javascript
// translateZ: numerical value in pixels
// translateZ -500px
AtomTween.to (box3ID, 4, {translateZ:-500, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=15_translateXYZ&mode=html5' target='blank'>example</a>*

#### **<span id="delayedcall">delayedCall</span>:**
```javascript
// delayedCall: function call and time in seconds
AtomTween.delayedCall (endAnimation, 1);
AtomTween.to (box1ID, 4, {x:500, ease:"ease-out"});
function endAnimation () {  
    AtomTween.to (box2ID, 1, {x:550, ease:"ease-out"});
}
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=16_delayedCall&mode=html5' target='blank'>example</a>*



#### **<span id="shadow">Shadow: boxshadow / textshadow</span>:**
```javascript
// boxshadow: Add shadow to any element: h-shadow v-shadow blur spread color
// textshadow: Adds shadow to text. Applies to text content within div elements: h-shadow v-shadow blur-radius color
AtomTween.shadow (box1ID, 	1, {delay:2, boxshadow:'10px 10px 5px 1px rgba(95, 171, 234, 1)', ease:'ease-in-out'}); 		
AtomTween.shadow (text1ID, 	1, {delay:2, textshadow:'10px 10px 5px rgba(95, 171, 234, 1)', ease:'ease-in-out'});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=17_shadow&mode=html5' target='blank'>example</a>*



### Methods



#### **<span id="oncomplete">onComplete</span>:**
```javascript
// onComplete: call function once element animation has finished
AtomTween.to (box1ID, 2, {delay:0, x:500, onComplete:doSomething, ease:"ease-in-out"});
function doSomething () {
    textID.style.display = "block";
}
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=18_onComplete&mode=html5' target='blank'>example</a>*


#### **<span id="onstart">onStart</span>:**
```javascript
// onStart: call function once element animation has finished
AtomTween.to (box1ID, 2, {delay:3, x:500, onStart:doSomething, ease:"ease-in-out"});
function doSomething () {
    textID.style.display = "block";
}
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=19_onStart&mode=html5' target='blank'>example</a>*

## Techniques

### **<span id="techniques">Sequencing and Loops</span>:**

```javascript
var del = 0;   // delay to sequencing animation
var sp	= 0.5; // set speed of animation
var box1ID = AtomTween.getElement("id", "box1");
var box2ID = AtomTween.getElement("id", "box2");
var box3ID = AtomTween.getElement("id", "box3");

function init() {
		del = 0;
		AtomTween.to (box1ID, 1 * sp, {delay:0, x:375, y:130, scale:1, opacity:1, ease:"ease-in-out"});
		AtomTween.to (box2ID, 1 * sp, {delay:0, x:425, y:130, scale:1, opacity:1, ease:"ease-in-out"});
		AtomTween.to (box3ID, 1 * sp, {delay:0, x:475, y:130, scale:1, opacity:1, onComplete:animate, ease:"ease-in-out"});
}

function animate () {

		AtomTween.to (box1ID, 1 * sp, {delay:del+=1 * sp, x:200, opacity:0.5, rotateY:180, rotateZ:45, scale:2, ease:"ease-in-out"});
		AtomTween.to (box2ID, 1 * sp, {delay:del+=1 * sp, scale:2, x:425, y:130, ease:"ease-in-out"});
		AtomTween.to (box3ID, 1 * sp, {delay:del+=1 * sp, x:800, y:130, rotateX:180, ease:"ease-in-out"});

		// Set some random positions
		AtomTween.to (box1ID, 1 * sp, {delay:del+=1 * sp, x:getRnd(800), y:getRnd(200), ease:"ease-in-out"});
		AtomTween.to (box2ID, 1 * sp, {delay:del+=1 * sp, x:getRnd(800), y:getRnd(200), ease:"ease-in-out"});
		AtomTween.to (box3ID, 1 * sp, {delay:del+=0 * sp, x:getRnd(800), y:getRnd(200), onComplete:init, ease:"ease-in-out"});
}

// get random rumber
function getRnd (n) { return Math.round(Math.random() * n) + 1; }

window.addEventListener('load', init);
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=20_sequencing_and_looping&mode=html5' target='_blank'>example</a>*

### **<span id="pixel-fitting">Pixel-Fitting</span>:**
```javascript
// Smooth transition with x/y
AtomTween.to (xyID, 5, {x:800, y:145, ease:"ease-in-out"});

// Rough jumpy transition with left/top
AtomTween.to (lefttopID, 5, {left:800, top:225, ease:"ease-in-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=21_x_y_versus_left_top&mode=html5' target='_blank'>example</a>*





Copyright (c) 2016, Santa Union Ltd.
