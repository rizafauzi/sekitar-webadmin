/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { useFetchMerchantVerificationList } from '@features/MerchantVerification/hooks'
import { Switch } from 'antd'

const OtpSource: React.FC = () => {
  const { data, isLoading } = useFetchMerchantVerificationList({
    page: 1,
    limit: 1000
  })

  console.info(data, isLoading)

  const onChange = (checked: boolean) => {
    console.info(`switch to ${checked}`)
  }

  return (
    <div className="bg-white p-4">
      <div className="flex gap-8">
        <div>OTP Wablas/Fazpass</div>
        <div className="flex gap-2">
          <div>Wablas</div>
          <Switch onChange={onChange} />
          <div>Fazpass</div>
        </div>
      </div>
    </div>
  )
}

export default OtpSource
