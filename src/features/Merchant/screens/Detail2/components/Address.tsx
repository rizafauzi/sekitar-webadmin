import { IMerchant } from '@features/Merchant/Merchant.type'

const Address = ({ data }: { data: IMerchant }) => {
  console.log(data)
  return (
    <div>
      <div className="text-lg font-semibold">Alamat</div>
      <div className="border-b-2 py-6">
        <div>{data?.address}</div>
      </div>
    </div>
  )
}

export default Address
