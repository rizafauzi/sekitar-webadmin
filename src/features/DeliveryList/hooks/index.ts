/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
import { UseMutationOptions, useMutation, useQuery } from 'react-query'
import { getDetailOrder, getListDelivery, updateDeliveryStatus } from '../api'
import { IOrderListParams, DeliveryList, OrderListResponse } from '../models/DeliveryList'
import { IOrderDetailParams, OrderStatusRequest } from '../models/OrderDetail'

export const useFetchDeliveryList = (params: IOrderListParams) => {
  console.info('useFetchDeliveryList', params)
  const { data, isError, isLoading, refetch } = useQuery(
    ['delivery-list-merchant', params],
    async () => {
      const response: OrderListResponse = await getListDelivery(params)
      console.info('response', response)
      return response.data.data?.map((item: DeliveryList, index: number) => ({
        ...item,
        index: index + 1
      }))
    },
    {
      enabled: params?.isFetching
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

export const useUpdateStatusDelivery = (
  options?: UseMutationOptions<unknown, Error, OrderStatusRequest>
) =>
  useMutation({
    mutationFn: data => updateDeliveryStatus(data),
    ...options
  })
