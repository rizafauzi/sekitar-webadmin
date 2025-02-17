/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ChangeEvent, useEffect, useState } from 'react'
import qs from 'query-string'
import { DatePicker, Input, Space } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import useDebounce from '@hooks/useDebounce'
import clearEmptyObject from '@utils/object-utils'
import Table from '@components/atoms/Table'
import { SearchOutlined } from '@ant-design/icons'
import { Wrapper } from './ListLayout.style'
import TabComponent from './Tab.component'

interface IListLayout {
  total?: any
  isSearch?: boolean
  isSearchNew?: boolean
  title: string
  titleSearch?: string
  extendButton?: React.ReactNode[]
  prefixElement?: React.ReactNode[]
  source: {
    data: any
    isError: boolean
    isLoading: boolean
  }
  columns: IColumn[]
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
  titleSearch,
  source,
  columns,
  isSearch,
  isSearchNew,
  prefixElement = [],
  extendButton = []
}) => {
  const { data, isError, isLoading } = source
  const { Search } = Input

  const { pathname, search } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()

  const [keyword, setKeyword] = useState(pagination.keyword ? String(pagination.keyword) : '')
  const [section, setSection] = useState(pagination.status ? Number(pagination.status) : 1)
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

  const handleChangeSection = (sectionId: number) => {
    setSection(sectionId)
    history.push({
      pathname,
      search: qs.stringify(
        clearEmptyObject({
          ...pagination,
          page: '1',
          status: sectionId
        })
      )
    })
  }

  if (isError) {
    return <div>Something wrong....</div>
  }

  const handleChangeDate = (dateObject: any): void => {
    if (dateObject === null) {
      history.push({
        pathname,
        search: qs.stringify(
          clearEmptyObject({
            page: '1',
            status: section,
            keyword
          })
        )
      })
    } else {
      const start = dateObject[0].format('YYYY-MM-DD')
      const end = dateObject[1].format('YYYY-MM-DD')
      history.push({
        pathname,
        search: qs.stringify(
          clearEmptyObject({
            page: '1',
            status: section,
            date: `${start},${end}`,
            keyword
          })
        )
      })
    }
  }

  return (
    <Wrapper>
      {isSearchNew ? (
        <div className="flex flex-col gap-6 px-5 pt-5">
          <div className="flex flex-row justify-between items-center border-b-2 pb-4">
            <h2 className="font-bold">{title}</h2>
            <div className="flex gap-2">
              <RangePicker className="!rounded-md" onChange={handleChangeDate} />
              {/* <Button onClick={onAddPromo}>
                <span className="text-sm font-bold text-white">Export CSV</span>
              </Button> */}
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <Input
                className="!rounded-md"
                value={keyword}
                style={{ width: 300 }}
                onChange={handleSearch}
                placeholder={titleSearch ?? `Search ${title} here`}
                prefix={
                  <SearchOutlined className="site-form-item-icon" style={{ color: '#BDBDBD' }} />
                }
              />
            </div>
            <TabComponent section={section} setSection={handleChangeSection} />
          </div>
        </div>
      ) : (
        <div className="px-5 pt-5 flex flex-row justify-between items-center">
          <h2 className="font-bold">{title}</h2>
          <Space>
            {prefixElement?.length > 0 && prefixElement.map(element => <div>{element}</div>)}
            {isSearch && (
              <Search
                value={keyword}
                style={{ width: 400 }}
                onChange={handleSearch}
                placeholder={titleSearch ?? `Search ${title} here`}
              />
            )}
            {extendButton?.length > 0 && extendButton.map(element => <div>{element}</div>)}
          </Space>
        </div>
      )}
      <Table columns={columns} total={total} data={data} loading={isLoading} className="my-6" />
    </Wrapper>
  )
}

export default ListLayout
