/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import React, { useState } from 'react'
// import EmptyImage from '@assets/images/error.png'
import ReactImageViewer from 'react-simple-image-viewer'

const ImageViewer: React.FC<{ image: string }> = ({ image }) => {
  const [showModal, setShowModal] = useState(false)
  const images = [image]

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
          src={image}
          className="h-[50px] w-[100px] object-cover rounded-md"
          // onError={({ currentTarget }) => {
          //   currentTarget.onerror = null
          //   currentTarget.src = EmptyImage
          // }}
        />
      </button>
    </>
  )
}

export default ImageViewer
