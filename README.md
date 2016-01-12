# AtomTween

#### A lightweight and versatile CSS Animation Engine for Modern Browsers

* Ideal animation tool for HTML5 banners which have file-size restrictions of @50kb
* Super lightweight 3KB footprint
* Simple API
* Fast & smooth CSS animation
* Methods include onStart / onComplete



## Examples


## API

**AtomTween's** API is modelled on similar lines to [GSAP TweenLite](https://greensock.com/tweenlite) with just a few minor differences. 

```javascript
// Get Elements
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Delay for 2 seconds then apply paramters to several properties over 1 second with an 'ease-in'
AtomTween.to (myElementID, 1, {delay:2, x:500, opacity:0.5, rotate:180, scale:2, ease:"ease-in"});
```


### Properties

**Delay:**
Number of seconds delay prior to animation on element
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv");
// Delay the animation on Element by 8 seconds
AtomTween.to (myElementID, 8, {y:200, ease:"ease-out"});
```


**Opacity:**
Numberical value between 0-100. 
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv");
// Fade Out Element over 5 seconds
AtomTween.to (myElementID, 5, {opacity:0, ease:"ease-out"});
```

**left:** Numerical value based on pixels
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate Element Left to 50px of its relative position to parent element
AtomTween.to (myElementID, 1, {left:50, ease:"ease-out"});
```

**top:** Numerical value based on pixels
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate Element Top to 80px of its relative position to parent element
AtomTween.to (myElementID, 1, {top:80, ease:"ease-out"});
```

**width:** Numerical value based on pixels
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate the Width of the Element to 200px
AtomTween.to (myElementID, 1, {width:200, ease:"ease-out"});
```

**height:** Numerical value based on pixels
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate the Height of the Element to 200px
AtomTween.to (myElementID, 1, {height:200, ease:"ease-out"});
```

**scale:** Numerical value ie 1 = 100%, 2 = 200%
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate the Scale of the Element to 200%
AtomTween.to (myElementID, 1, {scale:2, ease:"ease-out"});
```

**x:** Numerical value based on pixels. Recommended over 'left' for smoother transitions
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate X position to 300px of its relative position to parent element
AtomTween.to (myElementID, 1, {x:300, ease:"ease-out"});
```

**y:** Numerical value based on pixels. Recommended over 'top' for smoother transitions
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate Y position to 600px of its relative position to parent element
AtomTween.to (myElementID, 1, {y:600, ease:"ease-out"});
```

**perspective:** Numerical value.

```javascript
var javascript	= AtomTween.getElement("id", "banner");
// Set parent container for perspective 
// 150 yeilds extreme perspective - 2000 yeilds subtle persepective 
AtomTween.to (javascript, 0, {perspective:500}); 
```


**rotateX** Numberical value base on degrees
```javascript
var idObjectID	= AtomTween.getElement("id", "banner");
// Rotate X by 90º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateX:90, ease:"ease-out"});
```

**rotateY** Numberical value base on degrees
```javascript
var idObjectID	= AtomTween.getElement("id", "banner");
// Rotate Y by -45º degrees over 1 second 
AtomTween.to (myElementID, 1, {rotateY:90, ease:"ease-out"});
```

**rotateZ** Numberical value base on degrees



### Methods

**onStart** function call on start of animation
```javascript
var myElementID = AtomTween.getElement("id", "myDiv");
AtomTween.to (myElementID, 1, {delay:del+=0, width:400, opacity:1, onStart:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


**onComplete** function call when animation is complete
```javascript
var myElementID = AtomTween.getElement("id", "myDiv");
AtomTween.to (myElementID, 1, {delay:del+=0, x:400, opacity:1, onComplete:doSomething, ease:"ease-in-out"});

function doSomething () {
    // do something
}
```


### Sequencing Animation Technique



Copyright (c) 2015, Santa Union. All rights reserved.
