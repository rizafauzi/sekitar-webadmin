/* eslint-disable unicorn/prevent-abbreviations */
export interface IMerchantVerificationListParams {
  page: number
  limit: number
}

export interface IMerchantVerificationList {
  store_id: number
  store_name: string
  store_path: string
  owner_name: string
  id_ktp: string
  image_ktp: string
}
