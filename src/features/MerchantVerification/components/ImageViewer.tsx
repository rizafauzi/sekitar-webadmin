/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import React, { useState } from 'react'
import EmptyImage from '@assets/images/error.png'
import ReactImageViewer from 'react-simple-image-viewer'
import { BASE_URL } from '@configs/axios'

const ImageViewer: React.FC<{ image: string }> = ({ image }) => {
  const [showModal, setShowModal] = useState(false)

  let imageUrl = image
  if (imageUrl) {
    if (!imageUrl.startsWith('http')) {
      imageUrl = `${BASE_URL}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`
    }
    imageUrl = imageUrl.replace(/^http:\/\//i, 'https://')
  }

  const images = [imageUrl]

  const toggle = () => setShowModal(prev => !prev)

  return (
    <>
      {showModal && (
        <ReactImageViewer
          src={images}
          currentIndex={0}
          onClose={toggle}
          disableScroll={false}
          closeOnClickOutside={true}
        />
      )}
      <button onClick={toggle} type="button">
        <img
          alt={image}
          src={imageUrl}
          className="h-[50px] w-[100px] object-cover rounded-md"
          referrerPolicy="no-referrer"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = EmptyImage
          }}
        />
      </button>
    </>
  )
}

export default ImageViewer
