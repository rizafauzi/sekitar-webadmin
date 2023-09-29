/* eslint-disable unicorn/prevent-abbreviations */
import { EyeOutlined } from '@ant-design/icons'
import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'

interface Props {
  cartId: number
}

const SeeDetail = ({ cartId }: Props) => {
  const history = useHistory()
  return (
    <Button variant="primary" onClick={() => history.push(`order-list/${cartId}`)}>
      <EyeOutlined />
      Lihat Detail
    </Button>
  )
}

export default SeeDetail
