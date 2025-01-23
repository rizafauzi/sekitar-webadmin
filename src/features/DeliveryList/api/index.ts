/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable object-shorthand */
/* eslint-disable import/prefer-default-export */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { IOrderListParams } from '../models/DeliveryList'
import { IOrderDetailParams, OrderStatusRequest } from '../models/OrderDetail'

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

export const getDetailOrder = ({ cartId }: IOrderDetailParams) =>
  apiRequest({
    path: `/api/v4/cart/${cartId}`,
    method: 'GET',
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })

export const postOrderStatus = (bodyRequest: OrderStatusRequest) =>
  apiRequest({
    path: '/api/v7/cart/order_state/update',
    method: 'POST',
    bodyRequest,
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
