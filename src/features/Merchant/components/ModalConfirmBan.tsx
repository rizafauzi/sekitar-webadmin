import { Modal } from 'antd'

interface IModalConfirmBan {
  isBanned: boolean
  storeName: string
  showModal: boolean
  onClose: () => void
  onAccepted: () => void
}

const ModalConfirmBan = ({
  isBanned,
  storeName,
  showModal,
  onAccepted,
  onClose
}: IModalConfirmBan) => (
  <Modal
    okText="Ya"
    cancelText="Batal"
    centered
    title="Confirmation Ban Store"
    visible={showModal}
    onOk={onAccepted}
    onCancel={onClose}
  >
    <h4>
      Apakah anda yakin ingin {isBanned ? 'unban' : 'ban'} toko
      <span className="font-bold"> {storeName}</span>?
    </h4>
  </Modal>
)

export default ModalConfirmBan
