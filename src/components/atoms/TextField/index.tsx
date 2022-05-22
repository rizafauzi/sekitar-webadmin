import { Typography, Row, Col, Divider } from 'antd'
import React, { ReactChild, ReactFragment, ReactPortal } from 'react'

const { Text } = Typography

type Properties = {
  label: string
  children: ReactChild | ReactFragment | ReactPortal | null | undefined | string | number
  labelSpan?: number
  valueSpan?: number
  isBordered?: boolean
}

const TextField = (props: Properties) => {
  const { label, labelSpan, valueSpan, children, isBordered } = props
  if (label === 'divider') {
    return <Divider />
  }

  return (
    <div>
      {isBordered && <div className="mt-3" />}
      <Row gutter={[8, 0]} className="mb-3">
        <Col span={labelSpan}>
          <Text strong>{label}</Text>
        </Col>
        <Col span={valueSpan}>
          <Text>{children || '-'}</Text>
        </Col>
      </Row>
      {isBordered && <hr />}
    </div>
  )
}

TextField.defaultProps = {
  labelSpan: 8,
  valueSpan: 16,
  isBordered: false
}

export default TextField
