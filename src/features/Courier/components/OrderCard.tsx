import qs from 'query-string'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface ICard {
  label: string
  value: string
  total: string | null | number
}

interface WrapperStyle {
  active: boolean
}

const Wrapper = styled.button<WrapperStyle>`
  padding: 1em;
  display: flex;
  font-weight: 700;
  line-height: 140%;
  border-radius: 8px;
  align-items: center;
  background: #ffffff;
  flex-direction: column;
  letter-spacing: 0.02em;
  justify-content: center;
  font-family: 'Nunito Sans';
  min-width: calc((100vw - 20em) / 5);
  transition: all 0.2s ease-in-out;
  border: 1px solid ${props => (props.active ? '#06BAAD' : '#e0e0e0')};

  :hover {
    background: #f2fffe;
    border: 1px solid #06baad;
  }

  h3 {
    font-size: 18px;
    color: ${props => (props.active ? '#06BAAD' : '#bdbdbd')};
  }

  h4 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 0.2em;
    color: ${props => (props.active ? '#06BAAD' : 'black')};
  }
`

const OrderCard: React.FC<ICard> = ({ label, total, value }) => {
  const history = useHistory()
  const { pathname, search } = useLocation()
  const params = qs.parse(search)

  const handleClick = () => {
    history.replace({
      pathname,
      search: qs.stringify({
        ...params,
        page: 1,
        status: value
      })
    })
  }

  return (
    <Wrapper onClick={handleClick} active={value === params?.status}>
      <h3>{label}</h3>
      <h4>{total}</h4>
    </Wrapper>
  )
}

export default OrderCard
