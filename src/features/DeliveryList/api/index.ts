/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable object-shorthand */
/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { DeliveryStatusRequest, IOrderListParams } from '../models/DeliveryList'

export const getListDelivery = ({ page, limit, ...params }: IOrderListParams) =>
  apiRequest({
    path: '/api/v1/cms/list-delivery',
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

export const updateDeliveryStatus = (bodyRequest: DeliveryStatusRequest) =>
  apiRequest({
    path: '/api/v1/cms/update-delivery-status',
    method: 'PUT',
    bodyRequest,
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
