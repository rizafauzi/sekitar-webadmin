import styled from 'styled-components'

export const Wrapper = styled.div`
  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    overflow: hidden;
    position: relative;
    min-width: 5rem;
    min-height: 2rem;
    height: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 14px;
    border-radius: 8px;
  }

  &.primary {
    .ant-btn {
      border: none;
      color: white;
      background: linear-gradient(275.22deg, #00e2c1 0%, #05a2fa 146.07%);
    }
  }

  &.secondary {
    .ant-btn {
      color: #06baad;
      border: 1px solid #06baad;
      background: transparent;
    }
  }

  &.secondary {
    .ant-btn {
      color: #06baad;
      border: 1px solid #06baad;
      background: transparent;
    }
  }

  &.destructive {
    .ant-btn {
      color: #ec2839;
      border: 1px solid #ec2839;
      background: transparent;
    }
  }
`

export default Wrapper
