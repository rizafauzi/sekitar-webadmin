/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { formatDate } from '@utils/format-date'
import { RequestList } from './MerchantSubscription.type'
import ButtonAction from '@features/MerchantSubscription/components/ButtonAction'
import { Tag } from 'antd'

const statusEnum = [
  {
    label: 'Pending',
    color: 'orange'
  },
  {
    label: 'Selesai',
    color: 'green'
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
    title: 'Path',
    dataIndex: 'path',
    key: 'path'
  },
  {
    width: '9rem',
    title: 'Tanggal Request Berlangganan',
    dataIndex: 'request_at',
    key: 'request_at',
    render: (_: null, data: RequestList) => (
      <span>{data.request_at ? formatDate(data.request_at) : ''}</span>
    )
  },
  {
    width: '8rem',
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_: null, data: RequestList) => (
      <Tag color={getStatus(data.status)?.color}>{data.status}</Tag>
    )
  },
  {
    width: '10em',
    title: 'Paket',
    key: 'package',
    dataIndex: 'package'
  },
  {
    width: '9rem',
    title: 'Periode Berlangganan',
    key: 'package_item',
    dataIndex: 'package_item'
  },
  {
    width: '10em',
    title: 'Jenis Paket',
    key: 'type',
    dataIndex: 'type'
  },
  {
    width: '7rem',
    title: 'ACTIONS',
    dataIndex: 'id',
    key: 'action',
    render: (_: null, data: RequestList) => <ButtonAction data={data} refetch={refetch} />
  }
]

export default columnMerchant
