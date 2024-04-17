export interface IMerchantSubscription {
  action: Action[]
  request_list: RequestList[]
  store_counts: StoreCount[]
}

export interface Action {
  id: number
  name: string
}

export interface RequestList {
  is_setoko: boolean
  id: number
  merchant_name: string
  path: string
  package: string
  package_item: string
  request_at: Date
  type: string
  status: string
  status_active: string
  finish_date: Date
  start_date: Date
}

export interface StoreCount {
  StatusId: number
  StatusName: string
  Count: number
}
