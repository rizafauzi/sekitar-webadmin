import { OrderList } from '@features/OrderList/models/OrderList'
import { formatDate } from '@utils/format-date'
import SeeDetail from './SeeDetail'

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
    width: '320px',
    key: 'merchant_link'
  },
  {
    title: 'Date',
    width: '140px',
    dataIndex: 'date',
    key: 'date',
    render: (_: null, data: OrderList) => <div>{data.date ? formatDate(data.date) : ''}</div>
  },
  {
    title: 'ID Order',
    width: '110px',
    dataIndex: 'cart_id',
    key: 'cart_id'
  },
  {
    title: 'Customer Name',
    width: '200px',
    dataIndex: 'customer_name',
    key: 'customer_name'
  },
  {
    title: 'Total Harga',
    width: '110px',
    dataIndex: 'total_price',
    key: 'total_price'
  },
  {
    title: 'Status',
    width: '110px',
    dataIndex: 'status',
    key: 'status'
  },
  {
    width: '140px',
    key: 'action',
    title: 'Action',
    dataIndex: 'action',
    align: 'center',
    render: (_: null, { cart_id }: OrderList) => <SeeDetail cartId={cart_id} />
  }
]

export default columnOrderList
