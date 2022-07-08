/* eslint-disable unicorn/prefer-spread */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable unicorn/consistent-function-scoping */

// import qs from 'query-string'
import qs from 'query-string'
import { toast } from 'react-toastify'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { DatePicker, DatePickerProps, Modal, Select, Space } from 'antd'
// import { toast } from 'react-toastify'

import { LoadingOutlined } from '@ant-design/icons'

import Button from '@components/atoms/Button'
import Flex from '@components/atoms/Flex'
import Input from '@components/atoms/Input'
import clearEmptyObject from '@utils/object-utils'
import { getExportCSV } from '../api'
// import clearEmptyObject from '@utils/object-utils'
// import { getExportCSV } from '../api'

interface IParams {
  p: any | null
  c: any | null
  end_date: any | null
  status: any | null
  start_date: any | null
}

const statusOption = [
  {
    key: 'created',
    label: 'Pesanan Baru'
  },
  {
    key: 'processed',
    label: 'Diproses'
  },
  {
    key: 'completed',
    label: 'Selesai'
  },
  {
    key: 'canceled',
    label: 'Dibatalkan'
  }
]

const defaultParams = {
  p: null,
  c: null,
  end_date: null,
  status: null,
  start_date: null
}

const ExportCsv: React.FC = () => {
  const { Option } = Select
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [params, setParams] = useState<IParams>(defaultParams)

  const toggle = () => {
    setIsLoading(false)
    setShowModal(!showModal)
  }

  useEffect(() => {
    setParams(defaultParams)
  }, [showModal])

  const handleChange = (key: string, event: ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      [key]: Number(event.target.value)
    })
  }

  const handleExportCSV = async () => {
    try {
      console.info('params;', clearEmptyObject(params))
      const payload = qs.stringify(clearEmptyObject(params))
      const response: any = await getExportCSV(payload)
      if (response) {
        console.info('response:', response?.data)
        // const sanitizedBody = response?.data
        //   .replace('date,hour,cart_id,order_state,courier_id,courier_name,courier_area', '')
        //   .split(',')

        // const finalBody = []
        // let array: any[] = []
        // sanitizedBody.forEach((dt: any, index: number) => {
        //   if (index % 7 === 0) {
        //     array = []
        //   }
        // })
        // const header = [
        //   'date',
        //   'hour',
        //   'cart_id',
        //   'order_state',
        //   'courier_id',
        //   'courier_name',
        //   'courier_area'
        // ]
      }
    } catch {
      console.error('Something wrong')
      toast.error('Something wrong')
    }
    setIsLoading(false)
    setParams(defaultParams)
    toggle()
  }

  const onStartDateChange: DatePickerProps['onChange'] = (_, dateString) => {
    setParams({
      ...params,
      start_date: dateString
    })
  }

  const onEndDateChange: DatePickerProps['onChange'] = (_, dateString) => {
    setParams({
      ...params,
      end_date: dateString
    })
  }

  const onStatusChange = (value: any) => {
    setParams({
      ...params,
      status: value
    })
  }

  return (
    <div>
      <Button onClick={toggle}>Export to CSV</Button>
      <Modal
        centered
        maskClosable
        closable={false}
        onCancel={toggle}
        title="Export CSV"
        visible={showModal}
        footer={
          <Flex justifyContent="center" alignItems="center">
            <Space>
              <Button onClick={toggle} className="w-32" variant="secondary">
                Batal
              </Button>
              <Button onClick={handleExportCSV} className="w-32">
                {isLoading ? <LoadingOutlined /> : 'Export'}
              </Button>
            </Space>
          </Flex>
        }
      >
        <h4 className="font-bold">Filter by:</h4>
        <Space direction="vertical" className="w-full">
          <div>
            <h3>Page</h3>
            <Input placeholder="Input Page" onChange={value => handleChange('p', value)} />
          </div>
          <div>
            <h3>Limit</h3>
            <Input placeholder="Input Limit" onChange={value => handleChange('c', value)} />
          </div>
          <div>
            <h3>Start Date</h3>
            <DatePicker className="w-full" onChange={onStartDateChange} />
          </div>
          <div>
            <h3>End Date</h3>
            <DatePicker className="w-full" onChange={onEndDateChange} />
          </div>
          <div>
            <h3>Status</h3>
            <Select
              showSearch
              className="w-full"
              placeholder="Select Status"
              optionFilterProp="children"
              onChange={onStatusChange}
            >
              {statusOption.map(dt => (
                <Option value={dt.key}>{dt.label}</Option>
              ))}
            </Select>
          </div>
        </Space>
      </Modal>
    </div>
  )
}

export default ExportCsv
