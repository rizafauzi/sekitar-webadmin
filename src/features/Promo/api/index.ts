/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiRequest } from '@configs/axios'

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

// eslint-disable-next-line arrow-body-style
export const patchPromoState = (id: number, bodyRequest: { is_active: number }): Promise<any> => {
  return apiRequest({
    path: `/api/v1/promo/is_active/${id}`,
    method: 'PATCH',
    bodyRequest,
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    }
  })
}
