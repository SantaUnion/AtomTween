# AtomTween

#### A lightweight and versatile CSS Animation Engine for Modern Browsers

* Ideal animation tool for HTML5 banners which have file-size restrictions of @50kb
* Super lightweight 3KB footprint
* Simple API
* Fast & smooth CSS animation
* Methods include onStart / onComplete
* Generate complex animation sequences



## Examples


## API Example

**AtomTween's** API is modelled on similar lines to [GSAP TweenLite](https://greensock.com/tweenlite) with just a few minor differences. 

```javascript
// Get Element from the DOM
var myElementID	= AtomTween.getElement("id", "myDiv");

// Delay for 2 seconds then apply paramters to several properties over 1 second with an 'ease-in'
AtomTween.to (myElementID, 1, {delay:2, x:500, opacity:0.5, rotate:180, scale:2, ease:"ease-in"});
```


### Properties

**delay:**
```javascript
// delay: numerical value in seconds
// Delay the animation on Element by 8 seconds
AtomTween.to (myElementID, 1, {delay:8, y:200, ease:"ease-out"});
```


**opacity:**
```javascript
// opacity: numerical from 0 to 100 
// Fade Out Element over 5 seconds
AtomTween.to (myElementID, 5, {opacity:0, ease:"ease-out"});
```

**left:** 
```javascript
// left: numerical value in pixels
// Animate Element Left to 50px of its relative position to parent element
AtomTween.to (myElementID, 1, {left:50, ease:"ease-out"});
```

**top:** 
```javascript
// top: numerical value in pixels
// Animate the Element top to 80px of its relative position to parent element
AtomTween.to (myElementID, 1, {top:80, ease:"ease-out"});
```

**width:** 
```javascript
// width: numerical value in pixels
// Animate the Width of the Element to 200px
AtomTween.to (myElementID, 1, {width:200, ease:"ease-out"});
```

**height:**
```javascript
// height: numerical value in pixels
// Animate the Height of the Element to 200px
AtomTween.to (myElementID, 1, {height:200, ease:"ease-out"});
```

**scale:** 
```javascript
// scale: numerical value ie. 1 = 100%, 2 = 200%
// Animate the Scale of the Element to 200%
AtomTween.to (myElementID, 1, {scale:2, ease:"ease-out"});
```

**x:** 
```javascript
// x: numerical value in pixels. Use 'x' in preference to 'left' for smoother transitions
// Animate x position to 300px of its relative position to parent element
AtomTween.to (myElementID, 1, {x:300, ease:"ease-out"});
```

**y:**
```javascript
// y: numerical value in pixels. Use 'y' in preference to 'top' for smoother transitions
// Animate y position to 600px of its relative position to parent element
AtomTween.to (myElementID, 1, {y:600, ease:"ease-out"});
```

**perspective:** 

```javascript
// perspective: numerical value from 0-2000
// 150 yeilds extreme perspective, 2000 yeilds subtle persepective 

// Apply perspective to container
AtomTween.to (containerID, 0, {perspective:500}); 
```


**rotateX:** 
```javascript
// rotateX: angle in degrees
// rotateX by 90º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateX:90, ease:"ease-out"});
```

**rotateY:** 
```javascript
// rotateY: angle in degrees
// rotateY by -45º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateY:-45, ease:"ease-out"});
```

**rotateZ:**
```javascript
// rotateZ: angle in degrees
// rotateZ by 180º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateZ:180, ease:"ease-out"});
```


### Methods

**onStart:** 
```javascript
// onStart: call function on start of animation
AtomTween.to (myElementID, 1, {delay:0, x:50, onStart:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


**onComplete:** 
```javascript
// onComplete: call function once element animation has finished
AtomTween.to (myElementID, 1, {delay:0, x:50, onComplete:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


### Sequencing Animation Technique

```javascript
var del = 0; // use delay to sequencing animation
var box1ID = AtomTween.getElement("id", "box1");
var box2ID = AtomTween.getElement("id", "box2");
var box3ID = AtomTween.getElement("id", "box3");
	
	
function init() {

del = 0;
AtomTween.to (box1ID, 0, {delay:0, x:100, y:100, scale:1, opacity:1, ease:"ease-in-out"});
AtomTween.to (box2ID, 0, {delay:0, x:200, y:100, scale:1, opacity:1, ease:"ease-in-out"});
AtomTween.to (box3ID, 0, {delay:0, x:300, y:100, scale:1, opacity:1, ease:"ease-in-out"});

animate();

}
	
function animate () {

AtomTween.to (box1ID, 1, {delay:del+=1, x:200, opacity:0, ease:"ease-in-out"});
AtomTween.to (box2ID, 1, {delay:del+=1, y:600, scale:2, ease:"ease-in-out"});
AtomTween.to (box3ID, 1, {delay:del+=2, x:400, rotate:360, ease:"ease-in-out"});
AtomTween.to (box1ID, 1, {delay:del+=1, scale:3, onComplete:init, ease:"ease-in-out"});

}

init();

```

Copyright (c) 2015, Santa Union. All rights reserved.
