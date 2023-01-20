/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React, { ChangeEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import moment, { Moment } from 'moment'
import { Card, DatePicker, Select } from 'antd'
import { useFetchCategoryLearning } from '@features/Learning/hooks'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import TextField from '@components/molecules/TextField'
import UploadFile from '@features/Promo/components/UploadFile'
import { createLearning } from '@features/Learning/api'
import { ICreateLearningPayload } from '@features/Learning/Learning.type'

const CreateLearningPage: React.FC = () => {
  const history = useHistory()
  const [form, setForm] = useState<ICreateLearningPayload>({
    title: '',
    category_id: undefined,
    link: '',
    image: {} as File,
    active_date: '',
    deactive_date: ''
  })
  const { Option } = Select

  const { optionsCategoryLearning } = useFetchCategoryLearning()

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: event.target.value
    }))
  }

  const onSelectInput = (value: number, key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: value
    }))
  }

  const onInputFile = (file: File, key: string) => {
    console.log('file', file)
    setForm(previousState => ({
      ...previousState,
      [key]: file
    }))
  }

  const onChangeDate = (key: 'active_date' | 'deactive_date', date: string) => {
    setForm(previousState => ({ ...previousState, [key]: new Date(date) }))
  }

  const disabledDate = (current: Moment, key: 'min' | 'max') => {
    if (key === 'min') {
      return current && current < moment(form.active_date).endOf('day')
    }
    return current && current > moment(form.deactive_date).endOf('day')
  }

  const handleSubmit = () => {
    console.log('SUBMIT', form)
    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('category_id', String(form.category_id))
    formData.append('link', String(form.link))
    formData.append('image', String(form.image))
    formData.append('active_date', form.active_date)
    formData.append('deactive_date', form.deactive_date)
    createLearning(formData)
  }

  return (
    <div>
      <Card title="Add Learning">
        <TextField label="Title">
          <Input
            value={form.title}
            placeholder="Title"
            onChange={event => onChangeInput(event, 'title')}
          />
        </TextField>
        <TextField label="Hyperlink">
          <Input
            value={form.link}
            placeholder="Hyperlink"
            onChange={event => onChangeInput(event, 'link')}
          />
        </TextField>
        <TextField label="Image">
          <UploadFile
            id="image-category"
            value={form.image}
            onInput={file => onInputFile(file, 'image')}
            onRemove={() => onInputFile({} as File, 'image')}
          />
        </TextField>
        <TextField label="Category">
          <Select
            className="w-full"
            optionFilterProp="children"
            onChange={value => onSelectInput(value, 'category_id')}
            value={form.category_id}
            placeholder="Select Category"
          >
            {optionsCategoryLearning?.map(item => (
              <Option value={item.value}>{item.label}</Option>
            ))}
          </Select>
        </TextField>
        <TextField label="Active Date">
          <DatePicker
            value={form.active_date ? moment(form.active_date) : undefined}
            style={{ width: '100%' }}
            disabledDate={date => disabledDate(date, 'max')}
            onChange={(_, date) => onChangeDate('active_date', date)}
          />
        </TextField>
        <TextField label="Deactive Date">
          <DatePicker
            value={form.deactive_date ? moment(form.deactive_date) : undefined}
            style={{ width: '100%' }}
            disabledDate={date => disabledDate(date, 'min')}
            onChange={(_, date) => onChangeDate('deactive_date', date)}
          />
        </TextField>
      </Card>

      <Card>
        <TextField label="">
          <div className="flex flex-row flex-start gap-4">
            <Button variant="secondary" onClick={() => history.push('/learning')}>
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

export default CreateLearningPage
