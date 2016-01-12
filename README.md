# AtomTween

#### A lightweight and versatile CSS Animation Engine for Modern Browsers

* Super lightweight 3KB footprint
* Simple API
* Fast & smooth CSS animation
* Ideal for HTML5 banners which have file-size restrictions ie 50kb
* Handles sproperties of an element over time


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
Specifies the transparency of an element between 0-100. 
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv");
// Fade Out Element over 5 seconds
AtomTween.to (myElementID, 5, {opacity:0, ease:"ease-out"});
```

**left:**
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate Element Left to 50px of its relative position to parent element
AtomTween.to (myElementID, 1, {left:50, ease:"ease-out"});
```

**top:**
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate Element Top to 80px of its relative position to parent element
AtomTween.to (myElementID, 1, {top:80, ease:"ease-out"});
```

**width:**
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate the Width of the Element to 200px
AtomTween.to (myElementID, 1, {width:200, ease:"ease-out"});
```

**height:**
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate the Height of the Element to 200px
AtomTween.to (myElementID, 1, {height:200, ease:"ease-out"});
```

**scale:**
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate the Scale of the Element to 200%
AtomTween.to (myElementID, 1, {scale:2, ease:"ease-out"});
```

**x:** Recommended over 'left' for smoother transitions
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate X position to 300px of its relative position to parent element
AtomTween.to (myElementID, 1, {x:300, ease:"ease-out"});
```

**y:** Recommended over 'top' for smoother transitions
```javascript
// Get Element
var myElementID	= AtomTween.getElement("id", "myDiv"); 
// Animate Y position to 600px of its relative position to parent element
AtomTween.to (myElementID, 1, {y:600, ease:"ease-out"});
```

**perspective:** Number

```javascript
var javascript	= AtomTween.getElement("id", "banner");
// Set parent container for perspective 
// 150 yeilds extreme perspective - 2000 yeilds subtle persepective 
AtomTween.to (javascript, 0, {perspective:500}); 
```


**rotateX**
```javascript
var idBannerID	= AtomTween.getElement("id", "banner");
var idObjectID	= AtomTween.getElement("id", "banner");
// Set parent container for perspective. Values: 150 yeilds extreme perspective, 2000 yeilds subtle persepective 
AtomTween.to (idBanner, 0, {perspective:500}); 
```



**rotateY**

**rotateZ**



### Methods



## Sequencing Animation Technique



Copyright (c) 2015, Santa Union. All rights reserved.
