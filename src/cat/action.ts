export type Action = {
  type: String,
  payload: any
}

// Action リクエスト送信前
export const GET_CAT_REQUEST = 'GET_CAT_REQUEST'

// Action レスポンス受信
export const GET_CAT_SUCCESS = 'GET_CAT_SUCCESS'

// Action エラー
export const GET_CAT_FAILURE = 'GET_CAT_FAILURE'