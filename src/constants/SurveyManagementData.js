const checkboxData = [
  [
    {
      label: '氏名',
      value: 'surveyName',
      checked: true,
      displayOrder: 0
    },
    {
      label: '氏名カナ',
      value: 'surveyNameKana',
      checked: true,
      displayOrder: 1
    },
    {
      label: '氏名ローマ字',
      value: 'surveyNameEn',
      checked: true,
      displayOrder: 2
    },
    {
      label: '生年月日',
      value: 'surveyBirthDate',
      checked: true,
      displayOrder: 3
    },
    {
      label: '性別',
      value: 'surveyGender',
      checked: true,
      displayOrder: 4
    },
    {
      label: '住所',
      value: 'surveyPersonAddress',
      checked: true,
      displayOrder: 5
    },
    {
      label: '電話番号',
      value: 'surveyPersonPhoneNo',
      checked: true,
      displayOrder: 6
    },
    {
      label: 'メールアドレス',
      value: 'surveyPersonEmailAddress',
      checked: true,
      displayOrder: 7
    }
  ],
  [
    {
      label: '職業',
      value: 'occupationCode',
      checked: false,
      displayOrder: 8
    },
    {
      label: '勤務先',
      value: 'workplace',
      checked: false,
      displayOrder: 9
    },
    {
      label: '勤務先の住所',
      value: 'workplaceAddress',
      checked: false,
      displayOrder: 10
    },
    {
      label: '銀行との取引目的',
      value: 'businessDeal',
      checked: false,
      displayOrder: 11
    },
    {
      label: '資産・収入',
      value: 'assetsIncom',
      checked: false,
      displayOrder: 12
    }
  ],
  [
    {
      label: '国籍・在留資格期限',
      value: 'selectNationality',
      checked: false,
      displayOrder: 13
    },
    {
      label: '日本国外への送金',
      value: 'remittanceOutside',
      checked: false,
      displayOrder: 14
    },
    {
      label: '外国PEPsの確認',
      value: 'selectPEPs',
      checked: false,
      displayOrder: 15
    },
    {
      label: '制裁対象国との取引',
      value: 'sanctionedCountries',
      checked: false,
      displayOrder: 16
    },
    {
      label: '勤務先電話番号',
      value: 'workplacePhoneNo',
      checked: false,
      displayOrder: 17
    },
  ]
];

const steps = ['質問の選択', '質問の編集', 'カテゴリの編集', 'カテゴリの割り当て', '登録'];

