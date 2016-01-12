# AtomTween

#### Lightweight CSS animation engine designed for modern browsers

* Lightweight 3kb footprint
* Simple API
* Fast and smooth CSS animation
* Ideal for HTML5 banners


### Examples


### API

AtomTween's API is samiliar to the popular GSAP TweenLite.

```javascript
// Get element
var myElementID	= AtomTween.getElement("id", "myDiv");
// Move element 500px to the left over 1 second with 'easein'.
AtomTween.to (myElementID, 1, {x:500, ease:"ease-in"});
```


### Properties

**Delay**
Number of second delay animation is performed


**Opacity**


**left**


**top**

**width**


**height**

**scale**


**x**


**y**


**perspective**

```javascript
// Set this to a div containing elements to 
// Smaller the number the greater the perspective
// Example:
//   perspective:1000 = normal perspective
//   perspective:500 = greater perspective
//   perspective:1500 = subtle perspective
AtomTween.to (idBanner, 0, {perspective:500}); 
```


**rotateX**

**rotateY**

**rotateZ**



### Methods



AtomTween is based on the GSAP TweenLite API model.


Copyright (c) 2015, Santa Union. All rights reserved.
