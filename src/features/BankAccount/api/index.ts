/* eslint-disable object-shorthand */
/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { IBankAccountListParams } from '../BankAccount.type'

export const getBankAccountList = ({ page, limit, search }: IBankAccountListParams) =>
  apiRequest({
    path: '/api/dashboard/stores/bank_list/search',
    method: 'GET',
    params: {
      p: page,
      c: limit,
      name: search || ''
    },
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
