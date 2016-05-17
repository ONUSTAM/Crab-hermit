// checkbox
checkbox: {
  set: function(item, date) {
    $(item.uiId).prop('checked', date);
  },
  get: function(item) {
    return $(item.uiId).prop('checked');
  },
  cancel: function(item, date) {
    $(item.uiId).prop('checked', date);
  },
  clear: function(item) {
    $(item.uiId).prop('checked', false);
  },
  edit: function(item) {
    return setData[item.index] != $(item.uiId).prop('checked');
  }
}
