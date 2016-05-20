var splitpaLayout = function(){
  var jqGrid = new JqGridController({
		baseTableId : '#search-result',
		jqGridId : '#list',
		pageId : 'userSearch'
	});


  // 初期処理
	$(function() {
		// tablegrid.init('searchItem');
		jqGrid.init();
	});
};
