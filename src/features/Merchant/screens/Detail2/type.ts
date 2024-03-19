export interface IReviewSummary {
  store_rating: number
  total_rating: number
  total_review: number
  store_review: IReview
}
export interface IReview {
  id: number
  name: string
  rating: number
  comment: string
  cart_id: number
  user_id: number
  store_id: number
  is_deleted: number
  created_at: string
  updated_at: string
  products: IProduct[]
  phone_number: string
}

export interface IProduct {
  id: number
  path: string
  name: string
  price: number
  stock: number | undefined
  store_id: number
  description: string
  is_promo?: boolean
  is_preorder: boolean
  max_duration_preorder: number
  toggle_stock: number
  toggle_active: number
  discount_price: number
  product_weight: number
  category_lvl_1: string
  category_lvl_2: string
  category_lvl_1_id: number
  category_lvl_2_id: number
  image: string[] | string
  image_s: string[] | string
  image_m: string[] | string
  image_l: string[] | string
  videos: string[]
  image_xl: string[] | string
  image_ss: string[] | string
  limit_per_transaction: number
  label_stock?: string | undefined
  has_variant: boolean
}
