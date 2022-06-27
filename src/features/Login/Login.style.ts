/* eslint-disable prettier/prettier */

import styled from 'styled-components'

export const AuthWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  position: relative;
  grid-template-columns: 50% 50%;
  background: linear-gradient(269.33deg, #e8f7f2 0.33%, #ffffff 99.21%);
`

export const CardWrapper = styled.div`
  width: 50%;
  padding: 2em;
  display: flex;
  min-height: 20vh;
  background: white;
  border-radius: 0.5em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 1.2s cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s normal forwards;

  button {
    background: linear-gradient(275.22deg, #00e2c1 0%, #05a2fa 146.07%);
    padding: 1em 0em;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    line-height: 140%;
    font-style: normal;
    font-family: 'Nunito', sans-serif;
    /* identical to box height, or 20px */

    text-align: center;
    letter-spacing: 0.02em;

    color: #ffffff;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`

export const BackgroundGradient = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(113, 105, 241, 1) 0%,
    rgba(90, 171, 200, 1) 48%,
    rgba(153, 255, 209, 1) 100%
  );
`

export const Copyright = styled.div`
  width: 100%;
  bottom: 2em;
  color: #333333;
  font-weight: 400;
  position: absolute;
  font-size: 1.25rem;
  line-height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
  }
`
