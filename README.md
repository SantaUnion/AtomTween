# AtomTween

#### A lightweight and versatile CSS Animation Engine for Modern Browsers

* Ideal animation tool for HTML5 banners which have file-size restrictions of @50kb
* Super lightweight 3KB footprint
* Simple API
* Fast & smooth CSS animation
* Methods include onStart / onComplete



## Examples


## API Example

**AtomTween's** API is modelled on similar lines to [GSAP TweenLite](https://greensock.com/tweenlite) with just a few minor differences. 

```javascript
// Get Elements
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Delay for 2 seconds then apply paramters to several properties over 1 second with an 'ease-in'
AtomTween.to (myElementID, 1, {delay:2, x:500, opacity:0.5, rotate:180, scale:2, ease:"ease-in"});
```


### Properties

**Delay**
```javascript
// Delay the animation on Element by 8 seconds
AtomTween.to (myElementID, 1, {delay:8, y:200, ease:"ease-out"});
```


**Opacity**
```javascript
// opacity: Numberical value between 0-100 
// Fade Out Element over 5 seconds
AtomTween.to (myElementID, 5, {opacity:0, ease:"ease-out"});
```

**left** 
```javascript
// left: Numerical value based on pixels
// Animate Element Left to 50px of its relative position to parent element
AtomTween.to (myElementID, 1, {left:50, ease:"ease-out"});
```

**top** 
```javascript
// top: Numerical value based on pixels
// Animate Element Top to 80px of its relative position to parent element
AtomTween.to (myElementID, 1, {top:80, ease:"ease-out"});
```

**width** 
```javascript
// width: Numerical value based on pixels
// Animate the Width of the Element to 200px
AtomTween.to (myElementID, 1, {width:200, ease:"ease-out"});
```

**height**
```javascript
// height: Numerical value based on pixels
// Animate the Height of the Element to 200px
AtomTween.to (myElementID, 1, {height:200, ease:"ease-out"});
```

**scale** 
```javascript
// scale: Numerical value ie. 1 = 100%, 2 = 200%
// Animate the Scale of the Element to 200%
AtomTween.to (myElementID, 1, {scale:2, ease:"ease-out"});
```

**x** 
```javascript
// x: Numerical value based on pixels. Use 'x' in preference to 'left' for smoother transitions
// Animate x position to 300px of its relative position to parent element
AtomTween.to (myElementID, 1, {x:300, ease:"ease-out"});
```

**y**
```javascript
// y: Numerical value based on pixels. Use 'y' in preference to 'top' for smoother transitions
// Animate y position to 600px of its relative position to parent element
AtomTween.to (myElementID, 1, {y:600, ease:"ease-out"});
```

**perspective:* 

```javascript
// perspective: Numberical value from 0-2000;

// Get the parent container for perspective 
var containerID	= AtomTween.getElement("id", "container");

// 150 yeilds extreme perspective - 2000 yeilds subtle persepective 
AtomTween.to (javascript, 0, {perspective:500}); 
```


**rotateX** 
```javascript
// rotateX: Numberical value base on degrees
// rotateX by 90º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateX:90, ease:"ease-out"});
```

**rotateY** 
```javascript
// rotateY: Numberical value base on degrees
// rotateY by -45º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateY:-45, ease:"ease-out"});
```

**rotateZ** Numberical value base on degrees
```javascript
// rotateZ: Numberical value base on degrees
// rotateZ by 180º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateZ:180, ease:"ease-out"});
```


### Methods

**onStart** 
```javascript
// onStart: call function on start of animation
AtomTween.to (myElementID, 1, {delay:0, x:50, onStart:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


**onComplete** 
```javascript
// onComplete: call function once element animation has finished
AtomTween.to (myElementID, 1, {delay:0, x:50, onComplete:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


### Sequencing Animation Technique



Copyright (c) 2015, Santa Union. All rights reserved.
