import CategoriesButton from '@features/Categories/components/Button'

const columnMerchant = [
  {
    width: '3em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: '',
    dataIndex: 'images',
    key: 'images',
    className: 'w-24',
    colSpan: 0,
    render: (props: string, index: number) => (
      <div className="w-max flex flex-row justify-center">
        <img className="w-20 h-20" src={props} alt={String(index)} />
      </div>
    )
  },
  {
    title: 'Category Name',
    dataIndex: 'name',
    colSpan: 2,
    align: 'left',
    className: 'max-w-20',
    key: 'name'
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
    render: (props: number) => <CategoriesButton id={props} />
  }
]

export default columnMerchant
