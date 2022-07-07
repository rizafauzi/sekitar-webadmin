import CategoriesButton from '@features/Categories/components/Button'

const columnMerchant = [
  {
    width: '5em',
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
    title: 'Subcategory Name',
    dataIndex: 'name',
    colSpan: 2,
    align: 'left',
    className: 'max-w-20',
    key: 'name'
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
    render: (id: number) => <CategoriesButton id={id} />
  }
]

export default columnMerchant
