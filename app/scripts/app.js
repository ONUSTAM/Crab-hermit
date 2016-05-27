/*global ClassE Conf:true*/
/*eslint no-undef: "error"*/
(function() {
  'use strict';
  console.log('app');

  var classE = new ClassE();
  console.log( classE.say() );

  var conf = new Conf();
  console.log(conf.viewPath);

})();
