/* eslint-disable unicorn/prevent-abbreviations */
export interface ILearningListParams {
  page: number
  limit: number
  category?: number
  activeDate?: string
  deactiveDate?: string
}

export interface DropdownLearningProps {
  id: number
}

export interface ILearningList {
  category_id?: number
  id?: number
  image?: string
  image_l?: string
  image_m?: string
  image_s?: string
  image_ss?: string
  image_xl?: string
  index?: number
  link?: string
  title?: string
  deactivate_date?: Date
  active_date?: Date
}

export interface ILearningCategory {
  id: number
  name: string
}

export interface ILearning {
  id: number
  image: string
  title: string
  link: string
  created_at: string
  updated_at: string
  active_date: string
  deactivate_date: string
  category_id: number
}
