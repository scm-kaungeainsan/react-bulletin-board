const tableData = {
  clientList: [
    {
      id: 1,
      name: 'ブラウン銀行'
    },
    {
      id: 2,
      name: 'サリー銀行'
    },
    {
      id: 3,
      name: 'ジェーシカ銀行'
    }
  ],
  clientTableHeaders: ['クライアント名'],
  clientMenus: [
    {
      name: 'クライアント編集',
      url: 'client-management'
    },
    {
      name: '削除',
      url: null
    }
  ],
  projectList: [
    {
      id: 1,
      riskLevel: '大口取引者定期確認2021',
      delayTime: '2021/11実施予定',
      eKYCSetting: '設定済み',
      lineOA: '設定済み',
      survey: '設定済み',
      deploymentRequest: '本番提供'
    },
    {
      id: 2,
      riskLevel: '特定取引者確認2022',
      delayTime: '2022/01実施予定',
      eKYCSetting: '未設定',
      lineOA: '未設定',
      survey: '未設定',
      deploymentRequest: null
    },
    {
      id: 3,
      riskLevel: 'ブラウン銀行独自確認',
      delayTime: '実施未定',
      eKYCSetting: '設定済み',
      lineOA: '設定済み',
      survey: '設定済み',
      deploymentRequest: 'テスト提供'
    },
    {
      id: 4,
      riskLevel: 'サンプル作成',
      delayTime: '適宜入力欄',
      eKYCSetting: '未設定',
      lineOA: '未設定',
      survey: '設定済み',
      deploymentRequest: null
    }
  ],
  projectTableHeaders: ['プロジェクト名', '備考', 'eKYC設定', '通知メッセージ', 'サーベイ', 'デプロイ状況'],
  projectMenus: [
    {
      name: 'デプロイ',
      url: '/deploy'
    }
  ],
  organizationList: [
    {
      id: 1,
      name: '株式会社LINE'
    },
    {
      id: 2,
      name: '株式会社BROWN&FRIENDS'
    }
  ],
  organizationTableHeaders: ['組織名'],
  organizationMenus: [
    {
      name: '所属ユーザー確認',
      url: '/user-list'
    }
  ],
  userList: [
    {
      id: 1,
      name: 'abc@test.com',
      role: 'オーナー',
      invitationStatus: '所属中'
    },
    {
      id: 2,
      name: 'j12345@test.com',
      role: '編集者',
      invitationStatus: '招待中'
    }
  ],
  userTableHeaders: ['ユーザー名', '権限', 'ステータス'],
  userMenus: [
    {
      name: '所属の解除',
      url: null
    }
  ]
}

export default tableData;