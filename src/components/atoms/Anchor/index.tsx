import React from 'react'
import { useNavigate } from 'react-router-dom'

type AnchorType = {
  url: string
  label: string
}

const Anchor: React.FC<AnchorType> = props => {
  const { url, label } = props
  const navigate = useNavigate()

  const handleSelected = () => {
    navigate(url)
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
