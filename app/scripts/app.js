
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

  // 各画面によって出しわけする
  dispatcher(location.pathname);
});
