// --- somebody tried to do this way -----

var p = new Rectangle(); // ReferenceError

class Rectangle {}


// --- but it fails because
// --- JS var hoisting changes it _always_ like ---

var p, Rectangle;

p = new Rectangle(); // ReferenceError

Rectangle = class  {};