/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getBankAccountList } from '../api'
import { IBankAccountList, IBankAccountListParams } from '../BankAccount.type'

export const useFetchBankAccountList = (params: IBankAccountListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['bank-account-list', params],
    async () => {
      const response: ApiResponse<IBankAccountList[]> = await getBankAccountList(params)
      return response.data.Data.map((item: IBankAccountList, index: number) => ({
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
