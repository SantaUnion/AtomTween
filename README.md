# AtomTween

#### A lightweight and versatile Javascript CSS Animation Engine for Modern Browsers

* Super lightweight 3KB library, ideal for standard HTML5 banners
* Simple API
* Fast and silky smooth CSS animation
* A plethora of animation properties available including 3D transforms and methods including onStart and onComplete
* Create complex animation sequences with minimal code



## API Example

**AtomTween's** API is modelled on similar lines to [GSAP TweenLite](https://greensock.com/tweenlite) with a few minor differences.


```javascript
// Get element from the DOM
var box1ID = AtomTween.getElement("id", "box1");

// Delay for 2 seconds then apply paramters to several properties over 1 second with an 'ease-in'
AtomTween.to (box1ID, 1, {delay:2, x:500, opacity:0.5, rotate:180, scale:2, ease:"ease-in"});
```

*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=01_example&mode=html5' target='blank'>example</a>*


### Properties

#### **delay:**
```javascript
// delay: numerical value in seconds
// delay the animation on element by 5 seconds
AtomTween.to (box1ID, 1, {delay:5, x:800, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=02_delay&mode=html5' target='blank'>example</a>*


#### **opacity:**
```javascript
// opacity: numerical value from 0 to 100
// animate elements opacity to 0 over 5 seconds
AtomTween.to (box1ID, 5, {opacity:0, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=03_opacity&mode=html5' target='blank'>example</a>*


#### **left:**
```javascript
// left: numerical value based on pixels
// animate element 500px left relative to its parent element
AtomTween.to (box1ID, 1, {left:500, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=04_left&mode=html5' target='blank'>example</a>*


#### **top:**
```javascript
// top: numerical value based on pixels
// animate element 230px from the top relative to its parent element
AtomTween.to (box1ID, 1, {top:230, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=05_top&mode=html5' target='blank'>example</a>*


#### **width:**
```javascript
// width: numerical value based on pixels
// animate the width of the element to 700px
AtomTween.to (box1ID, 3, {width:700, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=06_width&mode=html5' target='blank'>example</a>*


#### **height:**
```javascript
// height: numerical value based on pixels
// animate the height of the element to 1500px
AtomTween.to (box1ID, 1, {height:150, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=07_height&mode=html5' target='blank'>example</a>*


#### **scale:**
```javascript
// scale: numerical value ie. 1 = 100%, 2 = 200%
// animate the scale of the element to 200%
AtomTween.to (box1ID, 3, {scale:2, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=08_scale&mode=html5' target='blank'>example</a>*


#### **rotate:**
```javascript
// rotate: angle in degrees
// rotate elelent clockwise by 180° degrees over 3 seconds
AtomTween.to (box1ID, 3, {rotate:180, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=09_rotate&mode=html5' target='blank'>example</a>*


#### **x:**
```javascript
// x: numerical value in pixels. Use 'x' in preference to 'top' for smoother css transitions
// animate element 500px on the x-axis relative its parent element
AtomTween.to (box1ID, 1, {x:500, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=10_x&mode=html5' target='blank'>example</a>*


#### **y:**
```javascript
// y: numerical value in pixels. Use 'y' in preference to 'left' for smoother css transitions
// animate element 240px on the y-axis relative its parent element
AtomTween.to (box1ID, 3, {y:240, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=11_y&mode=html5' target='blank'>example</a>*


#### **transformOrigin:**
```javascript
// transformOrigin: modify the origin of the transformation point of an element
// acceptable paramters: "100% 0%", "20px 100px", 'top right'
AtomTween.to (box1, 3, {tranformOrigin:"50% 50%", rotate:90, ease:"linear"});
AtomTween.to (box2, 3, {tranformOrigin:"0% 0%", rotate:90, ease:"linear"});
AtomTween.to (box3, 3, {tranformOrigin:"100% 100%", rotate:90, ease:"linear"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=12_transformOrigin&mode=html5' target='blank'>example</a>*

#### **SkewX:**
```javascript
// SkewX: string value - angle in degrees plus deg eg. '90deg'
AtomTween.to (box1ID, 4, {skewX:"30deg", ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=13_skewXY&mode=html5' target='blank'>example</a>*


#### **SkewY:**
```javascript
// SkewY: string value - angle in degrees plus deg eg. '45deg'
AtomTween.to (box2ID, 4, {skewY:"30deg", ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=13_skewXY&mode=html5' target='blank'>example</a>*


#### **Skew:**
```javascript
// Skew: string value - x angle in degrees plus deg
// separated by comma and y-angle in degrees plus deg eg. '90deg, 30deg'
AtomTween.to (box3ID, 4, {skew:"30deg, 30deg", ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=13_skewXY&mode=html5' target='blank'>example</a>*


#### **perspective:**

```javascript
// perspective: numerical value from 0-2000
// 150 yields extreme perspective, 2000 yields subtle perspective

// Set perspective for div container
AtomTween.to (containerID, 0, {perspective:500});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **rotateX:**
```javascript
// rotateX: angle in degrees
// rotateX clockwise by 90° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateX:90, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **rotateY:**
```javascript
// rotateY: angle in degrees
// rotateY anti-clockwise by 45° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateY:-45, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **rotateZ:**
```javascript
// rotateZ: angle in degrees
// rotateZ clockwise 180° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateZ:180, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=14_rotateXYZ&mode=html5' target='blank'>example</a>*


#### **translateX:**
```javascript
// translateX: numerical value in pixels
// translateX -50px
AtomTween.to (box1ID, 4, {translateX:-50, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=15_translateXYZ&mode=html5' target='blank'>example</a>*


#### **translateY:**
```javascript
// translateY: numerical value in pixels
// translateY 50px
AtomTween.to (box2ID, 4, {translateY:50, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=15_translateXYZ&mode=html5' target='blank'>example</a>*


#### **translateZ:**
```javascript
// translateZ: numerical value in pixels
// translateZ -500px
AtomTween.to (box3ID, 4, {translateZ:-500, ease:"ease-out"});
```
*view* *<a href='http://santaunion.co.uk//repos/atomtween/examples/index.php?format=15_translateXYZ&mode=html5' target='blank'>example</a>*


#### **Shadow: boxshadow / textshadow:**
```javascript
// boxshadow: Add shadow to any element: h-shadow v-shadow blur spread color
// textshadow: Adds shadow to text. Applies to text content within div elements: h-shadow v-shadow blur-radius color
AtomTween.shadow (box1ID, 	1, {delay:2, boxshadow:'10px 10px 5px 1px rgba(95, 171, 234, 1)', ease:'ease-in-out'}); 		
AtomTween.shadow (text1ID, 	1, {delay:2, textshadow:'10px 10px 5px rgba(95, 171, 234, 1)', ease:'ease-in-out'});
```
*view* *<a href='' target='blank'>example</a>*



### Methods

#### **onStart:**
```javascript
// onStart: call function on start of animation
AtomTween.to (box1ID, 1, {delay:0, x:50, onStart:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


#### **onComplete:**
```javascript
// onComplete: call function once element animation has finished
AtomTween.to (box1ID, 1, {delay:0, x:50, onComplete:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


### Animation Sequencing Technique

```javascript
var del = 0; // use delay to sequencing animation
var redboxID = AtomTween.getElement("id", "box1");
var blueboxID = AtomTween.getElement("id", "box2");
var greenboxID = AtomTween.getElement("id", "box3");

function init() {
    del = 0;
    AtomTween.to (redboxID, 0, {delay:0, x:100, y:100, scale:1, opacity:1, ease:"ease-in-out"});
    AtomTween.to (blueboxID, 0, {delay:0, x:200, y:100, scale:1, opacity:1, ease:"ease-in-out"});
    AtomTween.to (greenboxID, 0, {delay:0, x:300, y:100, scale:1, opacity:1, ease:"ease-in-out"});
    animate();
}

function animate () {
    AtomTween.to (redboxID, 1, {delay:del+=1, x:200, opacity:0, ease:"ease-in-out"});
    AtomTween.to (blueboxID, 1, {delay:del+=1, y:600, scale:2, ease:"ease-in-out"});
    AtomTween.to (greenboxID, 1, {delay:del+=2, x:400, rotate:360, ease:"ease-in-out"});
    AtomTween.to (box1ID, 1, {delay:del+=1, scale:3, onComplete:init, ease:"ease-in-out"});
}

window.addEventListener('load', init);

```

Copyright (c) 2016, Santa Union. All rights reserved.
