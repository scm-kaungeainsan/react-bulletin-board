const infoMessages = {
  noFileInfo: 'ファイルが選択されていません',
  noDataInfo: 'データが存在しません。',
  createData: 'データは正常に作成されます。',
  updateData: 'データは正常に更新されます。',
  pwdChanged: 'パスワードを変更しました。',
  pwdUnChanged: 'パスワードは変更されていません。',
}

const errMessages = {
  requiredError: '必須項目です',
  passwordNotMatchError: 'パスワードが一致しません',
  dateFormatError: '日付を正しく入力してください',
  phNoError: '電話番号は半角数字・プラス・ハイフンのみ入力できます。',
  emailError: 'メールアドレスを入力してください',
  errorTitle: 'エラー',
  loginError: 'ログインに失敗しました。',
  file2MBError: '2MB以上のファイルはアップロードできません',
  maxLengthError: (no) => `${no}桁以内で入力してください`,
  minLengthError: (no) => `${no}桁以上で入力してください`, 
  patternError: (no) => `パスワードには、少なくとも${no}つの大文字と${no}つの数字が含まれている必要があります。`, 
     
}

export { infoMessages, errMessages };