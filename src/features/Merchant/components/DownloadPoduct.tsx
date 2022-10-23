/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { CSVDownload } from 'react-csv'
import startCase from 'lodash/startCase'

import { getDownloadProduct } from '../api'

const DownloadProduct: React.FC<{ merchantId: number; merchantName: string }> = ({
  merchantId,
  merchantName
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [isDownloading, setIsDownloading] = useState(false)
  const [header, setHeader] = useState<{ label: string; key: string }[]>([])

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      const response = await getDownloadProduct(merchantId)
      if (response) {
        const dataResponse = response?.data?.Data || []
        if (dataResponse?.length > 0) {
          const headers = Object.keys(dataResponse[0]).map(dt => ({
            label: startCase(dt),
            key: dt
          }))
          setHeader(headers)
          setData(dataResponse)
        }
        setIsDownloading(true)
      }
    } catch (error) {
      console.error('[ERROR] Download Product:', error)
    }
    setIsLoading(false)
    // history.push('/merchants/')
  }

  useEffect(() => {
    if (isDownloading && data.length > 0) {
      setData([])
      setIsDownloading(false)
    }
  }, [isDownloading, data])

  return (
    <>
      {isDownloading && (
        <CSVDownload
          data={data}
          target="_blank"
          headers={header}
          filename={`export_product_${merchantName}`}
        />
      )}
      <Button disabled={isLoading} className="mr-2" onClick={handleDownload}>
        Download Product
      </Button>
    </>
  )
}

export default DownloadProduct
