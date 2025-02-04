import { formatDate } from '@utils/format-date'
import { DeliveryList } from '@features/DeliveryList/models/DeliveryList'
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
    dataIndex: 'merchant_link',
    width: '320px',
    key: 'merchant_link',
    render: (_: null, data: DeliveryList) => (
      <a href={data.merchant_link} target="_blank" rel="noreferrer">
        {data.merchant_link}
      </a>
    )
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
    dataIndex: 'buyer_name',
    key: 'buyer_name'
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
