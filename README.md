# AtomTween

#### A lightweight and versatile CSS Animation Engine for Modern Browsers

* Super lightweight 3KB library, ideal for file-size restricted HTML5 banners
* Simple API
* Fast and silky smooth CSS animation
* A plethora of animation properties available including 3D transforms and methods including onStart and onComplete
* Create complex animation sequences with minimal code



## API Example

**AtomTween's** API is modelled on similar lines to [GSAP TweenLite](https://greensock.com/tweenlite) with a few minor differences.


```javascript
// Get Element from the DOM
var box1ID	= AtomTween.getElement("id", "box1");

// Delay for 2 seconds then apply paramters to several properties over 1 second with an 'ease-in'
AtomTween.to (box1ID, 1, {delay:2, x:500, opacity:0.5, rotate:180, scale:2, ease:"ease-in"});
```


### Properties

**delay:**
```javascript
// delay: numerical value in seconds
// Delay the animation on Element by 5 seconds
AtomTween.to (box1ID, 1, {delay:5, x:800, ease:"ease-out"});
```


**opacity:**
```javascript
// opacity: numerical value from 0 to 100
// Fade Out Element over 5 seconds
AtomTween.to (box1ID, 5, {opacity:0, ease:"ease-out"});
```

**left:**
```javascript
// left: numerical value based on pixels
// Animate Element Left to 500px of its relative position to parent element
AtomTween.to (box1ID, 1, {left:500, ease:"ease-out"});
```

**top:**
```javascript
// top: numerical value based on pixels
// Animate the Element top to 80px of its relative position to parent element
AtomTween.to (box1ID, 1, {top:250, ease:"ease-out"});
```

**width:**
```javascript
// width: numerical value based on pixels
// Animate the Width of the Element to 200px
AtomTween.to (box1ID, 1, {width:200, ease:"ease-out"});
```

**height:**
```javascript
// height: numerical value based on pixels
// Animate the Height of the Element to 1500px
AtomTween.to (box1ID, 1, {height:150, ease:"ease-out"});
```

**scale:**
```javascript
// scale: numerical value ie. 1 = 100%, 2 = 200%
// Animate the scale of the Element to 200%
AtomTween.to (box1ID, 3, {scale:2, ease:"ease-out"});
```

**rotate:**
```javascript
// rotate: angle in degrees
// rotate clockwise by 180° degrees over 3 seconds
AtomTween.to (box1ID, 3, {rotate:180, ease:"ease-out"});
```

**transformOrigin:**
```javascript
// transformOrigin: modify the origin of the transformation point of an element
// Acceptable paramters: "100% 0%", "20px 100px", 'top right'
AtomTween.to (box1, 3, {tranformOrigin:"50% 50%", rotate:90, ease:"linear"});
AtomTween.to (box2, 3, {tranformOrigin:"0% 0%", rotate:90, ease:"linear"});
AtomTween.to (box3, 3, {tranformOrigin:"100% 100%", rotate:90, ease:"linear"});
```

**x:**
```javascript
// x: numerical value in pixels. Use 'x' in preference to 'left' for smoother css transitions
// Animate x position to 800px relative to the position of its parent element
AtomTween.to (box1ID, 1, {x:800, ease:"ease-out"});
```

**y:**
```javascript
// y: numerical value in pixels. Use 'y' in preference to 'top' for smoother css transitions
// Animate y position to 600px relative to the position of its parent element
AtomTween.to (box1ID, 1, {y:600, ease:"ease-out"});
```

**perspective:**

```javascript
// perspective: numerical value from 0-2000
// 150 yields extreme perspective, 2000 yields subtle perspective

// Set perspective for div container
AtomTween.to (containerID, 0, {perspective:500});
```


**rotateX:**
```javascript
// rotateX: angle in degrees
// rotateX clockwise by 90° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateX:90, ease:"ease-out"});
```

**rotateY:**
```javascript
// rotateY: angle in degrees
// rotateY anti-clockwise by 45° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateY:-45, ease:"ease-out"});
```

**rotateZ:**
```javascript
// rotateZ: angle in degrees
// rotateZ clockwise 180° degrees over 1 second
AtomTween.to (box1ID, 1, {rotateZ:180, ease:"ease-out"});
```

### Methods

**onStart:**
```javascript
// onStart: call function on start of animation
AtomTween.to (box1ID, 1, {delay:0, x:50, onStart:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


**onComplete:**
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
