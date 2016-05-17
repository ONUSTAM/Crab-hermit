// textarea
textarea: {
  set: function(item, date) {
    $(item.uiId).val(date);
  },
  get: function(item) {
    return $(item.uiId).val();
  },
  cancel: function(item, date) {
    $(item.uiId).val(date);
  },
  clear: function(item) {
    $(item.uiId).val('');
  },
  edit: function(item) {
    return setData[item.index] != $(item.uiId).val();
  }
},
