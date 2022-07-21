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
  const [modalEditSub, setModalEditSub] = useState(false)
  const [detailSubCategory, setDetailSubCategory] = useState(<ICategoryProduct>{})
  const { data, isError, isLoading, refetch } = useQuery(['list-category-lv2', id], async () => {
    const response: ApiResponse<ICategoryProduct[]> = await getCategoryProductDetail(id)
    return response.data.Data?.map((item, index) => ({ ...item, index: index + 1 }))
  })

  const onToggleModalEditLv2 = (idSubCategory?: number) => {
    if (idSubCategory && idSubCategory >= 0) {
      const detailSub = data?.find(item => item.id === idSubCategory)
      setDetailSubCategory(<ICategoryProduct>detailSub)
    }
    setModalEditSub(value => !value)
  }

  return {
    isLoading,
    isError,
    modalEditSub,
    detailSubCategory,
    listCategoryLv2: data || [],
    refetchSub: refetch,
    onToggleModalEditLv2
  }
}

export { useFetchListCategoryProduct, useFetchListCategoryProductLv2 }
