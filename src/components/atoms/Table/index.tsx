/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import qs from 'query-string'
import { isEmpty } from 'lodash'
import { Table as AntdTable, TableProps, TablePaginationConfig } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import { TableWrapper } from './Table.style'

interface IListLayout {
  data: any
  total?: number
  loading: boolean
  columns: IColumn[]
  className?: string
}

interface IColumn {
  key: string
  title: string
  dataIndex: string
}

const Table: React.FC<IListLayout> = ({ columns, data, loading, total, ...rest }) => {
  const { pathname, search } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()

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

  const paginationConfig: TablePaginationConfig = {
    total,
    current: !isEmpty(pagination?.page) ? Number(pagination?.page) : 1,
    pageSize: !isEmpty(pagination?.limit) ? Number(pagination?.limit) : 20
  }

  const tableProperties: TableProps<any> = {
    columns,
    loading,
    size: 'small',
    bordered: true,
    dataSource: data,
    onChange: handleChange,
    pagination: paginationConfig,
    scroll: { x: '100%', y: 350 },
    rowKey: 'id'
  }

  return (
    <TableWrapper>
      <AntdTable {...tableProperties} {...rest} />
    </TableWrapper>
  )
}

export default Table
