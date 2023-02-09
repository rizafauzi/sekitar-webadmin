/* eslint-disable unicorn/prevent-abbreviations */
export type StatusWithdraw = 'Gagal' | 'Selesai' | 'Pending'

export interface IWithdrawListParams {
  page: number
  limit: number
  status?: StatusWithdraw
}

export interface IWithdrawStateParams {
  id: number
  status: 2 | 3 | 4
}

export interface IWithdrawList {
  id: number
  amount: number
  created_at: Date
  merchant_name: string
  merchant_phone: string
  bank_code: string
  bank_number: string
  bank_account_name: string
  status: StatusWithdraw
  index: number
}

export interface IWithdrawDetail {
  id: number
  amount: number
  created_at: string
  updated_at: string
  merchant_name: string
  merchant_phone: string
  bank_code: string
  bank_number: string
  bank_account_name: string
  status: string
}
