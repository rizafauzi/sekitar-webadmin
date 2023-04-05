/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'
import { UseMutationOptions, useMutation, useQuery } from 'react-query'
import { deleteRefund, getRefundList } from '../api'
import { IRefundList, IRefundListParams } from '../Refund.type'

export const useFetchRefundList = (params: IRefundListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(['refund-list', params], async () => {
    const response: ApiResponse<IRefundList[]> = await getRefundList(params)
    return response.data.data?.map((item: IRefundList, index: number) => ({
      ...item,
      index: index + 1
    }))
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}

export const useDeleteRefund = (options?: UseMutationOptions<unknown, Error, number>) =>
  useMutation({
    mutationFn: data => deleteRefund(data),
    ...options
  })
