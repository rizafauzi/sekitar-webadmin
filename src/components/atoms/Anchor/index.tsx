import React from 'react'
import { useHistory } from 'react-router-dom'

type AnchorType = {
  url: string
  label: string
}

const Anchor: React.FC<AnchorType> = props => {
  const { url, label } = props
  const history = useHistory()

  const handleSelected = () => {
    history.push(url)
  }

  return (
    <div>
      <button type="button" onClick={handleSelected} style={{ color: 'blue' }}>
        {label}
      </button>
    </div>
  )
}

export default Anchor
