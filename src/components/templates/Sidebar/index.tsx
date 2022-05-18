// import { useState } from 'react'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, HomeOutlined, PieChartOutlined } from '@ant-design/icons'

// import SidebarList from './enum'

const Sidebar = () => {
  const isOpen = true
  // const { SubMenu } = Menu
  const { Sider } = Layout

  // const { pathname } = useLocation()
  // const [openKeys, setOpenKeys] = useState(pathname)
  // const handleOpenChange = (subMenuId: string) => {
  //   setOpenKeys(subMenuId)
  // }

  return (
    <div>
      {isOpen && (
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
            <Menu.Item key="dashboard" icon={<HomeOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="merchants" icon={<HomeOutlined />}>
              <Link to="/merchants">Merchants</Link>
            </Menu.Item>
            <Menu.Item key="categories" icon={<PieChartOutlined />}>
              <Link to="/categories">Product Categories</Link>
            </Menu.Item>
            <Menu.Item key="master-data" icon={<UserOutlined />}>
              <Link to="/master-data">Master Data</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      )}
    </div>
  )
}

export default Sidebar
