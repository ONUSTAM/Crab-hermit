// <p id="inputDateLt">
//   <input type="text" style="width:80px" id="yr">
//   <input type="text" style="width:40px" id="mn">
//   <input type="text" style="width:40px" id="dy">
// </p>

function inputDateLT (Id) {
  'use strict';

  var idltId = Id;
  var yr = idltId + ' .yr';
  var mn = idltId + ' .mn';
  var dy = idltId + ' .dy';


  // move left
  function changeFocusL (keycode, Id){
    if(keycode === 39) {
      $(Id).focus();
      $(Id).select();
      return true;
    }
    return false;
  }

  // move right
  function changeFocusR (keycode, Id){
    if(keycode === 37) {
      $(Id).focus();
      $(Id).select();
      return true;
    }
    return false;
  }

  // count +
  function countUP (keycode, Id) {
    if(keycode === 38 && isNum( $(Id).val() )) {
      $(Id).val( Number($(Id).val()) + 1 );
      $(Id).focus();
      return true;
    }
    return false;
  }

  //count -
  function countDN (keycode, Id) {
    if(keycode === 40 && isNum($(Id).val()) && Number($(Id).val()) > 1 ) {
      $(Id).val( Number($(Id).val()) - 1 );
      $(Id).focus();
      return true;
    }
    return false;
  }

  function isNum (val) {
    var pattern = /^\d*$/;
    return pattern.test(val);
    // return is.number( $(this).val() );
  }

  function moveFoucs (val, max, Id) {
    if( val >= max ) {
      $(Id).focus();
      $(Id).select();
    }
  }

  // get value
  function getInputDateLtVal() {
    return $(yr).val() + '-' + $(mn).val() + '-' + $(dy).val();
  }

  // set value( yyyy-mm-dd )
  function setInputDateLtVal(val) {
    $(yr).val( val.split('-')[0] );
    $(mn).val( val.split('-')[1] );
    $(dy).val( val.split('-')[2] );
  }


  $(yr)
    .on('keyup', function(_e){
      if( changeFocusL(_e.keyCode, mn) ) { return; }
      if( countUP(_e.keyCode, yr) ) { return; }
      if( countDN(_e.keyCode, yr) ) { return; }

      moveFoucs( $(this).val(), 1000, mn);
    })
    .on('keydown', function(){
    })
    .on('focus', function(){
      $(this).select()
    });

  $(mn)
    .on('keyup', function(_e){
      if( changeFocusL(_e.keyCode, dy) ) { return; }
      if( changeFocusR(_e.keyCode, yr) ) { return; }
      if( countUP(_e.keyCode, mn) ) { return; }
      if( countDN(_e.keyCode, mn) ) { return; }

      moveFoucs( $(this).val(), 2, dy);
    })
    .on('focus', function(){
      $(this).select()
    });

  $(dy)
    .on('keyup', function(_e){
      if( changeFocusR(_e.keyCode, mn) ) { return; }
      if( countUP(_e.keyCode, dy) ) { return; }
      if( countDN(_e.keyCode, dy) ) { return; }
    })
    .on('focus', function(){
      $(this).select();
    });


  this.getVal = getInputDateLtVal;
  this.setVal = setInputDateLtVal;
}
