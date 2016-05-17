var userDetail = {
  userId: {
    label: 'ユーザーId',
    index: 'userId',
    uiId: '#userId',
    uiType: 'span',
  },
  userName: {
    label: 'ユーザー名',
    index: 'userName',
    uiId: '#userName',
    uiType: 'inputtext',
  },
  position: {
    label: 'ユーザー種別',
    index: 'position',
    uiId: '#position',
    uiType: 'selectbox',
  },
  entryDate: {
    label: '登録日',
    index: 'created_at',
    uiId: '#created_at',
    uiType: 'inputtextDate',
    format: 'YYYY/MM/DD'
  },
  update: {
    label: '更新日',
    index: 'updated_at',
    uiId: '#updated_at',
    format: 'YYYY/MM/DD hh:mm:dd'
  }
};
