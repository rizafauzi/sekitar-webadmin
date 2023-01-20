/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getCategoryLearning, getLearningDetail, getLearningList } from '../api'
import { ILearning, ILearningCategory, ILearningList, ILearningListParams } from '../Learning.type'

export const useFetchLearningList = (params: ILearningListParams) => {
  const { data, isError, isLoading, refetch, ...result } = useQuery(
    ['learning-list', params],
    async () => {
      const response: ApiResponse<ILearningList[]> = await getLearningList(params)
      return response.data.Data.map((item, index) => ({ ...item, index: index + 1 }))
    }
  )

  return {
    isLoading,
    isError,
    data,
    refetch,
    ...result
  }
}

export const useFetchCategoryLearning = () => {
  const { data, ...result } = useQuery(['category-learning'], async () => {
    const response: ApiResponse<ILearningCategory[]> = await getCategoryLearning()
    return response.data.Data
  })
  const optionsCategoryLearning =
    data?.map(item => ({
      label: item.name,
      value: item.id
    })) || []

  return { data, optionsCategoryLearning, ...result }
}

export const useFetchLearningDetail = (id: number) =>
  useQuery(['learning-detail', id], async () => {
    const response: ApiResponse<ILearning> = await getLearningDetail(id)
    return response.data.Data
  })
