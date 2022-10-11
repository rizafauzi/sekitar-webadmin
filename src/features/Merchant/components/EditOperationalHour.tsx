/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { useState, ChangeEvent, useEffect } from 'react'
import { Modal, Input, Button } from 'antd'

import { toast } from 'react-toastify'
import { IOperationalHour } from '../Merchant.type'
import { putUpdateOperationalHour } from '../api'

interface IEditProduct {
  data: IOperationalHour[]
  merchantId: number
  refetch: () => void
}

const EditOperationalHour: React.FC<IEditProduct> = ({ data, merchantId, refetch }) => {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [payload, setPayload] = useState<IOperationalHour[]>([])

  const toggle = () => {
    setShowModal(!showModal)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await putUpdateOperationalHour(
        merchantId,
        payload.map(dt => ({
          day: Number(dt.day),
          open_time: dt.open_time,
          close_time: dt.close_time
        }))
      )

      if (response?.data?.status !== 0) {
        toast.error(response?.data?.message as string)
        toggle()
        return
      }
      refetch()
      toast.success('SUCCESS')
      toggle()
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (showModal) {
      setPayload(data)
    }
  }, [data, showModal])

  const handleChange = (
    index: number,
    key: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const temporary = {
      ...payload[index],
      [key]: event.target.value
    }

    setPayload(previous => previous.map((dt, index_) => (index_ !== index ? dt : temporary)))
  }

  return (
    <>
      <Button onClick={toggle}>Edit</Button>

      {showModal && (
        <Modal
          onCancel={toggle}
          onOk={handleSubmit}
          visible={showModal}
          title="Edit Operational Hour"
          okText={isLoading ? 'Loading...' : 'Edit'}
        >
          {payload?.map((dt, index) => (
            <div className="flex-row flex w-full mb-4">
              <div className="flex flex-col w-[12em]">
                <label>Day</label>
                <h3 className="font-bold mt-1">{dt.key}</h3>
              </div>
              <div className="flex flex-col w-full">
                <label>Open Time</label>
                <Input
                  value={dt.open_time}
                  placeholder="Input Open Time..."
                  onChange={event => handleChange(index, 'open_time', event)}
                />
              </div>
              <div className="w-[10px]" />
              <div className="flex flex-col w-full">
                <label>Close Time</label>
                <Input
                  value={dt.close_time}
                  placeholder="Input Close Time..."
                  onChange={event => handleChange(index, 'close_time', event)}
                />
              </div>
            </div>
          ))}
        </Modal>
      )}
    </>
  )
}

export default EditOperationalHour
