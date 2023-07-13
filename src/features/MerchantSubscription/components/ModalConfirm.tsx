import { Modal } from 'antd'

interface IModalConfirmDelete {
  status: string | undefined
  showModal: boolean
  onClose: () => void
  onSubmit: () => void
}

const ModalConfirm = (props: IModalConfirmDelete) => {
  const { showModal, onSubmit, onClose, status } = props

  return (
    <Modal
      centered
      okText="Update"
      onCancel={onClose}
      onOk={onSubmit}
      visible={showModal}
      cancelText="Batal"
      title="Update Status"
    >
      <h4>
        Apakah anda yakin akan mengubah status menjadi <b>{status}</b>?
      </h4>
    </Modal>
  )
}

export default ModalConfirm
