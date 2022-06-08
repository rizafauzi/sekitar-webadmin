/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import qs from 'query-string'
import { isEmpty } from 'lodash'
import { Table, Input, TableProps, TablePaginationConfig } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'

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
  const { pathname, search } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()
  const { data, isError, isLoading } = source
  const { Search } = Input

  // console.info('location:', qs.parse(location.search))

  const handleChange = (_pagination: TablePaginationConfig) => {
    console.info('_pagination:', _pagination)
    const { current, pageSize } = _pagination

    history.push({
      pathname,
      search: qs.stringify({
        page: current,
        limit: pageSize
      })
    })
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
        <Search placeholder={`Search ${title} here`} onSearch={() => {}} style={{ width: 400 }} />
      )}
      <Table {...tableProperties} className="my-6" />
    </div>
  )
}

export default ListLayout
