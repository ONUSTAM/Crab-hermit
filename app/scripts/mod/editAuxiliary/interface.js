EditAuxiliary function(td) {
  var tmpData = td;
  // セットされたデータを格納
  var setData = {};

  // セット、ゲット、キャンセル、削除イベント
  // _e = 'set', 'get', 'cancel', 'delete'
  // data = 「セット」する場合のみ必要
  // *eaEv('set', data);
  //////////////////////////////////////eval///////////////////////////////////////
  var eaEv = function(_e, data) {
    switch (_e){
      case 'set': viewST_set(_e, data);
        break;
      case 'get': return viewST_set(_e);
        break;
      case 'cancel': viewST_cancel(_e);
        break;
      case 'clear': viewST_clear(_e);
        break;
    }
  };
  this.event = viewST_event;// 外から呼ぶ場合

  var viewST_set = function(_e, data) {
    // データセット
    setData = data;
    jQuery.each(dataMap, function(key, item){
      viewSt_method[item.uiType][_e](item, setData[item.index]);
    });
  };

  var viewST_get = function(_e, data) {
    // UIにセットされているデータを取得
    var params = {};
    jQuery.each(dataMap, function(key, item){
      params[item.index] = viewSt_method[item.uiType][_e](item);
    });
    return params;
  };

  var viewST_cancel = function(_e, data) {
    // 編集した内容を取得している内容に戻す
    jQuery.each(dataMap, function(key, item){
      viewSt_method[item.uiType]['set'](item, setData[item.index]);
    });
  };

  var viewST_clear = function(_e) {
    jQuery.each(dataMap, function(key, item){
      viewSt_method[item.uiType][_e](item, setData[item.index]);
    });
  };

  var viewST_deleteItem = function(_e, data) {
    data.remove();
  };
}
