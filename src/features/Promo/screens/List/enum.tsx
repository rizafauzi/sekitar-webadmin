/* eslint-disable react/no-danger */
/* eslint-disable react/self-closing-comp */

import DropdownPromo from '@features/Promo/components/DropdownPromo'
import { IPromoList } from '@features/Promo/Promo.type'

const ListPromoColumn = [
  {
    width: '4rem',
    title: 'NO.',
    dataIndex: 'index',
    key: 'index'
  },
  {
    width: '9rem',
    title: 'MERCHANT',
    dataIndex: 'merchant',
    key: 'merchant'
  },
  {
    width: '9rem',
    title: 'TITLE',
    dataIndex: 'title',
    key: 'title'
  },
  {
    width: '26rem',
    title: 'DESCRIPTION',
    dataIndex: 'description',
    key: 'description',
    render: (_: null, data: IPromoList) => (
      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
    )
  },
  {
    width: '8rem',
    title: 'ACTIONS',
    dataIndex: 'id',
    key: 'action',
    align: 'center',
    render: (_: null, data: IPromoList) => <DropdownPromo item={data} />
  }
]

export default ListPromoColumn
