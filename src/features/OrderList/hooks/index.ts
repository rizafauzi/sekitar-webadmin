/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
import { useQuery } from 'react-query'
import { getListOrder } from '../api'
import { IOrderListParams, OrderList, OrderListResponse } from '../models/OrderList'

export const useFetchOrderList = (params: IOrderListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['order-list-merchant', params],
    async () => {
      const response: OrderListResponse = await getListOrder(params)
      return response.data.data?.map((item: OrderList, index: number) => ({
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
