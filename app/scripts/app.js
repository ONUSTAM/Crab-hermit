// init
(function() {
  'use strict';

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

  // splitpaLayout
  dispatcher(conf.viewPath.splitpaLayout, function(){
    $(function(){
      SplitPane('div.split-pane');
    });
  });

  dispatcher(location.pathname);
})();
