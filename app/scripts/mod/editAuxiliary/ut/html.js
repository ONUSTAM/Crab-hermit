html: {
  set: function(item, date) {
    $(item.uiId).html(date);
  },
  get: function(item) {
    return $(item.uiId).text();
  },
  cancel: function(item, date) {
    $(item.uiId).text(date);
  },
  clear: function(item) {
    $(item.uiId).text('');
  },
  edit: function(item) {
    return true;
  }
},
