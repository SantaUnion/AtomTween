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
// Get element from the DOM
var box1ID = AtomTween.getelement("id", "box1");

// Delay for 2 seconds then apply paramters to several properties over 1 second with an 'ease-in'
AtomTween.to (box1ID, 1, {delay:2, x:500, opacity:0.5, rotate:180, scale:2, ease:"ease-in"});
```


### Properties

**delay:**
```javascript
// delay: numerical value in seconds
// delay the animation on element by 5 seconds
AtomTween.to (box1ID, 1, {delay:5, x:800, ease:"ease-out"});
```


**opacity:**
```javascript
// opacity: numerical value from 0 to 100
// animate elements opacity to 0 over 5 seconds
AtomTween.to (box1ID, 5, {opacity:0, ease:"ease-out"});
```

**left:**
```javascript
// left: numerical value based on pixels
// animate element 500px left relative to its parent element
AtomTween.to (box1ID, 1, {left:500, ease:"ease-out"});
```

**top:**
```javascript
// top: numerical value based on pixels
// animate element 230px from the top relative to its parent element
AtomTween.to (box1ID, 1, {top:230, ease:"ease-out"});
```

**width:**
```javascript
// width: numerical value based on pixels
// animate the width of the element to 700px
AtomTween.to (box1ID, 3, {width:700, ease:"ease-out"});
```

**height:**
```javascript
// height: numerical value based on pixels
// animate the height of the element to 1500px
AtomTween.to (box1ID, 1, {height:150, ease:"ease-out"});
```

**scale:**
```javascript
// scale: numerical value ie. 1 = 100%, 2 = 200%
// animate the scale of the element to 200%
AtomTween.to (box1ID, 3, {scale:2, ease:"ease-out"});
```

**rotate:**
```javascript
// rotate: angle in degrees
// rotate elelent clockwise by 180° degrees over 3 seconds
AtomTween.to (box1ID, 3, {rotate:180, ease:"ease-out"});
```

**transformOrigin:**
```javascript
// transformOrigin: modify the origin of the transformation point of an element
// acceptable paramters: "100% 0%", "20px 100px", 'top right'
AtomTween.to (box1, 3, {tranformOrigin:"50% 50%", rotate:90, ease:"linear"});
AtomTween.to (box2, 3, {tranformOrigin:"0% 0%", rotate:90, ease:"linear"});
AtomTween.to (box3, 3, {tranformOrigin:"100% 100%", rotate:90, ease:"linear"});
```

**x:**
```javascript
// x: numerical value in pixels. Use 'x' in preference to 'top' for smoother css transitions
// animate element 500px on the x axis relative its parent element
AtomTween.to (box1ID, 1, {x:500, ease:"ease-out"});
```

**y:**
```javascript
// y: numerical value in pixels. Use 'y' in preference to 'left' for smoother css transitions
// animate element 240px on the y axis relative its parent element
AtomTween.to (box1ID, 3, {y:240, ease:"ease-out"});
```
**SkewX / SkewY / Skew:**
```javascript
// SkewX: string value - angle in degrees plus deg eg. '90deg'
// SkewY: string value - angle in degrees plus deg eg. '45deg'
// Skew: string value - x angle in degrees plus deg separated by comma and y-angle in degrees plus deg eg. '90deg, 30deg'
AtomTween.to (box1ID, 4, {skewX:"30deg", ease:"ease-out"});
AtomTween.to (box2ID, 4, {skewY:"30deg", ease:"ease-out"});
AtomTween.to (box3ID, 4, {skew:"30deg, 30deg", ease:"ease-out"});
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

**translateX:**
```javascript
// translateX: numerical value in pixels
// translateX -50px
AtomTween.to (box1ID, 4, {translateX:-50, ease:"ease-out"});
```

**translateY:**
```javascript
// translateY: numerical value in pixels
// translateY 50px
AtomTween.to (box2ID, 4, {translateY:50, ease:"ease-out"});
```

**translateZ:**
```javascript
// translateZ: numerical value in pixels
// translateZ -500px
AtomTween.to (box3ID, 4, {translateZ:-500, ease:"ease-out"});
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
var redboxID = AtomTween.getelement("id", "box1");
var blueboxID = AtomTween.getelement("id", "box2");
var greenboxID = AtomTween.getelement("id", "box3");

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
