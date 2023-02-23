/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { IBankAccountListParams } from '../BankAccount.type'

export const getBankAccountList = ({ page, limit }: IBankAccountListParams) =>
  apiRequest({
    path: '/api/dashboard/stores/bank_list',
    method: 'GET',
    params: {
      p: page,
      c: limit
    },
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
