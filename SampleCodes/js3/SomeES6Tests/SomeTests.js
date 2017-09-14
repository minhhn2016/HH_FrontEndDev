/*jslint browser:true*/
/*global console*/
/*global window*/
/* The lines above are for the www.jslint.com JavaScript "validator" */
/* Just keep them like they are. Also start your functions with "use strict"; */
/* And remove extra spaces after every code or comment line. */

var globalScopeVar = 11;

var foo = function (functionScopeVar1) {
    var functionScopeVar2 = 22;

    for (let i = 0; i < 3; i = i + 1) {
        for (let i = 0; i < 3; i = i + 1) {
            console.log("Hello!");
        }
    }

    // console.log(i);   // Reference error
};

foo(33);

console.log(globalScopeVar);   // Ok, 11
//console.log(functionScopeVar1);   // NOT Ok
//console.log(functionScopeVar1);   // NOT Ok

var bar = function (functionScopeVar1) {
    var functionScopeVar2 = 22;
    // var i; Will happen anyway here! Variable hoisting!

    for (var i = 0; i < 3; i = i + 1) {
        for (var i = 0; i < 3; i = i + 1) {
            console.log("Hello!");
        }
    }

    console.log(i);
};

bar(33);

const a = 42;
// a = 43;    // Error!
a.foo = "bar";   // Allowed
var name = "Joe";
var text1 = 'Hello ${name}!';   // NOT OKAY! Use backticks
console.log(text1);
var text2 = `Hello ${name}!`;   // OK! Using backticks
console.log(text2);
