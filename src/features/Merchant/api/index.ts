import { apiRequest } from '@configs/axios'

export const getStoreById = (id: string) =>
  apiRequest({
    path: `/api/v1/stores/${id}`,
    method: 'GET'
  })

export default getStoreById
