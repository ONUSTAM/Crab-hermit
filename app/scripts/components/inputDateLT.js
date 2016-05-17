// <p Id="inputDateLt">
//   <input type="text" Id="yr">
//   <input type="text" Id="mn">
//   <input type="text" Id="dy">
// </p>
function inputDateLT (scopeId) {
  'use strict';

  var YEAR_FOCUS_LEFT = 1000;
  var MONTH_FOCUS_LEFT = 2;
  var yr = scopeId + ' .yr';
  var mn = scopeId + ' .mn';
  var dy = scopeId + ' .dy';


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

  // count +-
  function countUpDn (keycode, Id) {
    if(keycode === 38 && isNum( $(Id).val() )) {
      $(Id).val( Number($(Id).val()) + 1 );
      $(Id).focus();
      return true;
    } else if( keycode === 40 && isNum($(Id).val()) && Number($(Id).val()) > 1 ) {
      $(Id).val( Number($(Id).val()) - 1 );
      $(Id).focus();
      return true;
    }
    return false;
  }

  // retuen = boolean
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
      if( countUpDn(_e.keyCode, yr) ) { return; }

      moveFoucs( $(this).val(), YEAR_FOCUS_LEFT, mn);
    })
    .on('focus', function(){
      $(this).select();
    });

  $(mn)
    .on('keyup', function(_e){
      if( changeFocusL(_e.keyCode, dy) ) { return; }
      if( changeFocusR(_e.keyCode, yr) ) { return; }
      if( countUpDn(_e.keyCode, mn) ) { return; }

      moveFoucs( $(this).val(), MONTH_FOCUS_LEFT, dy);
    })
    .on('focus', function(){
      $(this).select();
    });

  $(dy)
    .on('keyup', function(_e){
      if( changeFocusR(_e.keyCode, mn) ) { return; }
      if( countUpDn(_e.keyCode, dy) ) { return; }
    })
    .on('focus', function(){
      $(this).select();
    });


  this.getVal = getInputDateLtVal;
  this.setVal = setInputDateLtVal;
}
