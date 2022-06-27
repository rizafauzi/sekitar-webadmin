/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react'
import Cookies from 'js-cookie'
import { Menu, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

// import SekitarLogo from '../../../assets/images/sekitar.png'
import SekitarAvatar from '../../../assets/images/sekitar-logo.png'

import { Container, Avatar } from './Header.style'

const Header: React.FC = () => {
  const history = useHistory()

  const handleLogout = () => {
    Cookies.remove('token')
    history.push('/login')
    window.location.reload()
  }

  return (
    <Container>
      {/* <img src={SekitarLogo} alt="sekitar-logo" className="h-10" /> */}

      <div className="pb-2 pt-6">
        <h2 className="font-bold">Daftar Pesanan</h2>
      </div>
      <Dropdown
        overlay={
          <Menu
            items={[
              {
                label: <a onClick={handleLogout}>Logout</a>,
                type: 'group'
              }
            ]}
          />
        }
      >
        <div className="flex flex-row">
          <Space>
            <Avatar>
              <img src={SekitarAvatar} alt="sekitar-logo" />
            </Avatar>
            zaki@gmail.com
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </Container>
  )
}

export default Header
