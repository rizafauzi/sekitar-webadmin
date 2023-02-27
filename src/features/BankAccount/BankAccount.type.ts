/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'

export type DetailBankAccountResponse = ApiResponse<IDetailBankAccount>

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

export interface IBankList {
  id: number
  code: string
  name: string
  image: string
  index: number
}

export interface IDetailBankAccount {
  store_id: number
  user_id: number
  name: string
  path: string
  bank_code: string
  bank_owner: string
  bank_number: string
}

export interface UpdateBankAccountRequest {
  store_id: number
  bank_code: string
  bank_owner: string
  bank_number: string
}
