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
            background: 'white',
            borderRightWidth: 1,
            borderRightColor: '#b5ffef'
          }}
        >
          {/* <BookOutlined /> */}
          <Menu
            mode="inline"
            // openKeys={[openKeys]}
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
            {/* {SidebarList.map(data => (
              <SubMenu
                key={data.key}
                icon={data.icon}
                title={data.label}
                onTitleClick={() => handleOpenChange(data.key)}
              >
                {data.menuItem.map(item => (
                  <Menu.Item key={item.key}>
                    <Link to={item.path}>
                      <div className="right-sub-menu">
                        <div className="w-6">{item.icon}</div>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))} */}
          </Menu>
        </Sider>
      )}
    </div>
  )
}

export default Sidebar
