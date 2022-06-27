/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IOrder {
  date: string
  hour: string
  area: string
  cart_id: string
  order_state: string
  action: string[]
  courier_id: string
  courier_name: string
}

export interface IDeliveryDetail {
  cart_id: string
  processed_hour: string
  shipped_hour: string
  completed_hour: string
  courier_name: string
  courier_area: string
}

export interface IOrderDetail {
  cart_id: string
  date: string
  hour: string
  buyer_name: string
  buyer_email: string
  buyer_whatsapp: string
  buyer_address: string
  buyer_location: string
  store_name: string
  store_whatsapp: string
  store_address: string
  store_location: string
  items: string[]
  voucher: string
  total_amount: number
}
