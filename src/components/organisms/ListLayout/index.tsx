/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ChangeEvent, useEffect, useState } from 'react'
import qs from 'query-string'
import { Input, Space, DatePicker } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import useDebounce from '@hooks/useDebounce'
import clearEmptyObject from '@utils/object-utils'
import Table from '@components/atoms/Table'
import { SearchOutlined } from '@ant-design/icons'
import Button from '@components/atoms/Button'
import { Wrapper } from './ListLayout.style'
import TabComponent from './Tab.component'

interface IListLayout {
  total?: any
  isSearch?: boolean
  isSearchNew?: boolean
  title: string
  extendButton?: React.ReactNode[]
  prefixElement?: React.ReactNode[]
  source: {
    data: any
    isError: boolean
    isLoading: boolean
  }
  columns: IColumn[]
  placeholder?: string
}

interface IColumn {
  key: string
  title: string
  dataIndex: string
}

const { RangePicker } = DatePicker

const ListLayout: React.FC<IListLayout> = ({
  total,
  title,
  source,
  columns,
  isSearch,
  isSearchNew,
  prefixElement = [],
  extendButton = [],
  placeholder
}) => {
  const { data, isError, isLoading } = source
  const { Search } = Input

  const { pathname, search } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()

  const [keyword, setKeyword] = useState('')
  const [section, setSection] = useState(1)
  const searchDebounce = useDebounce(keyword, 1000)

  useEffect(() => {
    history.push({
      pathname,
      search: qs.stringify(
        clearEmptyObject({
          ...pagination,
          page: '1',
          keyword: searchDebounce
        })
      )
    })
  }, [searchDebounce])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  if (isError) {
    return <div>Something wrong....</div>
  }

  const onAddPromo = () => {
    history.push('/promo/create')
  }

  return (
    <Wrapper>
      {!isSearchNew && (
        <div className="px-5 pt-5 flex flex-row justify-between items-center">
          <h2 className="font-bold">{title}</h2>
          <Space>
            {prefixElement?.length > 0 && prefixElement.map(element => <div>{element}</div>)}
            {isSearch && (
              <Search
                value={keyword}
                style={{ width: 400 }}
                onChange={handleSearch}
                placeholder={`Search ${title} here`}
              />
            )}
            {extendButton?.length > 0 && extendButton.map(element => <div>{element}</div>)}
          </Space>
        </div>
      )}
      {isSearchNew && (
        <div className="flex flex-col gap-6 px-5 pt-5">
          <div className="flex flex-row justify-between items-center border-b-2 pb-4">
            <h2 className="font-bold">{title}</h2>
            <div className="flex gap-2">
              <RangePicker className="!rounded-md" />
              <Button onClick={onAddPromo}>
                <span className="text-sm font-bold text-white">Export CSV</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <Input
                className="!rounded-md"
                value={keyword}
                style={{ width: 300 }}
                onChange={handleSearch}
                placeholder={placeholder}
                prefix={
                  <SearchOutlined className="site-form-item-icon" style={{ color: '#BDBDBD' }} />
                }
              />
            </div>
            <TabComponent section={section} setSection={setSection} />
          </div>
        </div>
      )}
      <Table columns={columns} total={total} data={data} loading={isLoading} className="my-6" />
    </Wrapper>
  )
}

export default ListLayout
