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
}
