import { Modal } from 'antd'

interface IModalConfirmDelete {
  showModal: boolean
  onClose: () => void
  onReject: () => void
}

const ModalReject = (props: IModalConfirmDelete) => {
  const { showModal, onReject, onClose } = props

  return (
    <Modal
      centered
      onOk={onReject}
      okText="Tolak"
      okType="danger"
      onCancel={onClose}
      visible={showModal}
      cancelText="Batal"
      title="Verify Merchant Confirmation"
    >
      <h4>Apakah anda yakin akan menolak verifikasi merchant ini?</h4>
    </Modal>
  )
}

export default ModalReject
