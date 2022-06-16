import React from 'react'
import { Button as AntdButton } from 'antd'
import { ButtonProperties } from './Button.interface'
import { Wrapper } from './Button.style'

/**
 * Button Component
 * @param props
 * @example
 * (
 *  <Button
 *    onClick={handleClick}
 *    variant="outlined">
 *    icon={<HistoryOutlined />}
 *    iconPosition="right"
 *    {...other antd button props}
 *  >
 *    Text
 *  </Button>
 * )
 * @returns
 */
const Button: React.FC<ButtonProperties> = props => {
  const { variant = 'primary', children, ...rest } = props

  return (
    <Wrapper className={variant}>
      <AntdButton {...rest}>{children}</AntdButton>
    </Wrapper>
  )
}

export default Button
