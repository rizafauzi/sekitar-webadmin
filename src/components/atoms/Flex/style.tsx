import styled from 'styled-components'
import { FlexboxProperties } from './Flex.interface'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props: FlexboxProperties) => props.flexDirection || 'row'};
  justify-content: ${(props: FlexboxProperties) => props.justifyContent || 'flex-start'};
  align-items: ${(props: FlexboxProperties) => props.alignItems || 'flex-start'};
  row-gap: ${props => props.rowGap || '0px'};
  column-gap: ${props => props.columnGap || '0px'};
  flex-wrap: ${(props: FlexboxProperties) => props.wrap || 'nowrap'};
`

export default Wrapper
