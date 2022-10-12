/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Dropdown, Menu } from 'antd'
import { toast } from 'react-toastify'
import MyIcon from '@assets/Icons'
import { IPromoList } from '../Promo.type'
import { patchPromoState } from '../api'
import { useFetchPromoList } from '../hooks'

const DropdownPromo: React.FC<{ item: IPromoList }> = ({ item }) => {
  const { id, is_active } = item
  const { refetch } = useFetchPromoList({
    page: 0,
    limit: 20
  })
  const onSetStatus = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const response = await patchPromoState(Number(id), {
        is_active: is_active === 1 ? 0 : 1
      })

      if (response) {
        refetch()
        if (is_active === 0) {
          toast.success('Success Activate Promo')
        } else {
          toast.success('Success Deactivate Promo')
        }
      }
    } catch {
      toast.error('Oops, terjadi sesuatu. Coba lain nanti.')
    }
  }

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onEdit = () => console.info('EDITTT')
  const options = [
    {
      key: 'edit',
      label: <a onClick={onEdit}>Edit</a>
    },
    {
      key: 'set-status',
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      label: <a onClick={onSetStatus}>{is_active ? 'Nonaktifkan' : 'Aktifkan'}</a>
    }
  ]

  return (
    <div className="my-5 mr-6">
      <Dropdown overlay={<Menu items={options} />} placement="bottomLeft" arrow>
        <div className="flex flex-row justify-center gap-2 py-2.5 border border-green1 text-sm font-bold rounded-lg bg-green1OPC10">
          <div className="text-green1 mt-0.5">Options</div>
          <MyIcon name="chevron-down" />
        </div>
      </Dropdown>
    </div>
  )
}

export default DropdownPromo
