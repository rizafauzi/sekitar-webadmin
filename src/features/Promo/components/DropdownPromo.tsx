/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Dropdown, Menu } from 'antd'
import MyIcon from '@assets/Icons'

const DropdownPromo: React.FC = () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onEdit = () => console.info('EDITTT')
  const menu = (
    <Menu
      items={[
        {
          key: 'edit',
          label: <a onClick={onEdit}>Edit</a>
        },
        {
          key: 'activate',
          label: <a onClick={onEdit}>Aktifkan</a>
        }
      ]}
    />
  )

  return (
    <div className="my-5 mr-6">
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <div className="flex flex-row justify-center gap-2 py-2.5 border border-green1 text-sm font-bold rounded-lg bg-green1OPC10">
          <div className="text-green1 mt-0.5">Options</div>
          <MyIcon name="chevron-down" />
        </div>
      </Dropdown>
    </div>
  )
}

export default DropdownPromo