const questionUpdateList = [
  {
    title: '氏名',
    value: 'surveyName',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-name.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '氏名'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '口座保有者の氏名を入力してください'
      },
      {
        label: '姓のラベル名',
        inputName: 'lastNameLabel',
        defaultValue: '姓'
      },
      {
        label: '姓の初期表示文言',
        inputName: 'lastNamePlaceholder',
        defaultValue: '銀行'
      },
      {
        label: '名のラベル名',
        inputName: 'firstNameLabel',
        defaultValue: '名'
      },
      {
        label: '名の初期表示文言',
        inputName: 'firstNamePlaceholder',
        defaultValue: '太郎'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '３０文字以内で入力してください'
      }
    ],
    textRestriction: [
      {
        label: '姓の入力文字属性',
        inputName: 'lastNameCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '姓の入力必須可否',
        inputName: 'requiredLastName',
        defaultValue: 'checked'
      },
      {
        label: '姓のフィールド名',
        inputName: 'lastNameCustomKey',
        defaultValue: 'lastName'
      },
      {
        label: '姓の最大桁数',
        inputName: 'lastNameMaxLength',
        defaultValue: '30'
      },
      {
        label: '名の入力文字属性',
        inputName: 'firstNameCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '名の入力必須可否',
        inputName: 'requiredfirstName',
        defaultValue: 'checked'
      },
      {
        label: '名のフィールド名',
        inputName: 'firstNameCustomKey',
        defaultValue: 'firstName'
      },
      {
        label: '名の最大桁数',
        inputName: 'firstNameMaxLength',
        defaultValue: '30'
      },
    ]
  },
  {
    title: '氏名カナ',
    value: 'surveyNameKana',
    checkBoxLabel: 'この質問を必須入力する',
    imgSrc: 'img/question-update-name-kana.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '氏名（フリガナ）'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: 'この設問は、、、'
      },
      {
        label: '姓のラベル名',
        inputName: 'lastNameKanaLabel',
        defaultValue: '姓（セイ）'
      },
      {
        label: '姓の初期表示文言',
        inputName: 'lastNameKanaPlaceholder',
        defaultValue: 'e.g. ギンコウ'
      },
      {
        label: '名のラベル名',
        inputName: 'firstNameKanaLabel',
        defaultValue: '名（メイ）'
      },
      {
        label: '名の初期表示文言',
        inputName: 'firstNameKanaPlaceholder',
        defaultValue: 'e.g. タロウ'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      }
    ],
    textRestriction: [
      {
        label: '姓の入力文字属性',
        inputName: 'lastNameKanaCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '姓の入力必須可否',
        inputName: 'requiredLastNameKana',
        defaultValue: 'checked'
      },
      {
        label: '姓のJSON項目名',
        inputName: 'lastNameKanaCustomKey',
        defaultValue: 'last-kana-name'
      },
      {
        label: '姓の桁数',
        inputName: 'lastNameKanaMaxLength',
        defaultValue: '30'
      },
      {
        label: '名の入力文字属性',
        inputName: 'firstNameKanaCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '名の入力必須可否',
        inputName: 'requiredfirstNameKana',
        defaultValue: 'checked'
      },
      {
        label: '名のJSON項目名',
        inputName: 'firstNameKanaCustomKey',
        defaultValue: 'first-kana-name'
      },
      {
        label: '名の桁数',
        inputName: 'firstNameKanaMaxLength',
        defaultValue: '30'
      },
    ]
  },
  {
    title: '氏名（ローマ字）',
    value: 'surveyNameEn',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-name-romaji.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '氏名（フリガナ）'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '口座保有者の氏名のローマ字を記入してください'
      },
      {
        label: '姓のラベル名',
        inputName: 'lastNameRomaLabel',
        defaultValue: '姓（セイ）'
      },
      {
        label: '姓の初期表示文言',
        inputName: 'lastNameRomaPlaceholder',
        defaultValue: 'e.g. ギンコウ'
      },
      {
        label: '名のラベル名',
        inputName: 'firstNameRomaLabel',
        defaultValue: '名（メイ）'
      },
      {
        label: '名の初期表示文言',
        inputName: 'firstNameRomaPlaceholder',
        defaultValue: 'e.g. タロウ'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      }
    ],
    textRestriction: [
      {
        label: '姓の入力文字属性',
        inputName: 'lastNameRomaCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '姓の入力必須可否',
        inputName: 'requiredLastNameRoma',
        defaultValue: 'checked'
      },
      {
        label: '姓のJSON項目名',
        inputName: 'lastNameRomaCustomKey',
        defaultValue: 'last-Roma-name'
      },
      {
        label: '姓の桁数',
        inputName: 'lastNameRomaMaxLength',
        defaultValue: '30'
      },
      {
        label: '名の入力文字属性',
        inputName: 'firstNameRomaCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '名の入力必須可否',
        inputName: 'requiredfirstNameRoma',
        defaultValue: 'checked'
      },
      {
        label: '名のJSON項目名',
        inputName: 'firstNameRomaCustomKey',
        defaultValue: 'first-Roma-name'
      },
      {
        label: '名の桁数',
        inputName: 'firstNameRomaMaxLength',
        defaultValue: '30'
      },
    ]
  },
  {
    title: '生年月日',
    value: 'surveyBirthDate',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-dob.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '生年月日'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '生年月日を西暦で入力してください'
      },
      {
        label: '初期選択の年月日',
        inputName: 'dob',
        defaultValue: ''
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      }
    ],
    textRestriction: [
      {
        label: 'JSON項目名',
        inputName: 'birthDateCustomKey',
        defaultValue: 'birthDate'
      }
    ]
  },
  {
    title: '性別',
    value: 'surveyGender',
    checkBoxLabel: 'この質問を必須入力する',
    imgSrc: 'img/question-update-gender.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '性別'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '性別を選択してください'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '性別を判断しない方は回答しないを選択してください'
      },
    ],
    editTextbox: [
      {
        title: '性別コード表',
        textBoxData: [
          {
            key: 'M',
            value: '男性',
            inputName: 'M',
          },
          {
            key: 'F',
            value: '女性',
            inputName: 'F',
          },
          {
            key: 'X',
            value: '回答しない',
            inputName: 'X',
          }
        ]
      },
    ],
    textRestriction: [
      {
        label: 'JSON項目名',
        inputName: 'genderCustomKey',
        defaultValue: 'surveyGender'
      }
    ]
  },
  {
    title: '住所',
    value: 'surveyPersonAddress',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-address.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '住所'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '口座保有者の住所を記入してください'
      },
      {
        label: '郵便番号のラベル名',
        inputName: 'personAddressPostalNo',
        defaultValue: '郵便番号'
      },
      {
        label: '都道府県のラベル名',
        inputName: 'personAddressPrefecture',
        defaultValue: '都道府県'
      },
      {
        label: '住所１のラベル名',
        inputName: 'personAddress1',
        defaultValue: '市区町村'
      },
      {
        label: '住所２のラベル名',
        inputName: 'personAddress2',
        defaultValue: '字番地'
      },
      {
        label: '住所３のラベル名',
        inputName: 'personAddress3',
        defaultValue: '建物名'
      },
      {
        label: '住所１（フリガナ）のラベル名',
        inputName: 'personAddressKana1',
        defaultValue: '市区町村（フリガナ）'
      },
      {
        label: '住所２（フリガナ）のラベル名',
        inputName: 'personAddressKana2',
        defaultValue: '字番地（フリガナ）'
      },
      {
        label: '住所３（フリガナ）のラベル名',
        inputName: 'personAddressKana3',
        defaultValue: '建物名（フリガナ）'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '各項目を３０文字以内で入力してください'
      }
    ],
    textRestriction: [
      {
        label: '郵便番号のJSON項目名',
        inputName: 'personAddressPostalNoCustomKey',
        defaultValue: 'personPostalNo'
      },
      {
        label: '都道府県のJSON項目名',
        inputName: 'personAddressPrefectureCustomKey',
        defaultValue: 'personPrefecture'
      },
      {
        label: '住所１のJSON項目名',
        inputName: 'personAddress1CustomKey',
        defaultValue: 'personAddress1'
      },
      {
        label: '住所２のJSON項目名',
        inputName: 'personAddress2CustomKey',
        defaultValue: 'personAddress2'
      },
      {
        label: '住所３のJSON項目名',
        inputName: 'personAddress3CustomKey',
        defaultValue: 'personAddress3'
      },
      {
        label: '住所１（フリガナ）のJSON項目名',
        inputName: 'personAddressKana1CustomKey',
        defaultValue: 'personAddressKana1'
      },
      {
        label: '住所２（フリガナ）のJSON項目名',
        inputName: 'personAddressKana2CustomKey',
        defaultValue: 'personAddressKana2'
      },
      {
        label: '住所３（フリガナ）のJSON項目名',
        inputName: 'personAddressKana3CustomKey',
        defaultValue: 'personAddressKana3'
      },
      {
        label: '各住所項目の桁数',
        inputName: 'personAddressMaxLength',
        defaultValue: '30'
      },
      {
        label: '各入力文字属性',
        inputName: 'personAddressCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
    ]
  },
  {
    title: '電話番号',
    value: 'surveyPersonPhoneNo',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-phone.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '電話番号'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '固定電話番号もしくは携帯電話番号を記入してください'
      },
      {
        label: '携帯電話のラベル名',
        inputName: 'personCellPhoneNoLabel',
        defaultValue: '携帯電話'
      },
      {
        label: '携帯電話の初期表示文言',
        inputName: 'personCellPhoneNoPlaceholder',
        defaultValue: '例：09012345678'
      },
      {
        label: '固定電話のラベル名',
        inputName: 'personTelePhoneNoLabel',
        defaultValue: '電話'
      },
      {
        label: '固定電話の初期表示文言',
        inputName: 'personTelePhoneNoPlaceholder',
        defaultValue: '例：0312345678'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '補足：ーハイフンは不要です'
      }
    ],
    textRestriction: [
      {
        label: '携帯電話のJSON項目名',
        inputName: 'personCellPhoneNoCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '携帯電話の入力必須可否',
        inputName: 'requiredPersonCellPhoneNo',
        defaultValue: 'checked'
      },
      {
        label: '携帯電話のJSON項目名',
        inputName: 'personCellPhoneNoCustomKey',
        defaultValue: 'cellPhone'
      },
      {
        label: '携帯電話の桁数',
        inputName: 'personCellPhoneNoMaxLength',
        defaultValue: '30'
      },
      {
        label: '電話のJSON項目名',
        inputName: 'personTelePhoneNoCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '電話の入力必須可否',
        inputName: 'requiredPersonTelePhoneNo',
        defaultValue: 'checked'
      },
      {
        label: '電話のJSON項目名',
        inputName: 'personTelePhoneNoCustomKey',
        defaultValue: 'Phone'
      },
      {
        label: '電話の桁数',
        inputName: 'personTelePhoneNoMaxLength',
        defaultValue: '30'
      },
    ]
  },
  {
    title: 'メールアドレス',
    value: 'surveyPersonEmailAddress',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-mail.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: 'メールアドレス'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '口座保有者のメールアドレスを入力してください'
      },
      {
        label: 'メールアドレスのラベル名',
        inputName: 'personEmailAddressLabel',
        defaultValue: 'メールアドレス'
      },
      {
        label: 'メールアドレスの初期表示文言',
        inputName: 'personEmailAddressPlaceholder',
        defaultValue: 'bank@sample.co.jp'
      },
      {
        label: '再入力確認チェックボックスのラベル名',
        inputName: 'retypeDescLabel',
        defaultValue: '確認のため、再度入力してください'
      },
      {
        label: '再確認入力有無',
        inputName: 'isRetype',
        defaultValue: 'checked'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      }
    ],
    textRestriction: [
      {
        label: 'メールアドレスの入力文字属性',
        inputName: 'personEmailAddressCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: 'メールアドレスの入力必須可否',
        inputName: 'requiredPersonEmailAddress',
        defaultValue: 'checked'
      },
      {
        label: 'メールアドレスのJSON項目名',
        inputName: 'personEmailAddressCustomKey',
        defaultValue: 'personEmailAddress'
      },
      {
        label: 'メールアドレスの桁数',
        inputName: 'personEmailAddressMaxLength',
        defaultValue: '100'
      },
    ]
  },
  {
    title: '職業',
    value: 'occupationCode',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-occupation.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '職業'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '職業と事業内容を選んでください'
      },
      {
        label: '職業のラベル名',
        inputName: 'occupationCodeLabel',
        defaultValue: '職業'
      },
      {
        label: '事業内容のラベル名',
        inputName: 'bizDetailsCodeLabel',
        defaultValue: '事業内容'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      },
      {
        label: '職業その他の説明文（ラベル名）',
        inputName: 'occupationEtcValueLabel',
        defaultValue: '職業がその他の場合、以下へ記入してください'
      }
    ],
    editTextbox: [
      {
        title: '職業コード表',
        textBoxData: [
          {
            key: '01',
            value: '会社役員',
            inputName: 'occupationCode01',
          },
          {
            key: '02',
            value: '会社員',
            inputName: 'occupationCode02',
          },
          {
            key: '03',
            value: '学生',
            inputName: 'occupationCode03'
          }
        ],
        etcCodeLabel: '職業コード表でその他とするID'
      },
      {
        title: '事業内容コード表',
        textBoxData: [
          {
            key: '01',
            value: '建設業',
            inputName: 'bizDetailsCode01',
          },
          {
            key: '02',
            value: '小売業',
            inputName: 'bizDetailsCode02',
          },
          {
            key: '03',
            value: '飲食業',
            inputName: 'bizDetailsCode03',
          }
        ]
      }
    ],
    textRestriction: [
      {
        label: '職業コードのJSON項目名',
        inputName: 'occupationCodeCustomKey',
        defaultValue: 'occupationCode'
      },
      {
        label: '職業がその他の入力文字属性',
        inputName: 'occupationEtcValueCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '職業がその他の入力必須可否',
        inputName: 'requiredOccupationEtcValue',
        defaultValue: 'checked'
      },
      {
        label: '職業がその他のJSON項目名',
        inputName: 'occupationEtcValueCustomKey',
        defaultValue: '半角英数字のみ'
      },
      {
        label: '職業がその他の桁数',
        inputName: 'occupationEtcValueMaxLength',
        defaultValue: '100'
      },
      {
        label: '事業内容コードの入力必須可否',
        inputName: 'requiredBizDetailsCode',
        defaultValue: 'checked'
      },
      {
        label: '事業内容コードのJSON項目名',
        inputName: 'bizDetailsCodeCustomKey',
        defaultValue: '半角英数字のみ'
      },
    ]
  },
  {
    title: '勤務先',
    value: 'workplace',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-work-place.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '勤務先'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '勤務先もしくは学校名を記入してください'
      },
      {
        label: '勤務先名のラベル',
        inputName: 'workplaceLabel',
        defaultValue: '勤務先名'
      },
      {
        label: '勤務先名の初期表示文言',
        inputName: 'workplacePlaceholder',
        defaultValue: '例：eKYC Bank'
      },
      {
        label: '勤務先名(フリガナ)のラベル',
        inputName: 'workplaceKanaLabel',
        defaultValue: '勤務先名(フリガナ)'
      },
      {
        label: '勤務先名(フリガナ)の初期表示文言',
        inputName: 'workplaceKanaPlaceholder',
        defaultValue: 'ラインギンコウ'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '　補足：60文字以内で入力してください'
      }
    ],
    textRestriction: [
      {
        label: '勤務先名入力必須可否',
        inputName: 'requiredWorkplace',
        defaultValue: 'checked'
      },
      {
        label: '勤務先の入力文字属性',
        inputName: 'workplaceCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '勤務先のJSON項目名',
        inputName: 'workplaceCustomKey',
        defaultValue: 'workplace'
      },
      {
        label: '勤務先の桁数',
        inputName: 'workplaceMaxLength',
        defaultValue: '60'
      },
      {
        label: '勤務先名(フリガナ)入力必須可否',
        inputName: 'requiredWorkplaceKana',
        defaultValue: 'checked'
      },
      {
        label: '勤務先(フリガナ)の入力文字属性',
        inputName: 'workplaceKanaCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '勤務先(フリガナ)のJSON項目名',
        inputName: 'workplaceKanaCustomKey',
        defaultValue: 'workplaceKana'
      },
      {
        label: '勤務先(フリガナ)の桁数',
        inputName: 'workplaceKanaMaxLength',
        defaultValue: '60'
      }
    ]
  },
  {
    title: '勤務先の住所',
    value: 'workplaceAddress',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-work-address.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '勤務先（学校）の住所'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '勤務先（学校）の住所を入力してください'
      },
      {
        label: '郵便番号のラベル名',
        inputName: 'workplaceAddressPostalNo',
        defaultValue: '郵便番号'
      },
      {
        label: '都道府県のラベル名',
        inputName: 'workplaceAddressPrefecture',
        defaultValue: '都道府県'
      },
      {
        label: '住所１のラベル名',
        inputName: 'workplaceAddress1',
        defaultValue: '市区町村'
      },
      {
        label: '住所２のラベル名',
        inputName: 'workplaceAddress2',
        defaultValue: '字番地'
      },
      {
        label: '住所３のラベル名',
        inputName: 'workplaceAddress3',
        defaultValue: '建物名'
      },
      {
        label: '住所１（フリガナ）のラベル名',
        inputName: 'workplaceAddressKana1',
        defaultValue: '市区町村（フリガナ）'
      },
      {
        label: '住所２（フリガナ）のラベル名',
        inputName: 'workplaceAddressKana2',
        defaultValue: '字番地（フリガナ）'
      },
      {
        label: '住所３（フリガナ）のラベル名',
        inputName: 'workplaceAddressKana3',
        defaultValue: '建物名（フリガナ）'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '各項目を３０文字以内で入力してください'
      }
    ],
    textRestriction: [
      {
        label: '郵便番号のJSON項目名',
        inputName: 'workplaceAddressPostalNoCustomKey',
        defaultValue: 'workplacePostalNo'
      },
      {
        label: '都道府県のJSON項目名',
        inputName: 'workplaceAddressPrefectureCustomKey',
        defaultValue: 'workplacePrefecture'
      },
      {
        label: '住所１のJSON項目名',
        inputName: 'workplaceAddress1CustomKey',
        defaultValue: 'workplaceAddress1'
      },
      {
        label: '住所２のJSON項目名',
        inputName: 'workplaceAddress2CustomKey',
        defaultValue: 'workplaceAddress2'
      },
      {
        label: '住所３のJSON項目名',
        inputName: 'workplaceAddress3CustomKey',
        defaultValue: 'workplaceAddress3'
      },
      {
        label: '住所１（フリガナ）のJSON項目名',
        inputName: 'workplaceAddressKana1CustomKey',
        defaultValue: 'workplaceAddressKana1'
      },
      {
        label: '住所２（フリガナ）のJSON項目名',
        inputName: 'workplaceAddressKana2CustomKey',
        defaultValue: 'workplaceAddressKana2'
      },
      {
        label: '住所３（フリガナ）のJSON項目名',
        inputName: 'workplaceAddressKana3CustomKey',
        defaultValue: 'workplaceAddressKana3'
      },
      {
        label: '各住所項目の桁数',
        inputName: 'workplaceAddressMaxLength',
        defaultValue: '30'
      },
      {
        label: '各入力文字属性',
        inputName: 'workplaceAddressCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
    ]
  },
  {
    title: '取引の目的',
    value: 'businessDeal',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-purpose-of-transaction.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '取り引きの目的'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '当行との取引の目的を選んでください'
      },
      {
        label: '取引の目的のラベル名',
        inputName: 'businessDealCodeLabel',
        defaultValue: '取引目的'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      },
      {
        label: 'その他欄の説明文',
        inputName: 'businessDealEtcValueLabel',
        defaultValue: '取引目的がその他の場合、以下へ記入してください'
      }
    ],
    editTextbox: [
      {
        title: '取引目的コード表',
        textBoxData: [
          {
            key: '01',
            value: '生計費決済',
            inputName: 'businessDealCode01',
          },
          {
            key: '02',
            value: '事業性決済',
            inputName: 'businessDealCode02',
          },
          {
            key: '03',
            value: '給与振込先',
            inputName: 'businessDealCode03',
          },
        ],
        etcCodeLabel: '取引目的コード表表でその他とするID'
      }
    ],
    textRestriction: [
      {
        label: '取引目的コードの入力必須可否',
        inputName: 'requiredBusinessDealCode',
        defaultValue: 'checked'
      },
      {
        label: '取引目的コードのJSON項目名',
        inputName: 'businessDealCodeCustomKey',
        defaultValue: 'businessDealCode'
      },
      {
        label: '取引目的がその他の入力文字属性',
        inputName: 'businessDealEtcValueCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '取引目的がその他の入力必須可否',
        inputName: 'requiredBusinessDealEtcValue',
        defaultValue: 'checked'
      },
      {
        label: '取引目的がその他のJSON項目名',
        inputName: 'businessDealEtcValueCustomKey',
        defaultValue: 'businessDealEtcValue'
      },
      {
        label: '取引目的がその他の桁数',
        inputName: 'businessDealEtcValueMaxLength',
        defaultValue: '100'
      },
    ]
  },
  {
    title: '資産・収入',
    value: 'assetsIncom',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-asset-income.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '資産・収入'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '資産および収入の状況を記入してください資産額の初期表示文言'
      },
      {
        label: '資産額のラベル',
        inputName: 'assetsAmountLabel',
        defaultValue: '資産額'
      },
      {
        label: '資産額の初期表示文言',
        inputName: 'assetsAmountPlaceholder',
        defaultValue: '自由記述'
      },
      {
        label: '資産の背景のLabel',
        inputName: 'assetsBackgroundLabel',
        defaultValue: '資産の背景'
      },
      {
        label: '資産の背景の初期表示文言',
        inputName: 'assetsBackgroundPlaceholder',
        defaultValue: ''
      },
      {
        label: '収入額のラベル',
        inputName: 'incomeAmountLabel',
        defaultValue: '収入額'
      },
      {
        label: '収入額の初期表示文言',
        inputName: 'incomeAmountPlaceholder',
        defaultValue: ''
      },
      {
        label: '収入の背景のラベル',
        inputName: 'incomeBackgroundLabel',
        defaultValue: '収入の背景'
      },
      {
        label: '収入の背景の初期表示文言',
        inputName: 'incomeBackgroundPlaceholder',
        defaultValue: '給与取得'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '自由記述ですが各項目を３０文字以内で入力してください'
      }
    ],
    textRestriction: [
      {
        label: '資産額の入力文字属性',
        inputName: 'assetsAmountCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '資産額入力必須可否',
        inputName: 'requiredAssetsAmount',
        defaultValue: 'checked'
      },
      {
        label: '資産額のJSON項目名',
        inputName: 'assetsAmountCustomKey',
        defaultValue: 'assetsAmount'
      },
      {
        label: '資産額の最大桁数',
        inputName: 'assetsAmountMaxLength',
        defaultValue: '30'
      },
      {
        label: '資産の背景の入力文字属性',
        inputName: 'assetsBackgroundCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '資産の背景の入力必須可否',
        inputName: 'requiredAssetsBackground',
        defaultValue: 'checked'
      },
      {
        label: '資産の背景のJSON項目名',
        inputName: 'assetsBackgroundCustomKey',
        defaultValue: 'assetsBackground'
      },
      {
        label: '資産の背景の最大桁数',
        inputName: 'assetsBackgroundMaxLength',
        defaultValue: '30'
      },
      {
        label: '収入額の入力文字属性',
        inputName: 'incomeAmountCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '収入額の入力必須可否',
        inputName: 'requiredIncomeAmount',
        defaultValue: 'checked'
      },
      {
        label: '収入額のJSON項目名',
        inputName: 'incomeAmountCustomKey',
        defaultValue: 'incomeAmount'
      },
      {
        label: '収入額の最大桁数',
        inputName: 'incomeAmountMaxLength',
        defaultValue: '30'
      },
      {
        label: '収入の背景の入力文字属性',
        inputName: 'incomeBackgroundCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '収入の背景の入力必須可否',
        inputName: 'requiredIncomeBackground',
        defaultValue: 'checked'
      },
      {
        label: '収入の背景のJSON項目名',
        inputName: 'incomeBackgroundCustomKey',
        defaultValue: 'incomeBackground'
      },
      {
        label: '収入の背景の最大桁数',
        inputName: 'incomeBackgroundMaxLength',
        defaultValue: '30'
      },
    ]
  },
  {
    title: '国籍・在留資格期限',
    value: 'selectNationality',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-citizenship.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '国籍'
      },
      {
        label: '職業欄の説明文',
        inputName: 'desc',
        defaultValue: '国籍を選択してください。日本国籍以外の方は在留資格を選択してください。'
      },
      {
        label: '国籍のラベル名',
        inputName: 'selectNationalityCodeLabel',
        defaultValue: '国籍'
      },
      {
        label: '在留期限のラベル名',
        inputName: 'residenceLimitDateLabel',
        defaultValue: '在留期限'
      },
      {
        label: '在留資格のラベル名',
        inputName: 'residenceStatuCodeLabel',
        defaultValue: '在留資格'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '補足：在留資格は選択の〜'
      }
    ],
    editTextbox: [
      {
        title: '在留資格コード表',
        textBoxData: [
          {
            key: '01',
            value: '永住者',
            inputName: 'resident01',
          },
          {
            key: '02',
            value: '特別永住者',
            inputName: 'resident02',
          },
          {
            key: '03',
            value: '定住者',
            inputName: 'resident03',
          }
        ]
      },
    ],
    textRestriction: [
      {
        label: '日本・日本以外の選択の入力必須可否',
        inputName: 'requiredSelectNationalityFlg',
        defaultValue: 'checked'
      },
      {
        label: '日本・日本以外の選択のJSON項目名',
        inputName: 'selectNationalityFlgCustomKey',
        defaultValue: 'selectNationalityFlg'
      },
      {
        label: '国籍の入力必須可否',
        inputName: 'requiredSelectNationalityCode',
        defaultValue: 'checked'
      },
      {
        label: '国籍のJSON項目名',
        inputName: 'selectNationalityCodeCustomKey',
        defaultValue: 'selectNationalityCode'
      },
      {
        label: '在留資格の入力必須可否',
        inputName: 'requiredResidenceStatuCode',
        defaultValue: 'checked'
      },
      {
        label: '在留資格のJSON項目名',
        inputName: 'residenceStatuCodeCustomKey',
        defaultValue: 'residenceStatuCode'
      },
      {
        label: '在留期限の入力必須可否',
        inputName: 'requiredResidenceLimitDate',
        defaultValue: 'checked'
      },
      {
        label: '在留期限のJSON項目名',
        inputName: 'residenceLimitDateCustomKey',
        defaultValue: 'residenceLimitDate'
      },
    ]
  },
  {
    title: '日本国外への送金',
    value: 'remittanceOutside',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-purpose-of-oversea.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '外国送金の目的'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '外国への送金の目的と送金する国を選択してください'
      },
      {
        label: '外国送金の目的のラベル名',
        inputName: 'remittanceOutsideLabel',
        defaultValue: '送金取引目的'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      },
      {
        label: 'その他欄の説明文',
        inputName: 'remittanceOutsideEtcValueLabel',
        defaultValue: '取引目的がその他の場合、以下へ記入してください'
      },
    ],
    editTextbox: [
      {
        title: '送金の目的コード表',
        textBoxData: [
          {
            key: '00',
            value: '外国送金はない',
            inputName: 'remittanceOutside01',
          },
          {
            key: '01',
            value: '学費支払い',
            inputName: 'remittanceOutside02',
          },
          {
            key: '02',
            value: 'ご家族への送金',
            inputName: 'remittanceOutside02',
          },
          {
            key: '99',
            value: 'その他',
            inputName: 'remittanceOutside99',
          }
        ],
        etcCodeLabel: '送金の目的コード表でその他とするID'
      },
    ],
    textRestriction: [
      {
        label: '送金の目的コードの入力必須可否',
        inputName: 'requiredRemittanceOutside',
        defaultValue: 'checked'
      },
      {
        label: '送金の目的コードのJSON項目名',
        inputName: 'remittanceOutsideCustomKey',
        defaultValue: 'remittanceOutside'
      },
      {
        label: '送金の目的がその他の入力文字属性',
        inputName: 'remittanceOutsideEtcValueCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '送金の目的がその他の入力必須可否',
        inputName: 'requiredRemittanceOutsideEtcValue',
        defaultValue: 'checked'
      },
      {
        label: '送金の目的がその他のJSON項目名',
        inputName: 'remittanceOutsideEtcValueCustomKey',
        defaultValue: 'remittanceOutsideEtcValue'
      },
      {
        label: '送金の目的がその他の桁数',
        inputName: 'remittanceOutsideEtcValueMaxLength',
        defaultValue: '100'
      },
      {
        label: '送金先国コード１の入力必須可否',
        inputName: 'requiredRemittanceOutsideCountry1',
        defaultValue: 'checked'
      },
      {
        label: '送金先国コード１のJSON項目',
        inputName: 'remittanceOutsideCountry1CustomKey',
        defaultValue: 'remittanceOutsideCountry1'
      },
      {
        label: '送金先国コード２の入力必須可否',
        inputName: 'requiredRemittanceOutsideCountry2',
        defaultValue: 'checked'
      },
      {
        label: '送金先国コード２のJSON項目',
        inputName: 'remittanceOutsideCountry2CustomKey',
        defaultValue: 'remittanceOutsideCountry2'
      },
      {
        label: '送金先国コード３の入力必須可',
        inputName: 'requiredRemittanceOutsideCountry3',
        defaultValue: 'checked'
      },
      {
        label: '送金先国コード３のJSON項目名',
        inputName: 'remittanceOutsideCountry3CustomKey',
        defaultValue: 'remittanceOutsideCountry3'
      },
    ]
  },
  {
    title: '外国PEPsの確認',
    value: 'selectPEPs',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/confirm-foriegn-peps.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '外国PEPsとの取り引き'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '外国の重要な公的な地位にある方との取り引きの有無をおこたえください'
      },
      {
        label: 'PEPsの詳細のラベル名',
        inputName: 'detailsPEPsLabel',
        defaultValue: '取引している外国PEPsの具体的な地位をお教えください'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: ''
      }
    ],
    textRestriction: [
      {
        label: 'PEPs取引有無の選択の入力必須可否',
        inputName: 'requiredSelectPEPsFlg',
        defaultValue: 'checked'
      },
      {
        label: 'PEPs取引有無の選択のJSON項目名',
        inputName: 'selectPEPsFlgCustomKey',
        defaultValue: 'selectPEPsFlg'
      },
      {
        label: 'PEPsの詳細の入力文字属性',
        inputName: 'detailsPEPsCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: 'PEPsの詳細の入力必須可否',
        inputName: 'requiredDetailsPEPs',
        defaultValue: 'checked'
      },
      {
        label: 'PEPsの詳細のJSON項目名',
        inputName: 'detailsPEPsCustomKey',
        defaultValue: 'detailsPEPs'
      },
      {
        label: 'PEPsの詳細の最大桁数',
        inputName: 'detailsPEPsMaxLength',
        defaultValue: '200'
      },
    ]
  },
  {
    title: '制裁対象国との取引',
    value: 'sanctionedCountries',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-sanctioned-country.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '制裁対象国との取引'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '制裁対象国との取引がありますか？'
      },
      {
        label: '取引内容のラベル名',
        inputName: 'sanctionedCountriesDealLabel',
        defaultValue: '取引や資産の内容等'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '取り引き有無を選択いただき、国名を選んでください'
      }
    ],
    textRestriction: [
      {
        label: '資産額のJSON項目',
        inputName: 'requiredSelectSanctionedCountriesFlg',
        defaultValue: 'checked'
      },
      {
        label: '制裁対象国との取引有無の選択のJSON項目名',
        inputName: 'selectSanctionedCountriesFlgCustomKey',
        defaultValue: 'sanctionedCountriesDeal'
      },
      {
        label: '取引内容等の入力文字属性',
        inputName: 'sanctionedCountriesDealCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '取引内容等の入力必須可否',
        inputName: 'requiredsanctionedCountriesDeal',
        defaultValue: 'checked'
      },
      {
        label: '取引内容等のJSON項目名',
        inputName: 'sanctionedCountriesDealCustomKey',
        defaultValue: 'sanctionedCountriesDeal'
      },
      {
        label: '取引内容等の最大桁数',
        inputName: 'sanctionedCountriesDealMaxLength',
        defaultValue: '100'
      },
      {
        label: '制裁対象国１の入力必須可否',
        inputName: 'requiredSanctionedCountriesCode1',
        defaultValue: 'checked'
      },
      {
        label: '制裁対象国１のJSON項目名',
        inputName: 'sanctionedCountriesCode1CustomKey',
        defaultValue: 'sanctionedCountriesCode1'
      },
      {
        label: '制裁対象国２の入力必須可否',
        inputName: 'requiredSanctionedCountriesCode2',
        defaultValue: 'checked'
      },
      {
        label: '制裁対象国２のJSON項目名',
        inputName: 'sanctionedCountriesCode2CustomKey',
        defaultValue: 'sanctionedCountriesCode2'
      },
      {
        label: '制裁対象国３の入力必須可否',
        inputName: 'requiredSanctionedCountriesCode3',
        defaultValue: 'checked'
      },
      {
        label: '制裁対象国３のJSON項目名',
        inputName: 'sanctionedCountriesCode3CustomKey',
        defaultValue: 'sanctionedCountriesCode3'
      },
    ]
  },
  {
    title: '勤務先電話番号',
    value: 'workplacePhoneNo',
    checkBoxLabel: 'この質問を必須入力にする',
    imgSrc: 'img/question-update-work-place-phone-number.png',
    textBoxData: [
      {
        label: '質問のタイトル',
        inputName: 'title',
        defaultValue: '勤務先電話番号'
      },
      {
        label: '質問の説明文',
        inputName: 'desc',
        defaultValue: '勤務先の電話番号を記入してください'
      },
      {
        label: '勤務先電話番号のラベル名',
        inputName: 'workplacePhoneNoLabel',
        defaultValue: '電話'
      },
      {
        label: '勤務先電話番号の初期表示文言',
        inputName: 'workplacePhoneNoPlaceholder',
        defaultValue: '例：0312345678'
      },
      {
        label: '補足説明文',
        inputName: 'note',
        defaultValue: '補足：ーハイフンは不要です'
      }
    ],
    textRestriction: [
      {
        label: '勤務先電話番号のJSON項目名',
        inputName: 'workplacePhoneNoCharType',
        selectBoxData: [
          {
            label: '全角入力',
            value: 'full'
          },
          {
            label: '半角入力',
            value: 'half'
          },
          {
            label: '数値入力',
            value: 'number'
          }
        ]
      },
      {
        label: '勤務先電話番号の入力必須可否',
        inputName: 'requiredWorkplacePhoneNo',
        defaultValue: 'checked'
      },
      {
        label: '勤務先電話番号のJSON項目名',
        inputName: 'workplacePhoneNoCustomKey',
        defaultValue: 'workplacePhone'
      },
      {
        label: '勤務先電話番号の桁数',
        inputName: 'workplacePhoneNoMaxLength',
        defaultValue: '30'
      },
    ]
  },
];

