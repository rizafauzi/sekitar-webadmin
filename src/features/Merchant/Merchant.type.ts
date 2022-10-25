/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMerchantList {
  id: number
  name: string
  path: string
}
export interface IOperationalHour {
  day: number
  key: string
  value: string
  open_time: string
  close_time: string
}
export interface IMerchant {
  access_token: string
  address: string
  balance: number
  bank_account_name: string
  bank_code: string
  bank_number: string
  category_id: number
  category_name: string
  city: string
  description: string
  distance: number
  district: string
  has_offline_store: number
  has_whatsapp: number
  id: number
  image: null
  image_l: string[] | null
  image_m: string[] | null
  image_s: string[] | null
  image_ss: string[] | null
  image_xl: string[] | null
  is_test: number
  is_active: boolean
  is_verified: string
  latitude: number
  longitude: number
  merchant_flag: number
  name: string
  operation_hour: IOperationalHour[]
  path: string
  phone_number: string
  postal_code: string
  product_categories: any | null
  product_count: number
  province: string
  subdistrict: string
  user_id: number
}

export interface IProduct {
  id: number
  store_id: number
  name: string
  price: number
  stock: number
  description: ''
  image: string[] | Blob
  image_ss: string[]
  image_s: string[]
  image_m: string[]
  image_l: string[]
  image_xl: string[]
  is_test: number
  path: string
  toggle_stock: number
  toggle_active: number
  discount_price: number
  product_weight: number
  updated_at: string
  label_stock: string
  category_lvl_1_id: number | null
  category_lvl_2_id: number | null
  category_lvl_1: string
  category_lvl_2: string
  limit_per_transaction: number
  refetch?: () => void
}

export interface ICategoryProduct {
  description: string
  id: number
  images: string
  is_test: number
  name: string
  priority: number
}
