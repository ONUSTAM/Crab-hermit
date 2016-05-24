function tablesettingCtrl () {

  var homeTab = new jqGridHeaderEditor();
  var menu1Tab = new jqGridHeaderEditor();
  var menu2Tab = new jqGridHeaderEditor();
  homeTab.init('#home', '.sortdata', 'userSearch', false);
  menu1Tab.init('#menu1', '.sortdata', 'userSearch', true);
  menu2Tab.init('#menu2', '.sortdata', 'userSearch', true);

  // (function(parentsTab, selfId, tmpKey, isSort){
  //   tabId = parentsTab;
  //   tabShowTblId = tabId + ' ' + SHOW_TABLE + ' tbody';
  //   tabHideTblId = tabId + ' ' + HIDE_TABLE + ' tbody';
  //
  //   $(selfId).sortable();
  //   sttmp = settingTMP[tmpKey];
  //   sttmpEx = jQuery.extend(true, {}, sttmp);
  //
  //   console.log(sttmpEx);
  //   $(tabShowTblId).empty();
  //   $(tabHideTblId).empty();
  //
  //   setTable(sttmpEx, isSort);
  //   setClickEve_select(tabId);
  //
  // })('#home', '.sortdata', 'userSearch', true);
  //




}