const surveyComponents = {
  surveyName: {
    componentId: 'surveyName',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "lastName",
        "label": "姓",
        "placeholder": "e.g. 銀行",
        "customKey": "lastName",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      },
      {
        "lang": "ja",
        "key": "firstName",
        "customKey": "firstName",
        "label": "名",
        "placeholder": "e.g. 太郎",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      },
      {
        "lang": "ja",
        "key": "joinName",
        "customKey": "joinName",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": [
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '氏名'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '口座保有者の氏名を入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '３０文字以内で入力してください'
      }
    ]
  },
  surveyNameKana: {
    componentId: 'surveyNameKana',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "lastNameKana",
        "label": "姓（セイ）",
        "placeholder": "e.g. ギンコウ",
        "customKey": "lastNameKana",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      },
      {
        "lang": "ja",
        "key": "firstNameKana",
        "customKey": "firstNameKana",
        "label": "名（メイ）",
        "placeholder": "e.g. タロウ",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      },
      {
        "lang": "ja",
        "key": "joinNameKana",
        "customKey": "joinNameKana",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": []
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '氏名（フリガナ）'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '口座保有者の氏名のフリガナを入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '３０文字以内で入力してください'
      }
    ]
  },
  surveyNameEn: {
    componentId: 'surveyNameEn',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "lastNameRoma",
        "label": "姓（セイ）",
        "placeholder": "e.g. ギンコウ",
        "customKey": "lastNameRoma",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      },
      {
        "lang": "ja",
        "key": "firstNameRoma",
        "customKey": "firstNameRoma",
        "label": "名（メイ）",
        "placeholder": "e.g. タロウ",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      },
      {
        "lang": "ja",
        "key": "joinNameRoma",
        "customKey": "joinNameRoma",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": [
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '氏名（ローマ字）'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '口座保有者の氏名のローマ字を入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '30文字以内で入力してください'
      }
    ]
  },
  surveyBirthDate: {
    componentId: 'surveyBirthDate',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "birthDate",
        "customKey": "birthDate",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '生年月日'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '生年月日を入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": ''
      }
    ]
  },
  surveyGender: {
    componentId: 'surveyGender',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "gender",
        "customKey": "gender",
        "label": "性別",
        "placeholder": "",
        "etcCode": "",
        "code": [
          {
            "key": "M",
            "value": "男性",
            "displayOrder": 0
          },
          {
            "key": "F",
            "value": "女性",
            "displayOrder": 1
          },
          {
            "key": "X",
            "value": "回答しない",
            "displayOrder": 2
          }
        ],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '性別'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '性別を選択してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '性別を判断しない方は回答しないを選択してください'
      }
    ]
  },
  surveyPersonAddress: {
    componentId: 'surveyPersonAddress',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "personPostalNo",
        "customKey": "personPostalNo",
        "label": "郵便番号",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "charType",
            "value": "half",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personPrefecture",
        "customKey": "personPrefecture",
        "label": "都道府県",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personAddress1",
        "customKey": "personAddress1",
        "label": "市区町村",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personAddress2",
        "customKey": "personAddress2",
        "label": "字番地",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personAddress3",
        "customKey": "personAddress3",
        "label": "建物名",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": false
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personAddressKana1",
        "customKey": "personAddressKana1",
        "label": "市区町村（ふりがな）",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personAddressKana2",
        "customKey": "personAddressKana2",
        "label": "字番地（ふりがな）",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personAddressKana3",
        "customKey": "personAddressKana3",
        "label": "建物名（ふりがな）",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": false
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "joinPersonAddress",
        "customKey": "joinPersonAddress",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": [
        ]
      },
      {
        "lang": "ja",
        "key": "joinPersonAddressKana",
        "customKey": "joinPersonAddressKana",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": [
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '住所'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '口座保有者の住所を入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '各項目を３０文字以内で入力してください'
      }
    ]
  },
  surveyPersonPhoneNo: {
    componentId: 'surveyPersonPhoneNo',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "personCellPhoneNo",
        "customKey": "personCellPhoneNo",
        "label": "携帯電話番号",
        "placeholder": "e.g. 09099992222",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 11
          },
          {
            "type": "charType",
            "value": "half",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "personTelePhoneNo",
        "customKey": "personTelePhoneNo",
        "label": "固定電話番号",
        "placeholder": "e.g. 0311112222",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 10
          },
          {
            "type": "charType",
            "value": "half",
            "option": {
              "force": true
            }
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '電話番号'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '口座保有者の電話番号を入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '携帯電話番号もしくは固定電話番号をハイフン（ー）無しで入力してください'
      }
    ]
  },
  surveyPersonEmailAddress: {
    componentId: 'surveyPersonEmailAddress',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "personEmailAddress",
        "customKey": "personEmailAddress",
        "label": "メールアドレス",
        "placeholder": "bank@sample.co.jp",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "isRetype",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 100
          },
          {
            "type": "charType",
            "value": "half",
            "option": {
              "force": true
            }
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": "メールアドレス"
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": "口座保有者のメールアドレスを入力してください"
      },
      {
        "lang": "ja",
        "key": "note",
        "label": ""
      },
      {
        "lang": "ja",
        "key": "retypeDesc",
        "label": "確認のため、再度入力してください"
      }
    ]
  },
  occupationCode: {
    componentId: 'occupationCode',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "occupationCode",
        "customKey": "occupationCode",
        "label": "職業",
        "placeholder": "",
        "etcCode": "99",
        "code": [
          {
            "key": "01",
            "value": "会社役員",
            "displayOrder": 0
          },
          {
            "key": "02",
            "value": "会社員",
            "displayOrder": 1
          },
          {
            "key": "03",
            "value": "学生",
            "displayOrder": 2
          }
        ],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "bizDetailsCode",
        "customKey": "bizDetailsCode",
        "label": "事業内容",
        "placeholder": "",
        "etcCode": "",
        "code": [
          {
            "key": "01",
            "value": "建設業",
            "displayOrder": 0
          },
          {
            "key": "02",
            "value": "小売業",
            "displayOrder": 1
          },
          {
            "key": "03",
            "value": "飲食業",
            "displayOrder": 2
          }
        ],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "occupationEtcValue",
        "customKey": "occupationEtcValue",
        "label": "職業がその他の場合、以下へ記入してください",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 100
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '職業'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '職業と事業内容を選んでください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": ''
      }
    ]
  },
  workplace: {
    componentId: 'workplace',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "workplace",
        "customKey": "workplace",
        "label": "勤務先名",
        "placeholder": "例：例：eKYC Bank",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 200
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplaceKana",
        "customKey": "workplaceKana",
        "label": "勤務先名(フリガナ)",
        "placeholder": "例：ラインギンコウ",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 200
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '勤務先'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '勤務先を入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '補足：60文字以内で入力してください'
      }
    ]
  },
  workplaceAddress: {
    componentId: 'workplaceAddress',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "workplacePostalNo",
        "customKey": "workplacePostalNo",
        "label": "郵便番号",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "charType",
            "value": "half",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplacePrefecture",
        "customKey": "workplacePrefecture",
        "label": "都道府県",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplaceAddress1",
        "customKey": "workplaceAddress1",
        "label": "市区町村",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplaceAddress2",
        "customKey": "workplaceAddress2",
        "label": "字番地",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplaceAddress3",
        "customKey": "workplaceAddress3",
        "label": "建物名",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": false
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplaceAddressKana1",
        "customKey": "workplaceAddressKana1",
        "label": "市区町村（フリガナ）",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplaceAddressKana2",
        "customKey": "workplaceAddressKana2",
        "label": "字番地（フリガナ）",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "workplaceAddressKana3",
        "customKey": "workplaceAddressKana3",
        "label": "建物名（フリガナ）",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": false
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "joinWorkplaceAddress",
        "customKey": "joinWorkplaceAddress",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": [
        ]
      },
      {
        "lang": "ja",
        "key": "joinWorkplaceAddressKana",
        "customKey": "joinWorkplaceAddressKana",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "validations": [
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '勤務先（学校）の住所'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '勤務先（学校）の住所を入力してください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '各項目を３０文字以内で入力してください'
      }
    ]
  },
  businessDeal: {
    componentId: 'businessDeal',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "businessDealCode",
        "customKey": "businessDealCode",
        "label": "取引目的",
        "placeholder": "",
        "etcCode": "99",
        "code": [
          {
            "key": "01",
            "value": "生計費決済",
            "displayOrder": 0
          },
          {
            "key": "02",
            "value": "事業性決済",
            "displayOrder": 1
          },
          {
            "key": "03",
            "value": "給与振込先",
            "displayOrder": 2
          }
        ],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "businessDealEtcValue",
        "customKey": "businessDealEtcValue",
        "label": "取引目的がその他の場合、以下へ記入してください",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 100
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '取り引きの目的'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '当行との取引の目的を選んでください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": ''
      }
    ]
  },
  assetsIncom: {
    componentId: 'assetsIncom',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "assetsAmount",
        "customKey": "assetsAmount",
        "label": "資産額",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "assetsBackground",
        "customKey": "assetsBackground",
        "label": "資産の背景",
        "placeholder": "e.g. 貯蓄など",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "incomeAmount",
        "customKey": "incomeAmount",
        "label": "収入額",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "incomeBackground",
        "customKey": "incomeBackground",
        "label": "収入の背景",
        "placeholder": "e.g. 給与所得など",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": "資産・収入"
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": "資産および収入の状況を記入してください"
      },
      {
        "lang": "ja",
        "key": "note",
        "label": "自由記述ですが各項目を３０文字以内で入力してください"
      }
    ]
  },
  selectNationality: {
    componentId: 'selectNationality',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "selectNationalityFlg",
        "customKey": "selectNationalityFlg",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "selectNationalityCode",
        "customKey": "selectNationalityCode",
        "label": "国籍",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": false
          }
        ]
      },
      {
        "lang": "ja",
        "key": "residenceStatuCode",
        "customKey": "residenceStatuCode",
        "label": "在留資格",
        "placeholder": "",
        "etcCode": "",
        "code": [
          {
            "key": "01",
            "value": "永住者",
            "displayOrder": 0
          },
          {
            "key": "02",
            "value": "特別永住者",
            "displayOrder": 1
          },
          {
            "key": "03",
            "value": "定住者",
            "displayOrder": 2
          }
        ],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "residenceLimitDate",
        "customKey": "residenceLimitDate",
        "label": "在留期限",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": "国籍"
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": "国籍を選択してください。日本国籍以外の方は在留資格を選択してください。"
      },
      {
        "lang": "ja",
        "key": "note",
        "label": ""
      }
    ]
  },
  remittanceOutside: {
    componentId: 'remittanceOutside',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "remittanceOutside",
        "customKey": "remittanceOutside",
        "label": "送金取引目的",
        "placeholder": "",
        "etcCode": "99",
        "code": [
          {
            "key": "00",
            "value": "外国送金はない",
            "displayOrder": 0
          },
          {
            "key": "01",
            "value": "学費支払い",
            "displayOrder": 1
          },
          {
            "key": "02",
            "value": "ご家族への送金",
            "displayOrder": 2
          },
          {
            "key": "99",
            "value": "その他",
            "displayOrder": 3
          }
        ],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "remittanceOutsideEtcValue",
        "customKey": "remittanceOutsideEtcValue",
        "label": "取引目的がその他の場合、以下へ記入してください",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 30
          },
          {
            "type": "charType",
            "value": "full",
            "option": {
              "force": true
            }
          }
        ]
      },
      {
        "lang": "ja",
        "key": "remittanceOutsideCountry1",
        "customKey": "remittanceOutsideCountry1",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "remittanceOutsideCountry2",
        "customKey": "remittanceOutsideCountry2",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "remittanceOutsideCountry3",
        "customKey": "remittanceOutsideCountry3",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": "外国送金の目的"
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": "外国への送金の目的と送金する国を選択してください"
      },
      {
        "lang": "ja",
        "key": "note",
        "label": ""
      }
    ]
  },
  selectPEPs: {
    componentId: 'selectPEPs',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "selectPEPsFlg",
        "customKey": "selectPEPsFlg",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "detailsPEPs",
        "customKey": "detailsPEPs",
        "label": "取引している外国PEPsの具体的な地位をお教えください",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 200
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '外国PEPsとの取り引き'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '外国の重要な公的な地位にある方との取り引きの有無をおこたえください'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": ''
      }
    ]
  },
  sanctionedCountries: {
    componentId: 'sanctionedCountries',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "selectSanctionedCountriesFlg",
        "customKey": "selectSanctionedCountriesFlg",
        "label": "",
        "placeholder": "",
        "etcCode": "",
        "code": [
          { "key": "selectYes", "value": "はい", "displayOrder": 0 },
          { "key": "selectNo", "value": "いいえ", "displayOrder": 1 }
        ],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "sanctionedCountriesDeal",
        "customKey": "sanctionedCountriesDeal",
        "label": "取引や資産の内容等",
        "placeholder": "",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 200
          },
          {
            "type": "charType",
            "value": "full"
          }
        ]
      },
      {
        "lang": "ja",
        "key": "sanctionedCountriesCode1",
        "customKey": "sanctionedCountriesCode1",
        "label": "制裁対象国１",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "sanctionedCountriesCode2",
        "customKey": "sanctionedCountriesCode2",
        "label": "制裁対象国２",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      },
      {
        "lang": "ja",
        "key": "sanctionedCountriesCode3",
        "customKey": "sanctionedCountriesCode3",
        "label": "制裁対象国３",
        "placeholder": "",
        "etcCode": "",
        "code": [],
        "validations": [
          {
            "type": "isRequired",
            "value": true
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": '制裁対象国との取引'
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": '制裁対象国との取引がありますか？'
      },
      {
        "lang": "ja",
        "key": "note",
        "label": '取り引き有無を選択いただき、国名を選んでください'
      }
    ]
  },
  workplacePhoneNo: {
    componentId: 'workplacePhoneNo',
    isActive: true,
    isRequired: true,
    forms: [
      {
        "lang": "ja",
        "key": "workplacePhoneNo",
        "customKey": "workplacePhoneNo",
        "label": "固定電話番号",
        "placeholder": "e.g. 0311112222",
        "etcCode": "",
        "validations": [
          {
            "type": "isRequired",
            "value": true
          },
          {
            "type": "maxLength",
            "value": 10
          },
          {
            "type": "charType",
            "value": "half",
            "option": {
              "force": true
            }
          }
        ]
      }
    ],
    labels: [
      {
        "lang": "ja",
        "key": "title",
        "label": "電話番号"
      },
      {
        "lang": "ja",
        "key": "desc",
        "label": "勤務先の電話番号を入力してください"
      },
      {
        "lang": "ja",
        "key": "note",
        "label": "固定電話番号をハイフン（ー）無しで入力してください"
      }
    ]
  }
}

export { checkboxData, steps, questionUpdateList, surveyComponents };