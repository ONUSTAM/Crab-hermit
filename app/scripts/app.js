/*global Person Conf:true*/
/*eslint no-undef: "error"*/
(function() {
  'use strict';
  console.log('app');

  // var classE = new ClassE();
  // console.log( classE.say() );
  var person = new Person('tom', 11);
  person.sayHello();

  var ssCtrl = new SessionStorageCtrl('test');
  var ssCtrl2 = new SessionStorageCtrl('test');

  $('#btnSet').on('click', function(){
    console.log( ':::::', $('#txtSet').val() );
    ssCtrl.ssSet( $('#txtSet').val() );
  });
  $('#btnGet').on('click', function(){
    $('#txtGet').val( ssCtrl.ssGet() );
  });
  $('#btnGet2').on('click', function(){
    $('#txtGet2').val( ssCtrl2.ssGet() );
  });


})();
