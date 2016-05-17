// input text
inputText: {
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
};
// input text disabled
input_disabled: {
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
// input text （日付型）
date: {
  set: function(item, date) {
    $(item.uiId).val(FormatDate(date, item.format));
  },
  get: function(item) {
    return FormatPostDate( $(item.uiId).val() );
  },
  cancel: function(item, date) {
    $(item.uiId).val(FormatDate(date, item.format));
  },
  clear: function(item) {
    $(item.uiId).val('');
  },
  edit: function(item) {
    return FormatDate(setData[item.index], item.format) != $(item.uiId).val();
  }
},
