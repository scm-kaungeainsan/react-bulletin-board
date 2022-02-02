const IDP_URLS = {
  local: 'https://account.line-beta.biz/',
  alpha: 'https://account.line-beta.biz/',
  beta: 'https://account.line-beta.biz/',
  rc: 'https://account.line-beta.biz/',
  prod: 'https://account.line.biz/',
}

const IDP_REDIRECT_URLS = {
  local: 'https://local.ekyc-management-console.line-beta.biz:3000/',
  alpha: 'https://alpha-ekyc-management-console.line-beta.biz/',
  beta: 'https://ekyc-management-console.line-beta.biz/',
  rc: 'https://rc-ekyc-management-console.line-beta.biz/',
  prod: 'https://ekyc-management-console.line.biz/',
}

const API_URLS = {
  local: 'https://ekyc-bank-management-backend.line-beta.biz/',
  alpha: 'https://alpha-ekyc-bank-management-backend.line-beta.biz/',
  beta: 'https://ekyc-bank-management-backend.line-beta.biz/',
  rc: 'https://rc-ekyc-bank-management-backend.line-beta.biz/',
  prod: 'https://ekyc-bank-management-backend.line.biz/',
}

const ORG_TEST_IDS = {
  local: '60920280f32f902b792e1839',
  alpha: '60920280f32f902b792e1839',
  beta: '6088b06e6b487c852c4d692d',
  rc: 'aa',
  prod: 'aa',
}

const env = process.env.REACT_APP_ENV || 'local'

export const IDP_URL = IDP_URLS[env]
export const IDP_REDIRECT_URL = IDP_REDIRECT_URLS[env]
export const API_URL = API_URLS[env]
export const ORG_TEST_ID = ORG_TEST_IDS[env]
