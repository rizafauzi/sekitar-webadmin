/* eslint-disable react/no-danger */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import DropdownLearning from '@features/Learning/components/DropdownLearning'
import { ILearningList } from '@features/Learning/Learning.type'
import { formatDate } from '@utils/format-date'

const ListLearningColumn = [
  {
    width: '4rem',
    title: 'NO.',
    dataIndex: 'index',
    key: 'index'
  },
  {
    width: '12rem',
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    width: '8rem',
    title: 'Category',
    dataIndex: 'category',
    key: 'category'
  },
  {
    width: '10rem',
    title: 'Active Date',
    dataIndex: 'active_date',
    key: 'active_date',
    render: (_: null, data: ILearningList) => (
      <span>{data.active_date ? formatDate(data.active_date) : ''}</span>
    )
  },
  {
    width: '10rem',
    title: 'Deactive Date',
    dataIndex: 'deactivate_date',
    key: 'deactivate_date',
    render: (_: null, data: ILearningList) => (
      <span>{data.deactivate_date ? formatDate(data.deactivate_date) : ''}</span>
    )
  },
  {
    width: '8rem',
    title: 'ACTIONS',
    dataIndex: 'id',
    key: 'action',
    align: 'center',
    render: (_: null, data: ILearningList) => <DropdownLearning id={data.id || 0} />
  }
]

export default ListLearningColumn
