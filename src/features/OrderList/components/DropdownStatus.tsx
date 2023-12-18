/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dropdown, Menu, Modal } from 'antd'
import Icons from '@assets/Icons'
import useDisclosure from '@hooks/useDisclosure'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { useUpdateStatusOrder } from '../hooks'

interface DropdownStatusProperties {
  cartId: number
}

enum OrderStatus {
  NEW = 2,
  CANCELED = 6
}

const DropwdownStatus: React.FC<DropdownStatusProperties> = ({ cartId }) => {
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure({ open: false })
  const { isLoading, mutate: updateStatusOrder } = useUpdateStatusOrder({
    onSuccess: () => {
      toast.success('Update Order Status Success')
      history.push('/order-list')
      onClose()
    }
  })
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>()
  const orderStatus = selectedStatus === OrderStatus.NEW ? 'Baru' : 'Dibatalkan'

  const handleDropdownStatus = (status: OrderStatus) => {
    setSelectedStatus(status)
    onOpen()
  }

  const handleSubmit = () => {
    if (selectedStatus) updateStatusOrder({ cart_id: cartId, status: selectedStatus })
  }

  const options = [
    {
      key: 'new',
      label: <a onClick={() => handleDropdownStatus(OrderStatus.NEW)}>Baru</a>
    },
    {
      key: 'delete',
      label: <a onClick={() => handleDropdownStatus(OrderStatus.CANCELED)}>Dibatalkan</a>
    }
  ]

  return (
    <div>
      {/* Modal Confirm Cancel */}
      <Modal
        visible={isOpen}
        centered
        okText="Update"
        title="Update Status"
        cancelText="Batal"
        okButtonProps={{ disabled: isLoading }}
        cancelButtonProps={{ disabled: isLoading }}
        onOk={handleSubmit}
        onCancel={onClose}
      >
        <h4>
          Apakah anda yakin akan mengubah status menjadi <b>{orderStatus}</b>?
        </h4>
      </Modal>

      <Dropdown overlay={<Menu items={options} />} placement="bottomLeft" arrow>
        <div className="flex flex-row justify-center items-center gap-2 py-1.5 px-4 border border-green1 text-sm font-bold rounded-lg bg-green1OPC10">
          <div className="text-green1">Options</div>
          <Icons name="chevron-down" />
        </div>
      </Dropdown>
    </div>
  )
}

export default DropwdownStatus
