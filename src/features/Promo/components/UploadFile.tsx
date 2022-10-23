/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable unicorn/prevent-abbreviations */
import React from 'react'
import Icons from '@assets/Icons'

interface UploadFileProps {
  id: string
  value: File
  onInput: (file: File) => void
  onRemove: () => void
}

const UploadFile = (props: UploadFileProps) => {
  const { id, value, onInput, onRemove } = props

  const onInputFile = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.target as HTMLInputElement
    if (files && files.length > 0) {
      onInput(files[0])
    }
  }

  const clearFile = () => {
    onRemove()
  }

  return (
    <div className="flex flex-row justify-between items-center border border-grey1 py-2 px-4 rounded">
      <div className="flex flex-row items-center gap-4">
        <label
          htmlFor={id}
          className="bg-grey2 py-1 px-4 border border-grey1 rounded-lg cursor-pointer"
        >
          Choose File
        </label>
        <span>{value ? value.name : ''}</span>
      </div>
      <input
        id={id}
        type="file"
        accept="image/*"
        className="hidden"
        onInput={e => onInputFile(e)}
      />
      {value && value.name && (
        <div className="cursor-pointer" onClick={clearFile}>
          <Icons name="close" color="#4f4f4f" />
        </div>
      )}
    </div>
  )
}

UploadFile.defaultProps = {
  id: 'upload-file'
}

export default UploadFile
