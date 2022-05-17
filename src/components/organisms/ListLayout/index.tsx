import React from 'react'
import { Table, Input } from 'antd'

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

const ListLayout: React.FC<IListLayout> = ({ title, columns, data }) => {
  const { Search } = Input

  return (
    <div>
      <h1>{title}</h1>
      <Search placeholder={`Search any ${title} here`} onSearch={() => {}} style={{ width: 400 }} />
      <Table size="small" columns={columns} dataSource={data} className="my-6" />
    </div>
  )
}

export default ListLayout
