/* eslint-disable unicorn/consistent-function-scoping */
import { Card, Select } from 'antd'
import TextField from '@components/atoms/TextField'
import Input from '@components/atoms/Input'
import { ChangeEvent, useState } from 'react'
import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'

const BankAccountDetail = () => {
  const history = useHistory()
  const { Option } = Select
  const [form, setForm] = useState({
    name: '',
    numberAccount: '',
    bankName: ''
  })

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: event.target.value
    }))
  }

  const onSelectBankName = (value: string, key: string) => {
    console.info(key, value)
  }

  const handleSubmit = () => console.info('SUBMIT')

  return (
    <div>
      <Card title="Nama Merchant">
        <TextField label="Nama Rekening">
          <Input value={form.name} onChange={event => onChangeInput(event, 'name')} />
        </TextField>
        <TextField label="No Rekening">
          <Input
            value={form.numberAccount}
            onChange={event => onChangeInput(event, 'numberAccount')}
          />
        </TextField>
        <TextField label="Nama Bank">
          <Select
            className="w-full"
            optionFilterProp="children"
            value={form.bankName}
            placeholder="Pilih Nama Bank"
            onChange={value => onSelectBankName(value, 'bankName')}
          >
            <Option value="1">Name</Option>
          </Select>
        </TextField>
      </Card>
      <Card>
        <TextField label="">
          <div className="flex flex-row flex-start gap-4">
            <Button variant="secondary" onClick={() => history.push('/bank-account')}>
              Kembali
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Simpan
            </Button>
          </div>
        </TextField>
      </Card>
    </div>
  )
}

export default BankAccountDetail
