/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import React from 'react'
import { Dropdown, Menu } from 'antd'
// import { toast } from 'react-toastify'
import Icons from '@assets/Icons'
import { IWithdrawList } from '../Withdraw.types'

const DropdownWithdraw: React.FC<{ item: IWithdrawList }> = () => {
  const onAccepted = () => console.info('ACCEPTED')

  const onRejected = () => console.info('REJECTED')

  const options = [
    {
      key: 'edit',
      label: <a onClick={onAccepted}>Dana Diteruskan</a>
    },
    {
      key: 'set-status',
      label: <a onClick={onRejected}>Tolak Penarikan</a>
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
