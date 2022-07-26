/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable key-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable sonarjs/no-duplicate-string */

import TableRow from '@features/Order/components/TableRow'
import moment from 'moment'
import ActionButton from '../../components/ActionButton'
import { IOrder } from '../../Order.type'

export const columnMerchant = [
  {
    width: '10em',
    title: 'Tanggal',
    dataIndex: 'date',
    key: 'date',
    render: (_: null, { date, hour }: IOrder) => (
      <TableRow
        label={moment(date).format('DD MMMM YYYY')}
        value={moment(hour, 'HH:mm').format('HH:mm')}
      />
    )
  },
  {
    width: '10em',
    key: 'cart_id',
    title: 'ID Pesanan',
    dataIndex: 'cart_id',
    render: (_: null, { cart_id }: IOrder) => <span>{cart_id}</span>
  },
  {
    width: '10em',
    key: 'order_state',
    title: 'Status',
    dataIndex: 'order_state',
    render: (_: null, { order_state }: IOrder) => <span>{order_state}</span>
  },
  {
    width: '15em',
    key: 'buyer_name',
    title: 'Nama Buyer',
    dataIndex: 'buyer_name',
    render: (_: null, { buyer_name }: IOrder) => <span>{buyer_name}</span>
  },
  {
    width: '15em',
    key: 'store_name',
    title: 'Nama Store',
    dataIndex: 'store_name',
    render: (_: null, { store_name }: IOrder) => <span>{store_name}</span>
  },
  {
    width: '10em',
    title: 'Kurir',
    key: 'courier_name',
    dataIndex: 'courier_name',
    render: (_: null, { courier_name, area }: IOrder) => (
      <TableRow value={area} label={courier_name} />
    )
  },
  {
    width: '20em',
    key: 'path',
    title: 'Action',
    dataIndex: 'path',
    render: (_: null, data: IOrder) => <ActionButton item={data} />
  }
]

export default columnMerchant
