/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Card, Select } from 'antd'
import TextField from '@components/atoms/TextField'
import Input from '@components/atoms/Input'
import { ChangeEvent, useState } from 'react'
import Button from '@components/atoms/Button'
import { useHistory, useParams } from 'react-router-dom'
import {
  useFetchAllBank,
  useFetchDetailBankAccount,
  useUpdateBankAccount
} from '@features/BankAccount/hooks'
import { toast } from 'react-toastify'
import { DetailBankAccountResponse } from '@features/BankAccount/BankAccount.type'

const BankAccountDetail = () => {
  const history = useHistory()
  const { bankAccountId }: { bankAccountId: string } = useParams()
  const { Option } = Select
  const [form, setForm] = useState({
    bankOwner: '',
    bankNumber: '',
    bankCode: ''
  })
  const { data: optionsAllBank } = useFetchAllBank({ page: 1, limit: 100 })
  const { mutate: updateBankAccount } = useUpdateBankAccount()
  useFetchDetailBankAccount(Number(bankAccountId), {
    onSuccess: ({ data: { Data } }: DetailBankAccountResponse) => {
      setForm(prevState => ({
        ...prevState,
        bankOwner: Data.bank_owner,
        bankNumber: Data.bank_number,
        bankCode: Data.bank_code
      }))
    }
  })

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: event.target.value
    }))
  }

  const onSelectBankCode = (value: string) => {
    setForm(previousState => ({ ...previousState, bankCode: value }))
  }

  const handleSubmit = () => {
    updateBankAccount(
      {
        store_id: Number(bankAccountId),
        bank_code: form.bankCode,
        bank_owner: form.bankOwner,
        bank_number: form.bankNumber
      },
      {
        onSuccess: () => {
          history.push('/bank-account')
          toast.success('Edit Bank Account Success')
        }
      }
    )
  }

  return (
    <div>
      <Card title="Nama Merchant">
        <TextField label="Nama Rekening">
          <Input value={form.bankOwner} onChange={event => onChangeInput(event, 'bankOwner')} />
        </TextField>
        <TextField label="No Rekening">
          <Input value={form.bankNumber} onChange={event => onChangeInput(event, 'bankNumber')} />
        </TextField>
        <TextField label="Nama Bank">
          <Select
            className="w-full"
            optionFilterProp="children"
            value={form.bankCode}
            placeholder="Pilih Nama Bank"
            onChange={value => onSelectBankCode(value)}
          >
            {optionsAllBank?.map(item => (
              <Option value={item.code}>{item.name}</Option>
            ))}
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
