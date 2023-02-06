/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { IWithdrawListParams, IWithdrawStateParams } from '../Withdraw.types'

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

export const patchWithdrawStatus = ({ id, status }: IWithdrawStateParams) =>
  apiRequest({
    path: `/api/v1/balance_transaction/${id}`,
    method: 'PATCH',
    bodyRequest: { status },
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })

export const getWithdrawDetail = ({ id }: { id: number }) =>
  apiRequest({
    path: `/api/v1/withdraw_transaction/${id}`,
    method: 'GET',
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
