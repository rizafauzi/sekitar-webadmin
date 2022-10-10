import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
// eslint-disable-next-line unicorn/prevent-abbreviations
import { getPromoList, IPromoListParams } from '../api'

// eslint-disable-next-line import/prefer-default-export
export const useFetchPromoList = (params: IPromoListParams) => {
  const { data, isError, isLoading } = useQuery(['promo-list', params], async () => {
    const response: ApiResponse<object[]> = await getPromoList(params)
    return response.data.Data.map((item, index) => ({ ...item, index: index + 1 }))
  })

  return {
    isLoading,
    isError,
    data
  }
}
