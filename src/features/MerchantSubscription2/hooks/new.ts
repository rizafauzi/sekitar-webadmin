/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { IListParams, getMerchantSubscriptionListNew } from '../api'
import { IMerchantSubscriptionNew } from '../screens/List/MerchantSubscription.type'

export const useFetchMerchantSubscriptionListNew = (params: IListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['merchant-subscriptionNew', params],
    async () => {
      const response: ApiResponse<IMerchantSubscriptionNew> = await getMerchantSubscriptionListNew(
        params
      )
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

export default useFetchMerchantSubscriptionListNew
