import { Product } from '@features/OrderList/models/OrderDetail'

const columnProductOrderList = [
  {
    width: '4em',
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Nama Produk',
    dataIndex: 'name',
    width: '320px',
    key: 'name',
    render: (_: null, { name, image }: Product) => (
      <div className="flex flex-row items-center gap-3">
        {image?.[0] && <img src={image[0]} alt={name} className="w-10 h-10 rounded-md" />}
        <span>{name}</span>
      </div>
    )
  },
  {
    title: 'Jumlah Produk',
    width: '140px',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Harga Produk',
    width: '110px',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Total Harga Produk',
    width: '200px',
    key: 'action',
    dataIndex: 'action',
    render: (_: null, { amount, price }: Product) => <div>{amount * price}</div>
  }
]

export default columnProductOrderList
