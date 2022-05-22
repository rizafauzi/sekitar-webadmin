import Anchor from '@components/atoms/Anchor'
import ActionButton from '@features/Merchant/components/ActionButton'
import { IMerchantList } from '../../Merchant.type'

export const columnMerchant = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_: null, { id, name }: IMerchantList) => (
      <Anchor label={name} url={`/merchants/${id}`} />
    )
  },
  {
    title: 'Merchant Link',
    dataIndex: 'path',
    key: 'path'
  },
  {
    width: '18em',
    key: 'status',
    title: 'Status',
    dataIndex: 'status'
  },
  {
    width: '18em',
    key: '*',
    title: '*',
    dataIndex: '*',
    align: 'center',
    render: () => <ActionButton />
  }
]

export const dummyMerchant = [
  {
    id: 1,
    name: 'Jasa Marketing Online',
    path: 'jasa-marketing-online',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Sekitar Zone',
    path: 'nazfat',
    status: 'Active'
  },
  {
    id: 3,
    name: 'RumahIkanPky',
    path: 'rumah-ikan-pky',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Bikin Website Jatiasih 2',
    path: 'bikin-website-jatiasih-2',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Bikin Website Jatiasih 3',
    path: 'bikin-website-jatiasih-3',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Bikin Website Jatiasih 4',
    path: 'bikin-website-jatiasih-4',
    status: 'Active'
  },
  {
    id: 7,
    name: 'Bikin Website Jatiasih 5',
    path: 'bikin-website-jatiasih-5',
    status: 'Active'
  },
  {
    id: 8,
    name: 'Bikin Website Jatiasih 6',
    path: 'bikin-website-jatiasih-6',
    status: 'Active'
  },
  {
    id: 9,
    name: 'Bikin Website Jatiasih 7',
    path: 'bikin-website-jatiasih-7',
    status: 'Active'
  },
  {
    id: 10,
    name: 'Bikin Website Jatiasih 8',
    path: 'bikin-website-jatiasih-8',
    status: 'Active'
  }
]
