/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'

export type OrderListResponse = ApiResponse<OrderList[]>

export interface IOrderListParams {
  page: number
  limit: number
  search: string
  status?: number
}

export interface OrderList {
  cart_id: number
  customer_name: string
  date: Date
  merchant_link: string
  status: string
  total_price: number
}
