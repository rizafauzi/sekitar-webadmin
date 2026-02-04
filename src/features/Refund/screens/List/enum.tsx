import RefundButton from '@features/Refund/components/Button'

const columnRefund = [
  {
    width: '5em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Customer Name',
    dataIndex: 'customer_name',
    className: 'max-w-20',
    key: 'customer_name',
    render: (value: string) => <a href="/refund/1">{value}</a>
  },
  {
    title: 'Store Name',
    dataIndex: 'store_name',
    key: 'store_name'
  },
  {
    title: 'Buyer Phone',
    dataIndex: 'buyer_phone',
    key: 'buyer_phone'
  },
  {
    title: 'Total Refund',
    dataIndex: 'total_refund',
    key: 'total_refund'
  },
  {
    title: 'Order Id',
    width: '100px',
    dataIndex: 'cart_id',
    key: 'cart_id'
  },
  {
    width: '18em',
    key: 'action',
    title: 'Action',
    dataIndex: 'cart_id',
    align: 'center',
    render: (cart_id: number) => <RefundButton cartId={cart_id} />
  }
]

export default columnRefund
