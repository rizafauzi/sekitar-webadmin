import { IMerchant } from '@features/Merchant/Merchant.type'

const OperationalHour = ({ data }: { data: IMerchant }) => (
  <div className="border-b-2 pb-6">
    <div className="flex gap-24 justify-between">
      <div className="w-1/2">
        <div className="text-lg font-semibold mb-4">Jam Operasional</div>
        {data?.operation_hour.map(item => (
          <div className="flex justify-between">
            <div>{item?.key}</div>
            <div>{item?.value}</div>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <div className="text-lg font-semibold mb-4">Telepon</div>
        <div>{data?.phone_number}</div>
      </div>
    </div>
  </div>
)

export default OperationalHour
