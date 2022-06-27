/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

import OrderDetail from '@features/Order/components/OrderDetail'
import DeliveryDetail from '@features/Order/components/DeliveryDetail'

const OrderDetailPage: React.FC = () => (
  <div>
    <DeliveryDetail />
    <div className="my-4" />
    <OrderDetail />
  </div>
)

export default OrderDetailPage
