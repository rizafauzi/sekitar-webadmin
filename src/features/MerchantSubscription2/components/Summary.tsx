/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { StoreCount } from '../screens/List/MerchantSubscription.type'
import SummaryItem from './SummaryItem'

interface ISummary {
  data: StoreCount[]
}
const Summary = ({ data }: ISummary) => (
  <div className="flex gap-3">
    {data.map(
      item =>
        item.StatusId !== 0 && (
          <SummaryItem key={item.StatusName} title={item.StatusName} amount={item.Count} />
        )
    )}
  </div>
)

export default Summary
