import React from 'react'
import { Table } from 'antd'

import Input from '@components/atoms/Input'

interface IListLayout {
  title: string
  data: object[]
  columns: IColumn[]
}

interface IColumn {
  key: string
  title: string
  dataIndex: string
}

const ListLayout: React.FC<IListLayout> = ({ title, columns, data }) => (
  <div>
    <h1>{title}</h1>
    <Input />
    <Table size="small" columns={columns} dataSource={data} className="my-6" />
  </div>
)

export default ListLayout
