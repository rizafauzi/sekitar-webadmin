/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import Anchor from '@components/atoms/Anchor'
import ActionButton from '@features/Merchant/components/ActionButton'
import { IMerchant, IProduct } from './Merchant.type'
import EmptyImage from '@assets/images/error.png'
import DeleteProduct from './components/DeleteProduct'
import EditProduct from './components/EditProduct'

export const columnMerchant = [
  {
    width: '25em',
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_: null, { path, name }: IMerchant) => (
      <Anchor label={name} url={`/merchants/${path}`} />
    )
  },
  {
    width: '15em',
    title: 'Merchant Link',
    dataIndex: 'path',
    key: 'path'
  },
  {
    width: '20em',
    title: 'Category',
    dataIndex: 'category_name',
    key: 'category_name'
  },
  {
    width: '10em',
    title: 'Merchant',
    key: 'merchant_flag',
    dataIndex: 'merchant_flag',
    render: (_: null, { merchant_flag }: IMerchant) => (
      <span>{merchant_flag === 0 ? 'Setoko' : 'Sekitar'}</span>
    )
  },
  {
    width: '18em',
    key: 'path',
    title: '*',
    dataIndex: 'path',
    align: 'center',
    render: (data: string) => <ActionButton path={data} />
  }
]

export const columnProductByMerchant = [
  {
    width: '8em',
    title: 'Stock',
    dataIndex: 'image',
    key: 'image',
    render: (_: null, { image_s, name }: IProduct) => (
      <img
        alt={name}
        className="h-[50px] w-[50px] object-cover rounded-md"
        src={image_s?.length > 0 ? image_s[0] : EmptyImage}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = EmptyImage
        }}
      />
    )
  },
  {
    width: '20em',
    title: 'Product',
    dataIndex: 'name',
    key: 'name'
  },
  {
    width: '10em',
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    width: '10em',
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock'
  },
  {
    width: '10em',
    title: 'Product Weight (gram)',
    dataIndex: 'product_weight',
    key: 'product_weight'
  },
  {
    width: '25em',
    title: 'Path',
    dataIndex: 'path',
    key: 'path',
    render: (_: null, { path }: IProduct) => <a href={path}>{path}</a>
  },
  {
    width: '18em',
    key: 'path',
    title: '*',
    dataIndex: 'path',
    align: 'center',
    render: (_: null, data: IProduct) => (
      <div className="flex flex-row items-center justify-center">
        <EditProduct data={data} />
        <div className="w-[10px]" />
        <DeleteProduct data={data} />
      </div>
    )
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
