import React from 'react'
import { Card as AntdCard } from 'antd'

import { ICardProperties } from './Card.interface'
import CardWrapper from './Card.style'

/**
 * Create Card element
 * Based on `Card` component ANTD
 * @param param0 ICardProperties
 * @example
 * (
 * <Card bordered className="mx-8 my-4">
 *  {children}
 * </Card>
 * )
 * @returns React.ReactNode
 */
const Card: React.FC<ICardProperties> = props => {
  const { title, children, parentClassName, ...restProperties } = props

  return (
    <CardWrapper className={parentClassName}>
      <AntdCard title={title} {...restProperties}>
        {children}
      </AntdCard>
    </CardWrapper>
  )
}

Card.defaultProps = {
  title: '',
  bordered: false,
  loading: false,
  size: 'default',
  style: {}
}

export default Card
