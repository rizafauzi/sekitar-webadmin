const columnBankAccount = [
  {
    width: '5em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Merchant',
    dataIndex: 'name',
    className: 'max-w-20',
    key: 'name',
    render: (value: string) => <a href="/bank-account/1">{value}</a>
  },
  {
    title: 'Nama Rekening',
    dataIndex: 'bank_owner',
    key: 'bank_owner'
  },
  {
    title: 'No Rekening',
    dataIndex: 'bank_number',
    key: 'bank_number'
  },
  {
    title: 'Kode Bank',
    dataIndex: 'bank_code',
    key: 'bank_code'
  }
]

export default columnBankAccount
