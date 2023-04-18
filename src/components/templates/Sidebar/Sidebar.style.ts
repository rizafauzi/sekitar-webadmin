import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;
  position: relative;
  /* height: 4.5em;
  width: 100%;
  display: flex;
  padding: 0em 1.5em;
  background: white;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #f2f2f2;
  justify-content: space-between; */
  width: 16em;
  height: 100vh;
  /* transform: rotate(-180deg); */

  aside {
    background: transparent !important;
    .ant-layout-sider-children {
      background: transparent !important;
    }
  }

  ul {
    li {
      span {
        color: white !important;
        a {
          color: white;
          font-weight: 600;
        }
      }
    }
    .ant-menu-item-selected {
      background: rgba(255, 255, 255, 0.2) !important;
      border: none !important;
    }
    .ant-menu-item {
      padding: 1.75em 0em;
      :hover {
        font-weight: 800;
        background: rgba(255, 255, 255, 0.4) !important;
        span {
          a {
            color: white !important;
          }
        }
      }
      ::after {
        border: none !important;
      }
    }
  }
`

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  position: fixed;
  background: linear-gradient(135deg, #03c8dd 0%, #00ecae 100%);
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
