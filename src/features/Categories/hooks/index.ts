import { useQuery } from 'react-query'
import { getListCategoryProduct, getCategoryProductDetail } from '../api'

interface ListCategoryProduct {
  id: number
  description: string
  images: string
  is_test: number
  name: string
  priority: number
  parent_id?: number
}

const useFetchListCategoryProduct = () => {
  const response = useQuery('listCategory', async () => getListCategoryProduct()).data
  return {
    isLoading: false,
    isError: false,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    listCategory: <ListCategoryProduct[]>response?.data.Data
  }
}

const useFetchListCategoryProductLv2 = (id: string) => {
  const response = useQuery(['listCategoryLv2', id], async () => getCategoryProductDetail(id)).data
  return {
    isLoading: false,
    isError: false,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    listCategoryLv2: <ListCategoryProduct[]>response?.data.Data
  }
}

export { useFetchListCategoryProduct, useFetchListCategoryProductLv2 }
