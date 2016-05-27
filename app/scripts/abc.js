'use strict';
function ClassE(){
  //constructor
}
(function(p){
  p.say = function(){
    return 'ClassE !!!';
  };
})(ClassE.prototype);
