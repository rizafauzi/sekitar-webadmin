/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { ApiResponse } from '@configs/axios'
import { UseMutationOptions, useMutation, useQuery } from 'react-query'
import { rejectMerchant, getMerchantVerificationList, approveMerchant } from '../api'
import {
  IMerchantVerificationList,
  IMerchantVerificationListParams
} from '../MerchantVerification.type'

export const useFetchMerchantVerificationList = (params: IMerchantVerificationListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['merchant-verification-list', params],
    async () => {
      const response: ApiResponse<IMerchantVerificationList[]> = await getMerchantVerificationList(
        params
      )
      return response.data.data?.map((item: IMerchantVerificationList, index: number) => ({
        ...item,
        index: index + 1
      }))
    }
  )

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}

export const useRejectMerchant = (options?: UseMutationOptions<unknown, Error, number>) =>
  useMutation({
    mutationFn: data => rejectMerchant(data),
    ...options
  })

export const useApproveMerchant = (options?: UseMutationOptions<unknown, Error, number>) =>
  useMutation({
    mutationFn: data => approveMerchant(data),
    ...options
  })
