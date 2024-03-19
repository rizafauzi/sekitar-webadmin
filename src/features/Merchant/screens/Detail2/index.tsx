/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

// import React, { useEffect, useState } from 'react'
import qs from 'query-string'
import { useLocation } from 'react-router-dom'

import useFetchMerchantById from '@features/Merchant/hooks'
import Flex from '@components/atoms/Flex'
import { IMerchant } from '@features/Merchant/Merchant.type'
import TabComponent from '@components/atoms/Tab'
import { useState } from 'react'
import { ITabItems } from '@components/atoms/Tab/Tab.type'
import HeaderDetail from './components/Header'
import DetailMerchant from './components/Detail'

const MerchantDetail2 = () => {
  const { pathname } = useLocation()
  // const pagination = qs.parse(search)
  const storePath = pathname.replace('/merchants2/', '')
  const { data, isError, isLoading, refetch } = useFetchMerchantById(storePath)
  const [section, setSection] = useState(0)

  // console.log(pathname, pagination, storePath)
  console.log(data, isError, isLoading)

  const TabItems: ITabItems[] = [
    {
      title: 'Detail Toko',
      id: 0
    },
    {
      title: 'Notes',
      id: 1
    }
  ]

  const handleChangeTab = (item: number) => {
    setSection(item)
  }

  return (
    <Flex alignItems="center">
      <div className="bg-white w-full p-4">
        <HeaderDetail data={data as IMerchant} />
        <div className="my-6">
          <TabComponent section={section} handleChangeTab={handleChangeTab} items={TabItems} />
        </div>
        {section === 0 ? <DetailMerchant data={data as IMerchant} /> : <div>Notes</div>}
      </div>
    </Flex>
  )
}

export default MerchantDetail2
