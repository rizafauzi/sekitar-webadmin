/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { memo, useEffect, useRef, useState } from 'react'
import { Button } from 'antd'

import { toast } from 'react-toastify'
import { postUploadProduct } from '../api'

const UploadProduct: React.FC<{ merchantId: number }> = ({ merchantId }) => {
  const inputFileReference = useRef<HTMLInputElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [isDownloading, setIsDownloading] = useState(false)

  const onClick = () => {
    inputFileReference.current?.click()
  }

  const handleDownload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    const { files } = target
    const file = files && files[0]
    setIsLoading(true)
    try {
      const fd = new FormData()
      fd.append('store_id', String(merchantId))
      fd.append('file', file as string | Blob)

      const response = await postUploadProduct(fd)
      setIsLoading(false)
      if (response?.data?.status !== 0) {
        toast.error(response?.data?.message)
        return
      }
      toast.error('Upload Product List Succeed!')
    } catch (error) {
      setIsLoading(false)
      console.error('[ERROR] Upload Product:', error)
    }
  }

  useEffect(() => {
    if (isDownloading && data.length > 0) {
      setData([])
      setIsDownloading(false)
    }
  }, [isDownloading, data])

  return (
    <>
      <form>
        <input
          type="file"
          name="file"
          accept=".csv"
          className="hidden"
          ref={inputFileReference}
          onChange={handleDownload}
        />
      </form>

      <Button disabled={isLoading} className="mr-2" onClick={onClick}>
        {isLoading ? 'Uploading...' : 'Upload Product'}
      </Button>
    </>
  )
}

export default memo(UploadProduct)
