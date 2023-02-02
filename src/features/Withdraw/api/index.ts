/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable import/prefer-default-export */
import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { IWithdrawListParams } from '../Withdraw.types'

export const getWithdrawList = ({ page, limit, status }: IWithdrawListParams) =>
  apiRequest({
    path: '/api/v1/balance_transaction',
    method: 'GET',
    params: {
      p: page,
      c: limit,
      status
    },
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
