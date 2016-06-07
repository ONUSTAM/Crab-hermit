// セッションストレージの全てではなく、引数に設定されたIdのセッションのみを扱います。
var SessionStorageCtrl = function (ssId) {
  // 保存名
  var storageId = ssId;

  if(!('sessionStorage' in window)) {
    console.log('Not Available');
    // 使えない。。。
    return;
  }

  console.log('aaaL:', {abc:'asv'} );
  console.log('aaaL:', JSON.stringify({abc:'asv'}) );
  sessionStorage_set(2);
  console.log('get():: ', sessionStorage_get());
  sessionStorage_clear();
  console.log('get():: ', sessionStorage_get());

  // セッションストレージ データの保存
  function sessionStorage_set (params) {
    sessionStorage.setItem(storageId, params);
    window.sessionStorage.setItem(storageId, params);
    sessionStorage.access_count = params;
  }
  this.ssSet = sessionStorage_set;

  // セッションストレージ データの取得
  function sessionStorage_get () {
    var result = sessionStorage.getItem(storageId);
    result = window.sessionStorage.getItem(storageId);
    result = sessionStorage.access_count;
    return result;
  }
  this.ssGet = sessionStorage_get;

  // セッションストレージ データを削除
  function sessionStorage_clear () {
    sessionStorage.clear();
    window.sessionStorage.clear();
  }


  // サーバーからデータを取得
  function server_get () {

  }

  // データをサーバーに送信
  function server_set () {

  }

  // テーブルからデータを取得
  function table_get () {

  }

  // テーブルにセッションストレージのデータを渡す



  // サーバーから取得したデータをセッションストレージ用にフォーマットする（jsonにする）
  // セッションストレージから取得したデータをテーブル用にフォーマットする（stringにする）
  // テーブルから取得したデータをセッションストレージ用ににフォーマットする（jsonにする）

  // jsonからstring
  function formatToString (jsn) {
    return JSON.stringify(jsn);
  }
  // stringからjson
  function formatToJson (str) {
    return $.parseJSON(str);
  }


}
