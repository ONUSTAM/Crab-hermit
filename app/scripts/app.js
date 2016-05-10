
// init
$(function() {
  // common
  dispatcher("^/$",function(){
      $(function(){
          //
      });
  });

  // components
  dispatcher(conf.viewPath.components, function(){
    $(function(){
      componentsCtrl();
    });
  });
  //splitpaLayout
  dispatcher(conf.viewPath.splitpaLayout, function(){
    $(function(){
      console.log('a');
      SplitPane('div.split-pane')
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
