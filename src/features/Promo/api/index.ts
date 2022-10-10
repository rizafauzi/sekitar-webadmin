import { apiRequest } from '@configs/axios'

// eslint-disable-next-line unicorn/prevent-abbreviations
export interface IPromoListParams {
  page: number
  limit: number
}

// eslint-disable-next-line import/prefer-default-export
export const getPromoList = ({ page, limit }: IPromoListParams) =>
  apiRequest({
    path: '/api/v1/promo',
    method: 'GET',
    params: {
      p: page,
      c: limit
    }
  })
