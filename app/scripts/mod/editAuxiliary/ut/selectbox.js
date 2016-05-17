
    // selectbox
    selectbox: {
      set: function(item, date) {
        $(item.uiId).children().removeAttr("selected");
        $(item.uiId).val(date);
        $(item.uiId).selectpicker('refresh');
      },
      get: function(item) {
        return $(item.uiId).val();
      },
      cancel: function(item, date) {
        $(item.uiId).children().removeAttr("selected");
        $(item.uiId).val(date);
        $(item.uiId).selectpicker('refresh');
      },
      clear: function(item) {
        $(item.uiId).children().removeAttr("selected");
        $(item.uiId).selectpicker('refresh');
      },
      edit: function(item) {
        return setData[item.index].toString() != $(item.uiId).val();
      }
    },
    // selectBox_disabled
    selectBox_disabled: {
      set: function(item, date) {
        $(item.uiId).children().removeAttr("selected");
        $(item.uiId)
          .val(date)
          .attr('disabled', true);
        $(item.uiId).selectpicker('refresh');
      },
      get: function(item) {
        return $(item.uiId).val();
      },
      cancel: function(item, date) {
        $(item.uiId).children().removeAttr("selected");
        $(item.uiId).val(date);
        $(item.uiId).selectpicker('refresh');
      },
      clear: function(item) {
        $(item.uiId).children().removeAttr("selected");
        $(item.uiId).selectpicker('refresh');
      },
      edit: function(item) {
        return setData[item.index].toString() != $(item.uiId).val();
      }
    },
