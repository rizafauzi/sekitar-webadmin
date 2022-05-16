import Input from '@components/atoms/Input'
import Layout from '@components/templates/Layout'
import React from 'react'
import { Table } from 'antd'
import { columnMerchant, dummyMerchant } from './enum'

const Merchant: React.FC = () => (
  <Layout>
    <h1>Merchant</h1>
    <Input />
    <Table size="small" columns={columnMerchant} dataSource={dummyMerchant} className="my-6" />
  </Layout>
)

export default Merchant
