// import { useState } from 'react'
import Cookies from 'js-cookie'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
import {
  // UserOutlined,
  HomeOutlined,
  PieChartOutlined,
  // UnorderedListOutlined,
  DollarOutlined,
  ReadOutlined,
  BankOutlined,
  SyncOutlined,
  SecurityScanOutlined,
  TeamOutlined
} from '@ant-design/icons'

import Icons from '@assets/Icons'
import SekitarLogo from '../../../assets/images/logo-white.png'
import { Container, Wrapper } from './Sidebar.style'

// import SidebarList from './enum'

const Sidebar = () => {
  const isOpen = true
  // const { SubMenu } = Menu
  const { Sider } = Layout
  const role = Cookies.get('role')

  // const { pathname } = useLocation()
  // const [openKeys, setOpenKeys] = useState(pathname)
  // const handleOpenChange = (subMenuId: string) => {
  //   setOpenKeys(subMenuId)
  // }

  return (
    <div>
      {isOpen && (
        <Container>
          <Wrapper>
            <Sider
              width={226}
              style={{
                height: 'calc(100vh - 4em)',
                background: 'white'
              }}
            >
              <div className="p-10">
                <img src={SekitarLogo} alt="sekitar-logo" />
              </div>
              <Menu
                mode="inline"
                style={{
                  background: 'transparent',
                  borderRight: 0
                }}
              >
                {/* <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item> */}
                {role === 'admin' && (
                  <>
                    <Menu.Item key="merchants" icon={<HomeOutlined />}>
                      <Link to="/merchants">Merchants</Link>
                    </Menu.Item>
                    <Menu.Item key="merchants-subscription" icon={<TeamOutlined />}>
                      <Link to="/merchants-subscription">Merchant Subscription</Link>
                    </Menu.Item>
                    <Menu.Item key="categories" icon={<PieChartOutlined />}>
                      <Link to="/categories">Product Categories</Link>
                    </Menu.Item>
                    <Menu.Item key="promo" icon={<Icons name="megaphone" width={16} height={16} />}>
                      <Link to="/promo" className="ml-2">
                        Promo
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="learning" icon={<ReadOutlined />}>
                      <Link to="/learning" className="ml-2">
                        Learning
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="refund" icon={<SyncOutlined />}>
                      <Link to="/refund" className="ml-2">
                        Refund
                      </Link>
                    </Menu.Item>
                  </>
                )}

                {role === 'courier' && (
                  <>
                    <Menu.Item key="merchants" icon={<HomeOutlined />}>
                      <Link to="/merchants">Merchants</Link>
                    </Menu.Item>
                    <Menu.Item key="merchants-subscription" icon={<TeamOutlined />}>
                      <Link to="/merchants-subscription">Merchant Subscription</Link>
                    </Menu.Item>
                    <Menu.Item key="withdraw-request" icon={<DollarOutlined />}>
                      <Link to="/withdraw-request">Withdraw Request</Link>
                    </Menu.Item>
                    <Menu.Item key="bank-account" icon={<BankOutlined />}>
                      <Link to="/bank-account">Bank Account</Link>
                    </Menu.Item>
                    <Menu.Item key="learning" icon={<ReadOutlined />}>
                      <Link to="/learning" className="ml-2">
                        Learning
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="refund" icon={<SyncOutlined />}>
                      <Link to="/refund" className="ml-2">
                        Refund
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="merchant-verification" icon={<SecurityScanOutlined />}>
                      <Link to="/merchant-verification" className="ml-2">
                        Merchant Verification
                      </Link>
                    </Menu.Item>
                    {/* <Menu.Item key="orders" icon={<UnorderedListOutlined />}>
                      <Link to="/orders">Daftar Pesanan</Link>
                    </Menu.Item> */}
                    {/* <Menu.Item key="couriers" icon={<UserOutlined />}>
                      <Link to="/couriers">Daftar Kurir</Link>
                    </Menu.Item> */}
                  </>
                )}

                {/* <Menu.Item key="master-data" icon={<UserOutlined />}>
                <Link to="/master-data">Master Data</Link>
              </Menu.Item> */}
              </Menu>
            </Sider>
          </Wrapper>
        </Container>
      )}
    </div>
  )
}

export default Sidebar
