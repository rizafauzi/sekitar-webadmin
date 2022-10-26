/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/consistent-function-scoping */

import React, { ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Card } from 'antd'
import { toast } from 'react-toastify'
import type { RcFile } from 'antd/es/upload/interface'

import { useFetchMerchantList } from '@features/Merchant/hooks'
import { useFetchPromoDetail, useFetchPromoProducts } from '@features/Promo/hooks'
import { IValidations, Validations } from '@utils/validation'
import { stripTags } from '@utils/strip-tags'
import useDebounce from '@hooks/useDebounce'

import { putPromoProduct } from '@features/Promo/api'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import MultiSelect from '@components/atoms/MultiSelect'
import TextField from '@components/atoms/TextField'
import TextEditor from '@components/atoms/TextEditor'
import UploadImage from '@components/atoms/UploadImage'

const EditPromoPage: React.FC = () => {
  const { id }: { id: string } = useParams()
  const history = useHistory()
  const { data } = useFetchPromoDetail(id)
  const [keyword, setKeyword] = useState({
    merchant: '',
    productList: ''
  })
  const [form, setForm] = useState({
    merchant: [] as string[],
    title: '',
    description: '',
    productList: [] as string[],
    bannerEntryPoint: {} as any,
    headerBanner: {} as any,
    wordingCta: '',
    customUrlCta: ''
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
    },
    bannerEntryPoint: {},
    headerBanner: {}
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

  const onInputImage = (file: string | Blob | RcFile, key: string) => {
    setForm(previousState => ({
      ...previousState,
      [key]: file
    }))
  }

  const onChangeDescription = (value: string, key: string) => {
    setForm(previousState => ({ ...previousState, [key]: value }))
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('merchant', String(form.merchant))
    formData.append('title', form.title)
    formData.append('description', form.description)
    formData.append('product_list', String(form.productList))
    formData.append('wording_cta', form.wordingCta)
    formData.append('custom_url_cta', form.customUrlCta)
    // Banner Entry Point
    if (typeof form.bannerEntryPoint === 'string') {
      formData.append('banner_entry_point_name', form.bannerEntryPoint)
    } else {
      formData.append('banner_entry_point_name', data?.banner_entry_point as string)
      formData.append('banner_entry_point', form.bannerEntryPoint as string | Blob)
    }
    // Header Banner
    if (typeof form.headerBanner === 'string') {
      formData.append('header_banner_name', form.headerBanner)
    } else {
      formData.append('header_banner_name', data?.header_banner as string)
      formData.append('header_banner', form.headerBanner as string | Blob)
    }
    putPromoProduct(id, formData)
      .then(() => {
        toast.success('Success Edit Promo')
        history.push('/promo')
      })
      .catch(() => {
        toast.error('Failed Edit Promo')
      })
  }

  useEffect(() => {
    const validations = Validations(form, rules)
    setValidate(validations)
  }, [form])

  useEffect(() => {
    if (data) {
      const productList = data.products?.map(product => String(product.id))
      setForm(previousState => ({
        ...previousState,
        merchant: [String(data.merchant.id)],
        title: data.title,
        description: data.description,
        productList: productList || [],
        bannerEntryPoint: data.banner_entry_point,
        headerBanner: data.header_banner,
        wordingCta: data.wording_cta,
        customUrlCta: data.custom_url_cta
      }))
    }
  }, [data])

  return (
    <div>
      <Card title="Edit Product Promo">
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
          <TextEditor
            initialValue={data?.description}
            onChange={value => onChangeDescription(value, 'description')}
          />
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
          <UploadImage
            value={form.bannerEntryPoint}
            onInput={file => onInputImage(file, 'bannerEntryPoint')}
          />
        </TextField>
        <TextField label="HEADER BANNER">
          <UploadImage
            value={form.headerBanner}
            onInput={file => onInputImage(file, 'headerBanner')}
          />
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
      </Card>
      <Card>
        <TextField label="">
          <div className="flex flex-row flex-start gap-4">
            <Button variant="secondary" onClick={() => history.push('/promo')}>
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

export default EditPromoPage
