/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import React from 'react'
import { Dropdown, Menu } from 'antd'
import Icons from '@assets/Icons'
import { toast } from 'react-toastify'
import { IWithdrawList } from '../Withdraw.types'
import { patchWithdrawStatus } from '../api'

const DropdownWithdraw: React.FC<{ item: IWithdrawList }> = ({ item }) => {
  const onAcceptReject = async (value: 2 | 3) => {
    try {
      const response = await patchWithdrawStatus({
        id: item.id,
        status: value
      })
      if (!response) return
      if (value === 2) toast.success('Dana Berhasil diteruskan')
      if (value === 3) toast.success('Tolak Penarikan Berhasil')
    } catch {
      console.error('Something wrong, try again later')
      toast.error('Oops, terjadi kesalahan sistem. Coba lagi nanti.')
    }
  }

  const options = [
    {
      key: 'dana-diteruskan',
      label: <a onClick={() => onAcceptReject(2)}>Dana Diteruskan</a>
    },
    {
      key: 'tolak-penarikan',
      label: <a onClick={() => onAcceptReject(3)}>Tolak Penarikan</a>
    },
    {
      key: 'dana-disita',
      label: <a onClick={() => onAcceptReject(3)}>Dana Disita</a>
    }
  ]

  return (
    <div className="my-5 mr-6">
      <Dropdown overlay={<Menu items={options} />} placement="bottomLeft" arrow>
        <div className="flex flex-row justify-center gap-2 py-2.5 border border-green1 text-sm font-bold rounded-lg bg-green1OPC10">
          <div className="text-green1 mt-0.5">Options</div>
          <Icons name="chevron-down" />
        </div>
      </Dropdown>
    </div>
  )
}

export default DropdownWithdraw
