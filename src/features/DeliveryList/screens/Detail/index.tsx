/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import TextField from '@components/atoms/TextField'
import { options } from '@constants/options'
import { useFetchOrderDetail } from '@features/OrderList/hooks'
import { Card, Table } from 'antd'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { toCurrency } from '@utils/to-currency'
import Button from '@components/atoms/Button'
import DropwdownStatus from '@features/DeliveryList/components/DropdownStatus'
import columnProductOrderList from './enum'

const OrderListDetailPage = () => {
  const { pathname } = useLocation()
  const cartId = pathname.split('/').at(-1)
  const { data, isLoading } = useFetchOrderDetail({ cartId: cartId || '' })
  const { cart, shipping, voucher } = data?.data || {}

  if (isLoading) return <div>Loading....</div>
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <h2>Detail Pesanan</h2>
        <div className="flex flex-row items-center gap-3">
          <DropwdownStatus deliveryId={Number(cartId)} />
          <Button variant="primary" onClick={() => window.open(cart.invoice_file, '_blank')}>
            Lihat Invoice
          </Button>
        </div>
      </div>
      <Card title="Data Umum">
        <TextField label="ID Pesanan">{cart.cart_id}</TextField>
        <TextField label="Date">
          {moment(cart?.created_at).format('DD MMM YYYY, HH:mm')} WIB
        </TextField>
        <TextField label="Status Pesanan">
          {options.ORDER_STATE_OPTIONS.find(item => item.value === cart?.order_state)?.label}
        </TextField>
        <TextField label="Catatan Pesanan">{cart.order_note}</TextField>
      </Card>

      <Card title="Data Pembeli">
        <TextField label="Nama Customer">{cart?.buyer_name}</TextField>
        <TextField label="Nomor Telfon Customer">{cart?.buyer_phone}</TextField>
        <TextField label="Alamat Customer">{cart?.buyer_address}</TextField>
      </Card>

      <Card title="Daftar Produk">
        <Table
          columns={columnProductOrderList}
          loading={isLoading}
          pagination={false}
          className="min-h-0"
          dataSource={cart?.products}
        />
      </Card>

      <Card title="Detail Pengiriman">
        <TextField label="Metode Pengiriman">{cart?.delivery_name}</TextField>
        <TextField label="Biaya Pengiriman">{toCurrency(cart?.delivery_fee || 0)}</TextField>
        <TextField label="Asuransi Pengiriman">{toCurrency(shipping?.assurance || 0)}</TextField>
      </Card>

      <Card title="Detail Pembayaran">
        <TextField label="Metode Pembayaran">{cart?.payment_method}</TextField>
        <TextField label="Status">{cart?.buyer_phone}</TextField>
        <TextField label="Subtotal Pesanan">{toCurrency(cart.total_amount || 0)}</TextField>
        <TextField label="Subtotal Pengiriman">
          {toCurrency((cart.delivery_fee || 0) - (voucher.voucher_amount || 0))}
        </TextField>
      </Card>
    </div>
  )
}

export default OrderListDetailPage
