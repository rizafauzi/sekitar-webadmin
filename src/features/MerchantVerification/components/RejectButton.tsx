/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import React, { useState } from 'react'
import Button from '@components/atoms/Button'
import { toast } from 'react-toastify'
import { useRejectMerchant, useFetchMerchantVerificationList } from '../hooks'
import ModalReject from './ModalReject'

interface ButtonProperties {
  storeId: number
}

const RejectButton: React.FC<ButtonProperties> = props => {
  const { storeId } = props
  const [showModal, setShowModal] = useState(false)
  const { refetch } = useFetchMerchantVerificationList({ page: 1, limit: 1000 })
  const { mutate: rejectMerchant } = useRejectMerchant({
    onSuccess: (data: any) => {
      if (!!data?.data?.error) {
        toast.error(data?.data?.error)
        return
      }
      toast.success('Reject Merchant berhasil!')
      refetch()
    }
  })

  const handleRejectMerchant = () => {
    rejectMerchant(storeId)
    setShowModal(false)
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <ModalReject
        showModal={showModal}
        onReject={handleRejectMerchant}
        onClose={() => setShowModal(false)}
      />
      <Button variant="destructive" onClick={() => setShowModal(true)}>
        Tolak
      </Button>
    </div>
  )
}

export default RejectButton
