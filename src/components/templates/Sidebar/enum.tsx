import React from 'react'
import { BookOutlined, DatabaseOutlined, TeamOutlined } from '@ant-design/icons'

const SidebarList = [
  {
    key: 'dashboard',
    label: 'Beranda',
    icon: <BookOutlined />,
    menuItem: [
      {
        key: 'dashboard/order',
        icon: <BookOutlined />,
        label: 'Order',
        path: '/dashboard/order'
      },
      {
        key: 'dashboardchange-request',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Change Request',
        path: '/dashboard/change-request'
      },
      {
        key: '/dashboard/confirmed',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Confirmed',
        path: '/dashboard/confirmed'
      },
      {
        key: '/dashboard/claim',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Claim',
        path: '/dashboard/claim'
      },
      {
        key: '/dashboard/refund',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Refund',
        path: '/dashboard/refund'
      }
    ]
  },
  {
    key: 'merchant',
    icon: <DatabaseOutlined />,
    label: 'Merchant',
    menuItem: [
      {
        key: '/merchant/package',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Package',
        path: '/merchant/package'
      },
      {
        key: '/merchant/catering',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Catering',
        path: '/merchant/catering'
      },
      {
        key: '/merchant/decoration',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Decoration',
        path: '/merchant/decoration'
      },
      {
        key: '/merchant/partner',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Partner',
        path: '/merchant/partner'
      }
    ]
  },
  {
    key: 'permission',
    icon: <TeamOutlined />,
    label: 'Permission',
    menuItem: [
      {
        key: '/permission/role',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Role',
        path: '/permission/role'
      },
      {
        key: '/permission/member',
        // icon: <WalletIcon color={Color.grey70} />,
        label: 'Member',
        path: '/permission/member'
      }
    ]
  }
]

export default SidebarList
