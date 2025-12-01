/* eslint-disable unicorn/prevent-abbreviations */
import { apiRequest } from '@configs/axios'
import { IMerchantVerificationListParams } from '@features/MerchantVerification/MerchantVerification.type'
import sekitarEnv from '@utils/ENV'

export const getMerchantVerificationList = ({ page, limit }: IMerchantVerificationListParams) =>
  apiRequest({
    path: '/api/v1/user/list/request_cod',
    method: 'GET',
    params: {
      p: page,
      c: limit
    },
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })

export const rejectMerchant = (merchantId: number) =>
  apiRequest({
    path: '/api/v1/stores/verification',
    method: 'PUT',
    bodyRequest: {
      is_verified: 0,
      store_id: merchantId
    },
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })

export const approveMerchant = (merchantId: number) =>
  apiRequest({
    path: '/api/v1/stores/verification',
    method: 'PUT',
    bodyRequest: {
      is_verified: 1,
      store_id: merchantId
    },
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
