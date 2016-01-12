# AtomTween

#### Lightweight pure CSS animation engine designed for modern browsers

### FAQ

What is AtomTween?
- Lightweight pure CSS animation engine designed specifically for modern browsers


How lightweight is AtomTween?
- The minfied version of AtomTween only 3kb and is an ideal animation engine for standard HTML5 banners.

What can it do?

### Expamples



-

### API

If you're familiar with GSAP TweenLite, you'll be able to dive straight in and start using AtomTween right away as it follow a similar API.

For example, say you want to move an element 500px to the left over 1 second with an ease in:



AtomTween: 


```javascript
//Draw a square on screen.
var myElementID	= AtomTween.getElement("id", "myDiv");
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
AtomTween.to (idBanner, 0,		{perspective:500}); 
```


**rotateX**

**rotateY**

**rotateZ**



### Methods



sTween = "AtomTween.to ( " + object.id + ", " + seconds + ", {";
		if (arg.delay != null) 		{ sTween += "delay:"+arg.delay + ", "; }
		if (arg.opacity != null) 	{ sTween += "opacity:"+arg.opacity + ", "; }
		if (arg.x != null) 			{ sTween += "x:"+arg.x + ", "; }
		if (arg.y != null) 			{ sTween += "y:"+arg.y + ", "; }
		if (arg.scale != null) 		{ sTween += "scale:"+arg.scale + ", "; }
		if (arg.perspective != null) { sTween += "perspective:"+arg.perspective + ", "; }
		if (arg.rotate != null) 		{ sTween += "rotate:"+arg.rotate + ", "; }
		if (arg.rotateY != null) 	{ sTween += "rotateY:"+arg.rotateY + ", "; }
		if (arg.rotateZ != null) 	{ sTween += "rotateZ:"+arg.rotateZ + ", "; }
		if (arg.ease != null) 		{ sTween += "ease:'"+arg.ease + "' "; }



AtomTween is based on the GSAP TweenLite API model.


Copyright (c) 2015, Santa Union. All rights reserved.
