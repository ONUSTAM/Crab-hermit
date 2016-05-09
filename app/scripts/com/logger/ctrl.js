function loggerCtrl () {

  function outLogKV (Id, key, val) {
    // <div id="[Id]"><p>
    //   <span class="h6">[key] : </span>
    //   <span>[val]</span>
    // </p></div>
    $(Id)
      .append(
        $('<p/>')
        .append(
          $('<span/>')
            .text(key + ' : ')
        )
        .append(
          $('<span/>')
            .text(val)
        )
      );
  };

  function outuptEatch (Id, Obj, outLog) {
    _.each(Obj, function(val, key) {
      outLog(Id, key, val);
    });
  };

  // init
  $(function(){
    outuptEatch( '#uAgent', uAgent(), outLogKV );

    DigitalClock('#digitalClock');
  });
};
