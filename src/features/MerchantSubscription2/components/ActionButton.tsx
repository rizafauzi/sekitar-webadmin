import { useHistory } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

const ActionButton = ({ path }: { path: string }) => {
  const history = useHistory()

  return (
    <button type="button" onClick={() => history.push(`/merchants2/${path}`)}>
      <RightOutlined style={{ color: '#00DFBD' }} />
    </button>
  )
}

export default ActionButton
