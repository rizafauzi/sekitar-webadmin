import React from 'react'
import { Input as AntdInput } from 'antd'
import { Wrapper } from './Input.style'
import { IInputProperties } from './Input.interface'

/**
 * Create form input component
 * @param param0 InputProperties
 * @example
 * (
 *  <Input type="text" placeholder="Enter your name..." />
 * )
 * @returns React.ReactNode
 */
const Input: React.FC<IInputProperties> = ({ disabled, type, onKeyDown, min, ...rest }) => {
  /**
   * When type number use to prevent user using ['e', 'E', '+', '-']
   * @param event Event from function in onKeyDown
   */
  const handlePreventInputEandMinus = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === 'number' && ['e', 'E', '+', '-'].includes(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <Wrapper>
      <AntdInput
        disabled={disabled}
        type={type}
        // if type=number by default min=0
        min={min || type === 'number' ? 0 : ''}
        // if type=number on KeyDown by default will prevent user input e,E,+,-
        onKeyDown={onKeyDown || handlePreventInputEandMinus}
        {...rest}
      />
    </Wrapper>
  )
}

export default Input
