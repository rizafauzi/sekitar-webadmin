import React from 'react'
import { Layout as AntdLayout } from 'antd'

import Sidebar from '../Sidebar'
// import Header from '../Header'

import { ContainerWrapper, LayoutWrapper } from './Layout.styles'
import Header from '../Header'

const Layout = ({ children }: { children: React.ReactNode }) => (
  // const [isSidebarOpened, setIsSidebarOpened] = useState(true)

  // const toggleSidebar = () => {
  //   setIsSidebarOpened(!isSidebarOpened)
  // }

  <div>
    <ContainerWrapper>
      <AntdLayout>
        <Sidebar />
        <AntdLayout>
          <Header />
          <LayoutWrapper>{children}</LayoutWrapper>
        </AntdLayout>
      </AntdLayout>
    </ContainerWrapper>
  </div>
)

export default Layout
