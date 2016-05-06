
// init
$(function() {

  // common
  dispatcher("^/$",function(){
      $(function(){
          //
      });
  });

  // logger
  dispatcher(conf.viewPath.logger, function(){
    $(function(){
      loggerCtrl();
    });
  });


  var clickStream = Rx.Observable.fromEvent(document, "mouseup");
  clickStream
      .buffer(clickStream.throttle(250))
      .map(function(x) {return x.length})
      .filter(function(n) {return n >= 2})
      .subscribe(function(n) {console.log(n + "click")});


  // 各画面によって出しわけする
  dispatcher(location.pathname);
});
