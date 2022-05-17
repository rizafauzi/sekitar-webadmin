import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  z-index: 1;
  height: 100%;
  overflow-y: auto;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  padding: 0px 0px 0px 0px;
`
export const LayoutWrapper = styled.div`
  z-index: 1;
  padding: 1em;
  overflow-y: auto;
  transition: 0.2s;
  background: '#F2F2F2';
  -webkit-transition: 0.2s;
  height: calc(100vh - 4em);
`

export const LayoutCard = styled.section`
  width: 100%;
  padding: 1.5em;
  border-radius: 0.8em;
  background: white;
  min-height: calc(100vh - 6em);
`
