/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { Image } from 'antd'

import EmptyImage from '@assets/images/error.png'
import VerifyButton from '@features/MerchantVerification/components/VerifyButton'
import RejectButton from '@features/MerchantVerification/components/RejectButton'
import { IMerchantVerificationList } from '@features/MerchantVerification/MerchantVerification.type'
import ImageViewer from '@features/MerchantVerification/components/ImageViewer'

const columnMerchantVerification = [
  {
    width: '5em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Store Name',
    dataIndex: 'store_name',
    key: 'store_name'
  },
  {
    title: 'Owner Name',
    dataIndex: 'owner_name',
    key: 'owner_name'
  },
  {
    title: 'KTP ID',
    dataIndex: 'id_ktp',
    key: 'id_ktp'
  },
  {
    width: '8em',
    title: 'KTP Image',
    dataIndex: 'image_ktp',
    key: 'image_ktp',
    render: (_: null, { image_ktp }: IMerchantVerificationList) => <ImageViewer image={image_ktp} />
  },
  {
    width: '20em',
    key: 'action',
    title: 'Action',
    align: 'center',
    dataIndex: 'cart_id',
    render: (_: null, { store_id }: IMerchantVerificationList) => (
      <div className="flex flex-row gap-2 justify-center">
        <VerifyButton storeId={store_id} />
        <RejectButton storeId={store_id} />
      </div>
    )
  }
]

export default columnMerchantVerification
