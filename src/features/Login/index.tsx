import { Input, Button } from 'antd'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import React, { useState, ChangeEvent } from 'react'

import SekitarLogo from '../../assets/images/sekitar.png'
import { AuthWrapper, CardWrapper, Copyright, BackgroundGradient, Logo } from './Login.style'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = () => {
    const hardcodedPassword = 'P@ssw0rd'
    const hardcodedUsername = 'zaki@gmail.com'

    if (username === hardcodedUsername && password === hardcodedPassword) {
      Cookies.set('token', 'U0VLSVRBUi5JRA==')
      navigate('/merchants')
      window.location.reload()
    }
  }

  return (
    <div>
      <AuthWrapper>
        <BackgroundGradient />
        <Logo>
          <img src={SekitarLogo} alt="sekitar-logo" />
        </Logo>
        <CardWrapper>
          <div className="flex flex-col items-start w-full">
            <h2>Username</h2>
            <Input value={username} onChange={handleUsernameChange} />
            <h2 className="mt-4">Password</h2>
            <Input type="password" value={password} onChange={handlePasswordChange} />
            <Button type="primary" onClick={handleSubmit} className="mt-6 w-full">
              Login
            </Button>
          </div>
        </CardWrapper>
        <Copyright>2022 © Sekitar.id</Copyright>
      </AuthWrapper>
    </div>
  )
}

export default Dashboard
