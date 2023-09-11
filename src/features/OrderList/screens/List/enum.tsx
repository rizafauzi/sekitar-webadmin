import { OrderList } from '@features/OrderList/models/OrderList'
import { formatDate } from '@utils/format-date'

const columnOrderList = [
  {
    width: '4em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Merchant Link',
    dataIndex: 'merchant_link',
    width: '400px',
    key: 'merchant_link'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (_: null, data: OrderList) => <div>{data.date ? formatDate(data.date) : ''}</div>
  },
  {
    title: 'ID Order',
    dataIndex: 'cart_id',
    key: 'cart_id'
  },
  {
    title: 'Customer Name',
    dataIndex: 'customer_name',
    key: 'customer_name'
  },
  {
    title: 'Total Harga',
    dataIndex: 'total_price',
    key: 'total_price'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  }
]

export default columnOrderList
