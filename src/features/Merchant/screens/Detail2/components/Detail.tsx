import { IMerchant } from '@features/Merchant/Merchant.type'
import Description from './Description'
import Address from './Address'
import OperationalHour from './OperationalHour'

const DetailMerchant = ({ data }: { data: IMerchant }) => {
  console.log(data)
  return (
    <div className="flex flex-col gap-4">
      <Description data={data?.description} />
      <Address data={data} />
      <OperationalHour data={data} />
    </div>
  )
}

export default DetailMerchant
