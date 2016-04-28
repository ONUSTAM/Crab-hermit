$(function() {
  console.log('\'Allo \'Allo!');
  _.each([1, 2, 3], function(val) {
    console.log(val);
  });

  var clickStream = Rx.Observable.fromEvent(document, "mouseup");
  clickStream
      .buffer(clickStream.throttle(250))
      .map(function(x) {return x.length})
      .filter(function(n) {return n >= 2})
      .subscribe(function(n) {console.log(n + "click")});

});
