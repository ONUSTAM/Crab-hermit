/*global Person Conf:true*/
/*eslint no-undef: "error"*/
(function() {
  'use strict';
  console.log('app');

  // var classE = new ClassE();
  // console.log( classE.say() );
  var person = new Person('tom', 11);
  person.sayHello();

  var conf = new Conf();
  console.log(conf.viewPath);

})();
