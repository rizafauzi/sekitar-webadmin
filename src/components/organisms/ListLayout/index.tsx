/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ChangeEvent, useEffect, useState } from 'react'
import qs from 'query-string'
import { isEmpty } from 'lodash'
import { Table, Input, TableProps, TablePaginationConfig } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import useDebounce from '@hooks/useDebounce'
import clearEmptyObject from '@utils/object-utils'

interface IListLayout {
  isSearch?: boolean
  title: string
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

const ListLayout: React.FC<IListLayout> = ({ isSearch, title, columns, source }) => {
  const { data, isError, isLoading } = source
  const { Search } = Input

  const { pathname, search } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()

  const [keyword, setKeyword] = useState('')
  const searchDebounce = useDebounce(keyword, 1000)

  const handleChange = (_pagination: TablePaginationConfig) => {
    const { current, pageSize } = _pagination
    history.push({
      pathname,
      search: qs.stringify({
        ...pagination,
        page: current,
        limit: pageSize
      })
    })
  }

  useEffect(() => {
    history.push({
      pathname,
      search: qs.stringify(
        clearEmptyObject({
          ...pagination,
          keyword: searchDebounce
        })
      )
    })
  }, [searchDebounce])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const paginationConfig: TablePaginationConfig = {
    total: 100,
    current: !isEmpty(pagination) ? Number(pagination?.page) : 1,
    pageSize: !isEmpty(pagination) ? Number(pagination?.limit) : 20
  }

  const tableProperties: TableProps<any> = {
    columns,
    size: 'small',
    bordered: true,
    loading: isLoading,
    dataSource: data,
    pagination: paginationConfig,
    onChange: handleChange
  }

  if (isError) {
    return <div>Something wrong....</div>
  }

  return (
    <div>
      <h1>{title}</h1>
      {isSearch && (
        <Search
          value={keyword}
          placeholder={`Search ${title} here`}
          onChange={handleSearch}
          style={{ width: 400 }}
        />
      )}
      <Table {...tableProperties} className="my-6" />
    </div>
  )
}

export default ListLayout
