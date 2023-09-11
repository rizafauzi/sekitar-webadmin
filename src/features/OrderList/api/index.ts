/* eslint-disable object-shorthand */
/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { IOrderListParams } from '../models/OrderList'

export const getListOrder = ({ page, limit, ...params }: IOrderListParams) =>
  apiRequest({
    path: '/api/v1/cms/list-order',
    method: 'GET',
    headers: {
      access_token: sekitarEnv.merchantToken
    },
    params: {
      p: page,
      c: limit,
      ...params
    }
  })
