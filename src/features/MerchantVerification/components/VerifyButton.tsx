/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import React, { useState } from 'react'
import Button from '@components/atoms/Button'
import { toast } from 'react-toastify'
import ModalConfirmVerify from './ModalConfirmVerify'
import { useApproveMerchant, useFetchMerchantVerificationList } from '../hooks'

interface ButtonProperties {
  storeId: number
}

const VerifyButton: React.FC<ButtonProperties> = props => {
  const { storeId } = props
  const [showModal, setShowModal] = useState(false)
  const { refetch } = useFetchMerchantVerificationList({ page: 1, limit: 1000 })
  const { mutate: approveMerchant } = useApproveMerchant({
    onSuccess: (data: any) => {
      if (data?.data?.error) {
        toast.error(data?.data?.error)
        return
      }
      toast.success('Merchant berhasil diverifikasi!')
      refetch()
    }
  })

  const handleApproveMerchant = () => {
    approveMerchant(storeId)
    setShowModal(false)
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <ModalConfirmVerify
        showModal={showModal}
        onAccepted={handleApproveMerchant}
        onClose={() => setShowModal(false)}
      />
      <Button variant="secondary" onClick={() => setShowModal(true)}>
        Verifikasi
      </Button>
    </div>
  )
}

export default VerifyButton
