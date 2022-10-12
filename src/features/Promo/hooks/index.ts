/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getPromoList, IPromoListParams } from '../api'
import { IPromoList } from '../Promo.type'

// eslint-disable-next-line import/prefer-default-export
export const useFetchPromoList = (params: IPromoListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(['promo-list', params], async () => {
    const response: ApiResponse<IPromoList[]> = await getPromoList(params)
    return response.data.Data.map((item, index) => ({ ...item, index: index + 1 }))
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}
