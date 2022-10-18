import styled from 'styled-components'

export const Wrapper = styled.div`
  .ProseMirror {
    padding: 12px 16px;
    height: 100px;

    p {
      margin: 0;
    }

    li {
      list-style-type: disc;
    }
  }

  .ProseMirror:focus {
    outline: none;
  }
`

export default Wrapper
