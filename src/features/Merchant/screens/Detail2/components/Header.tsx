/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

import Button from '@components/atoms/Button'
import { IMerchant } from '@features/Merchant/Merchant.type'
import './index.css'

const HeaderDetail = ({ data }: { data: IMerchant }) => {
  console.log(data)
  return (
    <div className="flex gap-4">
      <div>
        <img src={data?.image || 'https://image.setoko.co/image_v2/empty-box.svg'} alt="default" />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          {data?.name} - {data?.category_name}
        </div>
        <Button>
          <span className="text-white">Hubungi Toko</span>
        </Button>
      </div>
    </div>
  )
}

export default HeaderDetail
