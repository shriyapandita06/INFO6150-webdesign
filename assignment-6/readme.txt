Assignment 6
NUID: 002747729

The SCSS Files used are :

about - styling for about page
table - table styling
animate - to declare animations
button - declare button Properties
config - color config
media - media queries for responsiveness
nav - top navigation bar
utilities - spacing utilities

Features used are below : 

Variables : 
Variables for colors and fonts are declared in _config.scss and utilized across various sections such as the navigation bar, main content, and more in style.scss.

Custom Properties:
Calculated values, like half the distance, are implemented in the animateBounce function within _animate.scss.

Nesting:
Nesting is employed within style.scss for classes like .container, .main, and .sidebar, and also in _nav.scss for elements like .hamb and .sidemenu.

Interpolation:
Interpolation is used in _animation.scss to dynamically animate arrows within the animateBounce function.

Placeholder Selectors:
Placeholder selectors are applied in style.scss to specify styles for the footer element.

Mixins:
A mixin for the color theme is defined in _config.scss and is applied in utilities such as spacing and animation.

Functions:
The returnHalf function is created in _animate.scss to compute half of a given value.
The set-text-color function is defined to dynamically set the text color.

Inheritance:
The .main class in style.scss inherits properties from the .container class.

Modules:
The _config.scss file is loaded as a module in _table.scss to reuse the predefined variables.

Operators:
Operators are used in style.scss to manipulate the $font-size variable for defining font sizes across different heading tags.


