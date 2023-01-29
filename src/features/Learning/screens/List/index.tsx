import React from 'react'
import ListLayout from '@components/organisms/ListLayout'
import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { useFetchLearningList } from '@features/Learning/hooks'
import ListLearningColumn from './enum'

const LearningPage: React.FC = () => {
  const history = useHistory()
  const { data, isLoading } = useFetchLearningList({
    page: 1,
    limit: 20
  })

  console.info('DTAA', data)

  const onAddPromo = () => history.push('/learning/create')

  return (
    <div>
      <ListLayout
        title="Manage Promo Page"
        source={{
          data,
          isError: false,
          isLoading
        }}
        extendButton={[
          <Button onClick={onAddPromo}>
            <PlusOutlined />
            <span className="text-sm font-bold">Tambah</span>
          </Button>
        ]}
        columns={ListLearningColumn}
      />
    </div>
  )
}

export default LearningPage
