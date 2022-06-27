import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;
  height: 4.5em;
  width: 100%;
  display: flex;
  padding: 0em 1.5em;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #f2f2f2;
  justify-content: space-between;
`

export const MenuWrapper = styled.div`
  height: 2em;
  width: 2em;
`

export const Avatar = styled.div`
  width: 2em;
  height: 2em;
  img {
    object-fit: cover;
  }
`
