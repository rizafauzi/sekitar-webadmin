/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ChangeEvent, useEffect, useState } from 'react'
import qs from 'query-string'
import { Input, Space } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import useDebounce from '@hooks/useDebounce'
import clearEmptyObject from '@utils/object-utils'
import Table from '@components/atoms/Table'
import { Wrapper } from './ListLayout.style'

interface IListLayout {
  total?: any
  isSearch?: boolean
  title: string
  extendButton?: React.ReactNode[]
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

const ListLayout: React.FC<IListLayout> = ({
  total,
  title,
  source,
  columns,
  isSearch,
  extendButton = []
}) => {
  const { data, isError, isLoading } = source
  const { Search } = Input

  const { pathname, search } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()

  const [keyword, setKeyword] = useState('')
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

  return (
    <Wrapper>
      <div className="px-5 pt-5 flex flex-row justify-between items-center">
        <h2 className="font-bold">{title}</h2>
        <Space>
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
      <Table columns={columns} total={total} data={data} loading={isLoading} className="my-6" />
    </Wrapper>
  )
}

export default ListLayout
