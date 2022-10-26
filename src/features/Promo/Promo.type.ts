export interface IPromoList {
  index?: number
  id: string
  title: string
  description: string
  merchant: string
  is_active: number
  created_at: string
  updated_at: string
}

export interface IProductPromo {
  id: number
  name: string
  store_id: number
}

interface IMerchantPromo {
  id: number
  name: string
}

export interface IPromoDetail {
  id: string
  title: string
  description: string
  merchant: IMerchantPromo
  banner_entry_point: string
  header_banner: string
  products: IProductPromo[]
  is_active: number
  wording_cta: string
  custom_url_cta: string
  created_at: string
  updated_at: string
}
