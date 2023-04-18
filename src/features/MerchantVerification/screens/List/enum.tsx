/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { IMerchantVerificationList } from '@features/MerchantVerification/MerchantVerification.type'
import VerifyButton from '@features/MerchantVerification/components/VerifyButton'
import EmptyImage from '@assets/images/error.png'
import RejectButton from '@features/MerchantVerification/components/RejectButton'

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
    render: (_: null, { image_ktp }: IMerchantVerificationList) => (
      <img
        alt={image_ktp}
        src={image_ktp}
        className="h-[50px] w-[100px] object-cover rounded-md"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = EmptyImage
        }}
      />
    )
  },
  {
    width: '20em',
    key: 'action',
    title: 'Action',
    align: 'center',
    dataIndex: 'cart_id',
    render: (cart_id: number) => (
      <div className="flex flex-row gap-2 justify-center">
        <VerifyButton cartId={cart_id} />
        <RejectButton cartId={cart_id} />
      </div>
    )
  }
]

export default columnMerchantVerification
