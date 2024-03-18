export interface IMerchantSubscription {
  action: Action[]
  request_list: RequestList[]
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
}

export interface IMerchantSubscriptionNew {
  store_counts: StoreCount[]
  stores: Store[]
}

export interface StoreCount {
  StatusId: number
  StatusName: string
  Count: number
}

export interface Store {
  id: number
  name: string
  path: string
  package_name: string
  subscribe_date: string
  transaction_status: string
}
