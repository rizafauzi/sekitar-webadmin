/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import CategoriesButton from '@features/Categories/components/Button'
import { ICategoryProduct } from '@features/Categories/Categories.type'

const columnMerchant = [
  {
    width: '3em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Subcategory Name',
    dataIndex: 'name',
    align: 'left',
    className: 'max-w-20',
    key: 'name',
    render: (value: string, data: ICategoryProduct) => (
      <div className="w-max flex flex-row justify-center items-center gap-4">
        <img className="w-16 h-16" src={data.images} alt={value} />
        <span>{value}</span>
      </div>
    )
  },
  {
    title: 'Description',
    dataIndex: 'description',
    align: 'left',
    key: 'description'
  },
  {
    width: '18em',
    key: 'priority',
    title: 'Priority',
    dataIndex: 'priority'
  },
  {
    width: '18em',
    key: 'action',
    title: 'Action',
    dataIndex: 'id',
    align: 'center',
    render: (idCategory: number) => <CategoriesButton id={idCategory} />
  }
]

export default columnMerchant
