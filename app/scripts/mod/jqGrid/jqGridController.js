// var JqGridController = function(baseTable_Id, jqGrid_Id) {
var JqGridController = function(conf) {
  // 元<table>
  var baseTableId = conf.baseTableId;
  // jqGrid
  var jqGridId = conf.jqGridId;
  // pageId
  var pageId = conf.pageId;

  // checkboxが必要なテーブル
  var getIsCheckbox = function() {

  }

  // 元<table>をjsonに変換する
  var jqGridFormat = JqGridFormat(baseTableId, jqGridId, settingTMP[pageId]);
  // 最後に選択した行データを保
  var selectedRow;

  //非表示項目の設定
  var getHideCol = function() {
    var hideList = [];
    jQuery.each(settingTMP[pageId], function(key, val) {
      if(!val.displayFlg) {
        hideList.push(val.colNameEn);
      }
    });
    return hideList;
  };

  // ハイライトする
  var highlightRow = function(Id) {
    $(jqGridId + ' tr').removeClass('info');
    $(jqGridId + ' #' + Id).addClass('info');
  };

  //テーブルのリサイズ
  var justSize = function() {
    $(jqGridId).jqGrid('setGridWidth', $('.customLayout .wrap').width(), false);
    $(jqGridId).jqGrid('setGridHeight',$('.customLayout .wrap').height()-30, true);
  };


  //初期表示処理
  var loadComplete = function() {
    // cssClassを追加
    jQuery(jqGridId)
      .hideCol('rowId')
      .hideCol(getHideCol())
      .addClass('table')
      .addClass('table-bordered')
      .addClass('table-hover');

    $('.ui-jqgrid-htable')
      .addClass('table')
      .addClass('table-bordered')
      .css({backgroundColor: '#eee'});

    //ヘッダーのcheckboxがクリックできるように
    $('.ui-th-div').removeClass('ui-jqgrid-sortable');

    //ヘッダーのチェックボックスイベント
    $('#checkAll').on('click', function(_e) {
      checkboxClickALL_( $(_e.target).prop('checked') );
    });
    // checkboxイベント
    $('.row_checkbox').on('click', function(_e) {
      checkboxClick_( $(_e.target).prop('checked'), $(_e.target).closest('tr') );
    });

    // テーブルのサイズを調整
    justSize();

    //ハイライトの初期設定
    highlightRow(1);

    // 初期選択
  };




  // mapで全てのチェック情報を返す
  var checkListMap = function(aRowIds, status) {
    var items;
    if (status) {
      items = "allCheck:true,";
    } else {
      items = "allCheck:false,";
    }

    items = items + $('.ui-jqgrid-btable .row_checkbox').map(function() {
			var Id = $(this).closest('tr').attr("id");
			var itemCheked = $(jqGridId).getRowData(Id).rowId;
			if ($(this).prop('checked')) {
				itemCheked = itemCheked + ":true";
			} else {
				itemCheked = itemCheked + ":false";
			}
			return itemCheked;
		}).get().join(",");

    return items;
  };


  //全てのrowIdを返す
  var rowIds = function() {
    var ary = [];
    jQuery.each($(jqGridId).getRowData(), function(key, val){
      ary.push(val.rowId);
    });

    return ary;
  };
  //引数で指定された行情報を返す
  var rowData = function(rowId, key) {
    // keyが指定されていたら
    if( key ){
      return $(jqGridId).getRowData( rowId )[key];
    }

    return $(jqGridId).getRowData( rowId );
  };
  this.rowData = rowData;

  // 全てをチェック（ヘッダー）
  var checkboxClickALL_ = function(checked) {
    // 全てのrowのチェックボックスを変更する
    $('.row_checkbox').prop('checked', checked);
    checkboxClickALL(checkListMap(rowIds(), checked));
  };
  var checkboxClickALL;// 外部メソッドをインスタンスに登録する用
  var setCheckboxClickALL = function(method) { checkboxClickALL = method; };
  var selectAll = function(aRowIds, status){
    // console.log(aRowIds, status);
    // console.log($(jqGridId).getRowData());
    checkboxClickALL(checkListMap(aRowIds, status));
  };
  this.checkboxClickALL = setCheckboxClickALL;

  // リストのクリックイベントハンドラ
  var checkboxClick_ = function(checked, tr) {
    var rowData = $(jqGridId).getRowData( $(tr).attr('id') );
    rowData.checkbox = checked;
    checkboxClick( rowData );
  };
  var checkboxClick;// 外部メソッドをインスタンスに登録する用
  var setCheckboxClick = function(method) { checkboxClick = method; };// 外部メソッドをインスタンスに登録する用
  var selectRow = function(Id, isChecked){
    // console.log(Id, isChecked);
    selectedRow = $(jqGridId).getRowData(Id);
    selectedRow.checked = isChecked;

    highlightRow(Id);

    //テーブルにcheckboxがあるかないか
    if(jqGridFormat.isCheckbox) {
      checkboxClick(selectedRow);
    }
  };
  this.checkboxClick = setCheckboxClick;


  // テーブルの入れ替え
  var setTable = function(theadHtml, bodyHtml) {
    setHeader(theadHtml);
    setBody(bodyHtml);
    $('#gbox_list').remove();
    $('.wrap').append($('<table/>').attr('id', 'list'));
    jqGridFormat = JqGridFormat(baseTableId, jqGridId, settingTMP[pageId]);

    init();
  };
  this.setTable = setTable;

  // ヘッダーの設定
  var setHeader = function(theadHtml){
    $(baseTableId).parent().parent().children('table').children(
      'thead').html(theadHtml);
  };
  this.setHeader = setHeader;

  // テーブルの中身入れ替え
  var setBody = function(bodyHtml) {
    $(baseTableId + ' > tbody').html(bodyHtml);
  };
  this.setBody = setBody;


  // 変更された元テーブルからjqGridを再度生成する
  var reflesh = function() {
    jqGridFormat = JqGridFormat(baseTableId, jqGridId, settingTMP[pageId]);

    jQuery(jqGridId).jqGrid('setGridParam', {data: jqGridFormat.data});
    $(jqGridId).trigger("reloadGrid");
  };
  this.reflesh = reflesh;

  //初期
  var init = function() {
    $(baseTableId).css({display:'none'});

    // console.log(jqGridFormat);
    jqGridFormat.loadComplete = loadComplete;//初期表示イベント
    jqGridFormat.onSelectRow = selectRow;    //行選択イベント
    jqGridFormat.onSelectAll = selectAll;    //全選択イベント

    //起動処理
    jQuery(jqGridId).jqGrid(jqGridFormat);

    //画面サイズに合わせてテーブルを拡縮する
    jQuery(window).resize(function(){ justSize(); });

    //TODO ハイライトするかしないかを切り替えしたい
    //highlightRow();

  };
  this.init = init;
};
