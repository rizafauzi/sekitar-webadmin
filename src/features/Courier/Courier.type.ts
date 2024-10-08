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
  wablas_token: string
}

export interface ICourier {
  id: number
  area: string
  name: string
  is_active: number
  phone_number: string
}

export interface ICourierPayload {
  area: string
  name: string
}
