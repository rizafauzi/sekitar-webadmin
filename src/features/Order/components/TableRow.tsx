import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #333333;
  }

  h5 {
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #bdbdbd;
  }
`

const TableRow: React.FC<{ value: string; label: string }> = ({ label, value }) => (
  <Wrapper>
    <h4>{label}</h4>
    <h5>{value}</h5>
  </Wrapper>
)

export default TableRow
