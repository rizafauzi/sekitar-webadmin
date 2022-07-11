/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prefer-const */
/* eslint-disable no-continue */
/* eslint-disable unicorn/no-for-loop */
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
import isEmpty from 'lodash/isEmpty'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { DatePicker, DatePickerProps, Modal, Select, Space } from 'antd'
import { CSVLink, CSVDownload } from 'react-csv'
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
  const [downloadData, setDownloadData] = useState(null)
  const [error, setError] = useState('')

  const toggle = () => {
    setIsLoading(false)
    setShowModal(!showModal)
  }

  useEffect(() => {
    if (showModal && downloadData) {
      setDownloadData(null)
    }
  }, [showModal])

  useEffect(() => {
    setParams(defaultParams)
  }, [showModal])

  const handleChange = (key: string, event: ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      [key]: Number(event.target.value)
    })
  }

  const validate = () => {
    const { c, end_date, p, start_date, status } = params
    if (!p) {
      setError('Page is required')
      return false
    }
    if (!c) {
      setError('Limit is required')
      return false
    }
    if (!start_date) {
      setError('Start Date is required')
      return false
    }
    if (!end_date) {
      setError('End Date is required')
      return false
    }
    if (!status) {
      setError('Status is required')
      return false
    }
    return true
  }

  const handleExportCSV = async () => {
    if (validate()) {
      try {
        const payload = qs.stringify(clearEmptyObject(params))
        const response: any = await getExportCSV(payload)
        if (response) {
          const header = [
            'date',
            'hour',
            'cart_id',
            'order_state',
            'courier_id',
            'courier_name',
            'courier_area'
          ]
          const sanitizedBody = response?.data
            .replace('date,hour,cart_id,order_state,courier_id,courier_name,courier_area', '')
            .replaceAll('\n', '')
            .split(',')
          let finalPayload = [header]
          let temp = []
          for (let i = 1; i < sanitizedBody.length; i++) {
            temp.push(sanitizedBody[i - 1])
            if (i % 6 === 0) {
              finalPayload.push(temp)
              temp = []
            }
          }

          setDownloadData(finalPayload as any)
        }
      } catch {
        console.error('Something wrong')
        toast.error('Something wrong')
      }
      setIsLoading(false)
      setParams(defaultParams)
      toggle()
    }
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
      {downloadData && (
        <CSVDownload
          target="_blank"
          data={downloadData}
          filename={`export_merchant_${params.start_date}_${params.end_date}`}
        />
      )}
      {showModal && (
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
                <Button className="w-32" onClick={handleExportCSV}>
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
            {error && <h3 className="text-red-600 mt-6">{error}</h3>}
          </Space>
        </Modal>
      )}
    </div>
  )
}

export default ExportCsv
