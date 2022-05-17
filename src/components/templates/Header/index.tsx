import React from 'react'

import SekitarLogo from '../../../assets/images/sekitar.png'

import { Container, MenuWrapper } from './Header.style'

const Header: React.FC = () => (
  <Container>
    <img src={SekitarLogo} alt="sekitar-logo" className="h-10" />
    <MenuWrapper />
  </Container>
)

export default Header
