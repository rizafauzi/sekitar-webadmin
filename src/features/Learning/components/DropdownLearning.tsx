/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Dropdown, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import Icons from '@assets/Icons'
import { DropdownLearningProps } from '../Learning.type'
import { deleteLearning } from '../api'
import { useFetchLearningList } from '../hooks'

const DropdownLearning: React.FC<DropdownLearningProps> = ({ id }) => {
  const history = useHistory()
  const { refetch } = useFetchLearningList({
    page: 1,
    limit: 20
  })

  const onEdit = () => {
    history.push(`/learning/edit/${id}`)
  }

  const onDelete = () => {
    deleteLearning(id)
      .then(() => {
        refetch()
        toast.success('Berhasil menghapus Learning.')
      })
      .catch(() => toast.error('Oops, terjadi sesuatu. Coba lain nanti.'))
  }

  const onSeeDetail = () => console.info('SEE DETAIL')

  const options = [
    {
      key: 'edit',
      label: <a onClick={onEdit}>Edit</a>
    },
    {
      key: 'delete',
      label: <a onClick={onDelete}>Delete</a>
    },
    {
      key: 'see-detail',
      label: <a onClick={onSeeDetail}>See Detail</a>
    }
  ]

  return (
    <div className="my-5 mr-6">
      <Dropdown overlay={<Menu items={options} />} placement="bottomLeft" arrow>
        <div className="flex flex-row justify-center gap-2 py-2.5 border border-green1 text-sm font-bold rounded-lg bg-green1OPC10">
          <div className="text-green1 mt-0.5">Options</div>
          <Icons name="chevron-down" />
        </div>
      </Dropdown>
    </div>
  )
}

export default DropdownLearning
