/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { CSVDownload } from 'react-csv'
import { getDownloadProduct } from '../api'

const DownloadProduct: React.FC<{ merchantId: number; merchantName: string }> = ({
  merchantId,
  merchantName
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      const response = await getDownloadProduct(merchantId)
      if (response) {
        setData(response?.data?.Data)
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

  const headers = [
    { label: 'Description', key: 'Description' },
    { label: 'Discount Price', key: 'DiscountPrice' },
    { label: 'Image', key: 'Image' },
    { label: 'Limit / Transaction', key: 'LimitPerTransaction' },
    { label: 'Name', key: 'Name' },
    { label: 'Price', key: 'Price' },
    { label: 'ID', key: 'ProductID' },
    { label: 'Product Weight', key: 'ProductWeight' },
    { label: 'Stock', key: 'Stock' }
  ]

  return (
    <>
      {isDownloading && (
        <CSVDownload
          data={data}
          target="_blank"
          headers={headers}
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
