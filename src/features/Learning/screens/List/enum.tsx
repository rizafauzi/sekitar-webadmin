/* eslint-disable react/no-danger */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import DropdownLearning from '@features/Learning/components/DropdownLearning'
import { ILearningList } from '@features/Learning/Learning.type'

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
    dataIndex: 'activeDate',
    key: 'activeDate',
    render: (_: null, data: ILearningList) => (
      <div dangerouslySetInnerHTML={{ __html: data.title || '' }}></div>
    )
  },
  {
    width: '10rem',
    title: 'Deactive Date',
    dataIndex: 'deactiveDate',
    key: 'deactiveDate',
    render: (_: null, data: ILearningList) => (
      <div dangerouslySetInnerHTML={{ __html: data.title || '' }}></div>
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
