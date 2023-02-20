const columnBankAccount = [
  {
    width: '5em',
    title: 'No',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Merchant',
    dataIndex: 'merchant',
    className: 'max-w-20',
    key: 'merchant',
    render: (value: string) => <a href="/bank-account/1">{value}</a>
  },
  {
    title: 'Nama Rekening',
    dataIndex: 'account_name',
    key: 'account_name'
  },
  {
    title: 'No Rekening',
    dataIndex: 'account_number',
    key: 'account_number'
  },
  {
    title: 'Kode Bank',
    dataIndex: 'bank_code',
    key: 'bank_code'
  }
]

export default columnBankAccount
