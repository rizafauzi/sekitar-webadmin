/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
import { UseMutationOptions, useMutation, useQuery } from 'react-query'
import { getListDelivery, updateDeliveryStatus } from '../api'
import {
  IOrderListParams,
  // DeliveryList,
  OrderListResponse,
  DeliveryStatusRequest
} from '../models/DeliveryList'

export const useFetchDeliveryList = (params: IOrderListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['delivery-list-merchant', params],
    async () => {
      const response: OrderListResponse = await getListDelivery(params)
      // return response.data.data?.map((item: DeliveryList, index: number) => ({
      //   ...item,
      //   index: index + 1
      // }))
      return response.data
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

export const useUpdateStatusDelivery = (
  options?: UseMutationOptions<unknown, Error, DeliveryStatusRequest>
) =>
  useMutation({
    mutationFn: data => updateDeliveryStatus(data),
    ...options
  })
