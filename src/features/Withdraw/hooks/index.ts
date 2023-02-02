/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getWithdrawList } from '../api'
import { IWithdrawListParams } from '../Withdraw.types'

export const useFetchWithdrawList = (params: IWithdrawListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(['withdraw-list', params], async () => {
    const response: ApiResponse<IWithdrawListParams[]> = await getWithdrawList(params)
    return response.data.Data.map((item, index: number) => ({ ...item, index: index + 1 }))
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}
