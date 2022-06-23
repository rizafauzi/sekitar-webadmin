import React from 'react'

type flexDirectionType = 'row' | 'column'
type justifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type alignItemsType = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
type wrapType = 'nowrap' | 'wrap' | 'wrap-reverse'

export interface FlexboxProperties {
  flexDirection?: flexDirectionType
  justifyContent?: justifyContentType
  alignItems?: alignItemsType
  rowGap?: string
  columnGap?: string
  className?: string
  wrap?: wrapType
  children: React.ReactNode
}
