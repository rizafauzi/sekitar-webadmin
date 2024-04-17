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
  },
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
    title: 'Path',
    dataIndex: 'path',
    key: 'path'
  },
  {
    width: '10rem',
    title: 'Tanggal Request Berlangganan',
    dataIndex: 'start_date',
    key: 'start_date',
    render: (_: null, data: RequestList) => (
      <span>{data.start_date ? formatDate(data.start_date) : ''}</span>
    )
  },
  {
    width: '12em',
    title: 'Tanggal berakhir Berlangganan',
    dataIndex: 'finish_date',
    key: 'finish_date',
    render: (_: null, data: RequestList) => (
      <span>{data.finish_date ? formatDate(data.finish_date) : ''}</span>
    )
  },
  {
    width: '7em',
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
    width: '8rem',
    title: 'TRANSAKSI',
    key: 'status_active',
    dataIndex: 'status_active',
    render: (_: null, data: RequestList) => (
      <Tag color={getStatus(data?.status_active)?.color}>{data.status_active}</Tag>
    )
  },
  {
    width: '6rem',
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_: null, data: RequestList) => (
      <Tag color={getStatus(data.status)?.color}>{data.status}</Tag>
    )
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
