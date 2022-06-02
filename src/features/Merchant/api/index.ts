import { apiRequest } from '@configs/axios'

export const getStoreById = (id: number) =>
  apiRequest({
    path: `/api/dashboard/stores2/${id}?access_token=a79f01bc57edb585f41fd2b7b09b4585b09c0ca6`,
    method: 'GET'
  })

export default getStoreById
