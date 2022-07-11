import { Input } from 'antd'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import React, { useState, ChangeEvent } from 'react'

import SekitarLogo from '../../assets/images/logo-white.png'
import { AuthWrapper, CardWrapper, BackgroundGradient, Logo } from './Login.style'

const Dashboard: React.FC = () => {
  const history = useHistory()
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
    const hardcodedCourierUsername = 'courier@gmail.com'

    if (username === hardcodedUsername && password === hardcodedPassword) {
      Cookies.set('token', 'U0VLSVRBUi5JRA==')
      Cookies.set('role', 'admin')
      Cookies.set('email', 'zaki@gmail.com')
      history.push('/merchants')
      window.location.reload()
    }

    if (username === hardcodedCourierUsername && password === hardcodedPassword) {
      Cookies.set('token', 'U0VLSVRBUi5JRA==')
      Cookies.set('role', 'courier')
      Cookies.set('email', 'courier@gmail.com')
      history.push('/orders?page=1')
      window.location.reload()
    }
  }

  return (
    <div>
      <AuthWrapper>
        <BackgroundGradient>
          <Logo>
            <img src={SekitarLogo} alt="sekitar-logo" />
          </Logo>
        </BackgroundGradient>
        <div className="bg-white flex items-center justify-center">
          <CardWrapper>
            <h1>Login</h1>
            <span className="text-center mb-10">
              Gunakan email dan kata sandi untuk login ke Dashboard Admin Kurir
            </span>
            <div className="flex flex-col items-start w-full">
              <h2>Username</h2>
              <Input value={username} onChange={handleUsernameChange} />
              <h2 className="mt-4">Password</h2>
              <Input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="button" onClick={handleSubmit} className="mt-6 w-full">
              Masuk
            </button>
          </CardWrapper>
        </div>
      </AuthWrapper>
    </div>
  )
}

export default Dashboard
