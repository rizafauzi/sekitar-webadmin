/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, DatePicker } from 'antd'
import moment, { Moment } from 'moment'

import { useFetchMerchantList } from '@features/Merchant/hooks'
import { useFetchPromoProducts } from '@features/Promo/hooks'
import { IValidations, Validations } from '@utils/validation'
import { stripTags } from '@utils/strip-tags'
import useDebounce from '@hooks/useDebounce'

import { postPromoProduct } from '@features/Promo/api'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import MultiSelect from '@components/atoms/MultiSelect'
import TextField from '@components/atoms/TextField'
import TextEditor from '@components/atoms/TextEditor'
import UploadFile from '../../components/UploadFile'

const CreatePromoPage: React.FC = () => {
  const history = useHistory()
  const [keyword, setKeyword] = useState({
    merchant: '',
    productList: ''
  })
  const [form, setForm] = useState({
    merchant: [],
    title: '',
    description: '',
    productList: [],
    bannerEntryPoint: {} as File,
    headerBanner: {} as File,
    wordingCta: '',
    customUrlCta: '',
    activePromo: '',
    expiredPromo: ''
  })
  const [validate, setValidate] = useState<IValidations>({})
  const rules = {
    merchant: {
      minLength: 1
    },
    title: {
      minLength: 1
    },
    description: {
      requiredIf: stripTags(form.description) === ''
    }
  }
  const searchMerchant = useDebounce(keyword.merchant, 1000)
  const searchProducts = useDebounce(keyword.productList, 1000)
  const { optionsMerchant, isLoading } = useFetchMerchantList({
    page: 1,
    limit: 99,
    keyword: String(searchMerchant || undefined)
  })
  const { optionsProduct } = useFetchPromoProducts({
    page: 1,
    limit: 99,
    keyword: String(searchProducts || undefined),
    storeIds: form.merchant
  })

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: event.target.value
    }))
  }

  const onSelectInput = (value: string[], key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: value
    }))
  }

  const onSearchMerchant = (value: string, key: string) => {
    setKeyword(previousState => ({
      ...previousState,
      [key]: value
    }))
  }

  const onInputFile = (file: File, key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: file
    }))
  }

  const onChangeDescription = (value: string, key: string) => {
    setForm(previousState => ({ ...previousState, [key]: value }))
  }

  const onChangeDate = (key: 'activePromo' | 'expiredPromo', date: string) => {
    setForm(previousState => ({ ...previousState, [key]: new Date(date) }))
  }

  const getStringDate = (date: string) => moment(date).format('YYYY-MM-DD HH:mm:ss')

  const handleBack = () => history.push('/promo')

  const disabledDate = (current: Moment, key: 'min' | 'max') => {
    if (key === 'min') {
      return current && current < moment(form.activePromo).endOf('day')
    }
    return current && current > moment(form.expiredPromo).endOf('day')
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('merchant', String(form.merchant))
    formData.append('title', form.title)
    formData.append('description', form.description)
    formData.append('product_list', String(form.productList))
    formData.append('banner_entry_point', form.bannerEntryPoint as string | Blob)
    formData.append('header_banner', form.headerBanner as string | Blob)
    formData.append('wording_cta', form.wordingCta)
    formData.append('custom_url_cta', form.customUrlCta)
    // Date Promo
    formData.append('active_date', getStringDate(form.activePromo))
    formData.append('expired_date', getStringDate(form.expiredPromo))

    postPromoProduct(formData)
      .then(() => {
        toast.success('Success Add Promo')
        history.push('/promo')
      })
      .catch(() => {
        toast.error('Failed Add Promo')
      })
  }

  useEffect(() => {
    const validations = Validations(form, rules)
    setValidate(validations)
  }, [form])

  return (
    <div>
      <Card title="Tambah Product Promo">
        <TextField label="MERCHANT">
          <MultiSelect
            loading={isLoading}
            value={form.merchant}
            placeholder="Pilih Merchant"
            options={optionsMerchant}
            onSelect={value => onSelectInput(value, 'merchant')}
            onSearch={value => onSearchMerchant(value, 'merchant')}
          />
        </TextField>
        <TextField label="TITLE">
          <Input value={form.title} onChange={event => onChangeInput(event, 'title')} />
        </TextField>
        <TextField label="DESCRIPTION">
          <TextEditor onChange={value => onChangeDescription(value, 'description')} />
        </TextField>
        <TextField label="PRODUCT LIST">
          <MultiSelect
            loading={isLoading}
            value={form.productList}
            placeholder="Pilih Product"
            options={optionsProduct}
            onSelect={value => onSelectInput(value, 'productList')}
            onSearch={value => onSearchMerchant(value, 'productList')}
          />
        </TextField>
        <TextField label="BANNER ENTRY POINT">
          <UploadFile
            id="banner-entry-point"
            value={form.bannerEntryPoint}
            onInput={file => onInputFile(file, 'bannerEntryPoint')}
            onRemove={() => onInputFile({} as File, 'bannerEntryPoint')}
          />
          <span className="text-grey70">Recommended size 411 px x 167 px</span>
        </TextField>
        <TextField label="HEADER BANNER">
          <UploadFile
            id="header-banner"
            value={form.headerBanner}
            onInput={file => onInputFile(file, 'headerBanner')}
            onRemove={() => onInputFile({} as File, 'headerBanner')}
          />
          <span className="text-grey70">Recommended size 411 px x 274 px</span>
        </TextField>
        <TextField label="WORDING CTA">
          <Input value={form.wordingCta} onChange={event => onChangeInput(event, 'wordingCta')} />
        </TextField>
        <TextField label="CUSTOM URL CTA">
          <Input
            value={form.customUrlCta}
            onChange={event => onChangeInput(event, 'customUrlCta')}
          />
        </TextField>
        <TextField label="Start Promo">
          <DatePicker
            value={form.activePromo ? moment(form.activePromo) : undefined}
            style={{ width: '100%' }}
            disabledDate={date => disabledDate(date, 'max')}
            onChange={(_, date) => onChangeDate('activePromo', date)}
          />
        </TextField>
        <TextField label="Expired Promo">
          <DatePicker
            value={form.expiredPromo ? moment(form.expiredPromo) : undefined}
            style={{ width: '100%' }}
            disabledDate={date => disabledDate(date, 'min')}
            onChange={(_, date) => onChangeDate('expiredPromo', date)}
          />
        </TextField>
      </Card>
      <Card>
        <TextField label="">
          <div className="flex flex-row flex-start gap-4">
            <Button variant="secondary" onClick={handleBack}>
              Kembali
            </Button>
            <Button
              variant={validate.$invalid ? 'destructive-outlined' : 'primary'}
              disabled={validate.$invalid}
              onClick={handleSubmit}
            >
              Simpan
            </Button>
          </div>
        </TextField>
      </Card>
    </div>
  )
}

export default CreatePromoPage
