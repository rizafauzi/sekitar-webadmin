/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/consistent-function-scoping */

import { Dropdown, Menu, Modal } from 'antd'
import Icons from '@assets/Icons'
import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'
import { useUpdateStatusDelivery } from '../hooks'

interface DropdownStatusProperties {
  deliveryId: number
}

enum OrderStatus {
  DONE = 1,
  CANCELED = 2,
  COURIER_ORDER_FAILED = 3,
  RETUR = 4,
  WAITING_FOR_PAYMENT = 9
}

const DropwdownStatus: React.FC<DropdownStatusProperties> = ({ deliveryId }) => {
  const queryClient = useQueryClient()
  const { mutate: updateStatusDelivery } = useUpdateStatusDelivery({
    onSuccess: () => {
      toast.success('Update Delivery Status Success')
      queryClient.invalidateQueries({ queryKey: ['delivery-list-merchant'] })
    }
  })
  const handleSubmit = (status: OrderStatus) => {
    updateStatusDelivery({ delivery_id: deliveryId, status })
  }

  const options = [
    {
      key: 1,
      label: <a onClick={() => handleSubmit(OrderStatus.DONE)}>Selesai</a>
    },
    {
      key: 2,
      label: <a onClick={() => handleSubmit(OrderStatus.CANCELED)}>Dibatalkan</a>
    },
    {
      key: 3,
      label: <a onClick={() => handleSubmit(OrderStatus.COURIER_ORDER_FAILED)}>Gagal Pesan Kurir</a>
    },
    {
      key: 4,
      label: <a onClick={() => handleSubmit(OrderStatus.RETUR)}>Retur</a>
    },
    {
      key: 9,
      label: (
        <a onClick={() => handleSubmit(OrderStatus.WAITING_FOR_PAYMENT)}>Menunggu Pembayaran</a>
      )
    }
  ]

  return (
    <div>
      <Dropdown overlay={<Menu items={options} />} trigger={['click']} placement="bottomLeft" arrow>
        <div className="flex flex-row justify-center items-center gap-2 py-1.5 px-4 border border-green1 text-sm font-bold rounded-lg bg-green1OPC10 cursor-pointer">
          <div className="text-green1 cursor-pointer">Options</div>
          <Icons name="chevron-down" />
        </div>
      </Dropdown>
    </div>
  )
}

export default DropwdownStatus
