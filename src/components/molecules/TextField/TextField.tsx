import React from 'react'
import { Row, Col, Divider } from 'antd'
import { TextFieldProperties } from './TextField.interface'

const TextField: React.FC<TextFieldProperties> = ({
  labelSpan = 8,
  valueSpan = 16,
  isBordered = false,
  label,
  children,
  hasColon = false,
  labelClassname = '',
  valueClassname = ''
}) => {
  if (label === 'divider') {
    return <Divider />
  }

  return (
    <div>
      {isBordered && <div className="mt-3" />}
      <Row gutter={[8, 0]} className="mb-3">
        <Col span={labelSpan} className={labelClassname}>
          {React.isValidElement(label) ? label : <span>{label}</span>}
        </Col>
        {hasColon && (
          <Col className={labelClassname}>
            <span>:</span>
          </Col>
        )}
        <Col span={valueSpan} className={valueClassname} flex="auto">
          {React.isValidElement(children) ? children : <span>{children || '-'}</span>}
        </Col>
      </Row>
      {isBordered && <hr />}
    </div>
  )
}

export default TextField
