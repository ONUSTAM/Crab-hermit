// init
(function() {
  'use strict';
  // common
  dispatcher('^/$', function(){
    $(function(){
      //
    });
  });

  // components
  dispatcher(conf.viewPath.components, function(){
    (function(){
      componentsCtrl();
    })();
  });

  // splitpaLayout
  dispatcher(conf.viewPath.splitpaLayout, function(){
    (function(){
      splitPane('div.split-pane');
    })();
  });

  // inputDateLt
  dispatcher(conf.viewPath.inputDateLt, function(){
    (function(){
      var idlt = new inputDateLT('#inputDateLt');

      $('#btn_inputDateLt').on('click', function(){
        $('#inputDateLt_val').text( idlt.getVal() );
      });

      $('#btn_typeDate').on('click', function(){
        $('#typeDateA').text( $('#typeDate').val() );
      });
    })();
  });

  dispatcher(location.pathname);
})();
