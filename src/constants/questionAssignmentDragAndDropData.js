const questionAssignmentDragAndDropData = {
  columnOrder: ['droppable-1'],
  columns: {
    'droppable-1': {
      id: 'droppable-1',
      name: "(未割り当ての質問)",
      questionIds: ['surveyName', 'surveyNameKana', 'surveyNameEn', 'surveyBirthDate', 'surveyGender', 'surveyPersonAddress', 'surveyPersonPhoneNo', 'surveyPersonEmailAddress', 'occupationCode', 'workplace', 'workplaceAddress', 'workplacePhoneNo', 'businessDeal', 'assetsIncom', 'selectNationality', 'remittanceOutside', 'selectPEPs', 'sanctionedCountries']
    }
  },
  questions: {
    'surveyName': {
      id: 'surveyName',
      content: '氏名'
    },
    'surveyNameKana': {
      id: 'surveyNameKana',
      content: '氏名カナ'
    },
    'surveyNameEn': {
      id: 'surveyNameEn',
      content: '氏名ローマ字'
    },
    'surveyBirthDate': {
      id: 'surveyBirthDate',
      content: '生年月日'
    },
    'surveyGender': {
      id: 'surveyGender',
      content: '性別'
    },
    'surveyPersonAddress': {
      id: 'surveyPersonAddress',
      content: '住所'
    },
    'surveyPersonPhoneNo': {
      id: 'surveyPersonPhoneNo',
      content: '電話番号'
    },
    'surveyPersonEmailAddress': {
      id: 'surveyPersonEmailAddress',
      content: 'メールアドレス'
    },
    'occupationCode': {
      id: 'occupationCode',
      content: '職業'
    },
    'workplace': {
      id: 'workplace',
      content: '勤務先'
    },
    'workplaceAddress': {
      id: 'workplaceAddress',
      content: '勤務先の住所'
    },
    'workplacePhoneNo': {
      id: 'workplacePhoneNo',
      content: '勤務先電話番号'
    },
    'businessDeal': {
      id: 'businessDeal',
      content: '銀行との取引目的'
    },
    'assetsIncom': {
      id: 'assetsIncom',
      content: '資産・収入'
    },
    'selectNationality': {
      id: 'selectNationality',
      content: '国籍・在留資格期限'
    },
    'remittanceOutside': {
      id: 'remittanceOutside',
      content: '日本国外への送金'
    },
    'selectPEPs': {
      id: 'selectPEPs',
      content: '外国PEPsの確認'
    },
    'sanctionedCountries': {
      id: 'sanctionedCountries',
      content: '制裁対象国との取引'
    }
  }
};

export { questionAssignmentDragAndDropData };