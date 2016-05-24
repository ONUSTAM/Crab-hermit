var jqGridHeaderEditor = function() {

  var SHOW_TABLE = '.showTable';
  var HIDE_TABLE = '.hideTable';
  var BUTTON_MOVE_RIGHT     = '.btn-mv-right';
  var BUTTON_MOVE_RIGHT_ALL = '.btn-mv-rightA';
  var BUTTON_MOVE_LEFT      = '.btn-mv-left';
  var BUTTON_MOVE_LEFT_ALL  = '.btn-mv-leftA';
  var BUTTON_SORT_UP = '.btn-sort-up';
  var BUTTON_SORT_DN = '.btn-sort-dn';
  var BUTTON_SAVE = '.btn-update';

  var tabId;
  var tabShowTblId;
  var tabHideTblId;

  var showRow; //表示項目
  var hideRow; //非表示項目
  var sortRow; //ソート項目
  var sttmp; // 元
  var sttmpEx// 編集用
  // getForm
  function getForm () {
    return {};
  }
  // setForm
  function setForm ({}) {

  }

  // col-select
  function colSlt (Id) {
    if($(Id).hasClass('selected')) {
      $(Id).removeClass('selected');
    } else {
      $(Id).addClass('selected');
    }
  }

  // col-mv
    // col-mv-right
  function colMvRight () {
    $(tabHideTblId + ' tr.selected')
      .appendTo(tabShowTblId);
  }
    // col-mv-rightA
  function colMvRightA () {
    $(tabHideTblId + ' tr')
      .appendTo(tabShowTblId);
  }
    // col-mv-left
  function colMvLeft () {
    $(tabShowTblId + ' tr.selected')
      .appendTo(tabHideTblId);
  }
    // col-mv-leftA
  function colMvLeftA () {
    $(tabShowTblId + ' tr')
      .appendTo(tabHideTblId);
  }

  // sort Row
  function srtRow () {

  }

  // rowUp
  function sortUp () {
    var sltLst = $(tabShowTblId + ' tr.selected');
    var sortIdx = 0;

    jQuery.each( $(tabShowTblId + ' tr'), function(key, val){
      if ( $(val).find('.valCls').text() === $(sltLst[0]).find('.valCls').text() ) {
        sortIdx = key -1;
      }
    });
    $( $(tabShowTblId + ' tr')[sortIdx] ).before(sltLst);
  }

  // rowDn
  function sortDn () {
    var sltLst = $(tabShowTblId + ' tr.selected');
    var sortIdx = 0;

    jQuery.each( $(tabShowTblId + ' tr'), function(key, val){
      if ( $(val).find('.valCls').text() === $(sltLst[sltLst.length -1]).find('.valCls').text() ) {
        sortIdx = key +1;
      }
    });
    $( $(tabShowTblId + ' tr')[sortIdx] ).after(sltLst);
  }

  // setShowTable
  function setShowTable(tmp, isSort){
    var nodes = $('<tr/>')
          .append(
            $('<td/>')
              .addClass('valCls')
              .text(tmp.label)
          );

    if(isSort){
      nodes = $('<tr/>')
        .append(
          $('<td/>')
            .addClass('srtCls')
            .append(
              $('<input/>')
                .attr({
                  type: 'radio',
                  name: 'srtGp'
                })
                .prop('checked', tmp.sort)
            )
        )
        .append(
          $('<td/>')
            .addClass('valCls')
            .text(tmp.label)
        );
    }

    $(tabShowTblId).append( nodes );
  }
  // setHideTable
  function setHideTable(tmp) {
    $(tabHideTblId).append(
      $('<tr/>').append(
        $('<td/>')
          .addClass('valCls')
          .text(tmp.label)
      )
    );
  }
  // set(show, hide)Table
  function setTable(stT, isSort) {
    jQuery.each(stT, function(key, val){
      if (!val.static) {
        if (val.show) {
          setShowTable(val, isSort);
        } else {
          setHideTable(val, false);
        }
      }
    });
  }

  function getTrIdList (trS) {
    var IdList = [];
    jQuery.each(trS, function(key, val){
      IdList.push( $(val).find('.valCls').text() );
    });
    // console.log(IdList);
    return IdList;
  }


  // click evet
  function setClickEve_select (tabId) {
    $(tabId)
      .on('click', SHOW_TABLE + ' tr', function(_e){
        colSlt(this);
      })
      .on('click', HIDE_TABLE + ' tr', function(_e){
        colSlt(this);
      })
      .on('click', BUTTON_MOVE_RIGHT, function(_e){
        colMvRight();
      })
      .on('click', BUTTON_MOVE_RIGHT_ALL, function(_e){
        colMvRightA();
      })
      .on('click', BUTTON_MOVE_LEFT, function(_e){
        colMvLeft();
      })
      .on('click', BUTTON_MOVE_LEFT_ALL, function(_e){
        colMvLeftA();
      })
      .on('click', BUTTON_SORT_UP, function(_e){
        sortUp();
      })
      .on('click', BUTTON_SORT_DN, function(_e){
        sortDn();
      });
  }
  this.save = function() {


  };

  this.init = function(parentsTab, selfId, tmpKey, isSort) {
    tabId = parentsTab;
    tabShowTblId = tabId + ' ' + SHOW_TABLE + ' tbody';
    tabHideTblId = tabId + ' ' + HIDE_TABLE + ' tbody';

    $(selfId).sortable();
    sttmp = settingTMP[tmpKey];
    sttmpEx = jQuery.extend(true, {}, sttmp);

    // console.log(sttmpEx);
    $(tabShowTblId).empty();
    $(tabHideTblId).empty();

    setTable(sttmpEx, isSort);
    setClickEve_select(tabId);
  };
}
