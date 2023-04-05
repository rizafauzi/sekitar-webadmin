/* eslint-disable unicorn/prevent-abbreviations */
export interface IRefundListParams {
  page: number
  limit: number
}

export interface IRefundList {
  customer_name: string
  buyer_phone: string
  canceled_at: string
  total_refund: number
  cart_id: number
  store_name: string
  status: string
}
