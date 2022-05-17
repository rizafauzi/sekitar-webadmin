import React from 'react'

import { Container, LogoWrapper, MenuWrapper } from './Header.style'

const Header: React.FC = () => (
  <Container>
    <LogoWrapper />
    <h2>Sekitar</h2>
    <MenuWrapper />
  </Container>
)

export default Header
