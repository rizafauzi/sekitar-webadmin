/* eslint-disable unicorn/prevent-abbreviations */
import { ApiResponse } from '@configs/axios'

export type DetailOrderResponse = ApiResponse<DetailOrder>

export interface IOrderDetailParams {
  cartId: string
}

export interface DetailOrder {
  status: number
  message: string
  error: string
  shipping: Shipping
  cart: Cart
  voucher: Voucher
  cashier: Cashier
}

export interface Cart {
  cart_id: number
  store_id: number
  products: Product[]
  payment_state: number
  delivery_fee: number
  order_state: number
  delivery_type: string
  payment_method: string
  delivery_name: string
  buyer_name: string
  buyer_address: string
  buyer_phone: string
  order_state_id: string
  created_at: Date
  preview_image: string
  distinct_products: number
  total_amount: number
  post_from: string
  post_to: string
  origin_latitude: string
  origin_longitude: string
  destination_latitude: string
  destination_longitude: string
  is_use_insurance: boolean
  package_type_id: number
  product_weight: number
  buyer_address_note: string
  order_note: string
  service_name: string
  voucher_usage_id: number
  shipping_id: number
  invoice_file: string
}

export interface Product {
  id: number
  amount: number
  name: string
  price: number
  stock: number
  description: string
  path: string
  image: string[]
  image_ss: string[]
  image_s: string[]
  image_m: string[]
  image_l: string[]
  image_xl: string[]
  note: string
  toggle_stock: number
  toggle_active: number
  discount_price: number
  product_weight: number
  variant_product_id: number
  variant_name: string
  variant_price: number
  preorder_notes: string
}

export interface Cashier {
  cash: number
  change_money: number
}

export interface Shipping {
  invoice: string
  resi_file: string
  pickup_schedules: string
  support_drop: number
  assurance: number
  drop: number
  cod: boolean
  cod_fee: number
  cod_cost: number
}

export interface Voucher {
  voucher_type: string
  voucher_code: string
  voucher_amount: number
}

export interface OrderStatusRequest {
  delivery_id: number
  status: number
}
