/*eslint no-unused-vars: "error"*/
/*global Person*/
// function ClassE(){
//   //constructor
// }
// (function(p){
//   p.say = function(){
//     return 'ClassE !!!';
//   };
// })(ClassE.prototype);
class Person {
  'use strict'

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello, Im ' + this.getName());
  }

  getName() {
    return this.name;
  }
}
