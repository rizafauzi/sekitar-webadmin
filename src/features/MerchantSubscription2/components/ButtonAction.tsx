/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/no-console-spaces */
import Icons from '@assets/Icons'
import { toast } from 'react-toastify'
import { Dropdown, Menu } from 'antd'
import { useCallback, useMemo, useState } from 'react'

import ModalConfirm from './ModalConfirm'
import { updateMerchantSubsStatus } from '../api'
import { RequestList } from '../screens/List/MerchantSubscription.type'

interface IStatusOption {
  id: number
  key: string
  label: React.ReactNode
}

interface IButtonAction {
  data: RequestList
  refetch: () => void
}

const ButtonAction = ({ data, refetch }: IButtonAction) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<number>(0)

  const toggle = useCallback(() => setShowModal(previous => !previous), [])

  const handleClickStatus = useCallback((status: number) => {
    setSelectedStatus(status)
    setShowModal(true)
  }, [])

  const handleSubmit = useCallback(async () => {
    setSelectedStatus(selectedStatus)
    setShowModal(true)
    if (selectedStatus) {
      const resp = await updateMerchantSubsStatus({ id: data.id, status: selectedStatus })
      if (resp) {
        setShowModal(false)
        toast.success(resp?.data?.message as string)
        refetch()
      }
    }
  }, [selectedStatus])

  const options: IStatusOption[] = [
    {
      id: 1,
      key: 'Pending',
      label: (
        <button type="button" onClick={() => handleClickStatus(1)}>
          Pending
        </button>
      )
    },
    {
      id: 2,
      key: 'Selesai',
      label: (
        <button type="button" onClick={() => handleClickStatus(2)}>
          Selesai
        </button>
      )
    }
  ]

  const statusLabel = useMemo(
    () => options.find(dt => dt.id === selectedStatus)?.key,
    [selectedStatus]
  )

  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={toggle}
          status={statusLabel}
          showModal={showModal}
          onSubmit={handleSubmit}
        />
      )}
      <Dropdown overlay={<Menu items={options} />} placement="bottomLeft" arrow>
        <div className="flex flex-row justify-center gap-2 py-2.5 border border-green1 text-sm font-bold rounded-lg bg-green1OPC10">
          <div className="text-green1 mt-0.5">Status</div>
          <Icons name="chevron-down" />
        </div>
      </Dropdown>
    </>
  )
}

export default ButtonAction
