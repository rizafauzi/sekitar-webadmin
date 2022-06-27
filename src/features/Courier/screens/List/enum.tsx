/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable key-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable sonarjs/no-duplicate-string */

import ActionButton from '../../components/ActionButton'
import { ICourier } from '../../Courier.type'

export const columnMerchant = [
  {
    width: '10em',
    title: 'Nama Kurir',
    dataIndex: 'name',
    key: 'name',
    render: (_: null, { name }: ICourier) => <span>{name}</span>
  },
  {
    width: '10em',
    key: 'area',
    title: 'Area',
    dataIndex: 'area',
    render: (_: null, { area }: ICourier) => <span>{area}</span>
  },
  {
    width: '10em',
    key: 'phone_number',
    title: 'Nomor Handphone',
    dataIndex: 'phone_number',
    render: (_: null, { phone_number }: ICourier) => <span>{phone_number}</span>
  },
  {
    key: 'id',
    width: '20em',
    title: 'Action',
    dataIndex: 'id',
    render: (_: null, data: ICourier) => <ActionButton data={data} />
  }
]

export default columnMerchant
