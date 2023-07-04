/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { IListParams, getMerchantSubscriptionList } from '../api'
import { IMerchantSubscription } from '../screens/List/MerchantSubscription.type'

export const useFetchMerchantSubscriptionList = (params: IListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['merchant-subscription', params],
    async () => {
      const response: ApiResponse<IMerchantSubscription> = await getMerchantSubscriptionList(params)
      return response.data.data
    }
  )

  return {
    data,
    isError,
    refetch,
    isLoading
  }
}

export default useFetchMerchantSubscriptionList
