/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { Table, Input, TableProps, TablePaginationConfig } from 'antd'
// import {  } from 'react-router-dom'

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

  const handleChange = (_pagination: TablePaginationConfig) => {
    console.info('_pagination:', _pagination)
    // const sort = sorter as SorterResult<any>
    // const selectedColumn = field?.find(dt => dt?.dataIndex === sort?.field)
    // const sortOrderParameter = selectedColumn?.sortOrderParam || 'sort_order'
    // const sortNameParameter = selectedColumn?.sortNameParam || 'sort_name'

    // const getOrder = () => {
    //   switch (sort.order) {
    //     case 'ascend':
    //       return 'asc'
    //     case 'descend':
    //       return 'desc'
    //     default:
    //       return ''
    //   }
    // }

    // const getSortName = () => {
    //   if (sort.columnKey === 'trans_amount') {
    //     return 'amount'
    //   }
    //   if (sort.order) {
    //     if (selectedColumn?.noSortName) {
    //       return ''
    //     }
    //     return sort.field as string
    //   }
    //   return ''
    // }

    // router.push({
    //   pathname,
    //   query: clearEmptyObject({
    //     ...query,
    //     page: query.page || '1',
    //     limit: query.limit || '50',
    //     [sortNameParameter]: getSortName(),
    //     [sortOrderParameter]: getOrder()
    //   })
    // })
  }

  const paginationConfig: TablePaginationConfig = {
    current: 1,
    total: 100,
    pageSize: 50
  }

  const tableProperties: TableProps<any> = {
    columns,
    size: 'small',
    bordered: true,
    loading: isLoading,
    // scroll: { y: '48vh' },
    dataSource: data,
    pagination: paginationConfig,
    /**
     * Callback executed when pagination, filters or sorter is changed
     */
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
