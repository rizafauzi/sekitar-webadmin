/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query'
import { getAllBank, getBankAccountList, getDetailBankAccount, updateBankAccount } from '../api'
import {
  DetailBankAccountResponse,
  IBankAccountList,
  IBankAccountListParams,
  IBankList,
  UpdateBankAccountRequest
} from '../BankAccount.type'

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

export const useFetchAllBank = (params: IBankAccountListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(['bank-list', params], async () => {
    const response: ApiResponse<IBankList[]> = await getAllBank(params)
    return response.data.Data.map((item: IBankList, index: number) => ({
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

export const useFetchDetailBankAccount = (
  storeId: number,
  options?: UseQueryOptions<DetailBankAccountResponse>
) =>
  useQuery({
    queryKey: ['detail-bank-account', storeId],
    queryFn: () => getDetailBankAccount(storeId),
    ...options
  })

export const useUpdateBankAccount = (
  options?: UseMutationOptions<unknown, Error, UpdateBankAccountRequest>
) =>
  useMutation({
    mutationFn: data => updateBankAccount(data),
    ...options
  })
