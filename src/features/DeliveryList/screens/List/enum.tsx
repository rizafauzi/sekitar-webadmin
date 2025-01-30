import { formatDate } from '@utils/format-date'
import { DeliveryList } from '@features/DeliveryList/models/DeliveryList'
// import SeeDetail from './SeeDetail'
import DropwdownStatus from '@features/DeliveryList/components/DropdownStatus'

const columnOrderList = [
  {
    width: '4em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Merchant Link',
    dataIndex: 'store_name',
    width: '320px',
    key: 'store_name',
    render: (_: null, data: DeliveryList) => <div>{data.store_name}</div>
  },
  {
    title: 'Ekspedisi',
    dataIndex: 'courier_name',
    width: '170px',
    key: 'courier_name'
  },
  {
    title: 'Date',
    width: '140px',
    dataIndex: 'date',
    key: 'date',
    render: (_: null, data: DeliveryList) => <div>{data.date ? formatDate(data.date) : ''}</div>
  },
  {
    title: 'ID Pengiriman',
    width: '150px',
    dataIndex: 'delivery_id',
    key: 'delivery_id'
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
    dataIndex: 'total_amount',
    key: 'total_amount'
  },
  {
    title: 'Status',
    width: '110px',
    dataIndex: 'status_order',
    key: 'status_order'
  },
  {
    width: '140px',
    key: 'action',
    title: 'Action',
    dataIndex: 'action',
    align: 'center',
    render: (_: null, { delivery_id }: DeliveryList) => <DropwdownStatus deliveryId={delivery_id} />
  }
]

export default columnOrderList
