import React from 'react'
import Wrapper from './style'
import { FlexboxProperties } from './Flex.interface'

const Flexbox: React.FC<FlexboxProperties> = ({
  flexDirection,
  justifyContent,
  alignItems,
  columnGap,
  rowGap,
  wrap,
  className,
  children
}) => (
  <Wrapper
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    columnGap={columnGap}
    rowGap={rowGap}
    className={className}
    wrap={wrap}
  >
    {children}
  </Wrapper>
)

export default Flexbox
