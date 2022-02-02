const steps = ['顔写真の撮影方向', '身分証の種類', '身分証の撮影方向', 'その他'];

const facePhotoShootingData = [
  {
    label: '顔 正面',
    value: 'front',
    checked: false
  },
  {
    label: '顔 ランダム',
    value: 'random',
    checked: false
  }
];

const IDCardTypeData = [
  {
    label: '運転免許証',
    value: 'driverLicense',
    checked: false
  },
  {
    label: 'マイナンバーカード',
    value: 'myNumberCard',
    checked: false
  },
  {
    label: '在留カード',
    value: 'residenceCard',
    checked: false
  },
  {
    label: '上記の本人確認書類を保持していない',
    value: 'none',
    checked: false
  }
]

const idCardShootingDirectionData = [
  {
    label: '表面',
    value: 'front',
    checked: false
  },
  {
    label: '表面 ランダム',
    value: 'frontRandom',
    checked: false
  },
  {
    label: '裏面',
    value: 'back',
    checked: false
  },
  {
    label: '裏面 ランダム',
    value: 'backRandom',
    checked: false
  },
  {
    label: '厚み',
    value: 'side',
    checked: false
  }
]

const otherSettingData = [
  {
    label: '撮影した顔写真画像データをWebhookで送信する',
    value: 'facePictureWebhookSend',
    checked: false
  }
];

export { steps, facePhotoShootingData, IDCardTypeData, idCardShootingDirectionData, otherSettingData};