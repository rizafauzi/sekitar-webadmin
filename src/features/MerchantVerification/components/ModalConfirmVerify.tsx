import { Modal } from 'antd'

interface IModalConfirmDelete {
  showModal: boolean
  onClose: () => void
  onAccepted: () => void
}

const ModalConfirmDelete = (props: IModalConfirmDelete) => {
  const { showModal, onAccepted, onClose } = props

  return (
    <Modal
      centered
      onOk={onAccepted}
      onCancel={onClose}
      visible={showModal}
      cancelText="Batal"
      okText="Verifikasi"
      title="Verify Merchant Confirmation"
    >
      <h4>Apakah anda yakin akan memverifikasi merchant ini?</h4>
    </Modal>
  )
}

export default ModalConfirmDelete
