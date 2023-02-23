/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getWithdrawDetail, getWithdrawList } from '../api'
import { IWithdrawDetail, IWithdrawList, IWithdrawListParams } from '../Withdraw.types'

export const useFetchWithdrawList = (params: IWithdrawListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(['withdraw-list', params], async () => {
    const response: ApiResponse<IWithdrawList[]> = await getWithdrawList(params)
    return response.data.Data.map((item, index: number) => ({ ...item, index: index + 1 }))
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}

export const useFetchWithdrawDetail = (params: { id: number }) => {
  const { data, isError, isLoading, refetch } = useQuery(['withdraw-list', params], async () => {
    const response: ApiResponse<IWithdrawDetail> = await getWithdrawDetail(params)
    return response.data.Data
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}
