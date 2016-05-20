// テーブルをjsonにフォーマットして返す
var JqGridFormat = function(baseTable_Id, jqGrid_Id) {
  var Id = baseTable_Id;
  var jqGridId = jqGrid_Id;
  var tBase = $(Id);
  var tHead = tBase.find('thead');
  var tBody = tBase.find('tbody');
  var dataHead = [];
  var datatBody = [];
  // checkboxの有無
  var isCheckbox = false;

  // tr配列を作る
  var createTR = function(table) {
    return $(table).find('tr');
  };
  // th配列を作る
  var createTH = function(row, tag){
    return $(row).find(tag);
  };
  // headのjson
  var colModel = function(thead) {
    var ary = [];

    jQuery.each(thead, function(key, val) {
      var formatter;
      var width
      if($(val).attr('data-type') === 'checkbox'){
        isCheckbox = true;
        ary.push({
          label: "<div class='text-center abc'><input type='checkbox' id='checkAll' class='clmCheck' role='checkbox'/></div>",
          name: $(val).attr('data-index'),
          index: $(val).attr('data-index'),
          resizable: false,
          width: 40,
          editable: true,
          type: 'checkbox',
          edittype: 'checkbox',
          formatoptions: { disabled: false },
          editoptions: { value: "True:False" },
          formatter: "<div class='text-center'><input id='checkAll' type='checkbox' class='clmCheck' role='checkbox'/></div>",
          sortable: false,
        });
      } else if($(val).attr('data-type') === 'cardListAction'){
          ary.push({
            label: $(val).text(),
            name: $(val).attr('data-index'),
            index: $(val).attr('data-index'),
            resizable: false,
            width: 200,
            editable: true,
            type: 'cardListAction',
            formatoptions: { disabled: false },
            editoptions: { value: "True:False" },
            sortable: false,
          });
      } else if($(val).attr('data-type') === 'sutaffuListAction'){
          ary.push({
            label: $(val).text(),
            name: $(val).attr('data-index'),
            index: $(val).attr('data-index'),
            resizable: false,
            width: 200,
            editable: true,
            type: 'sutaffuListAction',
            formatoptions: { disabled: false },
            editoptions: { value: "True:False" },
            sortable: false,
          });

      } else if($(val).attr('data-type') === 'rowId'){
        ary.push({
          label: $(val).text(),
          name: 'rowId',
          index:'rowId',
          type: 'rowId'
        });
      } else {
        ary.push({
          class: $(val).attr('class'),
          label: $(val).text(),
          name: $(val).attr('data-index'),
          index: $(val).attr('data-index'),
          type: 'data'
        });

      }

    });
    // console.log(ary);
    return ary;
  };

  //bodyのjson
  var data = function(row, tag) {
    var ary = [];
    // console.log(row);

    // trのパラメータの設定
    jQuery.each(row, function(key, val) {
      var obj = {};
      // console.log(key, val, $(val).find(tag));
      // tdのパラメータを設定

      jQuery.each($(val).find(tag), function(keys, vals) {
        if(dataHead[keys].type === 'rowId'){
          obj[dataHead[keys].index] = $(vals).text();

        } else if(dataHead[keys].type === 'checkbox'){
          // チェックボックス
          if($(vals).text() === 'true') {
              obj[dataHead[keys].index] = "<div class='text-center'><input type='checkbox' class='row_checkbox' checked='checked'/></div>";

          } else if($(vals).text() === 'false') {
            obj[dataHead[keys].index] = "<div class='text-center'><input type='checkbox' class='row_checkbox'/></div>";
          }
        } else if(dataHead[keys].type === 'cardListAction') {
          var patronId = $(vals).find('.patronId').text();
          var enable = $(vals).find('.enable').text();
          // console.log('patronId::', patronId);
          // console.log('enable::', enable);
          var btn_patronId = '';
          console.log('patronId:', patronId);
          if(patronId){
            btn_patronId = '<button class="btn btn-block btn-primary" id="unlinkCard">リンク解除</button>';
          }

          var btn_enable = '';
          if (enable === 'ENABLED') {
            btn_enable = '<span class="col-sm-4"><button class="btn btn-block btn-primary" id="TEMPORARY_DISABLED">一時的無効</button></span>' +
                         '<span class="col-sm-4"><button class="btn btn-block btn-primary" id="PERMANENTLY_DISABLED">永久無効</button></span>';
          } else if(enable === 'PERMANENTLY_DISABLED'){
          } else {
            btn_enable = '<span class="col-sm-4"><button class="btn btn-block btn-primary" id="ENABLED">有効化</button></span>';
          }

          obj[dataHead[keys].index] = '<div class="row">' +
            '<span class="col-sm-4">' +
              btn_patronId +
            '</span>' +
            '<span class="col-sm-4">' +
              '<button class="btn btn-block btn-primary" id="printCard">カード発行</button>' +
            '</span>' +
              btn_enable +
            '</div>';

        } else if(dataHead[keys].type === 'sutaffuListAction') {
            obj[dataHead[keys].index] = '<div class="col-sm-6">' +
               '<button class="btn btn-info btn-block" data-target="#changePasswordModal" id="openChangePasswordModal">PW変更</button>' +
              '</div>' +
              '<div class="col-sm-6">' +
                '<button class="btn btn-danger btn-block" id="deleteStaff">削除</button>' +
              '</div>';
        } else if(dataHead[keys].type === 'data'){
          obj[dataHead[keys].index] = $(vals).text();

        }
      });
      ary.push(obj);
      // console.log('------------------');
    });
    // console.log(ary);
    return ary;
  }

  // Theadのラベルオブジェクト
  var colNames = function(dataHead) {
    ary= [];
    jQuery.each(dataHead, function(key, val){
      ary.push(val.label);
    });

    return ary;
  }


  dataHead = colModel(createTH(createTR(tHead), 'th'));
  datatBody = data(createTR(tBody), 'td');
  // console.log(datatBody);
  return {
    datatype:     'local',
    colNames:     colNames(dataHead),
    colModel:     dataHead,
    data:         datatBody,
    width:        null,
    height:       '300',
    rowNum:       2000,
    shrinkToFit:  true,
    // multiselect:  true,// テーブルにチェックボックスを表示(自前で用意する)
    viewrecords:  true,
    hoverrows:    true,
    loadonce:     true,
    hideCol:      'rowId',
    isCheckbox:   isCheckbox
    // loadComplete: loadComplete, // 初期処理
    // onSelectRow:  selectRow,    // チェックボックスがクリックされた
    // onSelectAll:  selectAll     // ヘッダーのチェックボックスがクリックされた
  };

};
