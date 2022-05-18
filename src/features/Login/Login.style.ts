import styled from 'styled-components'

export const AuthWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: linear-gradient(269.33deg, #e8f7f2 0.33%, #ffffff 99.21%);
`

export const CardWrapper = styled.div`
  padding: 2em;
  display: flex;
  min-width: 30vw;
  min-height: 20vh;
  background: white;
  border-radius: 0.5em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.2s cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s normal forwards;

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
  top: 0;
  left: 0;
  height: 50vh;
  position: absolute;
  width: 100%;
  background: linear-gradient(
    45deg,
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
  top: 2em;
  width: 100%;
  z-index: 100;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  img {
    width: 10em;
    object-fit: contain;
  }
`
