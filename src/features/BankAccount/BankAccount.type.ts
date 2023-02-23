/* eslint-disable unicorn/prevent-abbreviations */
export interface IBankAccountListParams {
  page: number
  limit: number
  search?: string | undefined
}

export interface IBankAccountList {
  store_id: number
  user_id: number
  name: string
  path: string
  bank_code: string
  bank_owner: string
  bank_number: string
}
