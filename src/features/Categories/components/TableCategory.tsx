import React from 'react'
import { Table } from 'antd'

interface ITableCategory {
  data: object[]
  columns: IColumn[]
}

interface IColumn {
  key: string
  title: string
  dataIndex: string
}

const TableCategory: React.FC<ITableCategory> = ({ columns, data }) => (
  <div>
    <Table size="small" columns={columns} dataSource={data} className="my-6" />
  </div>
)

export default TableCategory
