/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from 'antd'
import { formatDate } from '@utils/format-date'
import { patchWithdrawStatus } from '@features/Withdraw/api'
import { toast } from 'react-toastify'
import { useFetchWithdrawDetail } from '@features/Withdraw/hooks'
import { useParams } from 'react-router-dom'
import Button from '@components/atoms/Button'
import React from 'react'
import TextField from '@components/atoms/TextField'

const DetailWithdrawPage: React.FC = () => {
  const { id }: { id: string } = useParams()
  const { data } = useFetchWithdrawDetail({ id: Number(id) })
  const {
    amount,
    bank_code,
    bank_number,
    created_at,
    merchant_name,
    merchant_phone,
    status,
    updated_at
  } = data || {}

  const onAcceptReject = async (value: 2 | 3) => {
    try {
      const response = await patchWithdrawStatus({
        id: Number(id),
        status: value
      })
      if (!response) return
      if (value === 2) toast.success('Dana Berhasil diteruskan')
      if (value === 3) toast.success('Tolak Penarikan Berhasil')
    } catch {
      console.error('Something wrong, try again later')
      toast.error('Oops, terjadi kesalahan sistem. Coba lagi nanti.')
    }
  }

  return (
    <div>
      <Card title="Detail Withdraw">
        <TextField label="Status Withdraw Request">{status}</TextField>
        <TextField label="Merchant name">{merchant_name}</TextField>
        <TextField label="Phone Number">{merchant_phone}</TextField>
        <TextField label="Nama Bank">{bank_code}</TextField>
        <TextField label="Nomor Rekening">{bank_number}</TextField>
        <TextField label="Nominal Withdraw">{amount}</TextField>
        <TextField label="Tanggal Request Withdraw">
          {created_at ? formatDate(created_at as unknown as Date) : ''}
        </TextField>
        <TextField label="Tanggal dana diteruskan/dibatalkan">
          {updated_at ? formatDate(updated_at as unknown as Date) : ''}
        </TextField>
      </Card>

      <Card>
        <div className="flex flex-row flex-start gap-4">
          <Button variant="secondary" onClick={() => onAcceptReject(3)}>
            Tolak Penarikan
          </Button>
          <Button variant="primary" onClick={() => onAcceptReject(2)}>
            Dana Diteruskan
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default DetailWithdrawPage
