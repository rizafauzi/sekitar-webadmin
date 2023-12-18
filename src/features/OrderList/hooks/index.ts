/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
import { UseMutationOptions, useMutation, useQuery } from 'react-query'
import { getDetailOrder, getListOrder, postOrderStatus } from '../api'
import { IOrderListParams, OrderList, OrderListResponse } from '../models/OrderList'
import { IOrderDetailParams, OrderStatusRequest } from '../models/OrderDetail'

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

export const useFetchOrderDetail = (params: IOrderDetailParams) =>
  useQuery({
    queryKey: ['order-detail-merchant', params],
    queryFn: () => getDetailOrder({ cartId: params.cartId })
  })

export const useUpdateStatusOrder = (
  options?: UseMutationOptions<unknown, Error, OrderStatusRequest>
) =>
  useMutation({
    mutationFn: data => postOrderStatus(data),
    ...options
  })
