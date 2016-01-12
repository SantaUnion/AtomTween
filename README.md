# AtomTween

#### Lightweight CSS Animation Engine designed for Modern Browsers

* Lightweight 3kb footprint
* Simple API
* Fast and smooth CSS animation
* Ideal for HTML5 banners


## Examples


## API

**AtomTween's** API is modelled on very similar lines to [GSAP TweenLite](https://greensock.com/tweenlite) with just a few minor differences.

```javascript
// Get div element
var myElementID	= AtomTween.getElement("id", "myDiv");
// Move element 500px to the left over 1 second with 'easein'.
AtomTween.to (myElementID, 1, {x:500, ease:"ease-in"});
```


## Properties

**Delay:**
Number of seconds delay prior to animation performed on element
```javascript
// 20 second delay
var myElementID	= AtomTween.getElement("id", "myDiv");
AtomTween.to (myElementID, 20, {y:200, ease:"ease-out"});
```


**Opacity:**
Specifies the transparency of an element between 0-100. 
```javascript
// Fadeout element
var myElementID	= AtomTween.getElement("id", "myDiv");
AtomTween.to (myElementID, 5, {opacity:0, ease:"ease-out"});
```

**left:**


**top:**

**width:**


**height:**

**scale:**


**x:**


**y:**


**perspective:**

```javascript
// Set this to a div containing elements to 
// Smaller the number the greater the perspective
// Example:
//   perspective:1000 = normal perspective
//   perspective:500 = greater perspective
//   perspective:1500 = subtle perspective
var idBanner	= AtomTween.getElement("id", "banner");
AtomTween.to (idBanner, 0, {perspective:500}); 
```


**rotateX**

**rotateY**

**rotateZ**



### Methods



### Sequencing Animation Technique



Copyright (c) 2015, Santa Union. All rights reserved.
