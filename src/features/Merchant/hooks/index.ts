// import { useQuery } from 'react-query'
// import { getStoreById } from '../api'
import { dummyData } from '../screens/Detail/dummyData'

const useFetchMerchantById = (id: string) => {
  // useQuery(['merchant', id], async () => getStoreById(id))
  console.info('id:', id)
  return {
    isLoading: false,
    isError: false,
    data: dummyData
  }
}

export default useFetchMerchantById
