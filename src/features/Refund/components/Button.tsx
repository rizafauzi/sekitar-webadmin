import React, { useState } from 'react'
import Button from '@components/atoms/Button'
import { RestOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify'
import ModalConfirmDelete from './ModalConfirmDelete'
import { useDeleteRefund, useFetchRefundList } from '../hooks'

interface ButtonProperties {
  cartId: number
}

const RefundButton: React.FC<ButtonProperties> = props => {
  const { cartId } = props
  const [showModal, setShowModal] = useState(false)
  const { refetch } = useFetchRefundList({ page: 1, limit: 1000 })
  const { mutate: deleteRefund } = useDeleteRefund({
    onSuccess: () => {
      toast.success('Delete refund berhasil!')
      refetch()
    }
  })

  const handleDeleteRefund = () => {
    deleteRefund(cartId)
    setShowModal(false)
  }

  return (
    <div className="flex flex-row items-center justify-center">
      {/* Modal Confirm Delete */}
      <ModalConfirmDelete
        showModal={showModal}
        onAccepted={handleDeleteRefund}
        onClose={() => setShowModal(false)}
      />
      <Button variant="destructive" onClick={() => setShowModal(true)}>
        <RestOutlined />
      </Button>
    </div>
  )
}

export default RefundButton
