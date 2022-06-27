// import { useState } from 'react'
import Cookies from 'js-cookie'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, HomeOutlined, PieChartOutlined } from '@ant-design/icons'
import { Container } from './Sidebar.style'

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
          <Sider
            width={226}
            style={{
              height: 'calc(100vh - 4em)',
              background: 'white'
            }}
          >
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
                  <Menu.Item key="categories" icon={<PieChartOutlined />}>
                    <Link to="/categories">Product Categories</Link>
                  </Menu.Item>
                </>
              )}

              {role === 'courier' && (
                <>
                  <Menu.Item key="orders" icon={<UserOutlined />}>
                    <Link to="/orders">Daftar Pesanan</Link>
                  </Menu.Item>
                  <Menu.Item key="couriers" icon={<UserOutlined />}>
                    <Link to="/couriers">Daftar Kurir</Link>
                  </Menu.Item>
                </>
              )}

              {/* <Menu.Item key="master-data" icon={<UserOutlined />}>
                <Link to="/master-data">Master Data</Link>
              </Menu.Item> */}
            </Menu>
          </Sider>
        </Container>
      )}
    </div>
  )
}

export default Sidebar
