'use strict';

function clickAltkey () {
  var clickStream = Rx.Observable.fromEvent(document, 'mouseup');
  clickStream
      .buffer(clickStream.throttle(250))
      .map(function(x) {return x.length; })
      .filter(function(n) {return n >= 2; })
      .subscribe(function(n) {console.log(n + 'click'); });

  var btnClicks = Rx.Observable.fromEvent($('#btn'), 'click');
  btnClicks
      .filter(function (value) {
          return value.altKey;
      })
      .subscribe(function () {
          console.log('Altキーを押しながらクリックしたね！');
      });
}
