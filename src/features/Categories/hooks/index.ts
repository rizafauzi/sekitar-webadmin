/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { ICategoryProduct } from '@features/Categories/Categories.type'
import { useState } from 'react'
import { getListCategoryProduct, getCategoryProductDetail } from '../api'

const useFetchListCategoryProduct = (id?: string) => {
  const [modalEdit, setModalEdit] = useState(false)
  const { data, isError, isLoading, refetch } = useQuery(['list-category', id], async () => {
    const response: ApiResponse<ICategoryProduct[]> = await getListCategoryProduct()
    return response.data.Data.map((item, index) => ({ ...item, index: index + 1 }))
  })
  const detailData = data?.find(item => String(item.id) === id)

  const onToggleModalEdit = () => {
    setModalEdit(previousState => !previousState)
  }

  return {
    isLoading,
    isError,
    modalEdit,
    listCategory: data || [],
    detailData,
    refetch,
    onToggleModalEdit
  }
}

const useFetchListCategoryProductLv2 = (id: string) => {
  const { data, isError, isLoading } = useQuery(['list-category-lv2', id], async () => {
    const response: ApiResponse<ICategoryProduct[]> = await getCategoryProductDetail(id)
    return response.data.Data.map((item, index) => ({ ...item, index: index + 1 }))
  })
  return {
    isLoading,
    isError,
    listCategoryLv2: data || []
  }
}

export { useFetchListCategoryProduct, useFetchListCategoryProductLv2 }
