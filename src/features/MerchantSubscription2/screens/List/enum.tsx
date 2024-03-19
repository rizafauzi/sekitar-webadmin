/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { formatDate } from '@utils/format-date'
import { RequestList } from './MerchantSubscription.type'
import { Tag } from 'antd'
import ActionButton from '@features/MerchantSubscription2/components/ActionButton'

const statusEnum = [
  {
    label: 'Menengah',
    color: 'orange'
  },
  {
    label: 'Aktif',
    color: 'cyan'
  },
  {
    label: 'Tidak Aktif',
    color: 'red'
  }
]

const getStatus = (status: string) => statusEnum.find(dt => dt.label === status)
const columnMerchant = (refetch: () => void) => [
  {
    width: '4rem',
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    width: '12rem',
    title: 'NAMA MERCHANT',
    dataIndex: 'name',
    key: 'name'
  },
  {
    width: '12rem',
    title: 'PATH MERCHANT',
    dataIndex: 'path',
    key: 'path',
    render: (_: null, data: RequestList) => <a className="text-[#06BAAD] underline">{data.path}</a>
  },
  {
    width: '10em',
    title: 'JENIS PAKET',
    key: 'package_name',
    dataIndex: 'package_name'
  },
  {
    width: '9rem',
    title: 'WAKTU BERLANGGANAN',
    dataIndex: 'subscribe_date',
    key: 'subscribe_date',
    render: (_: null, data: RequestList) => (
      <span>{data.request_at ? formatDate(data.request_at) : ''}</span>
    )
  },
  {
    width: '8rem',
    title: 'TRANSAKSI',
    key: 'transaction_status',
    dataIndex: 'transaction_status',
    render: (_: null, data: RequestList) => (
      <Tag color={getStatus(data?.transaction_status)?.color}>{data.transaction_status}</Tag>
    )
  },
  {
    width: '7rem',
    title: 'ACTIONS',
    dataIndex: 'id',
    key: 'action',
    render: (_: null, data: RequestList) => (
      <div className="">
        <ActionButton path={data?.path} />
      </div>
    )
  }
]

export default columnMerchant
