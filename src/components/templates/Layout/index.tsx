import React from 'react'
import { Layout as AntdLayout } from 'antd'
import { ContainerWrapper, LayoutWrapper } from './Layout.styles'
import Sidebar from '../Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => (
  // const [isSidebarOpened, setIsSidebarOpened] = useState(true)

  // const toggleSidebar = () => {
  //   setIsSidebarOpened(!isSidebarOpened)
  // }

  <div>
    <ContainerWrapper>
      {/* <Header toggle={toggleSidebar} /> */}
      <AntdLayout>
        <Sidebar />
        <AntdLayout>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AntdLayout>
      </AntdLayout>
    </ContainerWrapper>
  </div>
)

export default Layout
