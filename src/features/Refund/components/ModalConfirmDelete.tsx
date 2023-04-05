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
      okText="Ya"
      cancelText="Batal"
      centered
      title="Confirmation Delete Refund"
      visible={showModal}
      onOk={onAccepted}
      onCancel={onClose}
    >
      <h4>Apakah anda yakin ingin menghapus ini?</h4>
    </Modal>
  )
}

export default ModalConfirmDelete
