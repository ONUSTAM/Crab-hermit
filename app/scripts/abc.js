/*eslint no-unused-vars: "error"*/
var myFunc = function(){};
myFunc(function foo() {

  console.log('myFunc');
}.bind(this));
