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
            .addClass('h6')
            .text(key + ' : ')
        )
        .append(
          $('<span/>')
            .text(val)
        )
      );
  };

  function outuptEatch (Id, Obj, outLog) {
    _.each(Obj, function(key, val) {
      outLog(Id, key, val);
    });
  };

  $(function(){
    outuptEatch( '#uAgent', uAgent(), outLogKV );
  });
};
