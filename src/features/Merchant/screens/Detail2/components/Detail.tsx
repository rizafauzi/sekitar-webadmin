import { IMerchant } from '@features/Merchant/Merchant.type'
import Description from './Description'
import Address from './Address'
import OperationalHour from './OperationalHour'
import { IReviewSummary } from '../type'
import Review from './Review'

const DetailMerchant = ({ data, dataReview }: { data: IMerchant; dataReview: IReviewSummary }) => (
  <div className="flex flex-col gap-4">
    <Description data={data?.description} />
    <Address data={data} />
    <OperationalHour data={data} />
    {dataReview && <Review review={dataReview} />}
  </div>
)

export default DetailMerchant
